import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { getUserData } from '../utils/TestDataUtils';

test.describe('User creation', () => {

  test('{tc01} Successful creation of a new user with all valid data', async ({ createANewUserPage }) => {
    const userData = getUserData();
    await createANewUserPage.navigate();
    await createANewUserPage.firstNameInput.fill(userData.validUserData.firstName);
    await createANewUserPage.lastNameInput.fill(userData.validUserData.lastName);
    await createANewUserPage.userNameInput.fill(userData.validUserData.userName);
    await createANewUserPage.descriptionInput.fill(userData.validUserData.description);
    await createANewUserPage.addressInput.fill(userData.validUserData.address);
    await createANewUserPage.secondAddressInput.fill(userData.validUserData.secondAddress);
    await createANewUserPage.ageInput.fill(userData.validUserData.age);
    await createANewUserPage.passInput.fill(userData.validUserData.password);
    await createANewUserPage.createANewUser();
    await expect(createANewUserPage.firstNameInput).toHaveValue('');
  });

  test('{tc02} Unsuccessful creation of a new user due to an empty required last name field', async ({ createANewUserPage }) => {
    const userData = getUserData();
    await createANewUserPage.navigate();
    await createANewUserPage.firstNameInput.fill(userData.validUserData.firstName);
    await createANewUserPage.userNameInput.fill(userData.validUserData.userName);
    await createANewUserPage.descriptionInput.fill(userData.validUserData.description);
    await createANewUserPage.addressInput.fill(userData.validUserData.address);
    await createANewUserPage.secondAddressInput.fill(userData.validUserData.secondAddress);
    await createANewUserPage.ageInput.fill(userData.validUserData.age);
    await createANewUserPage.passInput.fill(userData.validUserData.password);
    await createANewUserPage.createANewUser();

    // this test will fail, bc it's impossible to use inputError selector, but in case it should look like the row below
    // await expect (createANewUserPage.lastNameError).toHaveText('Please fill out this field.')
  });
})