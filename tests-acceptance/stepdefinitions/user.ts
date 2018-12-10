import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "(\.*)" page$/, async (page) => {
        await browser.get("http://localhost:4200/");
        await $("a[name='vault']").click;
    })

    Given(/^“(\w*)”, “(\w*)” and “(\w*)” are registered users$/, async (heitor, lucas, saulo) => {
        var allusers : ElementArrayFinder = element.all(by.name('users'));
        await allusers;
        var heitoruser = allusers.filter(elem => elem.getText().then(text => text === heitor));
        await heitoruser
        var lucasuser = allusers.filter(elem => elem.getText().then(text => text === lucas));
        await lucasuser
        var saulouser = allusers.filter(elem => elem.getText().then(text => text === saulo));
        await saulouser

        await heitoruser.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
        await lucasuser.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
        await saulouser.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
    })

})