"""Resolve the original short-code interface without changing source definitions."""
import argparse
import json
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
REF = ROOT / 'references'


def load_json(name):
    return json.loads((REF / name).read_text(encoding='utf-8'))


def resolve_codes(codes, registry):
    entries = {e['code']: e for e in registry['entries']}
    records = {r['tag']: r for r in load_json('strike-catalogue.json')['records']}
    results = []
    for query in codes:
        if not re.fullmatch(r'[A-Z0-9_@-]{2,160}', query):
            raise ValueError('Неверная форма кода: ' + query)
        code = registry['aliases'].get(query, query)
        if code not in entries:
            raise ValueError('Код отсутствует в реестре: ' + query)
        entry = entries[code]
        results.append({
            'query': query, 'code': code, 'entry': entry,
            'definition_source': entry['source'],
            'definition_code': entry.get('source_code'),
            'definition_precedence': entry['definition_precedence'],
            'related_records': [records[tag] for tag in entry['catalogue_tags']],
        })
    return results


def main():
    parser = argparse.ArgumentParser(description='Короткие коды боевого каталога')
    sub = parser.add_subparsers(dest='command', required=True)
    listing = sub.add_parser('list')
    listing.add_argument('prefix', nargs='?')
    show = sub.add_parser('show')
    show.add_argument('code')
    resolve = sub.add_parser('resolve')
    resolve.add_argument('codes', nargs='+')
    args = parser.parse_args()
    registry = load_json('short-codes.json')
    try:
        if args.command == 'list':
            entries = registry['entries']
            if args.prefix:
                prefixes = {s['prefix'] for s in registry['styles']}
                if args.prefix not in prefixes:
                    raise ValueError('Префикс отсутствует в реестре: ' + args.prefix)
                entries = [e for e in entries if e['prefix'] == args.prefix]
            result = entries
        else:
            result = resolve_codes([args.code] if args.command == 'show' else args.codes, registry)
    except ValueError as error:
        print(str(error), file=sys.stderr)
        return 2
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
