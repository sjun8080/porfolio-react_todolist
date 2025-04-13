React To-Do List with UTC Time

This is a simple **React-based To-Do List App** built with core React features like `useState` and `useEffect`. It allows users to add, mark as complete, and delete tasks all while displaying the current UTC time.

​

Features

 Add tasks to your to-do list

Click on a task to mark it as **complete** or **incomplete**

Remove tasks from the list

Displays the **current UTC time** using JavaScript's `Date` object

Basic inline styling with orange background for a clean visual

​

Key Concepts Used

 **React Hooks**:  

`useState` for managing state (tasks, input field, and time)  

  `useEffect` to fetch and set UTC time when the app load

 **Functional Components**:

`App` – handles to-do logic and rendering

`DateUTC` – displays current UTC time using `Date().toUTCString()`

**Unique Task IDs**:

  Tasks use `Date.now()` as a unique `id` to differentiate list items

**Pure Frontend**:

  No database, no API – runs fully in the browser (ideal for learning or sandboxing)
