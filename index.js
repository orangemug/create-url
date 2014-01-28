/**
 * Create a URL in a human readable way
 *
 *     createURL("/path/{uuid}", {
 *       uuid: "1234",
 *       index: 3
 *     }) // => "/path/1234?index=3"
 *
 * @param {String} path to substitute into
 * @param {Object} params to substitute into the path/params
 * @return {String} the new url
 */
var FRAGMENT_REGEX = /#.*$/;
var PARAM_REGEX = /\?(.*)$/;

function createURL(path, params) {
  var k, v, paramStr, matches, pathMatch, fragmentMatch, fragment, urlParams = [];

  matches = path.match(FRAGMENT_REGEX);
  if(matches) {
    path = path.replace(FRAGMENT_REGEX, "");
    fragment = matches[0];
  }

  matches = path.match(PARAM_REGEX);
  if(matches) {
    path = path.replace(matches[0], "");
    urlParams = matches[1].split("&");
  }

  for(k in params) {
    v = params[k];
    if(v === undefined || v === null) {
      delete params[k];
    } else {
      // NOTE: http://stackoverflow.com/questions/14317861/difference-between-escape-encodeuri-encodeuricomponent
      pathMatch = path.match("{"+k+"}");
      if(fragment) {
        fragmentMatch = fragment.match("{"+k+"}");
      }

      if(pathMatch) {
        delete params[k];
        path = path.replace(pathMatch, encodeURI(v));
      } else if(fragment && fragmentMatch) {
        delete params[k];
        fragment = fragment.replace(fragmentMatch, encodeURIComponent(v));
      } else {
        paramStr = encodeURIComponent(k)+"="+encodeURIComponent(v);
        urlParams.push(paramStr)
      }
    }
  }

  // Do we stll have unmatched params
  if(path.match(/\{[^{}]+\}/)) {
    return;
  }

  if(urlParams.length > 0) {
    path += "?" + urlParams.join("&");
  }

  if(fragment) {
    path += fragment;
  }

  return path;
}

module.exports = createURL;
