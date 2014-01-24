/**
 * Create a URI in a human readable way
 *
 *     createURI("/path/{uuid}", {
 *       uuid: "1234",
 *       index: 3
 *     }) // => "/path/1234?index=3"
 *
 * @param {String} path to substitute into
 * @param {Object} params to substitute into the path/params
 * @return {String} the new url
 */
function createURI(path, params) {
  var k, v, paramStr, tmpPath, urlParams = [];
  for(k in params) {
    v = params[k];
    if(v === undefined || v === null) {
      delete params[k];
    } else {
      // NOTE: http://stackoverflow.com/questions/14317861/difference-between-escape-encodeuri-encodeuricomponent
      tmpPath = path.replace("{"+k+"}", encodeURI(v));
      if(tmpPath !== path) {
        delete params[k];
        path = tmpPath;
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
  return path;
}

module.exports = createURI;
