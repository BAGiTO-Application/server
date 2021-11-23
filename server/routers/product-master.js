const express = require("express");
const mime = require('mime');
const productMasterModel = require("../models/productmaster");
const router = express.Router();
const imageModel = require("../models/image");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
		destination: function(req,file,cb){
			const { productId } = req.body.productId
        		const dir = './product_images/'+req.body.productId
			console.log('dir >>>'+dir);
			fs.exists(dir, exist => {
        			if (!exist) {
            				return fs.mkdir(dir, error => cb(error, dir));
        			}
					else{
						fs.rmdirSync(dir,{recursive: true});
						return fs.mkdir(dir, error => cb(error, dir));
					}
        				cb(null, dir)
        			})
		},
		filename: function(req,file,cb){
			cb(null, req.body.productName+ new Date().toISOString()+'.jpeg')
		}
	});

const upload = multer({dest: 'product_images/'});

router.post('/saveProducts' ,function(req, res,next) {
	console.log('request productImage>>> '+ JSON.stringify(req) );
	console.log('request productImage>>> '+ JSON.stringify(req.data) );
    	console.log('request productImage>>> '+ JSON.stringify(req.body) );
	console.log('request productImage>>> '+ JSON.stringify(req.productDetails) );
	console.log('request productImage>>> '+ req.body.productId);
	/*
	const filter = {productCode: req.body.productId}; 
	const data = {
		productCode : req.body.productId,
		productName : req.body.productName,
		manufacturer : req.body.manufacturer,
		ingredients : req.body.ingredients,
		category : req.body.category,
		price : JSON.parse(req.body.price),
		measuringUnit : req.body.measurementUnit,
		priceUnit : req.body.priceUnit,
		productImage : req.file.path,
		searchKey : req.body.searchKeys.split(',')
	}

	productMasterModel.updateOne(filter,data,{ upsert: true },function(error, result){
		if(error){
			console.log('Err >> '+error);
            res.status(500).json({
				msg: error,
                saved:false,
            });
            return res.send();
		}
		if(result){
			 console.log('saved'+JSON.stringify(result));
            res.status(201).json({
                saved:true,
                savedProduct:result
            });
            res.send();
		}
	});*/
    
    
});

router.get('/searchProduct', function(req, res,next) {
    console.log(req.query.productCode);
    productMasterModel.findOne({productCode: req.query.productCode}).then(product => {
        if(product){
            res.status(200).json({
                productExist: true,
                savedProduct:product
            });
            return res.send();
        }
        else{
            res.status(200).json({
                productExist: false,
                savedProduct:{}
            });
            res.send();
        }
    })
});

module.exports = router;