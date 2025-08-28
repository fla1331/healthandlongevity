const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copia as pastas inteiras de assets para a pasta final
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Cria uma coleção para as páginas (não-posts)
  eleventyConfig.addCollection("pages", function(collection) {
      return collection.getFilteredByGlob("./src/pages/*.njk");
  });
  
  // Adiciona o filtro de data para ser usado nos templates
  eleventyConfig.addFilter("date", (dateObj) => {
    if (dateObj) {
      const date = DateTime.fromISO(dateObj, { zone: "utc" });
      if (date.isValid) {
        return date.toFormat("yyyy-LL-dd");
      }
    }
    return "";
  });
  
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    }
  };
};