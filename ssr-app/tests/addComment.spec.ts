import { test, expect } from '@playwright/test'

test('Can add a comment', async ({ page }) => {
  const commentText = `This is a test comment ${Date.now()}`
  await page.goto('http://localhost:3001')

  await page
    .getByTestId(/post-btn-\d+/)
    .first()
    .click()

  await expect(page.getByText('Loading...')).toBeVisible()
  await page.getByRole('textbox').fill(commentText)
  await page.getByTestId('submit-btn').click()
  await page.locator('p').filter({ hasText: commentText }).isVisible()
})
