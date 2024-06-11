import { expect, test } from '@playwright/test'

test('display day order amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('5', { exact: true }).first()).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('200', { exact: true }).first()).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^200-5% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display cancel orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('5', { exact: true }).first()).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display total orders months amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('R$ 7,00')).toBeVisible()
  expect(page.getByText('+100% em relação ao mês')).toBeVisible()

  await page.waitForTimeout(2000)
})
