const sumAll = function(first, second) {

if(first<0 || second<0){
return 'ERROR';
}

if(Number.isInteger(first)===false || Number.isInteger(second)===false){
return 'ERROR';
}

let buffor=0;
if(second<first){
  buffor=first;
  first=second;
  second=buffor;
}
let value=0;

for(let i=first; i<=second; i++){
  value+=i;
}

return value;
};

// Do not edit below this line
module.exports = sumAll;
