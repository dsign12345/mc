if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
  $(function(){ alert("jQuery + DOM loaded."); });   
}