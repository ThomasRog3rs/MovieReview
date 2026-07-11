export default function (eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Date filters
  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("htmlDateString", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("excerpt", (content, length = 180) => {
    const text = content
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (text.length <= length) {
      return text;
    }

    return `${text.slice(0, text.lastIndexOf(" ", length)).trim()}…`;
  });

  // Current year shortcode (for footer copyright)
  eleventyConfig.addShortcode("currentYear", () =>
    String(new Date().getFullYear())
  );

  // Collection named "reviews" (plural) built from items tagged "review" (singular).
  // Accessible in templates as collections.reviews.
  eleventyConfig.addCollection("reviews", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("review")
      .sort((a, b) => b.date - a.date);
  });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
