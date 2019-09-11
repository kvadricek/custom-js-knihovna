//Makro has its own description of some parameters because it's more understandable to the client. 
//What this function does is that it transforms each product's parameter to a standardized GA ecommerce syntax. 
//This function is linked to several other custom javascript. Basically this function receives a single ecommerce object (product) and then it formates the product's syntax:

function() {
  return function(product) {
    
    if (product.productType == 'Obaly') {  //this is a customized Makro feature which filters out a specific type of products we don't want to measure
      return undefined;
    }
 	var transformKey = function(param) {    // you define the variable as a function that you assign with a certain key name of the product parameters
      switch(param){                     // here you evaluate the key name 
        case 'man':                      //...and witch each match
          return 'id';                  // you replace it with the standardized syntax key name 
          break;
        case 'priceType':
          return 'dimension18';
          break;
        case 'storeAvailability':
          return 'dimension19';
          break;
        default:
          return param;
      }
    }
 	var transformValue = function(param,value) {  //this formates the financial value into the right decimal format
      switch(param) {
        case "price":                  //in case the parameter key name matches price
        case "priceVat":              // or priceVat
          return Math.round(parseFloat(value)*100)/100;       //you round it up to the right format
          break; 
        default:
          return value;
      }
    }

    var newProd = {};           // you define the variable as an empty object 

    for (var param in product) {     // 
      newProd[transformKey(param)] = transformValue(param,product[param]); 
    }
    
    return newProd;
    }
}
