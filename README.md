# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Backend Server (Contact Form)

A simple Node/Express backend is included under the `server` directory for handling contact form submissions and sending emails. It uses [nodemailer](https://nodemailer.com/) along with SMTP credentials stored in an `.env` file.

### Setup

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an `.env` file based on `.env.example` and supply real SMTP values:
   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   CONTACT_EMAIL=contact@risinghopeglobal.org
   ```
4. Start the server:
   ```bash
   npm run dev      # uses nodemon for live reload
   # or
   npm start
   ```

The backend will listen on port `5000` by default and expose an endpoint at `POST /api/contact`.

When the React app is running (typically on port 3000), the contact form will submit to this endpoint and forward the message to the configured email address.

## Blog Dashboard

A simple admin-style dashboard is available at `/blog-dashboard` for adding/editing blog posts locally. It currently stores entries in component state and is not persisted. This can be extended to integrate with a real backend or CMS if needed.

