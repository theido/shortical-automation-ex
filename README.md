# Shortical Automation Interview Exercise

A ready-to-run, Shortical-inspired Playwright + TypeScript starter for an approximately **18-minute live technical interview**. You will write a focused end-to-end test for a fictional episode-viewing journey. Read [EXERCISE.md](EXERCISE.md) for the task.

**Complete environment setup before the interview, but do not solve or unskip the exercise in advance.** Leave `tests/episode-playback.spec.ts` unchanged until the interviewer starts the task. The initial smoke check is only an environment check, not a completed exercise.

## Prerequisites

- Node.js **22 or newer**, with npm (`node --version` and `npm --version`).
- Git, an IDE/editor, and a working terminal.
- Screen sharing ready for the interview; you do not need to record the session.
- Internet access for initial npm package and Chromium downloads. Once installed, the app and tests use only localhost; no VPN or Shortical services are needed.
- A supported macOS, Windows or Linux environment for the pinned Playwright version. On Linux, browser OS libraries may need installation as described below.

No production accounts, passwords, secrets, purchases, real video streaming, Appium, Android Studio or Xcode are required. Do not provide or commit personal information or credentials.

## Clone and set up

```sh
git clone https://github.com/theido/shortical-automation-ex.git
cd shortical-automation-ex
npm ci
npx playwright install chromium
npm run typecheck
npm test
```

Run every command from the repository root. Keep the checked-in dependency versions and lockfile. On Linux, if browser system libraries are missing, use:

```sh
npx playwright install --with-deps chromium
```

Installing OS packages may require administrator access. On macOS and Windows, install Chromium with the normal command above; no native-mobile SDKs are needed. If setup fails, contact your interviewer before the session rather than spending the live coding time on installation.

## Expected baseline

```text
1 skipped
1 passed
```

The passing check is `tests/smoke.spec.ts`. The skipped test is the intentionally incomplete TODO in `tests/episode-playback.spec.ts`. There should be no failures. A green baseline does **not** mean the exercise is solved. Do not add the solution during setup.

Playwright starts and stops the local server automatically. Port **4173** must be free, and a manually started app must be stopped before running `npm test`. Optional interactive test runner: `npm run test:ui`.

## Explore the local app

```sh
npm start
```

Open http://127.0.0.1:4173 in a browser. The catalog contains the fictional **Midnight Signals** series. Its player simulates episode and playback state; it does not decode video, stream media or contact production APIs. It is **not the Shortical production application**. Reloading returns to the catalog. Stop the server with Ctrl+C before running tests.

You may confirm that the app loads before the interview, but leave the exercise test untouched. No additional frameworks or packages are needed.

## Repository files

- `EXERCISE.md`: live task and working agreement.
- `app/`: dependency-free local simulator.
- `tests/smoke.spec.ts`: baseline environment check.
- `tests/episode-playback.spec.ts`: intentionally skipped TODO starter.
- `playwright.config.ts`: Chromium, isolated browser contexts, managed local server and zero retries.
- `.github/`: baseline CI and a report-shape check that confirms the exercise remains skipped; no task solution or grading tests.

## Privacy and CI

Do not commit credentials, recordings, personal data, test traces or interview feedback. AI assistance during the exercise is optional only under the interviewer's agreed tool/data policy; never upload sensitive data to an unapproved service.

CI runs on pull requests and pushes to `main`. It type-checks and runs the baseline, then explicitly verifies exactly one passing smoke check and one skipped exercise. It deliberately rejects a solved/unskipped exercise in the shared starter. Your live interview work does not need to be submitted as a public pull request. No result traces or reports are uploaded as CI artifacts.
