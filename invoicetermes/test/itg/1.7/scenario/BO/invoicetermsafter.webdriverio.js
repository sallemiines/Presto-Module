'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var pdfUtil = require('pdf-to-text');

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
		    it('should log in successfully in BO', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .signinBO()
                    .waitForExist(this.selector.menu, 90000)
                    .call(done);
			});
		});

		describe('verify default configuration', function(done){

           it('should go to orders', function(done){
                    global.fctname= this.test.title;
                    this.client
                        .click(this.selector.orders)
                        .waitForExist(this.selector.orders_form, 90000)
                        .call(done);
            });

            it('should go to first order', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .click('//*[@id="form-order"]/div/div[2]/table/tbody/tr[1]/td[12]/div/a')
                    //.waitForExist('//*[@id="status"]/form/div/div[2]/button', 90000)
                    .call(done);
		    });

            it('should payment accept', function(done){
		        global.fctname= this.test.title;
			    this.client
				    .pause(2000)
                    .click('//*[@id="id_order_state_chosen"]/a')
                    .pause(2000)
                    .click('//*[@id="id_order_state_chosen"]/div/ul/li[12]')
                    .pause(2000)
                    .click('//*[@id="status"]/form/div/div[2]/button')
                    .call(done);
		    });

            it('should download the document', function(done){
		        global.fctname= this.test.title;
			    this.client
				    .pause(2000)
                    .click('//*[@id="tabOrder"]/li[2]/a')
                    .pause(2000)
                    .click('//*[@id="documents_table"]/tbody/tr[1]/td[3]/a')
                    .pause(4000)
                    .getText('//*[@id="documents_table"]/tbody/tr[1]/td[3]/a').then(function(text) {
                        global.documentPDF = text;
                        global.documentPDF = global.documentPDF.replace(/^#/, "");
                    })
                    .call(done);
		    });

       it('should Go to document', function(done){
		        global.fctname= this.test.title;
			    this.client
				    .pause(2000)
				    function func_verify(x){
				          if(x == -1 ){
                            done(new Error("Unavailable module"));
                        }else{
                            done();
                        }
				    }
                    pdfUtil.pdfToText('/home/fourat.achour/Téléchargements/'+global.documentPDF+'.pdf', function(err, data) {
                      if (err) throw(err);
                      global.TextPosition = data.indexOf('Conditions d');
                      func_verify(global.TextPosition);
                    })


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