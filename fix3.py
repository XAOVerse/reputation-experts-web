BASE = "apps/web/src/app/aesthetic-clinics"
def fix(path, replacements):
    with open(path) as f: c = f.read()
    for old, new in replacements:
        c = c.replace(old, new)
    with open(path, 'w') as f: f.write(c)
    print(f"  Fixed {path}")

fix(f"{BASE}/sections/DigitalReputationSection/DigitalReputationSection.tsx", [
    ('"/images/aesthetic-1.png"', '"/images/dental-2.png"'),
])
fix(f"{BASE}/sections/GoogleAIOverviewSection/GoogleAIOverviewSection.tsx", [
    ('"/images/aesthetic-1.png"', '"/images/dental-3.png"'),
])
print("Done! Restored original images for Digital Reputation and Google AI sections.")
