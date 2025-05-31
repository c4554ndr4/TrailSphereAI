# TrialSphere AI - Marketing Website

A professional marketing website for TrialSphere AI, a pay-as-you-go AI portal designed for Clinical Research Organizations (CROs) to supplement their existing AI tools when they fall short.

## 🎯 Overview

TrialSphere AI provides CROs with access to frontier AI models (Claude Opus 4, Gemini 2.5 Pro, GPT-4.5+) on a pay-per-use basis, deployed entirely within the customer's AWS infrastructure. This website showcases our value proposition as a supplemental AI solution that helps CROs handle complex clinical tasks when their current AI tools hit limitations.

## 🚀 Key Features

### 💰 Pay-As-You-Go Model
- No monthly subscription fees
- Only pay for tokens used
- Individual user and department spending caps
- Volume discounts for heavy usage

### 🔒 Enterprise Security
- Complete air-gapped deployment in customer's AWS
- No vendor access post-deployment
- Customer-managed encryption keys
- Full compliance (SOC 2, HIPAA, GDPR, FDA 21 CFR Part 11)

### 🤖 Frontier AI Models
- **Claude Opus 4**: Complex reasoning and analysis
- **Gemini 2.5 Pro**: Large document processing (1M+ tokens)
- **GPT-4.5+**: Rapid iteration and response

### 🏥 CRA-Specific Workflows
- Site visit report generation
- Protocol analysis and summarization
- Protocol deviation assessment
- Data query resolution
- Patient eligibility screening
- Regulatory documentation

## 📁 Project Structure

```
trialsphere-website/
├── index.html          # Main landing page
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🛠️ Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern layout with Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Font Awesome**: Icons and visual elements

### Design System
- **Color Palette**: Purple/blue gradient theme
- **Typography**: Clean, professional sans-serif
- **Layout**: Mobile-first responsive design
- **Animations**: Smooth transitions and hover effects

### Key Components
1. **Navigation**: Responsive navbar with mobile hamburger menu
2. **Hero Section**: Compelling value proposition with AI model showcase
3. **Problem Section**: Current AI tool limitations
4. **Features**: CRA workflow-specific solutions
5. **Architecture**: Simple AWS deployment explanation
6. **Security**: Enterprise compliance and air-gapped operation
7. **Pricing**: Pay-as-you-go model with usage examples
8. **Contact**: Lead capture form

## 🚀 Getting Started

### Local Development

1. **Clone or download the files**
2. **Start a local server**:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Open your browser** to `http://localhost:8000`

### Deployment Options

#### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **AWS S3 + CloudFront**: Enterprise hosting
- **GitHub Pages**: Free hosting for public repos

#### Traditional Hosting
- Upload files to any web server
- Ensure HTTPS is enabled
- Configure proper MIME types

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Mobile hamburger navigation
- Stacked card layouts on mobile
- Optimized typography scaling
- Touch-friendly interactive elements

## 🎨 Customization Guide

### Colors
Primary brand colors are defined in CSS variables:
```css
:root {
    --primary-color: #8b5cf6;
    --secondary-color: #06b6d4;
    --accent-color: #f59e0b;
}
```

### Content Updates
1. **Company Information**: Update in `index.html`
2. **Pricing**: Modify the pricing section
3. **Contact Details**: Update email and phone in contact section
4. **AI Models**: Add/remove models in hero showcase

### Styling Changes
1. **Layout**: Modify CSS Grid/Flexbox in `styles.css`
2. **Colors**: Update CSS variables
3. **Typography**: Change font families and sizes
4. **Animations**: Adjust transition timings

## 🔧 Interactive Features

### JavaScript Functionality
- **Mobile Navigation**: Hamburger menu toggle
- **Smooth Scrolling**: Anchor link navigation
- **Form Handling**: Contact form validation and submission
- **Modal Dialogs**: Demo request and pricing information
- **Scroll Effects**: Animation triggers on scroll
- **Button Interactions**: Hover and click effects

### Form Integration
The contact form includes:
- Client-side validation
- Field for current AI tools used
- Limitation assessment questions
- Easy integration with form services (Formspree, Netlify Forms)

## 🎯 Marketing Strategy

### Target Audience
- **Primary**: Clinical Research Associates (CRAs)
- **Secondary**: CRO Technology Directors
- **Decision Makers**: CRO C-Suite executives

### Value Propositions
1. **Supplement, Don't Replace**: Work alongside existing AI tools
2. **Pay Only When Needed**: No monthly subscription overhead
3. **Enterprise Security**: Complete data sovereignty
4. **Simplified AWS**: No cloud expertise required

### Conversion Points
- Hero section CTA buttons
- Pricing section trial offers
- Contact form for demos
- Footer newsletter signup

## 📊 Performance Optimization

### Loading Speed
- Minimal dependencies (only Font Awesome CDN)
- Optimized CSS with minimal unused styles
- Compressed images and icons
- Efficient JavaScript with no heavy frameworks

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup ready
- Accessible navigation and content

## 🔒 Security Considerations

### Form Security
- Client-side validation only (server-side needed for production)
- CSRF protection recommended
- Input sanitization required

### Content Security
- No inline scripts or styles
- External resources from trusted CDNs only
- Regular dependency updates

## 🚀 Deployment Checklist

Before going live:

- [ ] Update all contact information
- [ ] Test contact form submission
- [ ] Verify responsive design on all devices
- [ ] Check loading speed and performance
- [ ] Validate HTML and CSS
- [ ] Test accessibility features
- [ ] Configure analytics tracking
- [ ] Set up error monitoring
- [ ] Enable HTTPS
- [ ] Configure proper redirects

## 📈 Analytics Setup

Recommended tracking:
- **Google Analytics**: Traffic and user behavior
- **Hotjar**: User session recordings
- **Form Analytics**: Conversion tracking
- **Performance Monitoring**: Core Web Vitals

## 🤝 Contributing

To contribute to this website:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness and functionality
5. Submit a pull request

## 📄 License

This project is proprietary to TrialSphere AI. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: tech@trialsphere.ai
- Documentation: [Coming Soon]
- GitHub Issues: [Repository Link]

---

**TrialSphere AI** - Pay-as-you-go AI for Clinical Research Organizations 