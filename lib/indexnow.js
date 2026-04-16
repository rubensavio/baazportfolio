/**
 * IndexNow integration — instant URL submission to Bing/ChatGPT index.
 *
 * Key file: /public/afa7decca275bce3fd4e335a4b8ac13a.txt
 * Verify at: https://baaz.pro/afa7decca275bce3fd4e335a4b8ac13a.txt
 *
 * Usage: call submitToIndexNow(["/blog/my-new-post"]) whenever content is published.
 */

const INDEXNOW_KEY = "afa7decca275bce3fd4e335a4b8ac13a";
const SITE_HOST = "baaz.pro";

/**
 * Submit one or more URL paths to IndexNow.
 * @param {string[]} paths - e.g. ["/blog/my-post", "/services/web-development"]
 */
export async function submitToIndexNow(paths) {
  const urlList = paths.map((p) => `https://${SITE_HOST}${p}`);

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return { status: res.status, ok: res.ok };
}
