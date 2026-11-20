# MOVES CATALOG v2.1 — словарь движений JKD; аудит 2026-09-09

Это сохранённый исходный JKD/WC-каталог. Полный интерфейс в той же схеме для всех добавленных стилей — [короткие коды](short-codes.md) и [реестр](short-codes.json). Для прежних кодов условия этого файла сохраняют приоритет.

Назначение: Виктор называет движение кодом или алиасом — скилл извлекает механику, проверяет исходную позу и передаёт её ULTRALORDGEN. EN-сниппеты ниже — внутренние справочные заготовки, не готовые промты и не обязательный язык выдачи. Статус источников и желаемый профиль S1 определяются в SKILL.md. Корректность старого конспекта и успех генерации — разные проверки; текстовый аудит не подтверждает новую генерацию.

## ЗАКОНЫ ЗАПИСИ (переписаны по ULTRALORDGEN, v1.4)

Для «повтори фрагмент / почти один в один» сначала применять [RECONSTRUCT](reference-reconstruction.md): порядок, число действий, промахи, реакции и камера берутся из проверенной карты источника. Привязка к коду не подменяет увиденное готовым сниппетом. Ниже варианты для новых сцен и описания приёмов; их исходы не добавляются в референс автоматически.

1. **Геометрия важнее ярлыка.** Термины — ключи каталога; при сборке указывать конечность, траекторию, контакт и результат. Прежнее объяснение «модель не знает терминов» — рабочая гипотеза из калибровок, а не установленный закон всех моделей.
2. **Позитивные ограничения — дефолт.** Хирургические контрасты допустимы по ULTRALORDGEN. Ограничение высоты/траектории действует только на выбранные движения: низкий кик по умолчанию не отменяет явно выбранный K2 в корпус.
3. **Состояния должны сохранять причинность.** Для контакта и продолжения нужна физически возможная исходная поза, свободная конечность и достижимая дистанция. Якорь «уже летит» не отменяет эти условия и не требует начинать всю сцену с удара.
4. **Попадание получает согласованную реакцию.** Промах, уклон, парирование и кооперативный дрилл — отдельные события. Реакции ниже — варианты постановки; амплитуда и исход зависят от опоры, движения цели и выбранной степени стилизации.
5. **Первое состояние — по сцене.** Для отдельного теста стойки читать S1. В продолжении использовать конечное состояние предыдущей части; не вставлять стартовую демонстрацию стойки и репризу старого S1 автоматически.
6. **Редкий удар описывать несколькими согласованными признаками:** (а) понятный образ-якорь из прежних калибровок — backhand slap, tennis backhand, mule kick, stamping a door shut, hammering a nail; (б) наблюдаемая ударная поверхность и ориентация кисти/стопы; (в) реакция по вектору с учётом текущей опоры. Это рабочий метод записи, а не знание обучающих данных модели и не гарантия результата. Образ не должен менять реальную механику приёма.

**Сборка FIGHT STYLE LOCK:** составлять из реально выбранных движений и режима. Для непрерывной сцены — активное продолжение; для S3 — намеренная пауза; для hook/backfist — их дуги; для K2 — выбранная высота корпуса; для цепных — серия. Старый универсальный lock с `long stillness`, только прямыми и всеми киками ниже пояса отозван: он конфликтовал с Warrior и самим каталогом. Финальный свод не может менять порядок движений Виктора.

---

## S — Стойки и поведение

**S1. Bai-jong (пользовательский код; желаемая гарда Warrior)** — стойка, он-гард, боевая стойка
Код и выбор Виктора сохраняются; актуальная трактовка — в SKILL.md. Не подставлять прежний полувытянутый книжный сниппет. История калибровки: S1 v12-text-only («прямая указка + задний полукулак») отмечен fail, следующий v13 («обе кисти открыты») — draft, а не подтверждённый успех. Точный текстовый эквивалент референса остаётся непроверенным; форму кистей ограничивать фазой гарды, сохраняя возможность ударов и захватов. Учебную bai-jong выбирать по явному запросу и проверенному источнику.

**S2. Скрытая стойка** — примирительная поза, «не хочу драться»
Сохранённый постановочный вариант. Не приписывать его ролику aqn6cy3jB0k как рекомендацию автора: в 05:08–05:41 преподаватель критикует и поднятые открытые ладони, и выдающую готовность постановку ноги. Выбор Виктора для сцены не является цитатой этого урока.
`His palms hover half-raised in front of his chest as if calming the man down — but his body has already bladed half-sideways, right foot slid ahead, knees soft, weight on the balls of his feet.`

**S3. Стоп-стилл (broken rhythm)** — пауза, замирание, стилл
Намеренная постановочная пауза или тест переключения взрыв↔остановка; не обязательная вставка после любого обмена. Broken rhythm шире полной неподвижности. При паузе сохраняется выбранная рабочая гарда, дыхание и внимание; длительность задаёт тест/сцена. Не подставлять старую узкую стойку вместо текущего S1.

**S4. Ранняя стойка (классическая школа)** — молодой Брюс, 70/30
`He sinks back onto his rear leg — seven tenths of his weight on it — torso nearly square, one fist held at the center of his chest with knuckles vertical and thumb up, forearm riding an invisible line down the middle of his body.`

## F — Футворк

**F1. Push shuffle** — подшаг, шафл
`His rear foot shoves the ground and the whole stance glides forward one short step, front foot skimming the floor, feet keeping their spacing, the side-on shape unchanged.`

**F2. Step & slide** — шаг-подтяг
`He steps and slides forward, front foot then rear, closing distance patiently, stance intact.`

**F3. Pendulum** — маятник, отдёргивание ноги
`His lead leg whips back beside the rear foot and the opponent's low kick sweeps through empty air — in the same breath the lead leg swings forward again, carrying him straight into his counter.`

**F4. Burst** — взрывной вход, рывок
Дистанция примера выбирается по сцене. Образ выпада не разрешает оставить заднюю стопу на месте: обе стопы перемещают стойку, после входа сохраняется её рабочая длина.
`From dead stillness he covers a full meter in one explosive gliding step — like a fencer's lunge — torso staying level, arriving inside striking range within a single beat.`

**F5. Circling / sidestep** — обход по дуге, уход с линии
`He drifts along a curve around the opponent on small quick fencing steps, always facing him.` / `A half-step carries him off the attack line at the last instant — the punch passes a palm's width from his cheek while his feet stay planted under him.`

**F6. Hovering** — парение, подпружинивание
`He hovers on the balls of his feet with a light constant spring in the knees, head gliding at one steady height — coiled, charged, almost motionless.`

## H — Руки

**H1. Straight lead** — прямой лид, удар №1
`His lead fist fires from exactly where it hovers at guard — one straight line to the opponent's chin, knuckles vertical, thumb up, elbow unfolding behind the fist, a short glide-step feeding body weight into it. The head snaps back hard; his hand is already back at guard while the man is still staggering.`
Реакция: голова хлёстко назад, два шага назад / оседание.

**H2. Finger jab (bil jee)** — тычок в глаза
Раскрытая передняя кисть увеличивает досягаемость относительно той же руки со сжатым кулаком; скорость не объявлять самой высокой без сравнения. Контакт, степень сгиба пальцев и реакцию выбирать по конкретному показу/постановке; пальцы не должны оставаться напряжёнными во всех фазах гарды.

**H3. Lead hook** — хук лид-рукой
Короткая дуга ведущей согнутой руки к выбранной боковой цели. Высоту локтя, поворот корпуса и опорной стопы согласовать с уровнем цели и конкретным вариантом; не удерживать локоть всегда внизу и не ограничивать корпус несколькими градусами. Отдельный вариант в голову и в корпус не склеивать одним универсальным углом. Straight lead перед ним возможен, но не обязателен.

**H4. Backfist** — бэкфист простой
Различать варианты источника 7M3FWG31ybE: первый (01:16–02:12) сравнивается со straight lead; у snapping и тяжёлого другие повороты/продолжения. EN-заготовка ниже сохраняет прежний сценический backhand по дуге, но не описывает все варианты и не заменяет первый вариант преподавателя. Для точного переноса урока использовать его конкретную фазу, а не автоматически эту дугу.
`His arm whips out and across in a BACKHAND arc — the same motion as a backhand slap but with a closed fist — the BACK of his knuckles, the side where a watch face sits, cracking across the temple, palm turned down and toward himself. The head jerks SIDEWAYS with the blow; the arm recoils along the same arc.`

**H5. Snapping backfist** — хлёсткий кистевой
`From guard his hand whips across in a short backhand snap — knuckle side of the fist leading, palm turned down — the back of the knuckles cracking across the nose like flicking water off the fingertips, back at guard inside the same beat. The head flicks aside, eyes watering.`

**H6. Heavy backfist** — «бита», финишер
`His whole torso torques into a wide BACKHAND swing — a tennis backhand thrown with a closed fist — the back of the knuckles arriving across the jaw like a club. The man's head whips sideways and he spins a quarter turn, dropping.`

**H7. Straight blast** — цепные прямые по центру
Явно выбранная серия — исключение из пользовательского дефолта короткой двойки. Частота в заготовке условна; не считать её измерением источника и не добавлять к каждой сцене.
`Both fists take turns pistoning down one straight rail at the center of the opponent's chest and face — vertical knuckles, thumbs up, elbows brushing his own ribs, the hands cycling like bicycle pedals, three hits a second — while his feet chew forward in tiny steps. The man back-pedals, arms flailing, and topples onto his back.`

**H8. One-inch punch** — дюймовый (по запросу)
Вариант демонстрации очень короткого удара: отдельно задать начальное расстояние кулака до мишени и движение корпуса. Старый обязательный полёт в стеллаж — киноусиление, не доказанная реакция; использовать его только при выбранной степени стилизации, не как меру аутентичности.

**H9. Shovel hook** — «лопата» в печень
`A short scooping hook digs up under the floating ribs from a palm's width away, knuckles half-turned up. The man folds sideways around the spot.`

**H10. Cross** — задний прямой
`His rear fist drives straight through behind the lead punch, hips snapping over, landing on the line the lead just opened.`

**H11. Hammer fist** — молот
`His fist rises and drops like a hammer driving a nail — the PINKY side of the clenched fist, the soft bottom edge, landing on the back of the bowed neck.`

**H12. Локоть** — elbow
`Chest to chest, his arm folds and the point of the elbow slices a short flat arc across the jaw. The head snaps aside, the man reeling into the wall.`

## K — Ноги (нижний уровень по умолчанию; названные удары в корпус сохраняются)

**K1. Side kick в колено (jeet tek)** — стоп-кик в колено
Контакт на уровне выбранной цели — колена либо голени; не требовать одновременно контакт в колено и всю траекторию ниже его высоты. Ближняя к цели нога выполняет удар, другая обеспечивает подход/опору. Фаза стопы и подшаг зависят от варианта источника. Реакция для сцены — потеря равновесия по направлению текущего движения; перелом или складывание сустава не обязательны.

**K2. Side kick в корпус** — «отбрасыватель», финишер
Сохранён выбранный Виктором удар в корпус. Указать один адрес — например, грудь или живот — и привести к нему высоту пятки относительно позы противника. Не сочетать «на высоте пояса» и «в грудину» без соответствующего сгиба цели. Полёт на 2–3 метра — прежний эффект Warrior, доступный как постановочное усиление; обычная реакция и разрыв дистанции выбираются отдельно. Низкий глобальный lock к K2 не применяется.

**K3. Oblique kick** — топчущий в голень
Выбрать одну цель и контактную фазу: голень либо подъём стопы. Прежняя заготовка склеивала скользящий контакт по голени и топтание подъёма; не выдавать эту последовательность за единый проверенный вариант. Реакцию выбирать по опоре и направлению движения цели.

**K4. Hook kick** — круговой лоу
Алиас «круговой лоу» означает нижний уровень; вариант в рёбра/корпус задавать отдельно. Выбрать высоту и ударную поверхность по проверенному варианту, сохранить короткую дугу и восстановление опоры. Не писать «рёбра на высоте пояса» как универсальную геометрию.

**K5. Jeet juk tek** — перехватывающий стоп-кик
`The attacker's front foot has barely left the ground when the hero's lead leg is already pistoning out sideways — heel leading, torso tilted away — the sole meeting the advancing knee mid-step. The attack collapses before it forms, the attacker's own momentum driving him onto the heel.`

**K6. Leg cut** — встречный низкий кик под round kick; старый поисковый алиас «подрез опорной»
Термин конкретного демонстратора из M8f5o-mg6ic. При выборочной покадровой проверке ~20–23с обе поднятые ноги пересекаются; точная поверхность контакта неочевидна, обязательная атака опорной ноги не установлена, к ~24с оба стоят. Старое «срубить икру → падение навзничь» этим фрагментом не подтверждено и не используется как механика кода. Для сцены — встречный низкий кик/вход по проверенному варианту; конкретную контактную фазу уточнять по карточке видео, падение не добавлять автоматически. Если Виктор явно просит подсечку опорной ноги, это отдельная постановочная задача, а не доказанное содержание этого ролика.

**K7. Колено** — knee из захвата
Сценический вариант из контроля головы/корпуса. Сначала выбрать положение цели и один адрес колена; не описывать одновременно затылок, тянущийся на колено, и контакт в солнечное сплетение без геометрии корпуса. Руки, опорная нога и восстановление баланса должны оставаться определёнными.

**K8. Spin back kick** — вертушка задним (по запросу)
`He pivots on the lead foot, his back turning to the opponent for half a beat, and the rear HEEL drives STRAIGHT BACK like a mule kick into the midsection — a piston along one line, one clean rotation, the foot landing already facing the opponent again.`

## T — Trapping и перехваты

**T1. Pak sao** — шлепок-сбив + удар одним битом
`His rear palm slaps the attacker's guarding arm down and inward, pinning it — and in the same instant, inside the same beat, his lead fist shoots through the opened line into the jaw. One motion, both hands working at once. The head snaps back, the pinned arm still trapped low.`

**T2. Lop sao** — сдёргивание за запястье + встречный
`His hand closes on the attacker's wrist and yanks it down past his own hip — elbow slamming to his ribs, hips turning into the pull — so the man lurches face-first into the short punch already travelling the other way. Pull and hit land as one.`
Реакция: тело продёргивается вперёд-вниз, падение мимо героя.

**T3. Jao sao** — перетекание вокруг блока
`His striking hand meets the block and stays glued forward, sliding around it in a small tight circle, and continues into the face along the new open line — one flowing unbroken path. The head jerks back off the sneaking hit.`

**T4. Jut sao** — дёрг гарда вниз
`His fingers hook the top of the opponent's forearm and jerk it down a hand's width — for half a beat the face stands open, and the other fist takes it.`

**T5. Stop-hit** — перехват ударом (ДНК стиля)
`The attacker's shoulder just begins to load its swing — and in that exact instant the hero's lead fist is already landing on his chin, the straight line beating the curve. The swing dies halfway, the attacker still moving into the contact.`
Точное «удвоение» импакта от встречного движения не заявлять: измерения нет. Этот пример — перехват рукой; K5 отвечает за перехват ногой.

**T6. Parry + hit** — сбив с ударом в один бит
Одновременный вариант остаётся пользовательским дефолтом этого кода. В повторно сверенном _naZzjLzVXk, 17:42–18:29, инструктор допускает совместное выполнение и вариант, где парирование чуть опережает удар. Поэтому «блоков нет, всё только одновременно» не использовать как общее определение JKD; конкретную временную связь выбирать по сцене и источнику.
`His rear palm pushes the incoming punch a hand's width off line while his lead fist travels the shorter straight path and lands first — deflection and strike inside one single beat.`

**T7. Chi sao** — липкие руки
По умолчанию кооперативный контактный дрилл; не навязывать rolling в любой реальной/кинематографической схватке. Переход к удару ниже — постановочный вариант.
`Their forearms stay glued at the wrists, rolling in tight circles, weight trading back and forth — then he explodes through the contact, a vertical fist bursting from inside the roll into the chest.`

**T8. Trap-серия (gates)** — цепочка трэпов
`Three hand-fights inside two beats: his palm slaps the guard down, his other hand snatches the wrist and yanks, and the freed fist cracks across the temple — slap, snatch, strike, each move opening the door for the next.`

**T9 / T10 / T11 — алиасы WC-T9 / WC-T10 / WC-T11.** Читать `styles/wing-chun.md`: tan / bong / fook. Использование одной общей техники не переключает всего персонажа на фронтальную WC-стойку. Общее WC-правило «локти близко к рёбрам» относится к нейтральной рамке и прямым; поднятый локоть bong и локтевые удары имеют собственную фазовую геометрию.

## G — Захваты, броски, земля

**G1. Takedown через lop sao** — сдёрнуть в пол
`The yank on the wrist meets the man's own stumble — the hero's foot sweeps the lead ankle and he crashes past, face-down onto the asphalt, arm still trailing in the hero's grip for a beat.`

**G2. Armbar** — рычаг локтя стоя
Алиас «из jow/jao sao» сохраняется из шпаргалки, но конкретный переход требует исходного контакта и свободных рук; не считать его автоматически доказанным этим сниппетом.
`He feeds the punching arm across his own forearm and levers it straight, locking the elbow against the joint; the man folds down to his knees, arm trapped rigid.`

**G3. Освобождение от захвата** — удар по «дешёвой» цели
Сначала определить, что и на какой высоте захвачено. Прежнее универсальное «пятка на хватающую руку» не имеет достаточной геометрии и отозвано как дефолт. Выбирать постановочный вариант из соответствующей ситуации `sources/06`; рука, находящаяся у груди или шеи, не превращается без перехода в цель под топчущей пяткой.

## W — Оружие

**W1. Против ножа** — обезоруживание
Сценическая задача, не универсальная последовательность самообороны. Выбрать конкретную исходную ситуацию из `sources/06`, затем проверить линию оружия, дистанцию и занятость рук. Прежняя схема «угол → низкий кик → обе руки на запястье → локоть → нож выпадает» — непроверенная сборная постановочная заготовка; без явного перехода контроля нельзя утверждать её механику или неизбежное обезоруживание. Финальная остановка зависит от режима сцены.

**W2. Против палки/биты** — вход внутрь замаха
`He steps INSIDE the swing before it gathers speed, forearm jamming the attacker's arm at the bicep, and his fist lands in the same motion — the club's arc dying behind his shoulder.`

## D — Тренировочные сцены

**D1. Лапы** — focus mitts
`Focus mitts crack in fast pairs — the pad man feeding angles, vertical-knuckle punches snapping in and recoiling, feet gliding between combinations.`

**D2. Wooden dummy** — деревянный манекен
`His forearms clatter in circles around the wooden dummy's three arms — palms slapping, wrists hooking, a low kick thudding into the post leg — a fast rhythmic drum of wood and skin.`

**D3. Изометрия** — ремни, статика
`He strains against a fixed leather strap, the punch frozen at half extension, arms trembling, tendons ridged along the forearms — three long seconds, then release and a long exhale.`

**D4. Clap-дрилл** — взрыв по сигналу
`He stands loose, eyes soft — at the clap of hands he detonates forward, one punch, and is still again before the echo fades.`

**D5. Отжимания Брюса** — на двух пальцах
Варианты из пользовательского словаря: на кулаках / на двух пальцах. Указать выбранный вариант и видимые точки опоры; «два пальца плюс большой» — три точки, поэтому прежнюю заготовку не использовать для запроса «два пальца». Точную историческую форму и одноручное/двуручное выполнение сверять с референсом.

**D6. Бой с тенью** — shadowboxing
`He shadowboxes in bursts — three blurred strikes, a frozen half-second, a glide sideways, one more — the rhythm broken and unpredictable, breath hissing with each hit.`

---

## Правила резолва

1. Виктор пишет движение алиасом или кодом — найти здесь, извлечь механику и адаптировать ведущую сторону, исходный контакт, цель, окружение и крупность. Порядок движений Виктора сохраняется; не вставлять автоматически EN-текст.
2. Проверять по SKILL.md и выбранному режиму. Художественная манера пользователя не является ошибкой учебного канона. Если переход физически недоопределён, уточнить его условия; неподтверждённое не называть проверенным.
3. В ORIGINAL без заданных движений выбирать подходящий паттерн P1-P6 (choreography-patterns.md). В STYLE_ONLY паттерн допустим для новой связки. В RECONSTRUCT отсутствие кодов не разрешает замену: описывать фактическую последовательность по карте источника.
4. Бит — читаемое событие с причиной и результатом; одновременные защита/удар могут быть одним битом, а серия — отдельным выбранным событием. S1 нужен при показе стойки, продолжение начинается из предыдущего состояния.
5. FIGHT STYLE LOCK собирать по верху файла и проверять на совпадение с действиями; старый фиксированный lock не использовать.
6. Звук контактов учитывать в AUDIO по правилам активного движка и запросу сцены; отсутствие описания не доказывает, что звук обязательно будет немым.
7. В новой постановке выбирать крупность, позволяющую прочитать механику: ноги и опору для кика, контакт рук для trapping. В RECONSTRUCT с сохранением камеры оставлять исходное кадрирование, а скрытую механику отмечать неизвестной; расширение кадра является отдельной адаптацией. Для выбранного финишера с отлётом нужна определённая траектория и место приземления; препятствие добавлять только если оно есть в сцене.
