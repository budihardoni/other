// stage.js - three.js stage for @ricksclips3000-style Shorts.
// Flat 2D cutout characters standing in a real 3D set, lit by a sun that casts
// their silhouettes on the ground, filmed by a camera that follows the
// measured glide. Driven headless by render.mjs: setup(scene) then
// renderFrame(shot, frame) -> PNG data URL.
import * as THREE from 'three';

const W = 1080, H = 1920, FPS = 30;
const LINE = '#271925';               // measured line-art colour
const OUTLINE_PER_HEAD = 10 / 216;    // 10 px stroke on a 216 px (20% width) head
const ARRIVE_GAIN = 0.7;              // camera arrives fast, then settles

// ------------------------------------------------------------ camera math
const smoothstep = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
function cameraPath(n, pan = [0, 0], zoomPctS = 6) {
  const m = [], T = []; let acc = 0;
  for (let i = 0; i < n; i++) { const u = (i + 0.5) / n; m.push(1 + ARRIVE_GAIN * (1 - smoothstep(0.15, 0.40, u))); }
  for (let i = 0; i < n; i++) { acc += m[i] / FPS; T.push(acc - m[0] / FPS); }
  return T.map(t => ({ dx: pan[0] * t, dy: pan[1] * t, scale: Math.exp(Math.log1p(zoomPctS / 100) * t) }));
}

// ------------------------------------------------------------ cutout character
function drawCharacter(c) {
  // Texture 512x1024; figure stands on the bottom edge. Proportions follow the
  // reference sheets: big round head, small pill torso, thin stick limbs.
  const tw = 512, th = 1024, cv = document.createElement('canvas'); cv.width = tw; cv.height = th;
  const g = cv.getContext('2d');
  const headD = 300, lw = Math.max(2, headD * OUTLINE_PER_HEAD);
  const cx = tw / 2, headCy = 30 + lw + headD / 2;
  g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = LINE;
  // legs
  const hipY = 700, footY = th - lw - 6;
  g.lineWidth = lw * 1.25;
  g.beginPath(); g.moveTo(cx - 34, hipY); g.lineTo(cx - 58, footY); g.moveTo(cx + 34, hipY); g.lineTo(cx + 58, footY); g.stroke();
  // shoes
  g.fillStyle = LINE; g.beginPath(); g.ellipse(cx - 70, footY - 4, 26, 12, 0, 0, Math.PI * 2); g.ellipse(cx + 70, footY - 4, 26, 12, 0, 0, Math.PI * 2); g.fill();
  // arms
  g.beginPath(); g.moveTo(cx - 70, 470); g.lineTo(cx - 140, 640); g.moveTo(cx + 70, 470); g.lineTo(cx + 150, 600); g.stroke();
  // torso (shirt)
  g.lineWidth = lw; g.fillStyle = c.shirt || '#e0603a';
  const tx = cx - 92, ty = headCy + headD / 2 - 20, twd = 184, tht = hipY - ty + 20, r = 70;
  g.beginPath(); g.moveTo(tx + r, ty); g.arcTo(tx + twd, ty, tx + twd, ty + tht, r); g.arcTo(tx + twd, ty + tht, tx, ty + tht, 30);
  g.arcTo(tx, ty + tht, tx, ty, 30); g.arcTo(tx, ty, tx + twd, ty, r); g.closePath(); g.fill(); g.stroke();
  // head
  g.fillStyle = c.head || '#f4f1e8';
  g.beginPath(); g.arc(cx, headCy, headD / 2, 0, Math.PI * 2); g.fill(); g.stroke();
  if (c.hair) { g.fillStyle = c.hair; g.beginPath(); g.arc(cx, headCy, headD / 2, Math.PI * 1.05, Math.PI * 1.95); g.closePath(); g.fill(); g.stroke(); }
  // face: dot eyes, line mouth
  g.fillStyle = LINE;
  g.beginPath(); g.ellipse(cx - 46, headCy + 4, 13, 19, 0, 0, Math.PI * 2); g.ellipse(cx + 46, headCy + 4, 13, 19, 0, 0, Math.PI * 2); g.fill();
  g.lineWidth = lw * 0.8; g.beginPath(); g.moveTo(cx - 34, headCy + 72); g.quadraticCurveTo(cx, headCy + (c.smile ? 96 : 76), cx + 34, headCy + 72); g.stroke();
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  return { tex, aspect: tw / th, headFrac: headD / th, headCenterFrac: 1 - headCy / th };
}

function makeCutout(c) {
  const d = drawCharacter(c), h = c.height || 1.8, w = h * d.aspect;
  const geo = new THREE.PlaneGeometry(w, h); geo.translate(0, h / 2, 0);
  const mat = new THREE.MeshBasicMaterial({ map: d.tex, alphaTest: 0.5, side: THREE.DoubleSide, toneMapped: false });  // flat 2D colours, untouched by tone mapping
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: d.tex, alphaTest: 0.5 });
  mesh.position.set(...(c.pos || [0, 0, 0]));
  mesh.userData.head = new THREE.Vector3(mesh.position.x, mesh.position.y + h * d.headCenterFrac, mesh.position.z);
  mesh.userData.headD = h * d.headFrac;
  return mesh;
}

// ------------------------------------------------------------ set pieces (no outline: the 3D set is unoutlined)
function makeProp(p, mats) {
  const col = p.color || '#b8794a', mat = mats(col), grp = new THREE.Group();
  if (p.type === 'box' || p.type === 'house') {
    const [w, h, d] = p.size || [3, 2.5, 3];
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); body.position.y = h / 2; grp.add(body);
    if (p.type === 'house') {
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.78, h * 0.6, 4), mats(p.roof || '#7a2f2f'));
      roof.rotation.y = Math.PI / 4; roof.position.y = h + h * 0.3; grp.add(roof);
      const door = new THREE.Mesh(new THREE.BoxGeometry(w * 0.22, h * 0.45, 0.05), mats('#3b2a4a')); door.position.set(0, h * 0.225, d / 2 + 0.03); grp.add(door);
    }
  } else if (p.type === 'tree') {
    const s = p.scale || 1;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.16 * s, 1.2 * s, 10), mats('#6b4429')); trunk.position.y = 0.6 * s; grp.add(trunk);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9 * s, 1), mats(p.color || '#4f8f4a')); crown.position.y = 1.7 * s; grp.add(crown);
  } else if (p.type === 'post') {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, p.h || 2.6, 8), mat); m.position.y = (p.h || 2.6) / 2; grp.add(m);
  }
  grp.position.set(...(p.pos || [0, 0, 0])); if (p.rotY) grp.rotation.y = p.rotY * Math.PI / 180;
  grp.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return grp;
}

// ------------------------------------------------------------ stage
let renderer, scene, camera, cutouts = {}, shots = [], S;
window.setup = (spec) => {
  S = spec;
  renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.setSize(W, H);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = spec.exposure ?? 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  // sky dome: cool top, warm horizon (warm vs cool colour rule)
  const sky = spec.sky || {};
  const skyGeo = new THREE.SphereGeometry(400, 32, 16), cols = [];
  const top = new THREE.Color(sky.top || '#5f86d8'), hor = new THREE.Color(sky.horizon || '#f2b98a');
  const pos = skyGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) { const t = Math.max(0, pos.getY(i) / 400); const c = hor.clone().lerp(top, Math.pow(t, 0.6)); cols.push(c.r, c.g, c.b); }
  skyGeo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  scene.add(new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false })));
  scene.fog = new THREE.Fog(sky.horizon || '#f2b98a', 40, 160);
  // sun: real directional light with shadows; azimuth/elevation in degrees
  const sun = spec.sun || {};
  const el = (sun.elevation ?? 55) * Math.PI / 180, az = (sun.azimuth ?? 35) * Math.PI / 180;
  const light = new THREE.DirectionalLight(sun.color || '#ffe0b5', sun.intensity ?? 2.4);
  light.position.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(40);
  light.castShadow = true; light.shadow.mapSize.set(4096, 4096); light.shadow.bias = -0.0004; light.shadow.normalBias = 0.02;
  const sc = light.shadow.camera; sc.left = -18; sc.right = 18; sc.top = 18; sc.bottom = -18; sc.near = 1; sc.far = 120;
  light.shadow.radius = 3;
  scene.add(light); scene.add(light.target);
  // fill: hemisphere light tints what the sun doesn't reach, so shadows read
  // red-brown / blue / violet and never neutral grey or black
  const fill = spec.fill || {};
  scene.add(new THREE.HemisphereLight(fill.sky || '#8ea2ff', fill.ground || '#6a3b6e', fill.intensity ?? 1.1));
  const mats = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, metalness: 0 });
  // ground
  const gr = spec.ground || {};
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(gr.size || 200, gr.size || 200), mats(gr.color || '#c98a55'));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  (spec.props || []).forEach(p => scene.add(makeProp(p, mats)));
  (spec.characters || []).forEach(c => { const m = makeCutout(c); cutouts[c.id] = m; scene.add(m); });
  camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 1000);
  // precompute camera paths
  shots = (spec.shots || []).map(s => {
    const n = Math.max(8, Math.round((s.dur || 1.2) * FPS));
    const tgt = cutouts[s.target];
    const anchor = s.anchor ? new THREE.Vector3(...s.anchor) : tgt.userData.head.clone();
    const fov = s.fov || 40;
    let d0 = s.distance;
    if (!d0 && tgt) {           // frame the target head at headWidth (default 20% of frame width)
      const frac = s.headWidth || 0.20;
      const vfov = fov * Math.PI / 180, hw = 2 * Math.tan(vfov / 2) * (W / H);   // frame width per unit distance
      d0 = tgt.userData.headD / (frac * hw);
    }
    const yaw = (s.yaw || 0) * Math.PI / 180, pitch = (s.pitch ?? 6) * Math.PI / 180;
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    // frame offset: put the anchor at (ox, oy) of the frame (fractions from centre; +oy = up)
    const ox = s.frameX ?? 0, oy = s.frameY ?? 0.12;
    return { n, anchor, fov, d0, dir, ox, oy, glide: s.glide || 'lens', path: cameraPath(n, s.pan || [0, 0], s.zoom ?? 6) };
  });
  return shots.map(s => s.n);
};

window.renderFrame = (k, i) => {
  const s = shots[k], p = s.path[i];
  const fwd = s.dir.clone().negate();
  const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
  const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
  const t0 = Math.tan(s.fov * Math.PI / 360);
  if (s.glide === 'dolly') {
    // physical move: dolly for zoom, truck/pedestal for pan. Numbers hold at
    // the anchor's depth; nearer/farther layers move more/less (parallax).
    camera.fov = s.fov; camera.updateProjectionMatrix();
    const d = s.d0 / p.scale, wpp = 2 * d * t0 / H;
    const shift = right.clone().multiplyScalar(-p.dx * wpp).add(up.clone().multiplyScalar(p.dy * wpp));
    const frameShift = right.clone().multiplyScalar(-s.ox * W * wpp).add(up.clone().multiplyScalar(-s.oy * H * wpp));
    const look = s.anchor.clone().add(shift).add(frameShift);
    camera.position.copy(look).addScaledVector(s.dir, d); camera.lookAt(look);
  } else {
    // lens move (default): the camera stays put, zooms the focal length and
    // pans/tilts, so the whole picture scales and slides uniformly - the
    // whole-frame motion the rulebook measured.
    const tz = t0 / p.scale;
    camera.fov = 2 * Math.atan(tz) * 180 / Math.PI; camera.updateProjectionMatrix();
    const wpp0 = 2 * s.d0 * t0 / H;
    const look = s.anchor.clone().add(right.clone().multiplyScalar(-s.ox * W * wpp0)).add(up.clone().multiplyScalar(-s.oy * H * wpp0));
    camera.position.copy(look).addScaledVector(s.dir, s.d0); camera.lookAt(look);
    const pxAng = 2 * tz / H;                              // tangent per output px at this focal length
    camera.rotateY(Math.atan(p.dx * pxAng));               // + picture right  => camera turns left
    camera.rotateX(Math.atan(p.dy * pxAng));               // + picture down   => camera tilts up
  }
  // cutouts face the camera around the vertical axis (cylindrical billboard)
  Object.values(cutouts).forEach(m => { m.rotation.y = Math.atan2(camera.position.x - m.position.x, camera.position.z - m.position.z); });
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
};
window.ready = true;
