import { expect, test } from '@playwright/test'

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  await page.waitForTimeout(2000)
})

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza shop')
  await page.getByLabel('Seu nome').fill('Jonh Doe')
  await page.getByLabel('Seu e-mail').fill('joehdoe@gmail.com')
  await page.getByLabel('Seu celular').fill('5154110515132132')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('Jonh Doe')
  await page.getByLabel('Seu e-mail').fill('joehdoe@gmail.com')
  await page.getByLabel('Seu celular').fill('5154110515132132')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Error ao cadastrar restaurante.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})
