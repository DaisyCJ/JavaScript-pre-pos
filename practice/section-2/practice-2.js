'use strict';

function countSameElements(collection) {
  var arr = [];
  for(var i of collection) {
    if(i.length===1){
      if (ifHas(arr, i)) {//判断是否存在这个数，如果存在就count++
        addCount(arr,i);
      }
      else//不存在就创建对象
        arr.push({key: i, count: 1});
    }
    else{
      arr.push({key: i[0],count:+i[2]});
    }
  }
  return arr;
}

function addCount(arr,a){
  arr.forEach(function (element) {
    if (a === element.key) {
      element.count++;
    }
  });
}

function ifHas(arr,a){//判断
  var m=false;
  arr.forEach(function (element) {
    if(element.key===a)
    {  m=true;}
  })
  return m;
}
