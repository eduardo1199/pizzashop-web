import { expect, test } from '@playwright/test'

test('display day order amount metric', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  expect(
    page.getByRole('cell', {
      name: 'order-1',
      exact: true,
    }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', {
      name: 'order-10',
      exact: true,
    }),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

test('testing pagination order', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(
    page.getByRole('cell', {
      name: 'order-11',
      exact: true,
    }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', {
      name: 'order-20',
      exact: true,
    }),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

test('testing filtered order by id', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByPlaceholder('Id do pedido').fill('order-31')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(
    page.getByRole('cell', {
      name: 'order-31',
      exact: true,
    }),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

test('testing filtered order by client name', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 20')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(
    page.getByRole('cell', {
      name: 'order-20',
      exact: true,
    }),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

test('testing filtered order by status', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('combobox').click()
  await page.getByLabel('Em entrega').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Em entrega' })).toHaveCount(10)

  await page.waitForTimeout(2000)
})
