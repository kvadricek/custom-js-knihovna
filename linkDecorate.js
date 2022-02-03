// Managed by Karolína Markytánová - karolina.markytanova@etnetera.cz

var links = document.querySelectorAll("a[href*='catalogues.metro-group.com']"),  //all links where href contains XY
  consent = "?consent=" + {{ Cookies Allowed (CK)}};

for (i in links) {
  links[i].href += consent;  //add XY to an original href value
}
