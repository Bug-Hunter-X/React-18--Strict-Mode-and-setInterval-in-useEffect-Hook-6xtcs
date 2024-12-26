# React 18+ Strict Mode and setInterval in useEffect Hook

This repository demonstrates a common issue encountered when using `setInterval` within a `useEffect` hook in React 18 and later versions, especially when Strict Mode is enabled.  The problem arises from the potential for multiple instances of the interval to run simultaneously, leading to unexpected behavior or errors.

## Problem

The `setInterval` function, when used without proper cleanup, can create multiple timers if the component re-renders before the previous timer is cleared. In Strict Mode, this problem is amplified and often results in warnings or unexpected side effects.  This is because Strict Mode essentially renders the component twice, triggering the `useEffect` hook twice and creating two intervals.

## Solution

The solution involves ensuring that the interval is correctly cleared using the cleanup function provided by the `useEffect` hook. This prevents the accumulation of multiple intervals and ensures predictable behavior.
