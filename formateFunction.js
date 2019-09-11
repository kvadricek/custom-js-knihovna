function() {
  return function(product) {
    
    if (product.productType == 'Obaly') {
      return undefined;
    }
 	var transformKey = function(param) {
      switch(param){
        case 'man':
          return 'id';
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
 	var transformValue = function(param,value) {
      switch(param) {
        case "price":
        case "priceVat":
          return Math.round(parseFloat(value)*100)/100;
          break; 
        default:
          return value;
      }
    }

    var newProd = {};

    for (var param in product) {
      newProd[transformKey(param)] = transformValue(param,product[param]);
    }
    
    return newProd;
    }
}
