import os, re

BASE = "apps/web/src/app/aesthetic-clinics"

def fix(path, replacements):
    with open(path) as f: c = f.read()
    for old, new in replacements:
        c = c.replace(old, new)
    with open(path, 'w') as f: f.write(c)
    print(f"  Updated {path}")

# page.tsx
fix(f"{BASE}/page.tsx", [
    ('title: "Dental Clinics \u2014 Reputation Management for Dental Practices"',
     'title: "Aesthetic Clinics \u2014 Reputation Management for Cosmetic & Aesthetics Clinics"'),
    ("dental clinics'", "cosmetic & aesthetics clinics'"),
    ('headline="We protect and grow Dental Clinics\' online reputations."',
     'headline="We protect and grow Cosmetic & Aesthetics Clinics\' online reputations."'),
    ('imageSrc="/images/dental-1.png"', 'imageSrc="/images/aesthetic-1.png"'),
    ('imageAlt="Dental clinic consultation"', 'imageAlt="Aesthetic clinic interior"'),
])

# DentalHeroSection
fix(f"{BASE}/sections/DentalHeroSection/DentalHeroSection.tsx", [
    ("Dental Clinics' online reputations.", "Cosmetic & Aesthetics Clinics' online reputations."),
    ('"/images/dental-1.png"', '"/images/aesthetic-1.png"'),
    ('"Dental clinic consultation"', '"Aesthetic clinic interior"'),
])

# ProblemStatementSection
fix(f"{BASE}/sections/ProblemStatementSection/ProblemStatementSection.tsx", [
    ("dental practices", "cosmetic clinics"),
    ("dental practice", "cosmetic clinic"),
    ("booking a dentist", "booking a consultation"),
    ("your practice", "your clinic"),
    ("dentist", "aesthetics provider"),
])

# ReputationManagementSection
fix(f"{BASE}/sections/ReputationManagementSection/ReputationManagementSection.tsx", [
    ("Dental Clinics", "Aesthetics Clinics"),
    ("dental clinics", "aesthetics clinics"),
    ("your practice", "your clinic"),
])
