module.exports = function check(str, bracketsConfig) {
  let list = [];
  let openB = [];
  let closeB = [];
  let dict = {};
  bracketsConfig.forEach(function (a) {
    openB.push(a[0]);
    closeB.push(a[1]);
    dict[a[1]] = a[0];
  });
  for (let i = 0; i < str.length; i++) {
    if (openB.includes(str[i]) && closeB.includes(str[i])) {
      if (list[list.length - 1] === str[i]) {
        list.pop();
      } else {
        list.push(str[i]);
      }
    } else if (openB.includes(str[i])) {
      list.push(str[i]);
    } else if (closeB.includes(str[i]) && list.length == 0) {
      return false;
    } else if (list[list.length - 1] === dict[str[i]]) {
      list.pop();
    }
  }
  console.log(list);
  console.log(openB);
  console.log(closeB);
  console.log(dict);
  return list.length === 0;
};
