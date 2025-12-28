const repeatString = function(string, times) {

  let solution='';

  if(times<0)
    return 'ERROR';

  else while(times>0){
    solution += string;
    times--;
  }
  return solution;
};

// Do not edit below this line
module.exports = repeatString;
