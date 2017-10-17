'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°4 = Update product', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Add video to product ", function (done) {
        it('should go to page product ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(3000)
                .waitForExist('//*[@id="subtab-AdminCatalog"]/a', 90000)
                .moveToObject('//*[@id="subtab-AdminCatalog"]/a')
                .pause(5000)
                .waitForExist('//*[@id="subtab-AdminProducts"]/a', 90000)
                .click('//*[@id="subtab-AdminProducts"]/a')
                .call(done)

        });
        it('should choose product ', function (done) {
            global.fctname = this.test.title
            this.client
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
                //    .waitForExist('//*[@id="youtube_custom_title_1"]',9000)
                //    .execute(function (videoname) {
                //        document.querySelector('//*[@id="youtube_custom_title_1"]').value = videoname;
                //    },'Test video title')
//
                   // .pause(3000)
                //.waitForExist('//*[@id="youtube_suggest_product_video_search"]/div[8]/div/label', 9000)
                //.click('//*[@id="youtube_suggest_product_video_search"]/div[8]/div/label')
            // //   .waitForExist('//*[@id="url_youtube_input"]', 9000)
            //    .execute(function (videoname) {
             //       document.querySelector('//*[@id="url_youtube_input"]').value = videoname;
             //   }, 'https://www.youtube.com/watch?v=tDmL86bOkCY')
                .waitForExist('//*[@id="url_youtube_input"]',9000)
                .setValue('//*[@id="url_youtube_input"]','https://www.youtube.com/watch?v=tDmL86bOkCY')
                .pause(2000)
                .call(done)

        });

        it('should click on  save ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="url_youtube_input_div"]/div/div', 9000)
                .click('//*[@id="url_youtube_input_div"]/div/div')
                .waitForExist('//*[@id="submit"]', 3000)
                .click('//*[@id="submit"]')
                .call(done)
        });

        it('Should click on visualiser', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="product_form_preview_btn"]', 9000)
                .click('//*[@id="product_form_preview_btn"]')
                .pause(90000)
                .call(done)

        })
        //    it('should detect if the video is visible', function () {
        //        global.fctname = this.test.title;
        //        this.client
        //            .isVisible(global.bannerInput).then(function (isVisible) {
        //             var banner_Txt = isVisible;
        //        })
        //            .call(done)
        //    })
//


    });

    //  describe('Log out in Back Office', function (done) {
    //      it('should log out successfully in BO', function (done) {
    //          global.fctname = this.test.title;
    //          this.client
    //              .signoutBO()
    //              .call(done);
    //      })
    //  });


})

