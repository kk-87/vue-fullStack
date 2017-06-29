/**
 * 判断是否为空
 * @param v：需要判断的数据
 * @returns {boolean}
 */
export const isEmpty = function (v) {
  switch (typeof v) {
    case 'undefined':
      return true;
    case 'string':
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0 || v == 'null') return true;
      break;
    case 'boolean':
      if (!v) return true;
      break;
    case 'number':
      if (0 === v || isNaN(v)) return true;
      break;
    case 'object':
      if (null === v || v.length === 0) return true;
      for (var i in v) {
        return false;
      }
      return true;
  }
  return false;
}
