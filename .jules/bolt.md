## 2024-05-23 - Radix UI Portal Props
**Learning:** Radix UI `Portal` primitives (e.g. `Dialog.Portal`, `Sheet.Portal`) do not accept `className`. Passing it causes TypeScript build errors.
**Action:** Always verify `Portal` usage in UI component libraries and ensure no styling props are passed to the portal itself.

## 2024-05-23 - Missing Type Dependencies
**Learning:** Importing types from a library not listed in `package.json` (e.g. `lottie-web`) causes build failures even if the runtime code works (due to loose bundling or phantom dependencies).
**Action:** Use `import type` or `any` if the library is not a direct dependency, or add it to `devDependencies`. In this case, removing the import was safer.

## 2024-05-23 - Lodash Tree Shaking
**Learning:** `import { debounce } from 'lodash'` pulls in the entire library in this Next.js setup, significantly increasing bundle size.
**Action:** Always use `import debounce from 'lodash/debounce'` or similar specific imports.
