function fullNumbers(numbers){
    let arr = [];
    for(let i = 0; i < numbers; i++){
        arr[i] = parseInt( (Math.random() * numbers) );
    }
    return arr;    
}

function bubbleSort(arr){

    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
}

function selectionSort(arr){
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
        minIdx = i;
        for(var  j = i+1; j<len; j++){
            if(arr[j]<arr[minIdx]){
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}


function insertionSort(arr){
    var i, len = arr.length, el, j;
  
    for(i = 1; i<len; i++){
        el = arr[i];
        j = i;
  
        while(j>0 && arr[j-1]>toInsert){
            arr[j] = arr[j-1];
            j--;
        }
  
     arr[j] = el;
    }
  
    return arr;
}

function mergeSort(arr){
    var len = arr.length;
    if(len <2)
       return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

function quickSort(arr, left, right){
    var len = arr.length, 
    pivot,
    partitionIndex;
    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
     
        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
   return arr;
}

function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }


 /**
  * heap sort
  */

  function heapSort(arr){
    var len = arr.length,
        end = len-1;
  
    heapify(arr, len);
    
    while(end > 0){
     swap(arr, end--, 0);
     siftDown(arr, 0, end);
    }
    return arr;
  }
  function heapify(arr, len){
    // break the array into root + two sides, to create tree (heap)
    var mid = Math.floor((len-2)/2);
    while(mid >= 0){
     siftDown(arr, mid--, len-1);    
   }
 }
function siftDown(arr, start, end){
    var root = start,
        child = root*2 + 1,
        toSwap = root;
    while(child <= end){
       if(arr[toSwap] < arr[child]){
         swap(arr, toSwap, child);
       }
       if(child+1 <= end && arr[toSwap] < arr[child+1]){
         swap(arr, toSwap, child+1)
       }
       if(toSwap != root){
          swap(arr, root, toSwap);
          root = toSwap;
       }
       else{
          return; 
       }
       toSwap = root;
       child = root*2+1
   }
 }
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
      
          

//let arr = bubbleSort( fullNumbers(100000) )
console.time('t1');
console.log('Bublesort')
console.log( bubbleSort( fullNumbers(100000) ) )
console.timeEnd('t1');

//console.log('Insertionsort')
//console.log( insertionSort( fullNumbers(100000) ) )
//console.log('Selectionsort')
//console.log( selectionSort( fullNumbers(100000) ) )
//console.log('Mergesort')
//console.log( mergeSort( fullNumbers(1000000) ) )
//console.log('Quicksort')
//console.log( quickSort( fullNumbers(100) ) )
//console.log('Heapsort');
//console.log( heapSort( fullNumbers(100000) ) )
