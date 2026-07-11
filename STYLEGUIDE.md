Design tokens

- Colors:
  - Primary: #2563eb (accent)
  - Surface: #ffffff (bg)
  - Muted surface: #f7fbff (bg2)
  - Border: #e6eef9
  - Text: #0b1220 (primary), #475569 (secondary)

- Typography:
  - Headings: `Syne` (heavy display)
  - UI / body: `DM Sans` / `Space Mono` for monospace labels

Spacing & layout

- Max content width: 1100px
- Hero padding: 8rem top on desktop, scales down for mobile
- Grid: 60/40 hero split (approx 1.1fr/0.9fr)

Components

- Buttons:
  - Primary: solid `--accent` background, white text, slight lift on hover
  - Secondary: outline with `--border2`, accent on hover
  - Accessibility: `:focus-visible` outline set to 3px soft accent tint

- Stat cards: small rounded surface blocks under hero for glanceable metrics

Accessibility

- Respect system cursor (no `cursor:none`)
- Provide `aria-label` on CTA links
- Ensure color contrast for body text is >= 4.5:1 where possible

Notes

- Visual language keeps soft accents from the original (blue tones) but moves to a high-contrast, print-friendly surface.
- Keep animations subtle and optional; focus on quick scannability for hiring managers.

Implementation checklist

- [x] Light theme tokens + typography
- [x] Hero stats row
- [x] Resume link + `resume.html` placeholder
- [ ] Export final colors and create a dark-mode variant (optional)
- [ ] Create a downloadable PDF resume and wire in `resume.pdf` (user to supply or replace placeholder)
