import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameValue = ((elem, value) => elem.element(by.name('valorlist')).getText().then(text => text === value));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "Common Expenses" page$/, async (title) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('GfcGui');
        await $("a[name='bills']").click();
    })

    Given(/^I can not see a bill named “([^\"]*)” $/, async (name) => {
        var allbills : ElementArrayFinder = element.all(by.name('nomelist'));
        await allbills;
        var samename = allbills.filter(elem =>
                                      elem.getText().then(text => text === name));
        await samename;
        await samename.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^I create a paid bill named “([^\"]*)” with the value “(\d*)”$/, async (name, value) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='valuebox']").sendKeys(<number> value);
        await element(by.name('statusbox')).click();
        await element(by.buttonText('Adicionar')).click();
    });
    
    When(/^I try to register the student "([^\"]*)" with CPF "(\d*)"$/, async (name, cpf) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='cpfbox']").sendKeys(<string> cpf);
        await element(by.buttonText('Adicionar')).click();
    });

    Then(/^I can see a paid bill named “([^\"]*)” with the value “(\d*)”$/, async (name, cpf) => {
        var allbills : ElementArrayFinder = element.all(by.name('billslist'));
        allbills.filter(elem => pAND(sameValue(elem,cpf),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
})