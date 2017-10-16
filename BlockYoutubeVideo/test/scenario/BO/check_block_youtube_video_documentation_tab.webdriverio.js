'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°1 = Check the documentation tab', function () {
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
        });
    });

    describe('Should access to the modules page', function (done) {
        it('should go to modules page', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForExist(this.selector.BO.ModulesPage.modules_subtab, 90000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .call(done)
        })
        it('should go to the module', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulesPage.search_input, 3000)
                .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name_youtubeVideo)
                .waitForExist(this.selector.BO.ModulesPage.search_button, 3000)
                .click(this.selector.BO.ModulesPage.search_button)
                .pause(3000)
                .getText(this.selector.BO.ModulesPage.page_loaded).then(function (nbr) {
                global.nbr = parseInt(nbr[0].charAt(0));
            })
                .call(done);
        });
    });

    describe("Configure the module", function (done) {

        it('should click on configuration button ', function (done) {
            if (global.nbr === 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.config_module_button, 3000)
                    .click(this.selector.BO.ModuleBlockYoutubeVideo.config_module_button)
                    .call(done);
            }
        });
    });
    describe("Check the links direction in documentation tab ", function (done) {

        it('should click on pdf logo ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(3000)
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.pdf_logo, 3000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.pdf_logo)
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1])
            })
                .pause(7000)
                .call(done)
        })

        it('should click on prestashop documentation link ', function (done) {
            global.fctname = this.test.title
            this.client
                .windowHandles().then(function (handles) {
                //this.close(handles.value[handles.value.length - 1])
                return this.switchTab(handles.value[0])
            })
                .pause(3000)
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.prestashop_link, 3000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.prestashop_link)
                .windowHandles().then(function (handles) {
                console.log(handles);
                return this.switchTab(handles.value[handles.value.length - 1])
            })
                .pause(7000)
                .call(done);
        });

    });


})