
function findDuplicates(arr) {
    var duplicates = [];
    var uniqueElements = new Set();//to perform  has()we use Set method here
    
    for (var i = 0; i < arr.length; i++) {
      var currentElement = arr[i];
      
      // If the element is already in uniqueElements, it is a duplicate
      if (uniqueElements.has(currentElement)) {
        duplicates.push(currentElement);
      } else {
        // Otherwise, add it to uniqueElements
        uniqueElements.add(currentElement);
        
      }
    }
    
    console.log(duplicates)
    
    var filteredDuplicates = [...new Set(duplicates)];
    
    return filteredDuplicates;
  }
  
  let arr = [2, 5, 3, 2, 2, 1, 4, 1, 3];
  console.log(findDuplicates(arr)); // Output: [2, 1, 3]
  

