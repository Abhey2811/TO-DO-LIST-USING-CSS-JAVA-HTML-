# Interactive To-Do List

An animated, accessible, and interactive to-do list web application built using only vanilla HTML, CSS, and modern JavaScript — with zero external libraries or build tools.

---

## 📖 Project Description

This project is a beginner-friendly, beautifully designed task manager focused on clean code, smooth animations, and intuitive user experience. It demonstrates core web development concepts like DOM manipulation, state management, accessibility, and CSS transitions.

---

## ✨ Features

- **Add Tasks**: Add tasks using the "Add" button or by pressing the <kbd>Enter</kbd> key.
- **Input Validation**: Empty or whitespace-only inputs are rejected with a smooth CSS shake animation.
- **Complete Tasks**: Mark tasks as done with interactive checkboxes, applying a strikethrough and subtle fade.
- **Delete Tasks**: Remove unwanted tasks instantly.
- **Active Task Counter**: Displays the number of remaining active items dynamically.
- **Clean Responsive Design**: Looks great on both desktop monitors and mobile devices with a centered card layout and modern gradient.

### 🚀 Upcoming Features (Next Stages)
- Edit tasks by double-clicking.
- Filter tabs: All, Active, Completed.
- "Clear completed" button.
- Persistent storage using browser `localStorage`.
- Slide & fade animations on add/delete.
- Drag-and-drop task reordering.
- Light/Dark mode toggle with saved preference.
- Celebration confetti on task completion.

---

## 💻 How to Run

No installations, build steps, or local servers are required!

1. Clone or download this repository.
2. Locate [`index.html`](file:///c:/Users/ratho/dodolist/index.html).
3. Double-click or open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

---

## 🧠 What I Learned

- **Semantic HTML & Accessibility**: Using `<main>`, `<form>`, and descriptive `aria-label` attributes ensures the application is usable with assistive technologies and keyboards.
- **State-Driven Rendering**: Maintaining tasks in a central array (`tasks = []`) and using a single `renderTasks()` function keeps the UI synchronized with the data.
- **CSS Transitions & Keyframes**: Creating feedback animations like the input error `shake` directly in CSS rather than writing complex JavaScript animations.
- **Event Handling**: Handling form submissions with `event.preventDefault()` to handle both mouse clicks and the <kbd>Enter</kbd> key uniformly.

---

## 🔮 Next Improvements

- [ ] Add `localStorage` synchronization to keep tasks across browser sessions.
- [ ] Add filter controls (All, Active, Completed) and a Clear Completed action.
- [ ] Implement inline task editing via double-click.
- [ ] Add drag-and-drop reordering using the HTML5 Drag and Drop API.
- [ ] Add entry and exit animations for task list items.
- [ ] Implement dark mode toggle with smooth theme transition.
- [ ] Add celebration confetti when all tasks are marked complete.

