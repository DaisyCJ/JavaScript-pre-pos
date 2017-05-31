'use strict';

function countSameElements(collection) {
  var arr = [];
  for(var i of collection) {
    if (ifHas(arr, i)) {//判断是否存在这个数，如果存在就count++
      arr.forEach(function (element) {
        if (i === element.key) {
          element.count++;
        }
      });
    }
    else//不存在就创建对象
      arr.push({key: i, count: 1});
  }
  return arr;
}

function ifHas(arr,a){//判断
  var m=false;
  arr.forEach(function (element) {
    if(element.key===a)
    {  m=true;}
  })
  return m;
}
