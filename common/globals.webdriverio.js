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

// Upela Module globals
global.webserviceKey='';
global.dateTimeNumber = new Date().getTime();
global.emailUpela= 'mail' + dateTimeNumber + '@prestashop.com';



module.exports = {
    selector: {

        BO: {
            //Back office login page selector
            AccessPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },

            //Advenced Parameter page
            AdvancedParametersPage:{
                menu:'//*[@id="subtab-AdminAdvancedParameters"]/a',
                Webservice:'//*[@id="subtab-AdminWebservice"]/a',
                WebserviceOption:{
                    search_input:'//*[@id="form-webservice_account"]/div/div[2]/table/thead/tr[2]/th[3]/input',
                    search_button:'//*[@id="submitFilterButtonwebservice_account"]',
                    Upela_webservice:'//*[@id="form-webservice_account"]/div/div[2]/table/tbody/tr/td[2]'
                }
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
                number_of_module_found:'//*[@id="main-div"]/div[3]/div/div/div[2]/div/div[7]/span[1]',
                configuration_button:'//*[@id="modules-list-container-all"]/div[1]/div/div/div[5]/div[2]/form/button',
                module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
                install_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
                uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
                uninstall_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
                modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
                module_menu_btn: '[class="btn btn-primary-outline  dropdown-toggle"]',
                enable_module_btn: '[class="dropdown-item module_action_menu_enable"]'
            },

            //Upela module selectorl
            UpelaModulePage:{
                production_mode_button:'//*[@id="fieldset_0"]/div[1]/div/div/span/label[1]',
                create_account_button:'//*[@id="home_form"]/div[1]/div/div/div[2]/a[1]',
                name_input:'//*[@id="firstname"]',
                last_name_input:'//*[@id="lastname"]',
                mail_input:'//*[@id="email"]',
                mobile_number_input:'//*[@id="phone"]',
                password_input:'//*[@id="password"]',
                confirm_password_input:'//*[@id="passwordcheck"]',
                company_subtab:'//*[@id="fieldset_0"]/div[2]/ul/li[2]/a',
                professional_address_input:'//*[@id="company"]/div[2]/div/span/label[1]',
                adresse_input:'//*[@id="company_address_1"]',
                pays:'//*[@id="company_country"]',
                pays_FR:'//*[@id="company_country"]/option[75]',
                postal_code_input:'//*[@id="company_zipcode"]',
                ville_input:'//*[@id="company_city"]',
                immatriculation_input:'//*[@id="company_vat"]',
                shop_subtab:'//*[@id="fieldset_0"]/div[2]/ul/li[3]/a',
                shop_name_input:'//*[@id="store_name"]',
                shop_adresse_input:'//*[@id="store_address_1"]',
                shop_country:'//*[@id="store_country"]',
                shop_FR:'//*[@id="store_country"]/option[75]',
                shop_postale_code_input:'//*[@id="store_zipcode"]',
                shop_ville_input:'//*[@id="store_city"]',
                webservice_input:'//*[@id="webservicekey"]',
                save_shop_button:'//*[@id="configuration_form_submit_btn"]',

                shop_success_panel:'//*[@id="content"]/div[6]',
                Upela_website_button:'//*[@id="home_form"]/div[1]/div/div/div[2]/div/a',
                connexion_subtab:'//*[@id="upelaTabs"]/li[3]/a',
                disconnect_button:'//*[@id="settings_form"]/div[1]/div/div/form/div[3]/div/div/button',
                connect_button:'//*[@id="home_form"]/div[1]/div/div/div[2]/a[2]',
                setting_subtab:'//*[@id="settings_form"]/div/div/div/form/div[3]/div[1]/div/button',
                shop_creation_button:'//*[@id="settings_form"]/div[2]/div/div/div/div/div/a',
                success_panel:'//*[@id="content"]/div[4]',
                success_created_shop:'//*[@id="content"]/div[5]',

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

        //Others
        UPELASITE:{
            title:'//*[@id="main"]/h1',
            mes_boutique_button:'//*[@id="main"]/div[2]/div[2]/div/ul/li[2]/a',
            store_subtab:'//*[@id="store_table"]/tbody/tr/td[3]/a',
            download_command_button:'//*[@id="main"]/div[2]/div[2]/div/div[2]/div[2]/a',
            succes_modal:'/html/body/div[2]/div[2]',
            success_message:'/html/body/div[2]/div[2]/div/div[2]/div/div',
            second_shop_success:'/html/body/div[2]/div[2]/div/div[1]/div/div[1]'
        }

    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};