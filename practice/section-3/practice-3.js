'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arrGroup = collectionA.map((ele) => GetElemAndCount(ele))
    .reduce((arr,newElem) => {
      var a = arr.find((e) => e.key === newElem.key);
      if(a){
        a.count++;
      } else{
        arr.push({key: newElem.key, count:1});
      }
      return arr;
    },[]);
  return arrGroup.map((elem) => {//遍历A中所以元素，均执行以下功能
    objectB.value.forEach((e) => {//如果存在A中元素B中也有，A.count--;
      if(elem.key === e){
        elem.count -= parseInt(elem.count/3);
      }
    });
    return elem
  });
}

function GetElemAndCount(ele){
  return {key: ele[0], count:1};
}
