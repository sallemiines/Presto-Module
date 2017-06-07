'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var pdfUtil = require('pdf-to-text');
var TextPosition;
describe('Check the order in BO', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});

	process.on('uncaughtException', common.take_screenshot);
	process.on('ReferenceError', common.take_screenshot);
	after(common.after);

	try{
		describe('Log in in Back Office', function(done){
		    it('Should log in successfully in BO', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .signinBO()
                    .waitForExist(this.selector.menu, 90000)
                    .call(done);
			});
		});

		describe('modify invoice terms', function(done){

           it('Should go to appearance', function(done){
                    global.fctname= this.test.title;
                    this.client
                        .moveToObject(this.selector.apparence_btn)
                        .waitForExist(this.selector.pages_btn, 90000)
                        .click(this.selector.pages_btn)
                        .call(done);
            });

            it('Search for invoice terms', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .waitForExist(this.selector.search_zone_pages, 90000)
                    .setValue(this.selector.search_zone_pages, 'condition')
                    .click(this.selector.serach_btn_pages)
                    .waitForExist(this.selector.edit_btn_pages, 90000)
                    .click(this.selector.edit_btn_pages)
                    .call(done);
		    });

            it('Should edit the document', function(done){
		        global.fctname= this.test.title;
			    this.client
				    .pause(2000)
				    .click('//*[@id="content_1_ifr"]')
                    .elementActive().keys(" test")
                    .moveToObject(this.selector.btn_save_page)
                    .pause(3000)
                    .click(this.selector.btn_save_page)
                    .call(done);
            });
});

	describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
            global.fctname= this.test.title;
			this.client
				.signoutBO()
				.call(done);
		});
	});
	}catch(e){
	};
});