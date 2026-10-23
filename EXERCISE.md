# Live-coding exercise — approximately 18 minutes

## Before the interview

Complete only the environment setup in [README.md](README.md): install dependencies and Chromium, type-check, run the baseline tests, and confirm the local app loads. **Do not implement or unskip the exercise test in advance.** Setup is not part of the 18-minute coding timebox.

All commands work from this repository root:

```sh
npm ci
npx playwright install chromium
npm run typecheck
npm test
```

The initial suite contains one passing smoke check and one intentionally skipped TODO. Baseline green is not task completion. Ask your interviewer for help with setup failures before the session.

## Local scenario

This fictional, Shortical-inspired simulator models discovering a short-drama series, starting an episode, and moving to the next one. It is not the actual Shortical product. Playback is deterministic simulated UI state, not decoded video or a real stream.

There are no production accounts, secrets, purchases, backend services, DRM, media downloads or native-mobile SDKs. No VPN, Appium, Android Studio or Xcode is needed.

## Your live task

When the interviewer starts the task, edit `tests/episode-playback.spec.ts`, remove its `.skip`, and implement an independently runnable Playwright E2E test that:

1. Opens the fictional **Midnight Signals** series from the catalog.
2. Starts episode 1, **The Signal**.
3. Verifies observable **simulated playback state**.
4. Navigates to episode 2.
5. Verifies the correct episode identity: **The Reply**, not merely that a navigation action was clicked.

Use the supplied application and observable UI state. You may inspect the app and starter, ask questions, and consult documentation. No app rewrite, framework architecture project, real media integration, native-device setup or extra dependency is required.

## Working agreement

- Explain your approach, use meaningful assertions and reliable waits, and keep the test independent of other tests.
- Run the implemented, unskipped test and inspect its actual result. A smoke pass alone is not enough during the live task.
- Explain what the test proves, what it does not prove, and what you would improve with more time.
- AI assistance is optional if agreed with the interviewer and approved for the supplied material. Explain and verify generated changes yourself. Never upload personal information, secrets or confidential source to an unapproved service.
- An unfinished implementation is a basis for discussion, not a reason to hide limitations or claim unexecuted results.

Locked episodes, purchases and entitlements may be discussed if time permits, but no payment or entitlement integration is required. There is no additional take-home assignment implied by this brief.

Keep interview work, personal information and feedback out of public GitHub unless an appropriate submission route has been explicitly agreed. The shared repository must retain its unsolved baseline for future interviews.
