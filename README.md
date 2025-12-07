# Task Tracker - Modern Frontend Web Application

A modern, responsive task management application built with Vite, React, TypeScript, and TailwindCSS. This project demonstrates modern frontend development practices including component-based architecture, client-side routing, state management, and responsive design.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Objectives](#objectives)
- [System Overview](#system-overview)
- [Technologies Used](#technologies-used)
- [System Design](#system-design)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Deployment](#deployment)
- [Code Explanation](#code-explanation)
- [Screenshots](#screenshots)
- [Conclusion & Learnings](#conclusion--learnings)

## 🎯 Introduction

Task Tracker is a modern web application designed to help users organize and manage their tasks efficiently. Built using cutting-edge frontend technologies, it provides a clean, intuitive interface for creating, updating, and tracking tasks with different statuses (To Do, In Progress, Done).

This project was developed as part of a Frontend Development course, demonstrating proficiency in modern React development, responsive design, and best practices in web application architecture.

## 🎯 Objectives

Upon completion of this project, the following objectives were achieved:

- ✅ **Modern Frontend Workflows**: Understanding and applying modern frontend development workflows using Vite
- ✅ **Reusable React Components**: Created 8+ reusable React components following best practices
- ✅ **Client-Side Routing**: Implemented routing using react-router-dom for navigation
- ✅ **Responsive Design**: Built responsive layouts using TailwindCSS utility classes
- ✅ **Version Control**: Used Git & GitHub for version control, commits, and repository hosting
- ✅ **Production Deployment**: Deployed a production-ready application to Vercel

## 📱 System Overview

Task Tracker is a single-page application (SPA) that allows users to:

- **Create Tasks**: Add new tasks with title, description, category, due date, and status
- **View Tasks**: Display tasks in a responsive grid layout with filtering capabilities
- **Update Tasks**: Modify task status and details
- **Delete Tasks**: Remove tasks individually or in bulk
- **Filter Tasks**: Filter tasks by status (All, To Do, In Progress, Done) and category
- **Task Details**: View detailed information about individual tasks

The application uses client-side state management with React Context API and persists data using browser localStorage.

## 🛠 Technologies Used

### Core Technologies
- **Vite** (v7.2.4) - Fast build tool and development server
- **React** (v19.2.0) - Component-based UI library
- **TypeScript** (v5.9.3) - Type-safe JavaScript
- **TailwindCSS** (v4.1.17) - Utility-first CSS framework

### Additional Libraries
- **react-router-dom** (v7.10.1) - Client-side routing
- **PostCSS** (v8.5.6) - CSS processing
- **Autoprefixer** (v10.4.22) - CSS vendor prefixing

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🏗 System Design

### Architecture
The application follows a component-based architecture with clear separation of concerns:

```
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── context/        # State management (Context API)
├── types/          # TypeScript type definitions
└── assets/         # Static assets
```

### State Management
- **Context API**: Global state management for tasks
- **useState**: Local component state
- **useEffect**: Side effects and localStorage synchronization
- **localStorage**: Data persistence

### Component Hierarchy
```
App
├── TaskProvider (Context)
│   └── Layout
│       ├── Navbar
│       ├── Routes
│       │   ├── Home
│       │   │   ├── TaskForm
│       │   │   ├── FilterBar
│       │   │   └── TaskList
│       │   │       └── TaskCard (multiple)
│       │   └── TaskDetails
│       └── Footer
```

## ✨ Features

### Core Features
1. **Task Creation**
   - Add tasks with title (required), description, category, due date
   - Set initial status (To Do, In Progress, Done)

2. **Task Management**
   - Update task status
   - Edit task details
   - Delete individual tasks
   - Bulk operations (select multiple tasks)

3. **Filtering & Search**
   - Filter by status (All, To Do, In Progress, Done)
   - Search by category
   - Real-time filtering

4. **Task Display**
   - Responsive grid layout
   - Task cards with status badges
   - Task details page
   - Empty state handling

5. **Data Persistence**
   - Automatic save to localStorage
   - Data persists across browser sessions

### UI/UX Features
- Modern, clean design
- Fully responsive (mobile, tablet, desktop)
- Smooth transitions and hover effects
- Accessible form controls
- Loading states and error handling

## 📁 Project Structure

```
Task-App/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── FilterBar.tsx      # Filter and search component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Modal.tsx          # Modal component
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── TaskCard.tsx       # Individual task card
│   │   ├── TaskForm.tsx       # Task creation form
│   │   └── TaskList.tsx       # Task list container
│   ├── context/
│   │   └── TaskContext.tsx    # Global state management
│   ├── pages/
│   │   ├── Home.tsx           # Home page
│   │   └── TaskDetails.tsx    # Task details page
│   ├── types/
│   │   └── task.ts            # TypeScript type definitions
│   ├── App.tsx                # Main app component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.tsx               # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Task-App
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Preview Production Build
```bash
npm run preview
```

## 💻 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Workflow
1. Create feature branch
2. Make changes
3. Test locally
4. Commit changes with descriptive messages
5. Push to GitHub
6. Deploy to Vercel (automatic on main branch)

## 🌐 Deployment

### Vercel Deployment

1. **Connect Repository**
   - Sign in to [Vercel](https://vercel.com)
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Vercel automatically detects Vite projects
   - Click "Deploy"
   - Your app will be live at `your-project.vercel.app`

### Environment Variables
No environment variables required for this project.

## 📝 Code Explanation

### Key Components

#### TaskContext.tsx
Manages global task state using React Context API:
- Stores tasks in state
- Syncs with localStorage
- Provides CRUD operations (Create, Read, Update, Delete)

```typescript
export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])
  // ... CRUD functions
}
```

#### TaskForm.tsx
Form component for creating new tasks:
- Controlled inputs with React state
- Form validation
- Resets after submission

#### TaskList.tsx
Displays tasks in a grid layout:
- Bulk selection functionality
- Filter integration
- Empty state handling

#### TaskCard.tsx
Individual task display component:
- Status badges
- Action buttons
- Responsive design

### Routing
```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/task/:id" element={<TaskDetails />} />
</Routes>
```

### State Management Pattern
- **Global State**: Tasks managed via Context API
- **Local State**: Form inputs, filters, selections
- **Persistence**: localStorage for data persistence

## 📸 Screenshots

### Home Page
- Clean, modern interface
- Task creation form on the left
- Task list with filters on the right
- Responsive grid layout

### Task Details
- Individual task view
- Status update buttons
- Task information display

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly interface

## 🎓 Conclusion & Learnings

### Key Learnings
1. **Modern Build Tools**: Understanding Vite's fast development experience
2. **Component Architecture**: Building reusable, maintainable components
3. **State Management**: Implementing Context API for global state
4. **Routing**: Client-side routing with react-router-dom
5. **Responsive Design**: Creating mobile-first layouts with TailwindCSS
6. **TypeScript**: Type safety and better developer experience
7. **Version Control**: Git workflow and GitHub best practices
8. **Deployment**: Production deployment with Vercel

### Challenges Overcome
- Managing complex state across components
- Implementing responsive design
- Data persistence with localStorage
- TypeScript type definitions
- Component reusability

### Future Enhancements
- User authentication
- Backend API integration
- Task categories management
- Task priorities
- Due date reminders
- Task sharing capabilities
- Dark mode support

## 📄 License

This project is created for educational purposes.

## 👤 Author

Developed as part of Frontend Development course requirements.

---

**Built with ❤️ using Vite, React, TypeScript, and TailwindCSS**
