import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Validate only the public starter's execution metadata, not candidate answers.
export function checkBaseline(report) {
  assert.deepEqual(report.errors ?? [], [], 'No global test errors are allowed');
  assert.equal(report.stats.expected, 1, 'Expected exactly one passing smoke test');
  assert.equal(report.stats.skipped, 1, 'Expected exactly one skipped exercise');
  assert.equal(report.stats.unexpected, 0, 'Unexpected failures are not allowed');
  assert.equal(report.stats.flaky, 0, 'Flaky results are not allowed');
  const specs = [];
  const visit = (suite) => {
    specs.push(...(suite.specs ?? []));
    for (const child of suite.suites ?? []) visit(child);
  };
  for (const suite of report.suites ?? []) visit(suite);
  assert.equal(specs.length, 2, 'The baseline must contain only the two starter specs');
  for (const [file, expectedStatus] of [['smoke.spec.ts', 'passed'], ['episode-playback.spec.ts', 'skipped']]) {
    const matches = specs.filter((spec) => spec.file?.replaceAll('\\', '/').split('/').at(-1) === file);
    assert.equal(matches.length, 1, `Missing or duplicate spec: ${file}`);
    const spec = matches[0];
    assert.equal(spec.tests.length, 1, `Expected a single test in ${file}`);
    const test = spec.tests[0];
    assert.equal(test.expectedStatus, expectedStatus, `Incorrect expected status for ${file}`);
    assert.equal(test.results.length, 1, `No retries or missing executions allowed in ${file}`);
    assert.equal(test.results[0].status, expectedStatus, `Incorrect execution status for ${file}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const report = JSON.parse(await readFile(process.argv[2] ?? 'baseline-results.json', 'utf8'));
  checkBaseline(report);
  console.log('Baseline verified: one passing smoke test and one intentionally skipped exercise.');
}
