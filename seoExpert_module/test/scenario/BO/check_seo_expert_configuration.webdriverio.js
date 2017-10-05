'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°1 = Check the SeoExpert configuration', function () {
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
        it('should go to the seoExpert module', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulesPage.search_input, 3000)
                .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name_seo_expert)
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
                    .waitForExist(this.selector.BO.ModulePageSeoExpert.config_module_button, 3000)
                    .click(this.selector.BO.ModulePageSeoExpert.config_module_button)
                    .call(done)
            }
        })


    });
////   describe("Check the links direction in documentation tab ", function (done) {

//       it('should click on pdf logo ', function (done) {
//           global.fctname = this.test.title
//           this.client
//               .waitForExist(this.selector.BO.ModulePageSeoExpert.pdf_logo, 3000)
//               .click(this.selector.BO.ModulePageSeoExpert.pdf_logo)
//               .windowHandles().then(function (handles) {
//               return this.switchTab(handles.value[handles.value.length - 1])
//           })
//               .pause(7000)
//               .call(done)


//       })

//       it('should click on user guide link ', function (done) {
//           global.fctname = this.test.title
//           this.client
//               .windowHandles().then(function (handles) {
//               this.close(handles.value[handles.value.length - 1])
//               return this.switchTab(handles.value[0])
//           })
//               .pause(3000)
//               .waitForExist(this.selector.BO.ModulePageSeoExpert.user_guide_link, 3000)
//               .click(this.selector.BO.ModulePageSeoExpert.user_guide_link)
//               .windowHandles().then(function (handles) {
//               console.log(handles);
//               return this.switchTab(handles.value[handles.value.length - 1])
//           })
//               .pause(7000)
//               .call(done)


//       })

//       it('should click on livre-blanc-seo link ', function (done) {
//           global.fctname = this.test.title
//           this.client
//               .windowHandles().then(function (handles) {
//               this.close(handles.value[handles.value.length - 1])
//               return this.switchTab(handles.value[0])
//           })
//               .pause(3000)
//               .waitForExist(this.selector.BO.ModulePageSeoExpert.livre_blanc_seo_link, 3000)
//               .click(this.selector.BO.ModulePageSeoExpert.livre_blanc_seo_link)
//               .windowHandles().then(function (handles) {
//               console.log(handles);
//               return this.switchTab(handles.value[handles.value.length - 1])
//           })
//               .pause(7000)
//               .call(done)


//       })

//       it('should click on official documentation link ', function (done) {
//           global.fctname = this.test.title
//           this.client
//               .windowHandles().then(function (handles) {
//               this.close(handles.value[handles.value.length - 1])
//               return this.switchTab(handles.value[0])
//           })
//               .pause(3000)
//               .waitForExist(this.selector.BO.ModulePageSeoExpert.official_documentation_link, 3000)
//               .click(this.selector.BO.ModulePageSeoExpert.official_documentation_link)
//               .windowHandles().then(function (handles) {
//               console.log(handles);
//               return this.switchTab(handles.value[handles.value.length - 1])
//           })
//               .pause(7000)
//               .call(done)


//       })
//       it('should click on contact  link ', function (done) {
//           global.fctname = this.test.title
//           this.client
//               .windowHandles().then(function (handles) {
//               this.close(handles.value[handles.value.length - 1])
//               return this.switchTab(handles.value[0])
//           })
//               .pause(3000)
//               .waitForExist(this.selector.BO.ModulePageSeoExpert.contact_link, 3000)
//               .click(this.selector.BO.ModulePageSeoExpert.contact_link)
//               .pause(7000)
//               .call(done)


//       })
//   });

    describe("Check the optimizing urls tab", function (done) {
        it('should add rule name ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModulePageSeoExpert.optimaze_url_tab, 3000)
                .click(this.selector.BO.ModulePageSeoExpert.optimaze_url_tab)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.add_rule_button, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.add_rule_button)
                //                .pause(3000)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.rule_name_input, 3000)
                //                .setValue(this.selector.BO.ModulePageSeoExpert.rule_name_input, global.ruleNameInput)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.next_button, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.next_button)
                //                .pause(2000)
                //                .call(done)
                //        })
                //        it('should select a category', function (done) {
                //            global.fctname = this.test.title
                //            this.client
                //            //.waitForExist(this.selector.BO.ModulePageSeoExpert.categorie_check, 3000)
                //                .waitForExist('//*[@id="category_2"]/a/i[1]', 3000)
                //                //.click(this.selector.BO.ModulePageSeoExpert.categorie_check)
                //                .click('//*[@id="category_2"]/a/i[1]')
                //                .pause(2000)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.next_button, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.next_button)
                //                .pause(2000)
                //                .call(done)
                //
                //        })
                //        it('should configure the url', function (done) {
                //            global.fctname = this.test.title
                //            this.client
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.link_rewrite_input, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.link_rewrite_input)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.product_name_url_select, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.product_name_url_select)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.description_url_select, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.description_url_select)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.reference_url_select, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.reference_url_select)
                //                .pause(2000)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.save_button, 3000)
                //                .click(this.selector.BO.ModulePageSeoExpert.save_button)
                //                .call(done)
                //
                //        })
                //
                //        it('should apply the rule', function (done) {
                //            global.fctname = this.test.title
                //            this.client
                //                .pause(4000)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.close_button, 9000)
                //                .click(this.selector.BO.ModulePageSeoExpert.close_button)
                //                .pause(5000)
                //                // .waitForExist(this.selector.BO.ModulePageSeoExpert.apply_rule_button,9000)
                //                .waitForExist('//*[@id="cat_5"]/td[7]/div/div/a', 5000)
                //                //   .click(this.selector.BO.ModulePageSeoExpert.apply_rule_button)
                //                .click('//*[@id="cat_5"]/td[7]/div/div/a')
                //                .pause(7000)
                //                .waitForExist(this.selector.BO.ModulePageSeoExpert.close_button, 9000)
                //                .click(this.selector.BO.ModulePageSeoExpert.close_button)
                //
                .call(done)

        })


        it('should go to fo', function (done) {
            global.fctname = this.test.title
            this.client
                .url('http://' + URL)

                .waitForExist('//*[@id="content"]/section/div/article/div/a/img', 90000)
                .click('//*[@id="content"]/section/div/article/div/a/img')
                .pause(3000)
                .waitForExist('//*[@id="wrapper"]/div/nav/ol/li[2]/a/span', 9000)
                .getText('//*[@id="wrapper"]/div/nav/ol/li[2]/a/span').then(function (text) {
                var title = text;
            })
                .waitForExist('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[1]/a', 9000)
                .click('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[1]/a')
                .getText('//*[@id="description"]/div/p').then(function (text) {
                var description = text;
            })
                .waitForExist('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[2]/a', 9000)
                .click('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[2]/a')
                .getText('//*[@id="product-details"]/div[1]/span').then(function (text) {
                var reference = text;
            })
                .waitForExist('//*[@id="wrapper"]/div/nav/ol/li[2]/a', 9000)
                .getText('//*[@id="wrapper"]/div/nav/ol/li[2]/a').then(function (text) {
                var url = text;
            })
                .pause(3000)
            var url = 'abcdefghij';
            console.log('(1, 2): ' + url.substr(1, 2))

                .call(done)

        })


    });


})

