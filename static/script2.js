$(document).ready(function () {

  // add bootstrap table styles to pandoc tables
  $('tr.header').parent('thead').parent('table').addClass('table table-condensed');

  // initialize mathjax
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://mathjax.rstudio.com/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  document.getElementsByTagName("head")[0].appendChild(script);

});
