# Personal Portfolio
This is my personal portfolio website, built to showcase my skills in modern web development, my passion for performance optimization, and my work in software engineering and machine learning. The site features a clean design, smooth animations, multi-language support, and an interactive AI demo.

[View the live site here](https://hoangpham6337.github.io/portfolio/)

# Key Features
- Modern Tech Stack: Built with React, TypeScript, and Vite for a fast, type-safe, and efficient development experience.
- Responsive Design: A fully responsive layout styled with Tailwind CSS, ensuring a seamless experience on all devices.
- Light & Dark Mode: Auto-detect and user-selectable theme that persists.
- Multi-language Support: Fully internationalized using `i18next`, supporting English, French, and Vietnamese.
- Interactive Animations: Engaging user experience with animations and scroll-triggered reveals powered by GSAP (GreenSock Animation Platform).
- Live AI Demo: An interactive section featuring a client-side species classification model (MobileNetV3) running in the browser with `ONNX Runtime Web`.
- Secure Contact Form: A functional contact form integrated with EmailJS and Google reCAPTCHA for secure communication.
- Performance Optimized: Utilizes code-splitting and lazy loading for routes (like the internship page) to improve initial page load times.
- Automated Deployment: A CI/CD pipeline using GitHub Actions automatically builds and deploys the site to GitHub Pages on every push to the `main` branch.

# Tech Stack
| Category             | Technologies                        |
|----------------------|-------------------------------------|
| Frontend             | React, TypeScript, Vite, HTML5      |
| Styling              | Tailwind CSS                        |
| Animations           | GSAP (GreenSock Animation Platform) |
| Routing              | React Router                        |
| Internationalization | i18next, react-i18next              |
| AI/ML Inference      | ONNX Runtime Web                    |
| Contact Form         | EmailJS, React Google reCAPTCHA     |
| Deployment & CI/CD   | GitHub Pages, GitHub Actions        |
| Code Quality         | ESLint, TypeScript-ESLint           |

# Setup and Installation
To run this project locally, follow these steps:

1. Clone the repository:
```shell
git clone https://github.com/HoangPham6337/portfolio.git
cd portfolio
```

2. Install dependencies:
This project uses `npm` for package management.
```shell
npm install
```

3. Set up environment variables:
Create a `.env` file in the root of the project. This is required for the contact form and reCAPTCHA to function correctly.
```dotenv
# Get these from your EmailJS account
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key

# Get this from your Google reCAPTCHA admin console
VITE_RECAPTCHA=your_google_recaptcha_site_key
```

4. Run the development server:
```sh
npm run dev
```

The application will be available at http://localhost:5173 (or another port if 5173 is busy).

# Available Scripts
- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles the application for production.
- `npm run lint`: Lints the code using ESLint to check for errors and style issues.
- `npm run preview`: Serves the production build locally to preview it.
- `npm run deploy`: Builds the project and deploys it to the `gh-pages` branch (used by the CI/CD pipeline).

# License
This project is licensed under the MIT License.