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
	test('Should not be able to sign up with empty fields @QALA-5', async ({ page }) => {
		await page.getByRole('link', { name: 'Sign up' }).click()
		await page.getByPlaceholder('Your Name').type('', { delay: 100 })
		await page.getByPlaceholder('Email').type('', { delay: 100 })
		await page.getByPlaceholder('Password').type('', { delay: 100 })
		await page.getByRole('button', { name: 'Sign up' }).click()
		await expect(page.getByText('Username is required')).toBeVisible()
		await expect(page.getByText('Email is required')).toBeVisible()
		await expect(page.getByText('Password is required')).toBeVisible()
	})
})
