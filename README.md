# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by updating a state variable within the effect without proper dependency management.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Problem

The initial `useEffect` hook in `bug.js` attempts to increment the count state on every render. This creates a loop, as each increment triggers a re-render, leading to continuous state updates. This is often missed due to the empty dependency array suggesting no dependencies.

## Solution

The `bugSolution.js` file shows how to correctly use the `useEffect` hook to avoid the infinite loop.  The empty dependency array is removed, and now the counter only increments when the button is explicitly clicked.