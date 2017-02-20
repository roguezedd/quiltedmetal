function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<header><div class=\"custom-border-vertical left\"></div><div class=\"custom-border-vertical right\"></div><div class=\"custom-border-horizontal bottom\"></div><div class=\"qs-logo\"></div><div class=\"qs-logo-text\">Linked<br>Hearts<br>Quilting</div><div class=\"social\"></div></header>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
