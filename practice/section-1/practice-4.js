'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = [];
  collectionA.forEach(function (element){
    for(var j of objectB.value){
      if(element.key===j){
        arr.push(element.key);
        break;
      }
    }
  });
  return arr;
}
