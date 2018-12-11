import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, promise } from 'protractor';
const { Before } = require('cucumber');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { VaultStub } from '../../gfc-gui/src/app/vaultStub';

let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));
let samePrice = ((elem, price) => elem.element(by.name('pricelist')).getText().then(text => text === price));
let samePercentage = ((elem, perc) => elem.element(by.name('percentagelist')).getText().then(text => text === perc));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "([^\"]*)" page$/, async (pageTitle) => {
        await browser.get("http://localhost:4200/");
        await element(by.name('wishlist')).click();
        await expect(element(by.name('wishlist-page-title')).getText()).to.eventually.equal(`Showing ${pageTitle}`);
    });

    Given(/^I have "(\d*)" money at the Vault$/, async (money) => {
        await $("input[name='valuebox']").clear();
        await $("input[name='valuebox']").sendKeys(<string> money);
        await element(by.name('btn-deposit')).click();
        await expect(element(by.name('balance')).getText()).to.eventually.equal(money);
    });

    Given(/^I can see an item "([^\"]*)" with price "(\d*)" and "(\d*)" percent completion$/, async (name, price, completion) => {
        var allitems : ElementArrayFinder = element.all(by.name('productslist'));
        await $("input[name='namebox']").clear();
        await $("input[name='pricebox']").clear();
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='pricebox']").sendKeys(<string> price);
        await element(by.name('btn-add')).click();
        allitems.filter(elem => pAND(pAND(sameName(elem,name),samePrice(elem,price)), samePercentage(elem,completion))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^I mark the item "([^\"]*)" as bought$/, async (itemName) => {
        var allitems : ElementArrayFinder = element.all(by.css("tr[name='productslist']"));

        await allitems.filter(function(elem, index){
            return elem.$("td[name='nomelist']").getText().then(function(text){
                return text === <string> itemName;
            });
        }).first().$('.btn-buy').click();
    });

    Then(/^I cannot see the item "([^\"]*)" anymore$/, async(itemName) =>{
        var allitems : ElementArrayFinder = element.all(by.name('productslist'));

        await allitems.filter(elem => sameName(elem,itemName)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Then(/^I can still see the item "([^\"]*)"$/, async(itemName) => {
        var allitems : ElementArrayFinder = element.all(by.name('productslist'));


        await allitems.filter(elem => sameName(elem,itemName)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
});