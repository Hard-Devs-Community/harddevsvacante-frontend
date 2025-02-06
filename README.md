# Next.js Template with Tailwind, Husky, Jest, Docker, pnpm, Prettier, and ESLint

This is a comprehensive template for building modern web applications using Next.js and a suite of powerful development tools.

## 📋 Prerequisites

- Node.js (version 14 or later)
- pnpm
- Docker (optional, for containerized development)

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── modules/
|   │   ├── [moduleName]/
|   |   │   ├── components/
|   |   |   │   ├── molecules/
|   |   |   │   ├── organisms/
|   |   |   │   └── templates/
|   |   │   ├── context/
|   |   │   ├── hooks/
|   |   │   ├── pages/
|   |   │   ├── routes/
|   |   │   ├── services/
|   |   │   └── types/
│   ├── shared/
|   │   ├── components/
|   |   │   ├── atoms/
|   |   │   ├── molecules/
|   |   |   └── organisms/
|   │   ├── hooks/
|   │   ├── services/
|   │   ├── styles/
|   │   ├── types/
|   │   ├── models/
|   |   └── utils/
│   ├── app.tsx
│   ├── main.tsx
│   └── routes.tsx
├── .dockerignore
├── .eslint.config.js
├── .gitignore
├── Dockerfile
├── README.md
├── docker-compose.yml
├── vite.config.ts
├── package.json
└── tsconfig.json
```

## Key Components

### 1. Next.js Configuration

- `next.config.mjs`: Configuration file for Next.js.
- `src/app/`: Contains the main application components, including `layout.tsx`.

### 2. TypeScript Configuration

- `next-env.d.ts`: TypeScript declaration file for Next.js.
- `tsconfig.json`: TypeScript configuration (not shown in the provided files but typically present).

### 3. Styling

- `src/styles/globals.css`: Global CSS file using Tailwind CSS.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration for processing CSS.

### 4. Linting and Formatting

- `.eslintrc.js`: ESLint configuration for code linting.
- `.prettierrc` and `prettier.config.js`: Prettier configuration for code formatting.
- `.eslintignore` and `.prettierignore`: Files to ignore during linting and formatting.

### 5. Testing

- `jest.config.js` and `jest.setup.js`: Jest configuration for testing.
- `.jest/`: Custom test utilities.
- `__mocks__/`: Mock files for testing.

### 6. Git Hooks

- `.husky/`: Husky configuration for Git hooks.

### 7. Docker

- `Dockerfile`: Docker configuration for containerization.
- `docker-compose.yml`: Docker Compose configuration for multi-container Docker applications.

### 8. Source Code Structure

- `src/components/`: Reusable React components.
- `src/constants/`: Constant values used across the application.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility libraries and functions.
- `src/services/`: Service classes for API interactions.
- `src/store/`: State management (using Zustand).
- `src/types/`: TypeScript type definitions.
- `src/utils/`: Utility functions.

## Key Features

1. **Next.js**: The project uses Next.js as the React framework for building server-side rendered and statically generated applications.

2. **TypeScript**: The entire project is written in TypeScript for improved developer experience and type safety.

3. **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

4. **ESLint and Prettier**: Code linting and formatting tools for maintaining code quality and consistency.

5. **Jest**: JavaScript testing framework for unit and integration tests.

6. **Husky**: Git hooks for running scripts before commits and pushes.

7. **Docker**: Containerization for consistent development and deployment environments.

8. **pnpm**: Fast, disk space efficient package manager used instead of npm or yarn.

9. **Zustand**: Lightweight state management solution.

10. **Axios**: Promise-based HTTP client for making API requests.

11. **Custom Hooks**: Includes custom hooks like `useCounter` for reusable logic.

12. **Utility Functions**: Includes utility functions for common operations, such as number manipulation.

13. **Environment Variables**: Uses `@t3-oss/env-nextjs` for type-safe environment variables.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository
2. Install dependencies using `pnpm install`
3. Set up Husky hooks using `pnpm postinstall`
4. Start the development server using `pnpm dev`

For more detailed instructions, refer to the `README.md` file in the project root.

## 🛠️ Getting Started

1. Clone the repository:

```
git clone https://github.com/yourusername/your-repo-name.git

cd your-repo-name
```

2. Install dependencies:

```
pnpm install
```

3. Install husky:

```
pnpm postinstall
```

4. Run the development server:

```
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
