import { test, expect } from '@playwright/test';

test('local catalog is available', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Shortical — local exercise' })).toBeVisible();
});
