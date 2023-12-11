#Front-End Front-Office

##Project Structure 

```
├── public
├── src
│ ├── Pages
│ │ ├── CheckoutPage.jsx
│ │ ├── LandingPage.jsx
│ │ ├── Login.jsx
│ │ ├── MyCartPage.jsx
│ │ ├── ProductDetailPage.jsx
│ │ ├── SignUp.jsx
│ │ ├── SizeGuidePage.jsx
│ │ ├── WishListPage.jsx
│ │ └── WomenCategory.jsx
│ ├── assets
│ ├── components
│ │ ├── CategorieComponents
│ │ ├── CheckoutComponents
│ │ ├── Filter
│ │ ├── GlobalComponents
│ │ ├── LandingComponents
│ │ ├── Layout
│ │ ├── LoginComponents
│ │ ├── MainSubCategories
│ │ ├── MyCartComponents
│ │ ├── OurStory
│ │ ├── ProductDetail
│ │ ├── SignUpComponents
│ │ ├── SizeGuide
│ │ ├── UserProfile
│ │ └── DropMenu.jsx
│ ├── db
│ ├── App.css
│ ├── App.jsx
│ ├── DropMenuStyle.css
│ ├── InputNumber.css
│ ├── index.css
│ └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Overview

This frontend project for the frontOffice follows a structured organization for improved clarity and maintainability. Here's a brief explanation of the main directories and files:

- **public:** Public assets and HTML files.
- **src:**
  - **Pages:** React components for individual pages.
    - **CheckoutPage.jsx, LandingPage.jsx, ...:** Specific pages categorized accordingly.
  - **assets:** Images, styles, and other static assets.
  - **components:** Reusable React components, organized by functionality.
    - **CategorieComponents, CheckoutComponents, Filter, ...:** Specific components categorized accordingly.
  - **db:** Database or data-related files.
  - **App.css:** Main CSS file for the application.
  - **App.jsx:** Main application component.
  - **DropMenuStyle.css, InputNumber.css, ...:** Specific styles for components.
  - **index.css:** Styles for the main entry point.
  - **main.jsx:** Main entry point for the application.
- **.eslintrc.cjs:** ESLint configuration file.
- **.gitignore:** Specifies files and directories to be ignored by version control.
- **README.md:** Documentation for the frontend architecture.
- **index.html:** Main HTML file for the application.
- **package-lock.json:** Automatically generated file to lock dependencies versions.
- **package.json:** Configuration file for Node.js project, including dependencies and scripts.
- **postcss.config.js, tailwind.config.js, vite.config.js:** Configuration files for PostCSS, Tailwind CSS, and Vite.
