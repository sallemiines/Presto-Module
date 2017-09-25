'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

global.webservice_key='';

describe('Test case n°1 = check account creation', function () {
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
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });


    describe('Check the existence of the Web service', function (done) {

        it('should go to boutique webservice parameter page', function (done) {
            this.client
                .waitForExist(this.selector.advanced_parameters, 90000)
                .moveToObject(this.selector.advanced_parameters)
                .waitForExist(this.selector.webservice_param, 90000)
                .click(this.selector.webservice_param)
                .call(done);
        });

        it('Search for Upela Web service and copy it', function (done) {
            this.client
                .waitForExist(this.selector.webservice_serach_input, 90000)
                .setValue(this.selector.webservice_serach_input, 'upela')
                .waitForExist(this.selector.webservice_search_button, 90000)
                .click(this.selector.webservice_search_button)
                .getText(this.selector.Upela_webservice).then(function(text) {
                    global.webservice_key = text;
                })
                .call(done);
        });

    });

    describe('Account creation and verification', function (done) {

        it('should go to the module configuration', function (done) {
            this.client
                .pause(5000)
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .waitForExist(this.selector.modules_search, 90000)
                .setValue(this.selector.modules_search, "upela")
                .waitForExist(this.selector.modules_search_button, 90000)
                .click(this.selector.modules_search_button)
                .getText(this.selector.nbr_module).then(function (text) {
                     global.nbr = text.indexOf('0');
                    if ((global.nbr != -1)||(global.nbr == 0)){
                        done(new Error('The module you are searching for does not exist!'));
                    }
                })
                .waitForExist(this.selector.config_btn, 90000)
                .click(this.selector.config_btn)
                .call(done);
        });


        describe('Account creation', function (done) {
            it('account settings', function (done) {
                this.client
                    .pause(1000)
                    .waitForExist(this.selector.prod_mode, 90000)
                    .click(this.selector.prod_mode)
                    .waitForExist(this.selector.compte_create, 90000)
                    .click(this.selector.compte_create)
                    .waitForExist(this.selector.name_upla, 90000)
                    .setValue(this.selector.name_upla, "Demo")
                    .waitForExist(this.selector.last_name_upela, 90000)
                    .setValue(this.selector.last_name_upela, "Demo")
                    .waitForExist(this.selector.email_upela, 90000)
                    .setValue(this.selector.email_upela, "mail"+email_id+"@prestashop.com")
                    .waitForExist(this.selector.mobile_number, 90000)
                    .setValue(this.selector.mobile_number, "6 10 00 10 23")
                    .waitForExist(this.selector.password_upela, 90000)
                    .setValue(this.selector.password_upela, "prestashop_demo")
                    .waitForExist(this.selector.confirm_password, 90000)
                    .setValue(this.selector.confirm_password, "prestashop_demo")
                    .call(done);

            });

            it('company settings', function (done) {

                this.client
                    .waitForExist(this.selector.company_tab, 90000)
                    .click(this.selector.company_tab)
                    .waitForExist(this.selector.professional_address, 90000)
                    .click(this.selector.professional_address)
                    .waitForExist(this.selector.first_adresse, 90000)
                    .setValue(this.selector.first_adresse, "21 rue poliveau ")
                    .waitForExist(this.selector.pays_upela_compte, 90000)
                    .click(this.selector.pays_upela_compte)
                    .click(this.selector.pays_FR)
                    .waitForExist(this.selector.postal_code, 90000)
                    .setValue(this.selector.postal_code, "75005")
                    .waitForExist(this.selector.ville, 90000)
                    .setValue(this.selector.ville, "paris")
                    .waitForExist(this.selector.immatriculation, 90000)
                    .setValue(this.selector.immatriculation, "0123456789")
                    .call(done);

            });

            it('shop settings', function (done) {
                this.client
                    .waitForExist(this.selector.shop_tab, 90000)
                    .click(this.selector.shop_tab)
                    .waitForExist(this.selector.shop_name_upela, 90000)
                    .setValue(this.selector.shop_name_upela, "My store")
                    .waitForExist(this.selector.shop_adresse, 90000)
                    .setValue(this.selector.shop_adresse, "31 rue du Louvre")
                    .waitForExist(this.selector.shop_pays, 90000)
                    .click(this.selector.shop_pays)
                    .click(this.selector.shop_FR)
                    .waitForExist(this.selector.shop_postale_code, 90000)
                    .setValue(this.selector.shop_postale_code, "75005")
                    .waitForExist(this.selector.shop_ville, 90000)
                    .setValue(this.selector.shop_ville, "paris")
                    .waitForExist(this.selector.webservice_key_shop, 90000)
                    .setValue(this.selector.webservice_key_shop, webservice_key)
                    .call(done);
            });



            it('Account and shop creation', function (done) {
                this.client
                    .waitForExist(this.selector.save_adding_shop, 90000)
                    .click(this.selector.save_adding_shop)
                    .waitForExist(this.selector.account_creation_success, 90000)
                    .getText(this.selector.account_creation_success).then(function (text) {
                        if(text != "Bienvenue dans Upela, votre compte est créé !" ){
                            done(new Error("Account creation failed"));
                        }
                    })
                    .getText(this.selector.shop_creation_success).then(function (text) {
                        if(text != "Boutique créée !" ){
                            done(new Error("Shop creation failed"));
                        }
                    })
                    .waitForExist(this.selector.go_to_UPELA, 90000)
                    .click(this.selector.go_to_UPELA)
                    .call(done);
            });

        });
        describe('Account verification', function (done) {
              it('Upela Account and Store verification', function (done) {
                  this.client
                      .getTabIds().then(function (handles) {
                          return this.switchTab(handles[handles.length - 1]);
                      })
                      .waitForExist('//*[@id="main"]/h1', 90000)
                      .waitForExist(this.selector.mes_boutique_button, 5000)
                      .click(this.selector.mes_boutique_button)
                      .waitForExist('//*[@id="store_table"]/tbody/tr/td[3]/a', 5000)
                      .click('//*[@id="store_table"]/tbody/tr/td[3]/a')
                      .waitForExist('//*[@id="main"]/div[2]/div[2]/div/div[2]/div[2]/a', 5000)
                      .click('//*[@id="main"]/div[2]/div[2]/div/div[2]/div[2]/a')
                      .waitForVisible('/html/body/div[2]/div[2]', 3000)
                      .waitForExist('/html/body/div[2]/div[2]/div/div[2]/div/div', 5000)
                      .getText('/html/body/div[2]/div[2]/div/div[2]/div/div').then(function (text) {
                          if(text != "Les commandes ont été téléchargées avec succès." ){
                              done(new Error("Orders have not been uploaded"));
                          }else
                              done();
                      })

                });

        });

    });

});