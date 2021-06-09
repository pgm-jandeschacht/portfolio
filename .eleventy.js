const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    'src/main.css': 'assets/main.css',
    'src/images': 'assets/images',
    'src/js': 'assets/js',
  });
  return {
    dir: {
      input: 'views',
      output: 'docs'
    },
    pathPrefix: '/portfolio/',
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};