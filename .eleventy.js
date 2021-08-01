module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("inspect", require("util").inspect);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
