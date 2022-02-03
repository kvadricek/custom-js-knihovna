<script>
  (function(){
    var links;
    var utm = {{Page Query UTM}};
    var utmMod;
    var href;
    var decorable = "own-business-day.com";

    links = document.getElementsByTagName("A");
    for (var i = 0; i < links.length; i++) {
      href = links[i].getAttribute("href");
      if (href && href.indexOf(decorable) != -1) {
        utmMod = (href.indexOf("?") == -1) ? "?" : "&"
        utmMod += utm;
        links[i].setAttribute("href",href + utmMod);
      }
    }

  })();
</script>
