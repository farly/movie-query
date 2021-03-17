/**
 * @param {url, queryString} 
 * @param url {String} - base url to search from
 * @param queryString {String} - string to search
 * @returns {Promise}
 */
export function search({url,queryString}) {
  return fetch(`${url}?${queryString}`).then(res => res.json()).then(res => res);
}