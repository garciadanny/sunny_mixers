const now = String(Date.now())
const markdownIt = require("markdown-it");
const markdownItImplicitFigures = require("markdown-it-implicit-figures");

module.exports = function (eleventyConfig) {
  // === PASSTHROUGH COPY ===
  // Copy the entire styles directory to output
  eleventyConfig.addPassthroughCopy("src/css/");
  // Copy assets directory to output
  eleventyConfig.addPassthroughCopy("src/assets/");
  // Copy JavaScript files to output
  eleventyConfig.addPassthroughCopy("src/js/");
  // Copy CMS config file to output
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  // === WATCH TARGETS ===
  // Watch CSS files for changes during development
  eleventyConfig.addWatchTarget("src/css/**/*.css");
  // Watch asset files for changes during development
  eleventyConfig.addWatchTarget("src/assets/**/*");
  // Watch JS files for changes during development
  eleventyConfig.addWatchTarget("src/js/**/*.js");
  // Watch CMS config file for changes during development
  eleventyConfig.addWatchTarget("src/admin/config.yml");

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  // Create a collection for blog posts
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_posts/blog/*.md");
  });

  // === FILTERS ===
  // Add date filter for formatting dates in blog posts
  eleventyConfig.addFilter("formatBlogDate", function(date) {
    if (!date) return '';
    const d = new Date(date);
    
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // Machine readable date filter
  eleventyConfig.addFilter("isoDate", function(date) {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  });

  // === MARKDOWN SETTINGS ===
  // Automatically convert <p><img></p> to <figure><img></figure>
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let md = markdownIt(options).use(markdownItImplicitFigures, {
    dataType: true,  // <figure data-type="image">, default: false
    figcaption: true
  });

  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
};