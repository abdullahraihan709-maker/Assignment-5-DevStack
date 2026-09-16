# Dev Stack

A modern, interactive web application designed to help software engineers explore, compare, and build their ideal technology stack.

---

## About the Project

**Dev Stack** provides developers with a streamlined platform to evaluate software tools across frontend, backend, databases, and DevOps categories. Users can pick technologies, prevent duplicate additions, and visualize their custom project stack in real-time.

---

## Built With

* **Frontend Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling Framework:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
* **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)
* **Data Delivery:** Local JSON with React `use()` hook & `<Suspense>` data fetching

---

## Key Features

1. **Interactive Stack Builder**  
   Add or remove tools from your active stack with real-time state tracking and instant notification feedback via `React-Toastify` for additions, removals, and duplicate attempts.

2. **Custom Badging & Metadata Display**  
   Explore tech items categorized by difficulty, rating, and dynamically styled badges for fast visual recognition.

3. **Centralized Gradient Theme & Fully Responsive UI**  
   Styled using a single-variable CSS gradient system for quick global re-theming, paired with a mobile-first responsive layout across all device sizes.

---


**1. What is JSX, and why is it used in React?**

* **What it is:** JSX stands for JavaScript XML. It is a syntax extension that lets you write HTML-like code directly inside your JavaScript files.
* **Why it's used:** It makes UI structure readable and easy to write by combining layout markup and display logic in one place, which React then converts into standard DOM elements.

**2. What is the difference between props and state?**

* **Props (Properties):** Read-only data passed from a parent component down to a child component. The child component cannot modify props directly.
* **State:** Local data managed inside a component that can change over time based on user actions. When state updates, React automatically re-renders the component to show the new data.

**3. What does the `useState` hook do, and where did you use it in this project?**

* **What it does:** It allows functional components to create, read, and update local state variables.
* **Where used:** In `TechCard.tsx`, `useState` was used to hold the list of selected technologies in my custom stack (`const [stack, setStack] = useState<TTechCard[]>([])`).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

* **What it does:** It handles "side effects"—operations that run outside of rendering, such as fetching data, updating DOM titles, or setting up timers.
* **Why needed:** Because loading JSON data is an asynchronous network operation. `useEffect` ensures the fetch call triggers automatically when the component mounts without blocking the initial UI render or causing infinite re-render loops.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

* **Reason:** React's Virtual DOM uses the `key` prop to identify exactly which items in a list have been added, updated, or removed. This avoids unnecessary re-renders and prevents UI state bugs when items are reordered or deleted.

**6. What is conditional rendering? Show one place you used it.**

* **Definition:** Showing or hiding specific UI elements based on a JavaScript condition (true or false).
* **Project Example:** Changing the button text and style dynamically based on whether an item is already added:
---tsx code---
{isAdded ? "✓ Added to Stack" : "Add to Stack"}
---tsx code---

Another example is checking if `stack.length === 0` to display an "Empty Stack" message instead of the list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

* **Parent → Child:** Pass data directly down as props (example: passing `stack={stack}` from `TechCard` to `YourStacks`).
* **Child → Parent:** Pass a callback function as a prop from the parent (example: `onRemove={handleRemove}`). When an event happens in the child (like clicking a delete button), the child calls that function and passes data back up to the parent as an argument (`onRemove(tech.id)`).