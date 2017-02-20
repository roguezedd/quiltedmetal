function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>" +
      escapeXml(data.title) +
      "</title><meta name=\"description\"" +
      attr("content", data.description) +
      "><link rel=\"dns-prefetch\" href=\"//fonts.googleapis.com\"><link rel=\"alternate\" type=\"application/rss+xml\" title=\"Linked Hearts Quilting Feed\"" +
      attr("href", data.rssLink) +
      "><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,600\" type=\"text/css\" media=\"all\"><link rel=\"stylesheet\" href=\"/assets/css/normalize.css\" type=\"text/css\" media=\"all\"><link href=\"https://fonts.googleapis.com/css?family=Merienda|Parisienne\" rel=\"stylesheet\"><link rel=\"stylesheet\" href=\"/assets/css/font/monosocialiconsfont.css\" type=\"text/css\" media=\"all\"><link rel=\"stylesheet\" href=\"/assets/css/style.css\" type=\"text/css\" media=\"all\"><script type=\"text/javascript\" src=\"js/scripts.js\"></script></head>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
