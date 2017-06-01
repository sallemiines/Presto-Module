'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('favicono tification', function(){
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

	describe('Add product to cart and verify the module', function(done){

       it('get the favicon before adding product', function(done){
		    global.fctname= this.test.title;
		    global.my_src_image1="";
			this.client
			.pause(3000)
            .getAttribute('/html/head/link[2]', "href").then(function(text) {
					global.my_src_image1 = text;
            })
            .pause(3000)
            .call(done);
		});

        it('should go to the product details', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist(this.selector.logo_home_pageFO, 90000)
				.click(this.selector.logo_home_pageFO)
				.waitForExist('//*[@id="content"]/section[1]/div[2]/div/div/article[6]/div/a', 90000)
				.click('//*[@id="content"]/section[1]/div[2]/div/div/article[6]/div/a')
				.pause(2000)
				.click(this.selector.add_to_cart)
				.waitForExist(this.selector.layer_cart, 90000)
			    .call(done);
		});

	    it('should click add to cart button ', function(done){
		    global.fctname= this.test.title;
			this.client
				.click(this.selector.layer_cart_command_button)
				.call(done);
		});

       it('get the favicon after adding product', function(done){
		    global.fctname= this.test.title;
		    global.my_src_image2="";
			this.client
			.pause(3000)
             .getAttribute('/html/head/link[1]', "href").then(function(text) {
					global.my_src_image2 = text;
                    should(global.my_src_image2).not.be.equal(global.my_src_image1);
            })
            .pause(3000)
           .call(done);
		});
	});



});