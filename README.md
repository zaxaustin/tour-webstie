# tour-webstie
this is a website for a tour buisness in nyc
# 🎄 NYC Holiday Magic Tours

A complete website and booking management system for private holiday tours in New York City.

![NYC Holiday Tours](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Python](https://img.shields.io/badge/Python-3.7+-blue)

## 📋 Overview

NYC Holiday Magic Tours is a professional tour business offering private and group holiday tours throughout New York City. This repository contains:

- **Complete responsive website** (HTML/CSS/JavaScript)
- **Python booking management system**
- **Email templates** for customer communication
- **Documentation** for business operations

## ✨ Features

### Website Features
- 🎨 Mobile-responsive festive design
- 📍 Interactive tour location builder with real-time pricing
- 💰 Clear pricing structure for private and group tours
- 📅 Scheduled public group tours (Saturday, Wednesday, Sunday)
- 🎁 Free self-guided tour guide download
- ❓ Comprehensive FAQ section
- 👤 Professional "About the Guide" page
- 📧 Contact form for bookings

### Booking Management System
- ✅ Add and track bookings with unique IDs
- 💵 Payment tracking (Venmo, Zelle, Cash, Credit Card)
- 📊 Revenue reporting and analytics
- 📅 View upcoming tours
- 🔍 Filter bookings by status, date, or payment
- 📝 Notes system for customer communication
- 💾 JSON-based data storage (easy backup)

## 🚀 Quick Start

### Website Deployment

#### Option 1: Netlify (Recommended - Free)
1. Fork this repository
2. Sign up at [Netlify](https://netlify.com)
3. Connect your GitHub repo
4. Deploy (automatic from `main` branch)

#### Option 2: Vercel (Free)
1. Fork this repository
2. Sign up at [Vercel](https://vercel.com)
3. Import your GitHub repo
4. Deploy

#### Option 3: GitHub Pages (Free)
1. Fork this repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/nyc-holiday-tours`

### ✅ Deployment Checklist

Run through this quick list before sharing your production link:

- [ ] Replace placeholder business details (phone, email, meeting points) in `index.html` and structured data.
- [ ] Update the Open Graph image URL and confirm it passes the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
- [ ] Verify the booking form is connected to your form provider (Formspree, Netlify Forms, etc.) and displays a success message.
- [ ] Test critical paths with keyboard only and screen-reader navigation to confirm skip links, menu toggles, and FAQ accordions work.
- [ ] Confirm the responsive layout on common breakpoints (320px, 768px, 1024px, 1440px).
- [ ] Check that favicons appear on desktop and mobile browsers.
- [ ] Validate HTML/CSS with [W3C tools](https://validator.w3.org/) and fix warnings that impact production quality.
- [ ] If you use analytics or pixels, add the scripts just before `</body>` and verify consent messaging if required.

### 🌐 Hosting configuration tips

**Netlify**

Create a `netlify.toml` in the project root to control redirects and security headers:

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

[[headers]]
  for = "/favicon.svg"
  [headers.values]
    Cache-Control = "public, max-age=604800"
```

Netlify auto-detects form submissions if you add `netlify` attributes to your form, or you can connect your existing provider.

**Vercel**

Add a lightweight `vercel.json` to mirror the same behavior:

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

You can manage environment variables for third-party services (Formspree IDs, analytics keys) directly in the Vercel dashboard without exposing them in the codebase.

### Booking System Setup

#### Requirements
- Python 3.7 or higher
- No external dependencies (uses only Python standard library)

#### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nyc-holiday-tours.git
cd nyc-holiday-tours

# Run the booking system
python booking_tracker.py
```

#### First Time Use

```python
# The system will create bookings.json automatically
# Use the menu to:
# 1. Add your first booking
# 2. Record payments
# 3. Generate reports
```

## 📁 Project Structure

```
nyc-holiday-tours/
├── index.html                    # Main website file
├── booking_tracker.py            # Booking management system
├── bookings.json                 # Data storage (created automatically)
├── email-templates.md            # Customer email templates
├── operations-guide.md           # Business operations documentation
├── README.md                     # This file
└── assets/                       # (Optional) Images and additional files
```

## 🎯 Configuration

### Website Customization

Edit `index.html` to update:

```javascript
// Update contact information (line ~850)
function handleSubmit(e) {
    // Add your form handling service (Formspree, EmailOctopus, etc.)
}

// Update guide information
// Search for "Dina Capobianco" and replace with your guide's name

// Update pricing
// Search for "$60-75" to adjust hourly rates
// Search for "$45", "$20", "$30" to adjust group tour prices
```

### Booking System Customization

Edit `booking_tracker.py`:

```python
# Adjust default hourly rates (line ~34)
hourly_rate: float = 67.5  # Change to your preferred rate

# Adjust tour pricing (lines ~36-47)
# Modify the cost calculations for each tour type
```

## 📊 Using the Booking System

### Add a New Booking
```bash
# Run the system
python booking_tracker.py

# Select option 1: Add New Booking
# Fill in customer details
# System assigns unique ID (BK0001, BK0002, etc.)
```

### Record Payment
```bash
# Select option 6: Record Payment
# Enter booking ID
# Enter payment amount and method
# System automatically updates payment status
```

### Generate Revenue Report
```bash
# Select option 8: Revenue Report
# View total revenue, bookings, and outstanding payments
# Filter by month if needed
```

### View Upcoming Tours
```bash
# Select option 4: View Upcoming Tours
# See all tours scheduled in the next 7 days
# Check payment and confirmation status
```

## 💰 Pricing Structure

### Private Tours
- **Rate:** $60-75 per hour
- **Customizable:** Fully tailored to customer preferences
- **4+ hours:** Customer provides lunch for guide
- **Gratuity:** 15-20% appreciated

### Public Group Tours
- **Grand Holiday Tour (Saturday):** $45/person (4.5 hours)
  - Lincoln Center → Fifth Avenue → Rockefeller → Bryant Park → Macy's
- **Evening Lights Tour (Wednesday):** $20/person (2 hours)
  - Rockefeller Center, Bryant Park, Times Square
- **Lower Manhattan Tour (Sunday):** $30/person (3 hours)
  - 9/11 Memorial, Wall Street, Statue of Liberty views

**Group Requirements:** Minimum 10 people

## 📧 Email Templates

The repository includes 8 professional email templates:

1. Initial Private Tour Confirmation
2. Initial Group Tour Confirmation
3. 48-Hour Tour Reminder
4. 7-Day Advance Reminder
5. Group Tour Confirmed
6. Group Tour Cancelled (Minimum Not Met)
7. Post-Tour Thank You + Review Request
8. Cancellation Confirmation

See `email-templates.md` for complete templates.

## 🔧 Backend Setup Recommendations

### Form Handling
- **Formspree** (Free): Easy email forwarding
- **EmailOctopus** ($8/mo): Email automation
- **Mailchimp** (Free tier): Marketing + automation

### Payment Processing
- **Venmo/Zelle:** Person-to-person (free)
- **Square:** Credit card processing (2.6% + 10¢)
- **Stripe:** Online payments (2.9% + 30¢)

### Calendar Management
- **Google Calendar:** Share schedules with guide
- **Calendly:** Online booking integration (optional)

## 📱 Business Operations

### Daily Tasks (15-30 min)
- Check form submissions
- Respond to inquiries within 2 hours
- Add bookings to system
- Send confirmation emails

### Weekly Tasks (1-2 hours)
- Send 48-hour confirmations
- Check group tour minimums
- Review schedule with guide
- Send post-tour thank you emails

### Monthly Tasks (2-3 hours)
- Generate revenue reports
- Backup bookings.json
- Review and respond to reviews
- Update website content

See `operations-guide.md` for complete operational procedures.

## 📈 Data Tracking

### Booking Status Flow
```
pending → confirmed → completed
         ↓
    cancelled
```

### Payment Status
```
unpaid → partial → paid
```

### Key Metrics to Track
- Total bookings per month
- Conversion rate (inquiries → bookings)
- Average booking value
- Customer satisfaction (5-star reviews)
- Cancellation rate

## 🔒 Data Backup

**Important:** Regularly backup your `bookings.json` file!

```bash
# Automated backup example (cron job on Linux/Mac)
# Copy bookings.json to cloud storage daily
0 0 * * * cp /path/to/bookings.json ~/Dropbox/backup/bookings-$(date +\%Y\%m\%d).json
```

**Manual Backup:**
- Copy `bookings.json` to Google Drive/Dropbox weekly
- Keep at least 3 backup versions

## 🛠️ Troubleshooting

### Website Issues

**Forms not working?**
- Add Formspree or similar service to handle form submissions
- Check console for JavaScript errors
- Verify all form field IDs match the JavaScript

**Mobile not responsive?**
- Clear browser cache
- Test on multiple devices
- Check viewport meta tag in `<head>`

### Booking System Issues

**"ModuleNotFoundError"**
- Ensure Python 3.7+ is installed: `python --version`
- No external packages needed (uses standard library)

**"File not found" error**
- System creates `bookings.json` automatically on first run
- Check file permissions in directory

**Data loss concerns**
- Make regular backups of `bookings.json`
- Store in cloud storage for redundancy

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

This is a business-specific project, but you're welcome to:
- Fork for your own tour business
- Submit bug fixes
- Suggest improvements
- Share feedback

## 📞 Support

For questions or issues:
1. Check the `operations-guide.md` for detailed procedures
2. Review email templates in `email-templates.md`
3. Open an issue on GitHub
4. Contact: [Your Email]

## 🎄 Tour Locations

### Holiday Highlights
- Lincoln Center
- Fifth Avenue (Saks, Bergdorf Goodman, Tiffany & Co.)
- Rockefeller Center & Christmas Tree
- Bryant Park Winter Village
- Macy's Herald Square

### Additional Locations
- Times Square
- Grand Central Terminal
- Brooklyn Bridge
- Chinatown
- Wall Street & Financial District
- 9/11 Memorial
- Statue of Liberty Views (Battery Park)

## ⭐ Features Roadmap

### Coming Soon
- [ ] Online payment integration
- [ ] Automated email sequences
- [ ] Customer review widget
- [ ] Multi-language support
- [ ] Photo gallery from tours
- [ ] Blog for SEO
- [ ] Gift certificate system

### Under Consideration
- [ ] Mobile app for guide
- [ ] Real-time availability calendar
- [ ] Loyalty program
- [ ] Referral system
- [ ] API for third-party booking platforms

## 📸 Screenshots

### Website Homepage
![Homepage](assets/screenshot-home.png)

### Tour Builder
![Tour Builder](assets/screenshot-builder.png)

### Booking System
![Booking System](assets/screenshot-booking.png)

---

## 🌟 About

**NYC Holiday Magic Tours** is run by Dina Capobianco, a fully licensed NYC tour guide with 15+ years of experience. We specialize in creating magical holiday experiences for families and visitors from around the world.

**Season:** Late November through Early January

**Contact:**
- Website: [Your Website URL]
- Email: [Your Email]
- Phone: [Your Phone]

---

Made with ❄️ in New York City

**⭐ If you found this useful, please star the repo!**
