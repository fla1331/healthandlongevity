const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy({ 'src/posts/assets': 'assets' });
    
    // Coleção que busca todas as páginas, incluindo posts
    eleventyConfig.addCollection("all_pages", function(collection) {
      return collection.getFilteredByGlob([
        "src/**/*.njk",
        "src/**/*.md",
        "src/**/*.html",
      ]);
    });

    eleventyConfig.addFilter("rssDate", (date) => pluginRss.rssDate(date));
    
    return {
        dir: {
            input: "src",
            output: "docs"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};