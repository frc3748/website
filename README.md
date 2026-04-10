# website

Public website for [FRC Team 3748 Ragnarok Robotics](https://www.mthragnarok.com) at Mt. Hebron High School in Ellicott City, MD. Built with Bootstrap 5 and a dark theme with Ragnarok gold accents.

## Overview

A static multi-page site covering team info, FRC game recaps, competition results, galleries, sponsorship, and team merchandise. Several pages include password-protected sections backed by the `mth-authorization` Cloud Function. Live competition data is pulled from the FIRST Inspires API via `mth-first-proxy`. Galleries are served from Google Drive via `mth-image-provider`.

## Pages

| File | Description |
|---|---|
| `index.html` | Home / landing page |
| `about.html` | Team history and mission |
| `team-members.html` | Roster |
| `first-inspires.html` | About the FIRST Inspires program |
| `2024-game.html` | 2024 FRC season recap |
| `2025-game.html` | 2025 FRC season recap |
| `2026-game.html` | 2026 FRC season + live results |
| `2026-district-rankings.html` | 2026 FCH district rankings |
| `2026-pasadena-results.html` | 2026 Pasadena event results |
| `2026-severn-results.html` | 2026 Severn event results |
| `gallery-2025-battle-of-baltimore.html` | 2025 Battle of Baltimore gallery |
| `gallery-2025-season.html` | 2025 season gallery |
| `gallery-2026-season.html` | 2026 season gallery |
| `gallery-2026-dcmp.html` | 2026 FCH District Championship gallery |
| `gallery-2026-pasadena-competition.html` | 2026 Pasadena competition gallery |
| `gallery-2026-severn-competition.html` | 2026 Severn competition gallery |
| `gallery-2026-homecoming-parade.html` | 2026 Homecoming parade gallery |
| `gallery-stjohnslane-stem-night.html` | St. John's Lane STEM night gallery |
| `livestream.html` | Competition livestream + live rankings |
| `2026-dcmp-trip.html` | FCH District Championship trip logistics (password-protected) |
| `sponsors.html` | Current sponsors |
| `Sponsorship-opportunities.html` | Sponsorship prospectus |
| `order-tshirt.html` | T-shirt order form |
| `contact-us.html` | Contact form |
| `template.html` | Page template for new pages |

## Tech Stack

- **Bootstrap 5** — layout and components
- **Font Awesome** — icons
- **Google Fonts** — Viking / Cinzel Decorative
- **Google Analytics** (`G-GL9Y0DFJPE`) + **PostHog** — analytics

## Cloud Function Dependencies

| Function | Purpose |
|---|---|
| [`mth-authorization`](https://github.com/mthragnarok/mth-authorization) | Password-validates protected page sections |
| [`mth-first-proxy`](https://github.com/mthragnarok/mth-first-proxy) | Proxies FIRST Inspires API for rankings and match data |
| [`mth-image-provider`](https://github.com/mthragnarok/mth-image-provider) | Serves paginated gallery images from Google Drive |
| [`mth-tshirt-order-email-processor`](https://github.com/mthragnarok/mth-tshirt-order-email-processor) | Processes t-shirt order form submissions |
| [`mth-inquiry-email-processor`](https://github.com/mthragnarok/mth-inquiry-email-processor) | Processes contact form submissions |

## Password-Protected Sections

Protected pages use SHA-256 client-side hashing (`crypto.subtle`) and call `mth-authorization` with a `serviceKey` and `passwordHash`. The function performs a constant-time comparison and sends a Mailgun alert on every auth attempt (success or failure).

## Local Development

No build step required — open any `.html` file directly in a browser, or serve with any static file server:

```bash
npx serve .
```

## Versioning

All pages carry a shared version string in the footer (currently `v1.0.55`). Version bumps are applied site-wide across all HTML files at once.
