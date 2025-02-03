# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Setup

To set up and run the project, follow these steps:

1. Install the necessary dependencies:
    ```sh
    npm install
    ```

2. Start the development server:
    ```sh
    npm run dev
    ```

3. Build the project for production:
    ```sh
    npm run build
    ```

4. Preview the production build:
    ```sh
    npm run preview
    ```

## Project Description

This project demonstrates a simple React application with various components and hooks. The application consists of the following components and hooks:

### Components

- `App.jsx`: The main component that renders the counter and header components.
- `HeaderButton.jsx`: A component that allows the user to change the header title.
- `Header.jsx`: A component that displays the header title.
- `Callback.jsx`: A component demonstrating the use of `useCallback` hook with a `Todo` component.
- `Side.jsx`: A component demonstrating the use of `useEffect` hook for various side effects.
- `Todo.jsx`: A memoized component that displays a list of todos and a button to add a new todo.
- `Home.jsx`: A component that displays the home page.
- `About.jsx`: A component that displays the about page.
- `HighOrder.jsx`: A higher-order component that enhances a given component.
- `Form.jsx`: A component that demonstrates controlled and uncontrolled form inputs.

### Hooks

- `useCounter`: A custom hook that provides counter functionality with increment and decrement actions.

## Example Usage

### `useCounter` Hook

The `useCounter` hook provides a simple counter with increment and decrement functionality.

#### Example:
```jsx
import { useCounter } from "./Hooks/custom";

function App() {
    const { count, Increment, Decrement } = useCounter();

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={Increment} disabled={count > 10}>Add</button>
            <button onClick={Decrement} disabled={count <= 0}>Decrease</button>
        </>
    );
}

export default App;
```

### `Callback` Component

The `Callback` component demonstrates the use of the `useCallback` hook to optimize the rendering of the `Todo` component.

#### Example:
```jsx
import { useState, useCallback } from 'react';
import Todo from './Todo';

const Callback = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const Increment = () => {
        setCount(count + 1);
    };

    const addToDo = useCallback(() => {
        setTodo((prev) => [...prev, 'New Entry']);
    }, []);

    return (
        <>
            <Todo todo={todo} addToDo={addToDo} />
            <br />
            <h3>Count: {count}</h3>
            <button onClick={Increment}>Increment</button>
        </>
    );
};

export default Callback;
```

### `Side` Component

The `Side` component demonstrates the use of the `useEffect` hook for various side effects, including updating the document title, logging state changes, and setting up a timer.

#### Example:
```jsx
import React, { useEffect, useState } from 'react';

const Side = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('vipul');
    const [time, setTime] = useState(0);

    function Increment() {
        setCount(count + 1);
    }

    useEffect(() => {
        document.title = `count: ${count}`;
    }, [count]);

    useEffect(() => {
        console.log(name);
    }, [name]);

    useEffect(() => {
        const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh",
            backgroundColor: "rgba(240, 162, 120, 0.94)"
        }}>
            <div style={{ textAlign: 'center' }}>
                <h3>UseEffect Topic</h3>
                <br />
                <h6>Count: {count}</h6>
                <br />
                <button onClick={Increment}>Increase</button>
                <br />
                <br />
                <p>Name: <span>{name}</span></p>
                <input
                    type='text'
                    placeholder=''
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                <div>Timer: {time} </div>
            </div>
        </div>
    );
};

export default Side;
```
