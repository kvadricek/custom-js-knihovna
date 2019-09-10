function(){
var ecm = {{dl.ecommerce}},  // 
    formateProductData = {{fn.formateProductData ---product}},
    ld,
    list,
    prods; 

    if (ecm && ecm.impressions) {
      ld = ecm.impressions.listDetail;
        if (ecm.impressions.listDetail) {
            list = ld.listLocation + '-' + ld.listType + '-' + ld.menuLevel + '-' + ld.filtr; // here you go into the previously defined listDetail object and you put together one list variable from all the key:values the object contains 
        }
		if  (ecm.impressions.products) {
          prods = ecm.impressions.products,
            imps = [];                               //defining the variable as an empty array allows you to populate it later 
          for (var i = 0; i < prods.length; i++) {   // goes through each individual products as long as there are any 
            prods[i].list=list;                     // since products is a {object}, you cannot use the push method so you use dot notation instead (basically you take each product and you assing it a new key which has the value of a previously defined list variable  
            imps.push(formateProductData(prods[i])); // now you take the products object which now contains the list key:value, you formate it with the formateProduct function and you use push method to add it to the imps array
          }
        }  
    }
  return imps;
}

