function(){
var ecm = {{dl.ecommerce}},
    formateProductData = {{fn.formateProductData ---product}},
    ld,
    list,
    prods; 

    if (ecm && ecm.impressions) {
      ld = ecm.impressions.listDetail;
        if (ecm.impressions.listDetail) {
            list = ld.listLocation + '-' + ld.listType + '-' + ld.menuLevel + '-' + ld.filtr;
        }
		if  (ecm.impressions.products) {
          prods = ecm.impressions.products,
            imps = [];
          for (var i = 0; i < prods.length; i++) {
            prods[i].list=list;
            imps.push(formateProductData(prods[i]));
          }
        }  
    }
  return imps;
}

