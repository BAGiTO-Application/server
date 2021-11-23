const express = require("express");
const productMasterModel = require("../models/productmaster");

const router = express.Router();

router.get('/getAllProducts', function(req, res,next) {
    var responseData =  [
        {
           '_id':'60e96c97b5844c20317988ce',
           'firstName':'Sachin',
           'lastName':'Shivanna',
           'email':'Sachin.shivanna01@gmail.com',
           'phone':'07337817873',
           'address':{
              'products':[
  
              ],
              '_id':'60e96c97b5844c2031798893',
              'addressLine1':'Lakshmi Devi Nileya',
              'addressLine2':'N Nidagodu',
              'city':'Belur',
              'district':'Hassan',
              'state':'Karnataka',
              'country':'India',
              'pinCode':'573115',
              'primaryAddress':true,
              'createdAt':'2021-07-10T09:47:03.370Z',
              'updatedAt':'2021-07-10T09:47:03.370Z',
              '__v':0
           },
           'isRetailer':true,
           'storeDetails':{
              'address':[
                 {
                    'products':[
                       {
                          '_id':'1',
                          'productCode':'p-1',
                          'name':'Sugar',
                          'price':'30',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'50',
                          'measureUnit':'kg',
                          'img':'https://5.imimg.com/data5/EN/XI/MQ/SELLER-60787276/icumsa-45-sugar-500x500.png',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'2',
                          'productCode':'p-2',
                          'name':'Wheet',
                          'price':'35',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'40',
                          'measureUnit':'kg',
                          'img':'https://sc04.alicdn.com/kf/U91b4778057894ffeb6ba0c88b36ccaebf.jpg',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'3',
                          'productCode':'p-3',
                          'name':'Ragi',
                          'price':'25',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'50',
                          'measureUnit':'kg',
                          'img':'https://www.netmeds.com/images/cms/wysiwyg/blog/2019/12/1577431411_Ragi_Nutrition_big_1.jpg',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'4',
                          'productCode':'p-4',
                          'name':'Rice',
                          'price':'20',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'50',
                          'measureUnit':'kg',
                          'img':'https://www.thespruceeats.com/thmb/4f4z8htcPWAtBaGmxy_km88Ee5c=/1732x1299/smart/filters:no_upscale()/Basmati-rice-583f907f3df78c0230257ac3.jpg',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'5',
                          'productCode':'p-5',
                          'name':'Gooday',
                          'price':'11',
                          'category':'Packed Food',
                          'brand':'Britannia',
                          'availQty':'50',
                          'measureUnit':'packs',
                          'img':'data:image/jpeg;base64,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',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'6',
                          'name':'Bourbon',
                          'productCode':'p-6',
                          'price':'20',
                          'category':'Packed Food',
                          'brand':'Britannia',
                          'availQty':'50',
                          'measureUnit':'packs',
                          'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT0c0F_MGDd8VkYghzKpXPCRpYEw7-LNE2A&usqp=CAU',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'7',
                          'productCode':'p-7',
                          'name':'Marie Gold',
                          'price':'10',
                          'category':'Packed Food',
                          'brand':'Britannia',
                          'availQty':'75',
                          'measureUnit':'packs',
                          'img':'https://5.imimg.com/data5/XM/XN/MY-12901391/britannia-marie-gold-biscuits-500x500.png',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'8',
                          'name':'Oreo',
                          'productCode':'p-8',
                          'price':'20',
                          'category':'Packed Food',
                          'brand':'Oreo',
                          'availQty':'40',
                          'measureUnit':'packs',
                          'img':'https://images-na.ssl-images-amazon.com/images/I/71yCDAz1RIL._SL1500_.jpg',
                          'priceUnit':'Rs'
                       }
                    ],
                    '_id':'60e96c97b5844c2031798894',
                    'addressLine1':'Test',
                    'addressLine2':'NANDINI LAYOUT',
                    'city':'BANGALORE',
                    'district':'Bengaluru (Bangalore) Urban',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'560096',
                    'primaryAddress':true,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.525Z',
                    'updatedAt':'2021-07-10T09:47:03.525Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c2031798895',
                    'addressLine1':'',
                    'addressLine2':'P.B. Road',
                    'city':'DAVANGERE',
                    'district':'Davangere',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'577003',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.526Z',
                    'updatedAt':'2021-07-10T09:47:03.526Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c2031798896',
                    'addressLine1':'No. 129/B',
                    'addressLine2':'KIADB',
                    'city':'Belur Industrial Area',
                    'district':'Dharwad',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'580011',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.526Z',
                    'updatedAt':'2021-07-10T09:47:03.526Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c2031798897',
                    'addressLine1':'',
                    'addressLine2':'Malavagoppa',
                    'city':'Harige PO',
                    'district':'Shivamogga (Shimoga)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'577203',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.527Z',
                    'updatedAt':'2021-07-10T09:47:03.527Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c2031798898',
                    'addressLine1':'APMC Yard',
                    'addressLine2':'Soundatiti',
                    'city':'Soundatiti',
                    'district':'Belagavi (Belgaum)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'591126',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.527Z',
                    'updatedAt':'2021-07-10T09:47:03.527Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c2031798899',
                    'addressLine1':'Plot No. 137-139',
                    'addressLine2':'Antharasanahalli',
                    'city':'Tumkur',
                    'district':'Tumakuru (Tumkur)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'572106',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.527Z',
                    'updatedAt':'2021-07-10T09:47:03.527Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c203179889a',
                    'addressLine1':'Plot No. 107-109',
                    'addressLine2':'EPIP Zone, KIADB Industrail Area',
                    'city':'whitefield',
                    'district':'Bengaluru (Bangalore) Urban',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'560066',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.528Z',
                    'updatedAt':'2021-07-10T09:47:03.528Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c203179889b',
                    'addressLine1':'APMC Yard',
                    'addressLine2':'Tumkur Road',
                    'city':'YESHWANTHPUR',
                    'district':'Bengaluru (Bangalore) Urban',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'560022',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.529Z',
                    'updatedAt':'2021-07-10T09:47:03.529Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c203179889c',
                    'addressLine1':'R.V. Layout',
                    'addressLine2':'R.V. Layout',
                    'city':'Yeshwanthpur',
                    'district':'Bengaluru (Bangalore) Urban',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'560022',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.530Z',
                    'updatedAt':'2021-07-10T09:47:03.530Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c203179889d',
                    'addressLine1':'Mysore Sugar Co.',
                    'addressLine2':'Opp. Goodshed, Twin Godowns',
                    'city':'Mandya',
                    'district':'Mandya',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'571402',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.530Z',
                    'updatedAt':'2021-07-10T09:47:03.530Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c203179889e',
                    'addressLine1':'Mannagudda',
                    'addressLine2':'Warehouse Road',
                    'city':'Manngudda',
                    'district':'Dakshina Kannada',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'575003',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.530Z',
                    'updatedAt':'2021-07-10T09:47:03.530Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c203179889f',
                    'addressLine1':'NMPT AREA',
                    'addressLine2':'PANAMBUR',
                    'city':'MANGALORE',
                    'district':'Dakshina Kannada',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'575010',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.530Z',
                    'updatedAt':'2021-07-10T09:47:03.530Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a0',
                    'addressLine1':'',
                    'addressLine2':'APMC',
                    'city':'NARGUND',
                    'district':'Gadag',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'582207',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.531Z',
                    'updatedAt':'2021-07-10T09:47:03.531Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a1',
                    'addressLine1':'Gurukrupa Godowns',
                    'addressLine2':'Opp Munirwadi School',
                    'city':'Raichur',
                    'district':'Raichur',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'584102',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.531Z',
                    'updatedAt':'2021-07-10T09:47:03.531Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a2',
                    'addressLine1':'',
                    'addressLine2':'SEDAM',
                    'city':'SEDAM',
                    'district':'Kalaburagi (Gulbarga)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'585222',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.532Z',
                    'updatedAt':'2021-07-10T09:47:03.532Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a3',
                    'addressLine1':'',
                    'addressLine2':'Shimoga Road',
                    'city':'SHIKARIPUR',
                    'district':'Shivamogga (Shimoga)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'577427',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.532Z',
                    'updatedAt':'2021-07-10T09:47:03.532Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a4',
                    'addressLine1':'Plot No. 107-109',
                    'addressLine2':'KIADB Indl. Area',
                    'city':'WHITEFIELD',
                    'district':'Bengaluru (Bangalore) Urban',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'560066',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.533Z',
                    'updatedAt':'2021-07-10T09:47:03.533Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a5',
                    'addressLine1':'',
                    'addressLine2':'NEHRU NAGAR',
                    'city':'BELGAUM',
                    'district':'Belagavi (Belgaum)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'590010',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.533Z',
                    'updatedAt':'2021-07-10T09:47:03.533Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a6',
                    'addressLine1':'Plot No. 11A AND B',
                    'addressLine2':'Kolhar Industrial Area',
                    'city':'BIDAR',
                    'district':'Bidar',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'585403',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.534Z',
                    'updatedAt':'2021-07-10T09:47:03.534Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a7',
                    'addressLine1':'',
                    'addressLine2':'Sambapur Road',
                    'city':'Gadag',
                    'district':'Gadag',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'582101',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.535Z',
                    'updatedAt':'2021-07-10T09:47:03.535Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a8',
                    'addressLine1':'KIADB Industrial Area',
                    'addressLine2':'Narasapur',
                    'city':'Betageri Post',
                    'district':'Gadag',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'582102',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.535Z',
                    'updatedAt':'2021-07-10T09:47:03.535Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988a9',
                    'addressLine1':'',
                    'addressLine2':'Humnabad Road',
                    'city':'Nehru Gunj',
                    'district':'Kalaburagi (Gulbarga)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'585104',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.535Z',
                    'updatedAt':'2021-07-10T09:47:03.535Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988aa',
                    'addressLine1':'',
                    'addressLine2':'Hirapur Post',
                    'city':'HIRAPUR',
                    'district':'Kalaburagi (Gulbarga)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'585103',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.536Z',
                    'updatedAt':'2021-07-10T09:47:03.536Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988ab',
                    'addressLine1':'Shrinagar Cross',
                    'addressLine2':'Near KOF',
                    'city':'Hubli',
                    'district':'Dharwad',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'580031',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.536Z',
                    'updatedAt':'2021-07-10T09:47:03.536Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988ac',
                    'addressLine1':'',
                    'addressLine2':'ALIYABAD BLOCK- II',
                    'city':'KIADB INDUSTRIAL AREA, VIJAYAPURA',
                    'district':'Vijayapura (Bijapur)',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'586101',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.536Z',
                    'updatedAt':'2021-07-10T09:47:03.536Z'
                 },
                 {
                    'products':[
  
                    ],
                    '_id':'60e96c97b5844c20317988ad',
                    'addressLine1':'Yellupura Village',
                    'addressLine2':'KasabaHobli, Near KSSIDC Industrial Area',
                    'city':'Doddaballapura Taluk',
                    'district':'Bengaluru (Bangalore) Rural',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'561203',
                    'primaryAddress':false,
                    '__v':0,
                    'createdAt':'2021-07-10T09:47:03.536Z',
                    'updatedAt':'2021-07-10T09:47:03.536Z'
                 }
              ],
              '_id':'60e96c97b5844c2031798891',
              'outletProducts':[
  
              ],
              'rating':'4',
              'storeName':'CENTRAL WAREHOUSING CORPORATION',
              'gstin':'29AAACC1206D2ZB',
              'storeCategory':'Warehouse / Depot, Bonded Warehouse, Recipient of Goods or Services, Service Provision',
              'createdAt':'2021-07-10T09:47:03.731Z',
              'updatedAt':'2021-07-10T09:47:03.731Z',
              '__v':0
           },
           'verified':'Yes',
           'createdAt':'2021-07-10T09:47:03.909Z',
           'updatedAt':'2021-07-10T09:48:03.007Z',
           '__v':0
        },
        {
           '_id':'60e979b5f8e7b920e9e242db',
           'firstName':'Sachin',
           'lastName':'Shivanna',
           'email':'Sachin.shivanna01@gmail.com',
           'phone':'8660146727',
           'address':{
              'products':[
  
              ],
              '_id':'60e979b5f8e7b920e9e242d2',
              'addressLine1':'Lakshmi Devi Nileya',
              'addressLine2':'N Nidagodu',
              'city':'Belur',
              'district':'Hassan',
              'state':'Karnataka',
              'country':'India',
              'pinCode':'573115',
              'primaryAddress':true,
              'createdAt':'2021-07-10T10:43:01.279Z',
              'updatedAt':'2021-07-10T10:43:01.279Z',
              '__v':0
           },
           'isRetailer':true,
           'storeDetails':{
              'address':[
                 {
                    'products':[
                       {
                          '_id':'16',
                          'productCode':'p-1',
                          'name':'Sugar',
                          'price':'25',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'50',
                          'measureUnit':'kg',
                          'img':'https://5.imimg.com/data5/EN/XI/MQ/SELLER-60787276/icumsa-45-sugar-500x500.png',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'15',
                          'productCode':'p-2',
                          'name':'Wheet',
                          'price':'30',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'40',
                          'measureUnit':'kg',
                          'img':'https://sc04.alicdn.com/kf/U91b4778057894ffeb6ba0c88b36ccaebf.jpg',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'14',
                          'productCode':'p-3',
                          'name':'Ragi',
                          'price':'20',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'50',
                          'measureUnit':'kg',
                          'img':'https://www.netmeds.com/images/cms/wysiwyg/blog/2019/12/1577431411_Ragi_Nutrition_big_1.jpg',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'13',
                          'productCode':'p-4',
                          'name':'Rice',
                          'price':'25',
                          'category':'Grocery',
                          'brand':'',
                          'availQty':'50',
                          'measureUnit':'kg',
                          'img':'https://www.thespruceeats.com/thmb/4f4z8htcPWAtBaGmxy_km88Ee5c=/1732x1299/smart/filters:no_upscale()/Basmati-rice-583f907f3df78c0230257ac3.jpg',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'12',
                          'productCode':'p-5',
                          'name':'Gooday',
                          'price':'10',
                          'category':'Packed Food',
                          'brand':'Britannia',
                          'availQty':'50',
                          'measureUnit':'packs',
                          'img':'data:image/jpeg;base64,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',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'11',
                          'productCode':'p-6',
                          'name':'Bourbon',
                          'price':'20',
                          'category':'Packed Food',
                          'brand':'Britannia',
                          'availQty':'50',
                          'measureUnit':'packs',
                          'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT0c0F_MGDd8VkYghzKpXPCRpYEw7-LNE2A&usqp=CAU',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'10',
                          'productCode':'p-7',
                          'name':'Marie Gold',
                          'price':'10',
                          'category':'Packed Food',
                          'brand':'Britannia',
                          'availQty':'75',
                          'measureUnit':'packs',
                          'img':'https://5.imimg.com/data5/XM/XN/MY-12901391/britannia-marie-gold-biscuits-500x500.png',
                          'priceUnit':'Rs'
                       },
                       {
                          '_id':'9',
                          'productCode':'p-8',
                          'name':'Oreo',
                          'price':'20',
                          'category':'Packed Food',
                          'brand':'Oreo',
                          'availQty':'40',
                          'measureUnit':'packs',
                          'img':'https://images-na.ssl-images-amazon.com/images/I/71yCDAz1RIL._SL1500_.jpg',
                          'priceUnit':'Rs'
                       }
                    ],
                    '_id':'60e979b5f8e7b920e9e242d3',
                    'addressLine1':'N G O COMPLEX',
                    'addressLine2':'NEAR BUS STAND',
                    'city':'BELUR',
                    'district':'Hassan',
                    'state':'Karnataka',
                    'country':'India',
                    'pinCode':'573115',
                    'primaryAddress':true,
                    '__v':0,
                    'createdAt':'2021-07-10T10:43:01.275Z',
                    'updatedAt':'2021-07-10T10:43:01.275Z'
                 }
              ],
              '_id':'60e979b5f8e7b920e9e242d0',
              'outletProducts':[
  
              ],
              'rating':'3',
              'storeName':'BELUR BOOK CENTRE',
              'gstin':'29AKYPA4183E1ZU',
              'storeCategory':'Retail Business',
              'createdAt':'2021-07-10T10:43:01.463Z',
              'updatedAt':'2021-07-10T10:43:01.463Z',
              '__v':0
           },
           'verified':'Yes',
           'createdAt':'2021-07-10T10:43:01.634Z',
           'updatedAt':'2021-07-10T10:43:26.478Z',
           '__v':0
        }
     ];

     res.status(201).json({
        responseData: responseData
    });
    res.send();
});

module.exports = router;