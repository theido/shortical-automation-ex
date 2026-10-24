import { test, expect } from '@playwright/test';

test('local catalog is available', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Midnight Signals', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Play episode 1', exact: true })).toBeVisible();
});
