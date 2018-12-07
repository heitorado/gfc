import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na página "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('GfcGui');
        await $("a[name='" + name + "']").click();
    });
    
    Given(/^Eu não vejo nenhuma posse cadastrada$/, async () => {
        var allpossessions : ElementArrayFinder = element.all(by.name('possessionslist'));
        await allpossessions;
        await allpossessions.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^Eu cadastro uma nova posse com o nome "([^\"]*)" e o valor "(\d*)"$/, async (name, value) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='valuebox']").sendKeys(<string> value);
        await element(by.buttonText('Cadastrar')).click();
    });

    Given(/^Eu vejo uma posse cadastrada com o nome "([^\"]*)" de valor "(\d*)"$/, async (name, value) => {
        var allpossessions : ElementArrayFinder = element.all(by.name('possessionslist'));
        await allpossessions;
        var samename = allpossessions.filter(elem =>
                                      elem.getAttribute('name').then(text => text === name));
       // await samename;
       // await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
});
})