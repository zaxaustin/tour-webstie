# NYC Holiday Magic Tours

A responsive marketing site for a New York City holiday tour guide. The project focuses on clear tour details, accessible navigation, and strong metadata for sharing and search.

## Project structure

```
.
├── favicon.svg             # Vector favicon referenced by both pages
├── index.html              # Primary marketing landing page
├── nyc-holiday-tours.html  # Alternate entry point with the same experience
└── README.md               # Project documentation
```

## Working locally

1. Clone or download the repository.
2. Open `index.html` (or `nyc-holiday-tours.html`) directly in your browser.
3. Adjust tour copy, pricing, and imagery as needed.

Both HTML files include the same markup so you can link to either URL in production. If you keep only one entry point, update navigation links accordingly.

## Accessibility and responsiveness

The site includes:

- A “Skip to main content” link for keyboard users.
- Semantic headings, landmark elements, and ARIA labels for interactive components.
- Keyboard-accessible navigation, FAQ accordion, and modal dialogue controls.
- A responsive layout that adapts from mobile (320px) to large desktops (1440px+).

When you customize content, preserve button types, ARIA attributes, and focus states so assistive technology support remains intact.

## Deployment checklist

Before going live, review the following:

- [ ] Update contact details, meeting locations, and pricing in both HTML files.
- [ ] Replace the Open Graph/Twitter preview image URLs with an asset you host.
- [ ] Confirm the JSON-LD business schema reflects your real address and schedule.
- [ ] Test navigation, accordions, and modal flows with only a keyboard.
- [ ] Verify layout and typography across common breakpoints (320, 768, 1024, 1440px).
- [ ] Ensure the favicon renders in browser tabs and on mobile home screens.
- [ ] Run your pages through the [W3C HTML validator](https://validator.w3.org/) and fix issues it reports.
- [ ] Hook the booking form up to an email service (Formspree, Netlify Forms, etc.) and test the success path.

## Hosting configuration tips

### Netlify

Create a `netlify.toml` to configure SPA-style redirects and basic security headers:

```toml
[build]
  command = ""
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Vercel

Add a `vercel.json` if you need the same behavior on Vercel:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

Deploying elsewhere? Any static host that can serve the HTML files works—just point the root route at `index.html` and add redirects for alternate entry points if needed.

## Customization notes

- Update the JSON-LD schema and `<meta>` tags near the top of each file with your company details.
- Replace hard-coded phone numbers, email addresses, and imagery with production-ready content.
- Tailor the FAQ copy, testimonials, and tour selections to reflect your actual offerings.

Feel free to open issues or pull requests if you spot accessibility problems or have suggestions to improve the tour experience.
