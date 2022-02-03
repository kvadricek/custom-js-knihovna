function() {
    var cookieStorage = {{}},
        cookiesURL = {{ }},
        cookiesAllowed;

    if (cookieStorage !== undefined) {
        cookiesAllowed = cookieStorage;
    } else {
        completeQuery = {{}};
        splitQuery = completeQuery.split("&");
         for (var i = 0; i < splitQuery.length; i++) {
            if (splitQuery[i].indexOf("consent") != -1) {
            cookiesAllowed = splitQuery[i]
            }
        }
    }
    return cookiesAllowed;
}





