# **Next.js App Router - NextAuth.js Session Management (JWT Strategy)**

## **Key Features**
- Implemented custom session management using **NextAuth.js** with **JWT strategy**.
- Full session persistence, including custom data such as `token`, `name`, and `email`.
- Seamless integration with **Next.js** pages for smooth session handling.
- A scalable solution for managing sessions in large-scale projects.

---

## **Steps to Reproduce the Issue**
1. Set up **NextAuth.js** with the **JWT strategy**.
2. Authenticate a user and attempt to access the session data.
3. The session object will only include basic fields (e.g., `name`, `email`), with custom fields such as `token` missing.

---

## **How to Use**
1. Clone this repository into your **Next.js** project.
2. Set up **NextAuth.js** using the **Credentials Provider** and JWT strategy as demonstrated in the code.
3. Run your project and check the session data across different pages.
4. The session object will now contain **custom fields** such as `token`, `name`, and `email` across all pages of the app.

---

## **Benefits**
- **Complete Session Data**: Ensures that the session includes all necessary fields like `name`, `email`, `token`, and custom data.
- **JWT Strategy**: Utilizes the **JWT** strategy, ideal for scalable applications requiring stateless authentication.
- **Persistence Across Pages**: Session data is accessible on every page and automatically updates upon user login.