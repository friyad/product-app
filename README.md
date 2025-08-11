# 🛍️ Vue 2 Product Management App

![Vue 2.6.14](https://img.shields.io/badge/Vue-2.6.14-brightgreen)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue)  
![DaisyUI](https://img.shields.io/badge/DaisyUI-%E2%9C%85-yellow)  
![License MIT](https://img.shields.io/badge/License-MIT-lightgrey)

A simple but feature-rich **Product Management** single-page application built with **Vue 2**, **Vuex**, **Vue Router**, and **TailwindCSS + DaisyUI**.  
This app demonstrates authentication (login/logout), product CRUD, state management with Vuex, and a modern responsive UI.

---

## 📌 Features

- 🔐 **Authentication**
  - Login & Logout using Vuex
  - Session persisted to `localStorage`
- 📦 **Product CRUD**
  - Create, Read, Update, Delete products
  - Product list (grid/cards) and product details page
  - Product add & edit forms with validation
- ⚡ **UX**
  - Tailwind CSS + DaisyUI styled components
  - Toast notifications, loading spinners, image preview
  - Debounced search to filter products
- 🔁 **State management**
  - Modular Vuex store (`auth`, `products`)
- 🧩 **Routing**
  - Route guards for authenticated pages
  - Dynamic routes for product details and edit (`/products/:id`, `/edit/:id`)
- 🧪 **Uses Fake Store API**
  - Data loaded from [https://fakestoreapi.com/](https://fakestoreapi.com/)

---

## 📸 Screenshots

**Login Page**
<img width="1920" height="886" alt="image" src="https://github.com/user-attachments/assets/d207bf85-7e6b-4871-9dff-dee69805bbbe" />

**Product Grid**  
<img width="1919" height="886" alt="image" src="https://github.com/user-attachments/assets/eea06d85-3b82-41ce-a61a-6e8bc7a6eb4e" />

**Product Details**  
<img width="1920" height="892" alt="image" src="https://github.com/user-attachments/assets/e6018e79-3f16-46bb-8714-5a9f25ce471b" />

**Edit Product**  
<img width="1911" height="883" alt="image" src="https://github.com/user-attachments/assets/885e793f-f07a-4644-a514-c09284140844" />

---

## 📂 Project Structure

```
src/
├── assets/ # styles, images (tailwind.css)
├── components/ # reusable components (ProductCard, ProductTable, etc.)
├── hooks/ # small reusable helpers (useDebounce.js)
├── router/ # vue-router routes & guards
├── store/ # vuex modules (auth.js, products.js)
├── utils/ # utility helpers (debounce, validators)
├── views/ # pages (Login, ProductGrid, AddProduct, EditProduct, ProductDetails)
└── App.vue

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/vue2-product-management.git
cd vue2-product-management

# Install dependencies
npm install
# or
yarn install
```

### npm run build

```bash
npm run build
# or
yarn build
```

### 📜 How it Works

### Authentication

- On login, Vuex auth module stores user data in state and localStorage.
- Route guards prevent unauthorized access.
- If logged in and visiting /login, redirect to /.
- If not logged in and visiting a protected route, redirect to /login.

### Product Management

- Products are fetched from Fake Store API and stored in Vuex.
- Add/Edit forms are validated before submission.
- Delete removes the product from Vuex (and API if enabled).
- Product details are loaded dynamically by ID.

---

## 🙏 Thank You

Thank you for checking out this project!  
If you find it helpful or inspiring, consider giving it a ⭐ on GitHub — it really motivates me to keep improving and sharing more projects.

Happy coding! 🚀
