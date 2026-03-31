# Digital Tools Buying Website

---

## About the Project

**DigiTools** is a high-performance web platform designed to streamline professional workflows. By bridging the gap between complex enterprise backend logic and a modern, high-conversion frontend, this project empowers users to manage data, track production, and visualize reporting with ease.

---

## Project Features

### 1. **Persistent "In Cart" State Synchronization**

The application features an intelligent synchronization pattern where product buttons "remember" their status. By performing a live lookup against the global cart data, the UI ensures that once an item is added, the button remains in a persistent **In Cart** state across re-renders.

### 2. **Multi-Phase Action State Machine**

Buttons are engineered with a three-phase logic cycle: **Buy Now** (Default) → **Added to Cart!** (Success Animation) → **In Cart** (Locked Status). This provides a high-end, responsive feel that guides the user through the purchasing process.

### 3. **Intelligent Duplicate Prevention**

Features a built-in validation engine that scans the cart array before any action. If a user attempts to add a duplicate item, the UI triggers a contextual **"Already in cart"** alert, ensuring data integrity and a clean user experience.

### 4. **Premium "SaaS-Style" Design Language**

Built with a high-conversion aesthetic using custom **Tailwind CSS** configurations. The interface features a signature linear gradient (`#4f39f6` to `#9514fa`) paired with glassmorphism components to create a modern, professional look.

### 5. **Interactive Micro-Animations**

Utilizes **Lucide-React** icons and smooth CSS transitions to provide immediate haptic-style visual feedback. Features include "Pop-in" zoom effects for status changes and scale-up transforms on hover for all product cards.

### 6. **Dynamic Badge & Tagging System**

Employs a metadata-driven tagging system that automatically color-codes products (e.g., _Best Seller_, _New_, _Popular_) based on specific `tagType` logic, helping to drive user attention toward featured tools.

### 7. **Automated Visual Locking**

Once a product is successfully added, the action button programmatically disables to prevent accidental redundant clicks. It retains a high-visibility Emerald Green theme to provide a permanent "Success" signal.

### 8. **Real-time Status Notifications**

Fully integrated with **React-Toastify** to provide instant, non-intrusive feedback. Users receive synchronized pop-up alerts for successful additions, duplicate warnings, and system status updates.

### 9. **Scalable JSON-Driven Catalog**

The entire product ecosystem is decoupled from the UI logic. By using a structured JSON data architecture, the platform can be updated with new prices, features, or icons instantly without modifying core React components.

### 10. **Mobile-First Responsive Grid**

Engineered with a **Mobile-First** philosophy using **DaisyUI**. The layout features a fluid grid system that ensures a pixel-perfect experience across all devices, from smartphone screens to widescreen enterprise monitors.

---

## Technology Stack

- React.js
- Tailwind CSS, DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for product data)

---

## Getting Started & Developer Guide

This project is engineered using **Vite**, a next-generation frontend tool that significantly improves the developer experience. Follow the sections below to initialize, configure, and verify your local environment.

### System Requirements

Before initialization, ensure your environment meets the following specifications:

- **Node.js**: `v18.17.0` or higher (LTS recommended)
- **Package Manager**: `npm` (v9+) or `yarn` (v1.22+)
- **IDEs**: VS Code with **Tailwind CSS IntelliSense** and **ESLint** extensions is highly recommended for maintaining code quality.

---

### Execution Pipeline

**1. Repository Synchronization**
Clone the source code and navigate into the project root directory:

```bash
git clone https://github.com/mdalaminmiah/B13-A6-DigiTools-Platform-App.git
cd B13-A6-DigiTools-Platform-App
```

**2. Dependency Injection**
Install the core engine components, including **React**, **Tailwind CSS**, and **Lucide-React** for iconography:

```bash
npm install
```

**3. Development Boot Sequence**
Start the Vite development server. This will launch a local environment with **Hot Module Replacement (HMR)** enabled:

```bash
npm run dev
```

> **Default Port**: The application typically serves at `http://localhost:5173`. If this port is occupied, Vite will automatically increment to `5174`.

**4. Production Build & Preview**
To test the optimized production bundle (minified and tree-shaken):

```bash
npm run build   # Generates the /dist folder
npm run preview # Serves the production build locally
```

---

### Architecture & Logic Roadmap

Understanding where the "Sticky Logic" lives is crucial for further development:

- **`src/App.jsx`**: The **Global State Controller**. It manages the `cart` array and passes the `handleAddToCart` function down to children.
- **`src/components/ProductCard.jsx`**: The **Logic Engine**. This is where the `isInCart` derived state and the `isAdded`/`isAlreadyAdded` state machines reside.
- **`src/data/products.json`**: The **Source of Truth**. This flat-file database stores all product metadata, pricing, and feature arrays.
- **`tailwind.config.js`**: The **Theme Layer**. Contains the custom hex codes for your signature linear gradients and the DaisyUI theme configuration.

---

### Technical Validation (QA)

To verify that the **Sticky Button** and **Cart Logic** are functioning according to specifications, perform the following "Happy Path" test:

1.  **State Transition**: Click **"Buy Now"**. The button should trigger `setIsAdded(true)`, changing text to **"Added to Cart!"** with a zoom-in animation.
2.  **Persistence Check**: After 2 seconds, the button should NOT return to "Buy Now." It must enter the **In Cart** locked state (Emerald Green background).
3.  **Conflict Resolution**: Click the **In Cart** button again. The logic should trigger the `else` block, showing **"Already in cart"** via the `isAlreadyAdded` state for 2 seconds.
4.  **Toast Verification**: Ensure a **Toastify** alert appears in the top-center of the screen during the conflict resolution phase.

---

### 🤝 Contribution Workflow

If you are contributing to this project:

1.  Create a feature branch (`git checkout -b feature/NewFeature`).
2.  Commit your changes following **Conventional Commits** (e.g., `feat: add search filtering`).
3.  Push to the branch (`git push origin feature/NewFeature`).
4.  Open a **Pull Request**.

---

## 👤 Author

**Md Al Amin Miah** _Lead Software Engineer_

- [LinkedIn Profile](https://www.linkedin.com/in/mdalaminmiah/)
- [GitHub Repository](https://github.com/mdalaminmiah)

---
