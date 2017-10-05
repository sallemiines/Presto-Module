'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°1 = Check the stores configuration', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        })
    });

    describe('Check the store address', function (done) {
        it('should go to the contact  subtab', function (done) {
            this.client
                .waitForExist(this.selector.BO.SettingPage.setting__subtab, 9000)
                .moveToObject(this.selector.BO.SettingPage.setting__subtab)
                .pause(9000)
                .waitForExist(this.selector.BO.ContactPage.contact_subtab, 90000)
                .click(this.selector.BO.ContactPage.contact_subtab)
                .pause(5000)
                .waitForExist(this.selector.BO.ContactPage.shop_link, 6000)
                .click(this.selector.BO.ContactPage.shop_link)
                .waitForExist(this.selector.BO.ContactPage.adress_shop_input, 9000)
                .setValue(this.selector.BO.ContactPage.adress_shop_input, 'rue de boulvard')
                .waitForExist(this.selector.BO.ContactPage.postal_code_input, 9000)
                .setValue(this.selector.BO.ContactPage.postal_code_input, '75001')
                .waitForExist(this.selector.BO.ContactPage.city_shop_input, 9000)
                .setValue(this.selector.BO.ContactPage.city_shop_input, 'Paris')
                .waitForExist(this.selector.BO.ContactPage.city_shop_input, 9000)
                .setValue(this.selector.BO.ContactPage.city_shop_input, '12345678')
                .waitForExist(this.selector.BO.ContactPage.fax_input, 9000)
                .setValue(this.selector.BO.ContactPage.fax_input, '12345678')
                .pause(3000)
                .waitForExist(this.selector.BO.ContactPage.save_button, 9000)
                .click(this.selector.BO.ContactPage.save_button)
                .call(done)
        })
    });

})
