'use strict';

function collectSameElements(collectionA, objectB) {
  var a = objectB.value;
  var arr = [];
  for(var i of collectionA){
    for(var j of a){
      if(i===j){
        arr.push(i);
        break;
      }
    }
  }
  return arr;
}
