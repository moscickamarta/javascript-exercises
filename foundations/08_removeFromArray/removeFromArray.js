const removeFromArray = function(array) {

  for(let ind=array.length-1; ind>=0; ind--) {
    for(let i=arguments.length-1; i>=0; i--){
       if (array[ind] === arguments[i]){
        array.splice(ind,1)}
    }
    }
  
  return array;
  };

// Do not edit below this line
module.exports = removeFromArray;

