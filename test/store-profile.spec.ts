import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Pizza shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizza rock')
  await page.getByLabel('Descrição').fill('Another description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso.')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
  expect(page.getByRole('button', { name: 'Pizza rock' })).toBeVisible()

  await page.waitForTimeout(2000)
})
