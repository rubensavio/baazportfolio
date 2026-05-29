/**
 * Blog post presentation theme — single source for /blog/[slug] UI.
 * Default: editorial dark v2 (Playfair + Inter, baaz-v2-shell).
 */

export const BLOG_POST_THEME_V2 = "v2";

/** Default theme applied when a post omits `theme`. */
export const BLOG_POST_DEFAULT_THEME = BLOG_POST_THEME_V2;

export const BLOG_POST_THEME_ROOT_CLASS = {
  v2: "baaz-v2 blog-post-v2",
  legacy: "blog-page",
};

/** JSON-LD speakable cssSelector values — keep in sync with BlogPostPageClient markup. */
export const BLOG_POST_SPEAKABLE_SELECTORS = [
  ".blog-direct-answer",
  ".blog-intro",
  "h2",
];

export function resolveBlogPostTheme(post) {
  return post?.theme || BLOG_POST_DEFAULT_THEME;
}

export function getBlogPostRootClass(post) {
  const theme = resolveBlogPostTheme(post);
  return BLOG_POST_THEME_ROOT_CLASS[theme] || BLOG_POST_THEME_ROOT_CLASS.v2;
}
