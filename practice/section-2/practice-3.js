'use strict';

function countSameElements(collection) {
  return collection.map((ele) => GetElemAndCount(ele))
    .reduce((arr,newArr) => {
    var elem = arr.find((e) => e.name===newArr.name);
    if(elem){
      elem.summary += newArr.summary;
    }
    else{
      arr.push({name:newArr.name, summary:newArr.summary});
    }
    return arr;
    },[])
}

function GetElemAndCount(arr) {
  if(arr.length ===1){
    return {name: arr, summary: 1};
  }
  var RegExGroup = [/(\w)\[(\d+)\]/,/(\w)-(\d)/, /(\w):(\d)+/];
  var whichRegEx = RegExGroup.find((e) => arr.match(e));
  var elem = arr.match(whichRegEx);
  return {name: elem[1], summary: parseInt(elem[2])};
}
  /*  var arr = [];
  for(var i of collection) {
    if(i.length===1){//判断是否为单纯的字符
      if (ifHas(arr, i)) {//判断是否存在这个数，如果存在就count++
        addCount(arr,i);
      }
      else//不存在就创建对象
        arr.push({name: i, summary: 1});
    }
    else{//不单纯则另外处理
      var counts=GetNum(i);
      if(ifHas(arr,i[0])){
         for(var k=0;k<(counts);k++){
           addCount(arr,i[0]);
         }
       }
       else
         arr.push({name: i[0],summary:counts[0]});
    }
  }
  return arr;
}

function GetNum(arr){//解析出数字
  var GetNumArr = [];
  for(var j of arr){
    if(j>=0&&j<=9){
      GetNumArr.push(j);
    }
  }
  var a = GetNumArr.map(Number);//将字符串转换为数字
  if(a.length>1){return a[0]*10+a[1];}//t[10]
  return a;
}

function addCount(arr,a){
  arr.forEach(function (element) {
    if (a === element.name) {
      element.summary++;
    }
  });
}

function ifHas(arr,a){//判断
  var m=false;
  arr.forEach(function (element) {
    if(element.name===a)
    {  m=true;}
  })
  return m;
}
*/
