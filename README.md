# FrilDay

FrilDay is a timer-first time planning app centered on planned time, actual tracked time, completion, and repeatable routines.

The repository is being organized as a monorepo with a desktop-first release path and a longer-term cloud architecture.

## Workspace

```text
apps/
  desktop/        Tauri + React client
  server/         Axum server skeleton

crates/
  frilday-core/   Shared core crate skeleton

docs/
  ARCHITECTURE.md
```

## Current Status

- `apps/desktop` is the active application
- `apps/server` exists as a separate server-adapter bootstrap crate
- `crates/frilday-core` exists as a bootstrap crate
- architecture direction is documented in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

## Desktop App

From the repo root:

```bash
cd apps/desktop
npm run build
bunx tauri build
```

Local packaged app output:

- `apps/desktop/src-tauri/target/release/bundle/macos/FrilDay.app`

## Workflow

- keep `main` buildable
- use short-lived branches
- prefer small PRs by layer
- avoid committing generated outputs

More detail lives in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
