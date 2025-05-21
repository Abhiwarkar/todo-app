# React Todo List Application

A modern, feature-rich todo list application built with React. This application helps you manage your tasks with a beautiful and intuitive user interface.

## ✨ Features

### Core Functionality
- **Task Management**: Add, edit, delete, and mark tasks as completed
- **Persistence**: Tasks are automatically saved to localStorage
- **Statistics**: Track your progress with task completion statistics

### User Experience
- **Responsive Design**: Works perfectly on desktops, tablets, and mobile devices
- **Animations**: Smooth transitions and animations for a polished feel
- **Accessibility**: Designed with accessibility in mind

### Visual Design
- **Modern UI**: Clean, vibrant interface with gradient accents
- **Dynamic Elements**: Interactive components with hover and focus states
- **Color Psychology**: Color-coded actions to enhance usability (blue for primary actions, green for completion, red for deletion, etc.)
*

## 🚀 Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/Abhiwarkar/todo-app
cd todo-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Building for Production
```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 🛠️ Technology Stack

### Core Technologies
- **React**: UI library for building the user interface
- **Vite**: Next-generation frontend tooling
- **CSS3**: Custom styling with modern CSS features

### State Management
- **React Hooks**: useState and useEffect for local state management
- **LocalStorage API**: For data persistence between sessions

### Development Tools
- **ESLint**: For code quality and consistency
- **Git**: Version control

## 🏗️ Project Structure

```
todo-app/
├── public/                  # Static assets
│   ├── index.html           # HTML entry point
│   └── favicon.ico          # App favicon
├── src/
│   ├── components/          # React components
│   │   ├── App.jsx          # Main app component
│   │   ├── Header.jsx       # App header
│   │   ├── ToDoList.jsx     # Container for todo items
│   │   └── ToDoItem.jsx     # Individual todo item
│   ├── styles/              # Component-specific styles
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── ToDoList.css
│   │   └── ToDoItem.css
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration
```

## 💻 Component Architecture

### App.jsx
The root component that:
- Manages the todo list state
- Handles CRUD operations for todos
- Provides methods for child components
- Implements localStorage persistence

### Header.jsx
A presentational component that:
- Displays the application title
- Shows the current date
- Provides visual identity for the app

### ToDoList.jsx
A container component that:
- Receives the todo list as props
- Maps through todos to create individual items
- Displays appropriate message when list is empty

### ToDoItem.jsx
An interactive component that:
- Displays individual todo items
- Manages edit mode state
- Provides UI for completing and deleting todos


### Event Handling
The application implements handlers for:
- Adding todos
- Toggling completion status
- Editing todo text
- Deleting todos


## 🎨 Styling Approach

The application uses a component-based CSS approach:
- Global variables and reset in `index.css`
- Component-specific styles in dedicated CSS files
- Responsive design with media queries
- CSS variables for color scheme and theme consistency
- Gradients and subtle animations for enhanced visual appeal

## 📱 Responsive Behavior

The application is fully responsive:
- Desktop: Full layout with horizontal alignment
- Tablet: Adjusted spacing and element sizes
- Mobile: Stacked layout with optimized touch targets

## 🚧 Future Enhancements

Planned features for future versions:
- Task categories/tags
- Due dates and reminders
- Search and filter capabilities
- Dark/light theme toggle
- Drag and drop reordering
- Cloud synchronization



## 🙏 Acknowledgements

- React team for the amazing library
- Vite team for the lightning-fast build tool
- Font providers for the beautiful typography
- The open-source community for inspiration

---

Made with ❤️ by Abhishek Hiwarkar