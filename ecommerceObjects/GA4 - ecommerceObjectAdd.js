function(){
  var ecm = {{dl.ecommerce}},
      formateProductData = {{fn.formateProductData ---GA4 product}}, // linking to a previously written formatting function
      add = [],
      prods;

  if (ecm && ecm.add && ecm.add.products) {
    prods = ecm.add.products;
    add = prods.map(formateProductData);
  }

  return add;
}
