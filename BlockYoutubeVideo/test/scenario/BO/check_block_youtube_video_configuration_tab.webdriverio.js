'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°2 =Check the configuration tab', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Check configuration  tab ", function (done) {

        it('should add the api key ', function (done) {
            global.fctname = this.test.title
            this.client
                .windowHandles().then(function (handles) {
                //this.close(handles.value[handles.value.length - 1])
                return this.switchTab(handles.value[0])
            })
                .pause(3000)
                .waitForExist('//*[@id="modulecontent"]/div[1]/div[1]/a[2]', 3000)
                .click('//*[@id="modulecontent"]/div[1]/div[1]/a[2]')
                .waitForExist('//*[@id="google_api_key"]', 3000)
                .setValue('//*[@id="google_api_key"]', global.apikey)
                .call(done);
        });

        it('should choose the position ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="page_position"]', 3000)
                .click('//*[@id="page_position"]')
                .selectByVisibleText('//*[@id="page_position"]', 'Beneath the product buttons')
                .call(done)
        })

        it('should add a banner above the video ', function (done) {
            global.fctname = this.test.title
            this.client

                .pause(7000)
                .waitForExist('//*[@id="youtube_banner_switch"]/label[1]', 3000)
                .click('//*[@id="youtube_banner_switch"]/label[1]')
                .call(done);
        });

        it('should add a banner text ', function (done) {
            global.fctname = this.test.title
            this.client
                //.pause(5000)
                .waitForExist('#youtube_banner_text_1', 3000)
                .execute(function (rule_name) {
                    document.querySelector('#youtube_banner_text_1').value = rule_name;
                }, global.ruleNameInput)
                .pause(3000)
                .call(done);
        });

        it('should check the title  ', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist('//*[@id="custom_title_switch"]/label[1]', 3000)
                .click('//*[@id="custom_title_switch"]/label[1]')

                .call(done);
        });
        it('should check the title position', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist('//*[@id="custom_title_position"]', 3000)
                .click('//*[@id="custom_title_position"]')
                .selectByVisibleText('//*[@id="custom_title_position"]', 'Sous la vidéo')
                .call(done);
        });
        it('should click on update button', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist('//*[@id="config"]/div[1]/form/center/input', 3000)
                .click('//*[@id="config"]/div[1]/form/center/input')
                .call(done);
        });

    });

    describe("Update product ", function (done) {

        it('should add the video ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(3000)
                .waitForExist('//*[@id="subtab-AdminCatalog"]/a', 90000)
                .moveToObject('//*[@id="subtab-AdminCatalog"]/a')
                .pause(5000)
                .waitForExist('//*[@id="subtab-AdminProducts"]/a', 90000)
                .click('//*[@id="subtab-AdminProducts"]/a')
                .pause(5000)
                .waitForExist('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[9]/div/div/a[1]/i', 9000)
                .click('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[9]/div/div/a[1]/i')
                .pause(3000)
                .call(done)
        });
        it('should click on module in page product ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="tab_hooks"]/a', 9000)
                .click('//*[@id="tab_hooks"]/a')
                .call(done)

        });

        it('should configure the video ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="hooks"]/div/div/div/div/div/div[2]/div/div/div/div[3]/div/button', 3000)
                .click('//*[@id="hooks"]/div/div/div/div/div/div[2]/div/div/div/div[3]/div/button')
                .waitForExist('//*[@id="youtube_custom_title_1"]',9000)

                .execute(function (videoname) {
                    document.querySelector('//*[@id="youtube_custom_title_1"]').value = videoname;
                },'Test video title')

                .pause(3000)
                .waitForExist('//*[@id="youtube_suggest_product_video_search"]/div[8]/div/label', 9000)
                .click('//*[@id="youtube_suggest_product_video_search"]/div[8]/div/label')
                .waitForExist('//*[@id="url_youtube_input"]', 9000)

                .execute(function (videoname) {
                    document.querySelector('//*[@id="url_youtube_input"]').value = videoname;
                },'https://www.youtube.com/watch?v=8PU4RfJqhFM')

                .pause(2000)
                .waitForExist('//*[@id="url_youtube_input_div"]/div/div', 9000)
                .click('//*[@id="url_youtube_input_div"]/div/div')
                .waitForExist('//*[@id="submit"]', 3000)
                .click('//*[@id="submit"]')
                .call(done)
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

