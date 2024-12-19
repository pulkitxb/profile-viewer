# Profile Viewer

## Description
Profile Viewer is a Next.js-based web application that allows users to view, search, and sort profiles fetched from an external API. It is styled using Chakra UI for a responsive and visually appealing interface.

---

## Features
- Fetch user data from a public API.
- Search functionality to filter profiles.
- Sort functionality to arrange profiles by name or email.
- Individual detail pages for each profile.
- Custom 404 error page.

---

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v20 or above)
- **npm** or **yarn** (for dependency management)

---

## Installation

### 1. Clone the Repository
```bash
$ git clone https://github.com/username/profile-viewer.git
$ cd profile-viewer
```

### 2. Install Dependencies
Using npm:
```bash
$ npm install
```

Or using yarn:
```bash
$ yarn install
```

---

## Running the Project

### 1. Development Mode
Start the development server:
```bash
$ npm run dev
```

Or using yarn:
```bash
$ yarn dev
```

### 2. Production Mode
Build the project for production:
```bash
$ npm run build
```

Or using yarn:
```bash
$ yarn build
```

Start the production server:
```bash
$ npm start
```

Or using yarn:
```bash
$ yarn start
```

---

## Project Structure
```
.
├── components
│   ├── Layout.jsx  # Reusable layout component
├── pages
│   ├── index.js    # Home page
│   ├── users
│   │   ├── [id].js # User details page
│   ├── 404.js      # Custom 404 page
├── constants.js    # API constants
├── public          # Static assets
├── styles          # Global styles
└── package.json    # Project metadata and scripts
```

---

## API Endpoint
This project uses the following public API:
- **Base URL**: `https://jsonplaceholder.typicode.com/users`

