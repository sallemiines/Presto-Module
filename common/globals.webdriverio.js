'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.email = argv.EMAIL;
global.password = argv.PWD;
global.module_tech_name = 'faviconotification';
global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.my_src_image1 = "";
global.my_src_image2 = "";
module.exports = {
    selector: {
        BO: {
            //Back office login page selectorq
            AccessPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },

            //Common selectors
            Common: {
                menu: '#nav-sidebar',
                close_validation_button: '.growl-close',
                red_validation_notice: '[class="growl growl-error growl-medium"]',
                green_validation_notice: '[class="growl growl-notice growl-medium"]'
            },

            //Modules page selectors
            ModulesPage: {
                modules_subtab: '#subtab-AdminParentModulesSf',
                search_input: 'div.pstaggerAddTagWrapper > input',
                search_button: '.btn.btn-primary.pull-right.search-button',
                page_loaded: '.module-search-result-wording',
                installed_modules_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                module_number_span: '[class="module-sorting-search-wording"]',

                module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
                install_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
                uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
                uninstall_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
                modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
                module_menu_btn: '[class="btn btn-primary-outline  dropdown-toggle"]',
                enable_module_btn: '[class="dropdown-item module_action_menu_enable"]'
            }
        },

        //FO
        FO: {

            //Common selectors
            Common: {
                favicon: '/html/head/link[2]'
            },

            //Access page selectors
            AccessPage: {
                logo_home_page: '.logo.img-responsive',
                first_product_home_page: '.thumbnail.product-thumbnail'
            },

            //Product page selectors
            ProductPage: {
                add_to_cart_button: '.btn.btn-primary.add-to-cart'
            }
        },


    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};