import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testdome.com/resources/media/36bc13be-6a3c-4e17-abc4-119f7512773f/Create_a_new_user.html');
  await page.getByLabel('First name (required):').click();
  await page.getByLabel('First name (required):').fill('Hi');
  await page.getByLabel('First name (required):').press('Tab');
  await page.getByLabel('Last name (required):').fill('I\'m');
  await page.getByLabel('Username (required):').click();
  await page.getByLabel('Username (required):').fill('Oleksandr');
  await page.getByLabel('Username (required):').press('Tab');
  await page.getByLabel('Description:').fill('Vovnianko');
  await page.getByLabel('Address:').click();
  await page.getByLabel('Address:').fill('Lviv');
  await page.getByLabel('Address:').press('Tab');
  await page.getByLabel('Address 2 (max 5 characters):').fill('qwe1');
  await page.getByLabel('Age (between 18 and 65):').click();
  await page.getByLabel('Age (between 18 and 65):').fill('44');
  await page.getByRole('button', { name: 'Create user' }).click();
  await page.getByLabel('Password (required, at least').fill('123qw');
  await page.getByRole('button', { name: 'Create user' }).click();
});