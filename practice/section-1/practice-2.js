'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr=[];
  for(var i of collectionA){
    for(var j of collectionB[0]){
      if(i===j){
        arr.push(i);
        break;
      }
    }
  }
  return arr;
}
