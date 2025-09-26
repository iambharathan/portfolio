# 🚀 Bharathan K - Interactive 3D Portfolio

A modern, interactive 3D developer portfolio featuring **Spline 3D animations** and sleek design elements. Built with React, featuring real-time 3D graphics and smooth animations to showcase skills in Full-Stack Development, AI, and Cloud Solutions.

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Live Demo](#-live-demo)
- [Customizations](#-customizations)
- [Contact](#-contact)

---

## ✨ Features

- 🌟 **Interactive Spline 3D Background** - Beautiful gradient animations that respond to cursor movement
- ⚡ **Smooth Animations** - FlipWords and scroll-based transitions using **Framer Motion**
- 🎨 **Modern UI Design** - Clean, responsive interface built with **TailwindCSS**
- 💌 **Working Contact Form** - Integrated with **EmailJS** for direct communication
- 🚀 **Lightning-Fast Performance** - Powered by **Vite** for optimal loading speeds
- 📱 **Fully Responsive** - Perfect experience across all devices
- 🎯 **SEO Optimized** - Ready for deployment and discoverability

---

## 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| **React** | Frontend JavaScript library |
| **Vite** | Fast build tool and dev server |
| **TailwindCSS** | Utility-first CSS framework |
| **Spline 3D** | Interactive 3D graphics and animations |
| **@splinetool/react-spline** | React integration for Spline scenes |
| **Framer Motion** | Animation library for React |
| **EmailJS** | Contact form handling |
| **React Responsive** | Responsive design utilities |

---

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Images, icons, textures
│   └── vite.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── HeroText.jsx    # Hero section text with animations
│   │   ├── FlipWords.jsx   # Animated text transitions
│   │   └── ...
│   ├── sections/           # Main portfolio sections
│   │   ├── Hero.jsx        # Landing section with Spline 3D
│   │   ├── About.jsx       # About me section
│   │   ├── Projects.jsx    # Project showcase
│   │   └── Contact.jsx     # Contact form
│   ├── hooks/              # Custom React hooks
│   │   └── useThrottle.js  # Performance optimization
│   ├── constants/          # Application constants
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and utilities
│   └── main.jsx            # Application entry point
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/iambharathan/portfolio.git
cd portfolio
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

4. **Open in Browser**
Navigate to `http://localhost:5173` to view the portfolio.

### Build for Production
```bash
npm run build
```

---

## 🌐 Live Demo

Visit the live portfolio: [bharathan-portfolio.vercel.app](#) *(Coming Soon)*

---

## 🎨 Customizations

This portfolio has been customized with:

### **Personal Branding**
- Updated hero section with "Bharathan K" branding
- Custom tagline: "Full-Stack Developer Building Scalable AI & Cloud Solutions"
- Animated keywords: "Innovative", "Modern", "Scalable"

### **3D Integration**
- Replaced static 3D astronaut with interactive Spline scene
- Gradient-based 3D background with cursor responsiveness
- Custom scroll indicator to enhance user experience

### **Performance Optimizations**
- Throttled mouse events for smooth interactions
- Lazy loading for 3D components
- Optimized bundle size and loading times

### **UI/UX Enhancements**
- Clean watermark hiding solution
- Responsive design improvements
- Enhanced animation timings and effects

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file for EmailJS configuration:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Spline Scene
The 3D background uses a custom Spline scene. To customize:
1. Create your scene at [spline.design](https://spline.design)
2. Export and get the scene URL
3. Update the scene URL in `src/sections/Hero.jsx`

---

## 📬 Contact

**Bharathan K**
- 💼 Full-Stack Developer | AI & Cloud Solutions
- 🌐 Portfolio: [iambharathan.dev](#)
- 📧 Email: [bharathan@example.com](#)
- 💼 LinkedIn: [linkedin.com/in/bharathank](#)
- 🐙 GitHub: [github.com/iambharathan](https://github.com/iambharathan)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/iambharathan/portfolio/issues).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Original portfolio template by [Ali Sanati](https://github.com/Ali-Sanati)
- 3D graphics powered by [Spline](https://spline.design)
- Icons and assets from various open-source projects

---

## ⭐ Like This Project?

If you found this portfolio helpful or inspiring:
- ⭐ Star this repository
- 🔗 Share it with others
- 🐛 Report any issues
- 💡 Suggest improvements

**Let's connect and build amazing things together! 🚀**