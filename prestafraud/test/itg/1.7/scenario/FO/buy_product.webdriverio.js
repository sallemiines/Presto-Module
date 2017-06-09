'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('The Purchase of a product', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
	after(common.after);

		it('Open the shop and loggin FO', function(done){
		    global.fctname= this.test.title;
			this.client
                .url('http://' + URL)
                .waitForExist(this.selector.access_loginFO, 90000)
                .click(this.selector.access_loginFO)
                .waitForExist(this.selector.loginFO, 90000)
                .setValue(this.selector.loginFO, 'pub@prestashop.com')
                .setValue(this.selector.passwordFO, '123456789')
                .click(this.selector.login_btnFO)
                .pause(3000)
                .call(done);

		});

	describe('Add product to cart', function(done){
        it('should go to the product details', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist('//*[@id="_desktop_logo"]/a', 90000)
				.click('//*[@id="_desktop_logo"]/a')
				.waitForExist('//*[@id="content"]/section/div[2]/div/div/article[6]/div/a', 90000)
				.click('//*[@id="content"]/section/div[2]/div/div/article[6]/div/a')
				.waitForExist(this.selector.product_image, 90000)
				.pause(2000)

				.click('//*[@id="add-to-cart-or-refresh"]/div[2]/div[1]/div[2]/button')
                .pause(3000)
                .click('//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a')
			    .call(done);
		});


	});

	describe('Validate the cart', function(){

        it('should go to Checkout Btn', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist('//*[@id="main"]/div/div[2]/div[1]/div[2]/div/a', 90000)
				.click('//*[@id="main"]/div/div[2]/div[1]/div[2]/div/a')

			    .call(done);
		});

        it('should select the address step-2', function(done){
            global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.checkout_step2_continue_button, 90000)
				.click(this.selector.checkout_step2_continue_button)
				.waitForExist(this.selector.checkout_step3_continue_button, 90000)
				.click(this.selector.checkout_step3_continue_button)
				.call(done);
		});

		it('should select the payment step-3', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.checkout_step4_payment, 90000)
				.click(this.selector.checkout_step4_payment)
			    .call(done);
		});

		it('should select the shipping method step-4', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.checkout_step4_cgv, 90000)
				.click(this.selector.checkout_step4_cgv)
				.waitForExist(this.selector.checkout_step4_order, 90000)
				.click(this.selector.checkout_step4_order)
			    .call(done);
		});

	});

	describe('Log out in Front Office', function(done){
		it('should logout successfully in FO', function(done){
		    global.fctname= this.test.title;
			this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);

		});
	});

});