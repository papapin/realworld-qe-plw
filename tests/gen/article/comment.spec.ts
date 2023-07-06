import { test, expect, type Page } from '@playwright/test'
import { USER_NAME, PASSWORD, EMAIL } from '../../../environment.config'
import { login } from '../../../src/helpers/ui/login-helpers'
import { article } from '../../../src/helpers/ui/article-helpers'
import { comment } from '../../../src/helpers/ui/comment-helper'

test.beforeEach(async ({ page }) => {
	await page.goto('/')
})

test.describe('Article', () => {
	const newArticle = 'article' + Date.now()
	const aboutArticle = 'article' + Date.now()
	const writeArticle = 'some text'
	const tags = 'article'
	const commentText = 'nice article'
	test('should be able to write and post comment under article @QALA-33', async ({ page }) => {
		await login(page, EMAIL, PASSWORD)
		await article(page, newArticle, aboutArticle, writeArticle, tags)
		await page.getByRole('link', { name: newArticle })
		await comment(page, commentText)
		await expect(page.getByRole('paragraph').filter({ hasText: commentText })).toBeVisible()
	})
})
