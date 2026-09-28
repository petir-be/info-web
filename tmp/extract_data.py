import json, re
from pathlib import Path

lines = Path('tmp/table.txt').read_text(encoding='utf-8').splitlines()
rows = []
family = ''
for line in lines:
    match = re.search(r'\b([WC]) (tree|herb|climbers|shrub|fungus) ', line)
    if match:
        before = line[:match.start()].split()
        if before[0].endswith('aceae'):
            family = before.pop(0)
        scientific = ' '.join(before[:2])
        local = ' '.join(before[2:])
        after = line[match.end():]
        metrics = re.search(r' (\d+) ([\d.]+) (\d+) (.*)', after)
        rows.append(dict(scientific=scientific, local=local, family=family, source='Wild' if match[1]=='W' else 'Cultivated', form=match[2], parts=after[:metrics.start()], ur=int(metrics[1]), uv=float(metrics[2]), uses=int(metrics[3]), fidelity=metrics[4]))
    elif rows and re.match(r'^(?:[A-Z]{1,2}:|\d+\.\d+|leaves VA:|modified leaf)', line):
        if line.startswith('leaves VA:'):
            rows[-1]['parts'] += ' leaves'
            line = line.removeprefix('leaves ')
        if line == 'modified leaf':
            rows[-1]['parts'] += ' modified leaf'
        else:
            rows[-1]['fidelity'] += ' ' + line
for row in rows:
    row['categories'] = re.findall(r'\b([A-Z]{1,2}):', row['fidelity'])
Path('src/plants.json').write_text(json.dumps(rows, indent=2,ensure_ascii=False), encoding='utf-8')
print('Extracted records:',len(rows))
print('Families:',len(set(r['family'] for r in rows)))
