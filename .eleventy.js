const now = String(Date.now())

module.exports = function (eleventyConfig) {
  // === PASSTHROUGH COPY ===
  // Copy the entire styles directory to output
  eleventyConfig.addPassthroughCopy("src/css/");
  // Copy assets directory to output
  eleventyConfig.addPassthroughCopy("src/assets/");
  // Copy JavaScript files to output
  eleventyConfig.addPassthroughCopy("src/js/");

  // === WATCH TARGETS ===
  // Watch CSS files for changes during development
  eleventyConfig.addWatchTarget("src/css/**/*.css");
  // Watch asset files for changes during development
  eleventyConfig.addWatchTarget("src/assets/**/*");
  // Watch JS files for changes during development
  eleventyConfig.addWatchTarget("src/js/**/*.js");

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
};