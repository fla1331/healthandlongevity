const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copia a pasta inteira de assets
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Copia o robots.txt
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  
  // Isso garante que o sitemap.njk seja processado e gerado como sitemap.xml
  eleventyConfig.addPassthroughCopy("./src/sitemap.njk");

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
      output: "docs",
      includes: "_includes",
      data: "_data"
    }
  };
};