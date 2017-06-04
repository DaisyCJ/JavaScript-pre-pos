'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((elem) => {//遍历A中所以元素，均执行以下功能
    objectB.value.forEach((e) => {//如果存在A中元素B中也有，A.count--;
      if(elem.key === e){
        elem.count -= parseInt(elem.count/3);
      }
    });
    return elem
  });
}
