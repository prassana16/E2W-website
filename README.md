# Easy2Work Website

A modern, responsive website built with React, showcasing Easy2Work's enterprise solutions, services, and products.

## 🎨 Design System

### Color Themes

#### Main Website Theme
- Primary: `#2D1B69` (Deep Purple)
- Secondary: `#5B0737` (Dark Burgundy)
- Accent: `#620078` (Bright Purple)
- Background Gradients: 
  - `from-[#2D1B69] to-[#1A103F]`
  - `from-[#620078] to-[#3b095a]`

#### Product-Specific Themes

1. **IBMS Theme**
- Primary: `#1E085A` (Deep Blue-Purple)
- Secondary: `#5B0737` (Dark Burgundy)
- Accent: `#4b0661` (Medium Purple)

2. **ILMS Theme**
- Primary: `#0d3627` (Dark Green)
- Secondary: `#071e14` (Forest Green)
- Accent: `#15803d` (Emerald)

3. **AI Enterprise Data Solution Theme**
- Primary: `#FF8C00` (Dark Orange)
- Secondary: `#8B4513` (Saddle Brown)
- Gradients: `from-purple-50 to-white`

4. **AI Medical Lead Platform Theme**
- Primary: `#DC143C` (Crimson)
- Secondary: `#800000` (Dark Red)
- Accent: `#A52A2A` (Brown)

### Typography

- Headings: Tinos (Custom Font)
- Body: Inter (System Font)
- Special Text: Destine Personal Use, Mauline (Custom Fonts)
- Font Sizes:
  - Headings: `text-3xl` to `text-7xl`
  - Body: `text-base` to `text-xl`
  - Small Text: `text-sm`

### UI Components

#### Common Components
- Animated Hero Sections
- Navigation Bar with Dynamic Links
- Interactive Cards with Hover Effects
- Gradient Backgrounds
- Motion-based Animations (Framer Motion)
- Responsive Grid Layouts
- Custom Buttons with Hover States
- Footer with Multi-column Layout

#### Special Features
1. Background Boxes Demo
2. Hero Scroll Demo
3. Client Slider
4. Flip Words Animations
5. Contact Popup
6. Interactive FAQ Section

### Animation Libraries
- Framer Motion
- Custom CSS Animations
- Tailwind CSS Transitions

## 🛠 Technical Stack

### Core Technologies
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Helmet Async

### Development Tools
- ESLint
- PostCSS
- Node.js
- Express.js (for email backend)

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── services/      # Service-specific components
│   ├── ui/           # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   └── regional/     # Region-specific components
├── assets/           # Static assets
│   └── images/       # Image resources
└── fonts/           # Custom fonts
```

## 🚀 Key Features

1. **Solutions Showcase**
   - IBMS (Intelligent Business Management System)
   - ILMS (Intelligent Lead Management System)
   - AI Enterprise Data Solution
   - AI Medical Lead Platform

2. **Service Pages**
   - Mobile App Development
   - Web App Development
   - Website Development
   - SEO Services
   - Cloud Native App Development
   - SaaS Development
   - UI/UX Design
   - Quality Assurance
   - Staff Augmentation
   - Lead Generation Services

3. **Interactive Elements**
   - Dynamic Form Validation
   - Real-time Contact Forms
   - Animated Page Transitions
   - Responsive Design
   - Client Testimonials Slider
   - Custom Icon Animations

## 💡 Design Patterns

### Component Architecture
- Modular Component Design
- Reusable UI Components
- Consistent Styling Patterns
- Responsive Grid Systems
- Flexible Layout Structures

### Styling Methodology
- Utility-First CSS (Tailwind)
- Custom CSS Variables
- Responsive Breakpoints
- Mobile-First Approach
- Dark/Light Mode Support

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

Custom breakpoints:
```css
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

## 🔒 Performance Optimizations

- Lazy Loading Components
- Image Optimization
- Code Splitting
- Route-based Chunking
- SEO Optimization
- Performance Monitoring

## 📖 Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🧪 Testing

### Unit Testing
- Configure Vitest for component testing
- Write tests for UI components and hooks
- Run tests with `npm test`

### E2E Testing
- Set up Cypress for end-to-end testing
- Test critical user flows
- Run E2E tests with `npm run test:e2e`

### Manual Testing Checklist
- Cross-browser compatibility
- Responsive design validation
- Performance benchmarking
- Accessibility compliance

## 🚀 Deployment

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher
- Access to deployment platform

### Production Build
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment Options

1. **Static Hosting (Recommended)**
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

2. **Container Deployment**
   - Build Docker image
   - Deploy to cloud platforms
   - Scale with container orchestration

3. **Traditional Hosting**
   - Upload dist folder to web server
   - Configure web server (Apache/Nginx)
   - Set up SSL certificates

### Environment Variables
Create a `.env` file in the project root:
```env
VITE_API_URL=your_api_url
VITE_GA_ID=your_google_analytics_id
```

## 🛠️ Extended Environment Setup

### System Requirements
- Node.js 16.x or higher
- npm 8.x or higher
- Git
- VS Code (recommended)

### Development Tools
1. **VS Code Extensions**
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - React Developer Tools

2. **Browser Extensions**
   - React Developer Tools
   - Redux DevTools (if using Redux)

### Local Development

1. **Clone and Install**
```bash
# Clone repository
git clone [repository-url]
cd e2w-website

# Install dependencies
npm install
```

2. **Setup Environment**
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env
```

3. **Start Development**
```bash
# Run development server
npm run dev

# Open browser
http://localhost:5173
```

## 🤝 Contributing

Please read our contributing guidelines before submitting pull requests.

## 🤝 Contributing Guidelines

### Getting Started
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Follow React best practices
- Write meaningful commit messages

### Pull Request Process
1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Request code review
5. Address review feedback

### Development Workflow
1. Pick an issue to work on
2. Create a feature branch
3. Write code and tests
4. Submit pull request
5. Address review feedback
6. Merge after approval

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

Example:
```
feat(navbar): add responsive mobile menu

- Add hamburger menu component
- Implement slide-in animation
- Add click outside to close

Closes #123
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any queries or support, please contact:
- Website: [easy2work.in](https://easy2work.in)
- Email: [contact@easy2work.in](mailto:contact@easy2work.in)

## 📚 Third-Party Libraries & Components

### Core Libraries
1. **React Ecosystem**
   - react-router-dom (Routing)
   - react-helmet-async (Document Head Management)
   - react-hooks (State Management)
   - react-refresh (Hot Module Replacement)

2. **Animation & UI Effects**
   - Framer Motion (Animations)
   - react-icons (Icon Components)
   - lucide-react (Icon Components)
   - clsx (Class Name Utilities)
   - tailwind-merge (Tailwind Class Merging)

3. **Styling & UI**
   - Tailwind CSS (Utility-First CSS)
   - PostCSS (CSS Processing)
   - Autoprefixer (CSS Vendor Prefixing)

4. **Carousels & Sliders**
   - react-slick
   - slick-carousel

### Development Tools
1. **Build Tools**
   - Vite (Build & Development Tool)
   - ESLint (Code Linting)
   - @vitejs/plugin-react (React Integration)

2. **Code Quality**
   - eslint-plugin-react
   - eslint-plugin-react-hooks
   - eslint-plugin-react-refresh

### Custom Components
1. **UI Components**
   - FlipWords (Animated Text)
   - BackgroundLines (Decorative Effects)
   - BackgroundBoxes (Decorative Effects)
   - ContainerScroll (Scroll Animations)
   - SparklesCore (Visual Effects)

2. **Layout Components**
   - Navbar (Navigation)
   - Footer (Page Footer)
   - ContactPopup (Contact Form)
   - ClientSlider (Client Showcase)

3. **Feature Components**
   - HeroScrollDemo (Hero Section)
   - Testimonials (Client Reviews)
   - OurSkills (Skills Showcase)
   - OurServices (Services List)
   - FAQ (Frequently Asked Questions)

4. **Solution-Specific Components**
   - IBMS (Business Management)
   - ILMS (Learning Management)
   - AI-Enterprise-Data-Solution
   - AI-Medical-Lead-Platform

5. **Service Components**
   - MobileAppDevelopment
   - WebAppDevelopment
   - WebsiteDevelopment
   - SEOServices
   - CloudNativeAppDevelopment
   - SaaSDevelopment
   - UIUXDesign
   - QualityAssurance
   - StaffAugmentation
   - LeadGenerationServices

### API Integration
- Schema.org (SEO Structured Data)
