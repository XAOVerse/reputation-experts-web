import os
BASE = "apps/web/src/app/aesthetic-clinics"
def fix(path, replacements):
    with open(path) as f: c = f.read()
    for old, new in replacements:
        c = c.replace(old, new)
    with open(path, 'w') as f: f.write(c)
    print(f"  Updated {path}")

fix(f"{BASE}/sections/DigitalReputationSection/DigitalReputationSection.tsx", [
    ("dental practices", "cosmetic and aesthetics clinics"),
    ("their dentist online", "their aesthetics clinic online"),
    ('"/images/dental-2.png"', '"/images/aesthetic-1.png"'),
])
fix(f"{BASE}/sections/GoogleAIOverviewSection/GoogleAIOverviewSection.tsx", [
    ('"/images/dental-3.png"', '"/images/aesthetic-1.png"'),
])
fix(f"{BASE}/sections/DentalCaseStudiesSection/DentalCaseStudiesSection.tsx", [
    ("dental clinic", "aesthetics clinic"),
    ("Dental Clinic", "Aesthetics Clinic"),
    ("patient review", "client review"),
    ("patient enquiries", "client enquiries"),
    ("Consultation bookings", "Treatment bookings"),
])
fix(f"{BASE}/sections/DentalFAQSection/DentalFAQSection.tsx", [
    ("dental practice", "aesthetics clinic"),
    ("dental practices", "aesthetics clinics"),
    ("my practice", "my clinic"),
    ("your practice", "your clinic"),
    ("Your practice", "Your clinic"),
    ("the practice", "the clinic"),
    ("best dentist near me", "best aesthetics clinic near me"),
    ("a dentist", "an aesthetics provider"),
    ("their dentist", "their aesthetics provider"),
    ("patients", "clients"),
    ("Patients", "Clients"),
    ("patient", "client"),
    ("booked appointments", "booked consultations"),
    ("practices", "clinics"),
])
fix(f"{BASE}/sections/DentalCTASection/DentalCTASection.tsx", [
    ("your practice deserves", "your clinic deserves"),
    ("dental practices across the UK", "aesthetics clinics across the UK"),
])
fix(f"{BASE}/sections/DentalContactSection/DentalContactSection.tsx", [
    ('"Dental Home Page"', '"Aesthetic Clinics Page"'),
])
print("\nDone! All remaining files updated.")
