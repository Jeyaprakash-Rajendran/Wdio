const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});


Given("I am on the entering in the home page", () => {
    
    console.log("Inside - given ")
});

When("I login with test id  and password", () => {
    console.log("Inside - when ")
});

Then("I should able to see the site up and running with out issue", () => {
    console.log("Inside - then ")
});

Then("I should able to see the site up and running with some issue", () => {
    console.log("Inside - then ");
    const title = "expected";
    expect(title).toBe("cool");
});


Given("I am on the entering in the home page with user {string}", function(username) {
    this.sharedData = {};                 // initialize sharedData
    this.sharedData.username = username;  // store username
    console.log(this.sharedData.username + " From Given");
});
