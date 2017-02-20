function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      classAttr = __helpers.ca,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w("<nav class=\"qs-main-nav\"><ul>");

    forEach(data.collections.navItems, function(navItem) {
      out.w("<li class=\"qs-main-nav__item\"><a" +
        classAttr({
          "qs-main-nav__link": true,
          "qs-main-nav__link--selected": navItem.path === data.path
        }) +
        " href=\"/" +
        escapeXmlAttr(navItem.path.replace(".md", ".html")) +
        "\">" +
        escapeXml(navItem.title) +
        "</a></li>");
    });

    out.w("</ul></nav>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
