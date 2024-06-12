
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { test as base } from '@playwright/test';
import { CreateANewUserPage } from './pages/CreateANewUser.page';

type Fixtures = {
    createANewUserPage: CreateANewUserPage
};

export const test = base.extend<Fixtures>({
    createANewUserPage: async ({ page }, use) => {
        await use(new CreateANewUserPage(page));
    },
});
