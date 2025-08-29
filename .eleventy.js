const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy({ 'src/posts/assets': 'assets' });

    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/**/*.njk");
    });
    
    // LINHA CORRETA QUE VOCÊ DEVE ADICIONAR
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