const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/*.xml");
  eleventyConfig.addPassthroughCopy("./src/*.xsl");

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