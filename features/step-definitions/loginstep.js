const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

When("I login with test id {string} and password {string}", function(userid, pwd) {
    // Do not reinitialize sharedData!
    this.sharedData.userid = userid;      // store userid
    console.log(this.sharedData.userid + " From When");
});

Then("I should able to see the site up and running with out issue as expected", function() {
    const username = this.sharedData.username;
    const userid = this.sharedData.userid;

    console.log(`Username: ${username}, Userid: ${userid}`);

    // Example assertion
    expect(username).not.toBe('');
    expect(userid).not.toBe('');
});

Given("I am on the entering in the home page of the wdio",async function () {
await browser.url("https://webdriver.io/");

await expect(browser).toMatchScreenshot('login-page')

});