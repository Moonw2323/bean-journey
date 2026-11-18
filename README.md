# Bean Journey

A multi-page website for a small coffee roastery. Visitors follow a coffee bean from farm to cup, then subscribe to get it delivered.

Built for **COM109 Client-Side Development, Coursework 2** (Ulster University).

## Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Introduces the roastery and three featured blends |
| Journey | `journey.html` | Reveals six stages of a bean's journey, one click at a time, with animation and a progress bar |
| Subscribe | `subscribe.html` | Web form with live validation; valid entries are added to the page and saved in the browser |
| About | `about.html` | Story, opening hours, contact details and team |

## Features

- **Click-by-click reveal:** jQuery slides in one stage per click, updates a progress bar, and supports restart.
- **Form validation:** name, email, blend and delivery frequency are checked on blur and on submit, with clear error messages.
- **Client-side storage:** subscriptions are saved to `localStorage` and shown again after a refresh.
- **Accessibility:** skip link, labelled fields, errors linked with `aria-describedby`, visible focus outlines, keyboard-friendly controls, and reduced-motion support.
- **Responsive layout:** Flexbox and Grid, working from phone to desktop.

## Technologies

HTML5, CSS3 (Flexbox, Grid, transitions), JavaScript, jQuery 3.7.1 (CDN), Google Fonts (Fraunces and Karla).

## Project structure

```
bean-journey/
├── index.html
├── journey.html
├── subscribe.html
├── about.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── journey.js
│   └── form.js
└── images/
    ├── bg.svg
    └── favicon.svg
```

## Run it locally

1. Clone the repository: `git clone https://github.com/YOUR-USERNAME/bean-journey.git`
2. Open `index.html` in any modern browser.

No build step is needed. An internet connection is required for jQuery and Google Fonts.

## Team and roles

| Name | Role | Pages / features |
|---|---|---|
| Your name | Add your role | Add what you built |
| Teammate 2 | | |
| Teammate 3 | | |

## Git repository

https://github.com/YOUR-USERNAME/bean-journey


