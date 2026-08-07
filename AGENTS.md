# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Next.js portfolio site. The application workspace is under `src/`; run JavaScript tooling from that directory. App Router pages and metadata live in `src/app/`, reusable React components in `src/components/`, shared helpers in `src/lib/`, CSS in `src/styles/`, and static files in `src/public/`. Keep route-specific code beside its route (for example, `src/app/works/page.tsx`) and move broadly reused UI into `components/`. Root-level `flake.nix` defines the development shell, formatter, and checks. Cloudflare deployment configuration is in `src/wrangler.toml` and `src/open-next.config.ts`.

## Build, Test, and Development Commands

From the repository root, enter the pinned Node.js/pnpm environment with `nix develop`. Then work in `src/`:

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts the local Next.js development server.
- `pnpm build` creates a production build; use it to catch type and rendering failures.
- `pnpm start` serves the completed Next.js build.
- `pnpm lint` runs the configured Next.js/ESLint checks.
- `pnpm format` formats JavaScript and TypeScript with Prettier.
- `pnpm preview` builds and previews the Cloudflare/OpenNext output locally.

At the repository root, `nix fmt` applies treefmt formatting and `nix flake check` runs formatting and pre-commit checks.

## Coding Style & Naming Conventions

Use TypeScript/TSX, two-space indentation, single quotes, no semicolons, trailing commas, and LF line endings. These rules are enforced by Prettier through treefmt. ESLint also requires alphabetized imports. Name React components and exported types in PascalCase, functions and variables in camelCase, and component files in lowercase kebab-case (for example, `chakra-next-image.tsx`). Follow Next.js route filenames such as `page.tsx`, `layout.tsx`, and `not-found.tsx`.

## Testing Guidelines

There is currently no automated test framework or coverage threshold. Before submitting changes, run `pnpm lint`, `pnpm build`, and `nix flake check`. Manually verify affected routes with `pnpm dev`, including responsive layouts and both color modes. If adding tests, colocate them as `*.test.ts` or `*.test.tsx` near the code under test.

## Commit & Pull Request Guidelines

Recent history favors short, imperative subjects and scoped Conventional Commit prefixes, such as `fix(deps): update next.js`, `chore(deps): ...`, or `nix: add treefmt check`. Keep each commit focused. Pull requests should explain the user-visible change, list validation performed, link relevant issues, and include before/after screenshots for visual updates. Note any deployment or Cloudflare configuration impact explicitly.
