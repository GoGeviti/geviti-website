## 2026-02-11 - UseWindowDimensions Debounce
**Learning:** Frequent synchronous state updates from `resize` events in `useWindowDimensions` can cause significant performance degradation.
**Action:** Always debounce resize event handlers to prevent layout thrashing and excessive re-renders.

## 2026-02-11 - Broken Build & Missing Dependencies
**Learning:** Missing dev dependencies (like `lottie-web` types) can break the build and block legitimate optimizations.
**Action:** Use `any` or conditional types to bypass type errors when dependencies are missing and cannot be installed.
