"""Debug script to check claims extraction data."""
import json

d = json.load(open('report_overflow/839c77a3-8365-4e29-9725-d91ddd2df7d3_task_graph.json'))

# Count total findings from all search tasks
total = 0
for nid, n in d['nodes'].items():
    if n['type'].startswith('search.'):
        r = n.get('result') or {}
        c = r.get('content')
        if isinstance(c, list):
            total += len(c)
            print(f"  {n['type']}: {len(c)} findings (list)")
        elif isinstance(c, dict):
            f = c.get('findings', c.get('results', []))
            total += len(f)
            print(f"  {n['type']}: {len(f)} findings (dict)")
        else:
            print(f"  {n['type']}: content type = {type(c)}")

print(f"\nTotal findings: {total}")

# Check extract_claims
for nid, n in d['nodes'].items():
    if n['type'] == 'extract_claims':
        r = n.get('result', {})
        c = r.get('content', {})
        print(f"\nExtract claims result: count={c.get('count')}")
        print(f"  claims: {len(c.get('claims', []))}")
        print(f"  claim_objects: {len(c.get('claim_objects', []))}")
        
        meta = r.get('metadata', {})
        print(f"  metadata: {meta}")
        
        # Check if error
        err = r.get('error')
        if err:
            print(f"  ERROR: {err}")
