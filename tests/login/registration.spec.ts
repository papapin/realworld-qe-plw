import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('/')
})

test.describe('Authorisation', () => {
	const newUser = Date.now()
	const newEmail = Date.now()
	test('Registrated with valid credention @QALA-2', async ({ page }) => {
		await page.getByRole('link', { name: 'Sign up' }).click()
		await page.getByPlaceholder('Your Name').type(`myname${newUser}`, { delay: 100 })
		await page.getByPlaceholder('Email').type(`${newEmail}@gmail.com`, { delay: 100 })
		await page.getByPlaceholder('Password').type('password', { delay: 100 })
		await page.getByRole('button', { name: 'Sign up' }).click()
		await expect(page.getByText(`myname${newUser}`)).toBeVisible()
	})
})
