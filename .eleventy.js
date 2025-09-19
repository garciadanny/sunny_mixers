const now = String(Date.now())

module.exports = function (eleventyConfig) {
  // === PASSTHROUGH COPY ===
  // Copy the entire styles directory to output
  eleventyConfig.addPassthroughCopy("src/css/");

  // === WATCH TARGETS ===
  // Watch CSS files for changes during development
  eleventyConfig.addWatchTarget("src/css/**/*.css");

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