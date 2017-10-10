'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe(' Test n°2 = Check the optimizing urls configuration', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Check the optimizing urls tab", function (done) {
        it('should add a new rule ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModulePageSeoExpert.optimaze_url_tab, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.optimaze_url_tab)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.add_rule_button, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.add_rule_button)
                .call(done);
        });

        it('should add the rule name ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModulePageSeoExpert.rule_name_input, 90000)
                .setValue(this.selector.BO.ModulePageSeoExpert.rule_name_input, global.ruleNameInput)
                .call(done);
        });


        it('should select the franch langauge ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="step-1"]/div[3]/div/div[1]/button/span[2]', 90000)
                .selectByVisibleText('//*[@id="step-1"]/div[3]/div/div[1]/button/span[2]', 'Français')
                .call(done);
        });

        it('should click on next button ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModulePageSeoExpert.next_button, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.next_button)
                .pause(2000)
                .call(done);
        });

        it('should select a category', function (done) {
            global.fctname = this.test.title
            this.client
            //.waitForExist(this.selector.BO.ModulePageSeoExpert.categorie_check, 90000)
                .waitForExist('//*[@id="category_2"]/a/i[1]', 90000)
                //.click(this.selector.BO.ModulePageSeoExpert.categorie_check)
                .click('//*[@id="category_2"]/a/i[1]')
                .pause(2000)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.next_button, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.next_button)
                .pause(2000)
                .call(done);
        });

        it('should configure the rule', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModulePageSeoExpert.link_rewrite_input, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.link_rewrite_input)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.product_name_url_select, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.product_name_url_select)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.description_url_select, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.description_url_select)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.reference_url_select, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.reference_url_select)
                .click(done);
        });

        it('should save the url form', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModulePageSeoExpert.save_button, 90000)
                .click(this.selector.BO.ModulePageSeoExpert.save_button)
                .call(done);
        });

        it('should close the validation message ', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.close_button, 9000)
                .click(this.selector.BO.ModulePageSeoExpert.close_button)
        });


        it('should click on apply rule', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="cat_5"]/td[7]/div/div/a', 5000)
                //   .click(this.selector.BO.ModulePageSeoExpert.apply_rule_button)
                .click('//*[@id="cat_5"]/td[7]/div/div/a')
                .pause(7000)
                .waitForExist(this.selector.BO.ModulePageSeoExpert.close_button, 9000)
                .click(this.selector.BO.ModulePageSeoExpert.close_button)
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signoutBO()
                .call(done);
        })
    });

})
