reversin logic


// var array1=[1,2,3,4,5,6,7,8,9];
// var array2=[9,8,7,6,5,4,3,2,1];
// var result =[];

// var len1 = array1.length;
// var len2 = array2.length;

// for (let i=0; i<len1;i++){       
//     for(let j=0; j<len2;j++){
//         var multi  = array1[i] * array2[j];
//          var respush = result.push(multi);        
//     }
 
// }
//   console.log(result);
// alert("its working!")
// var store = prompt("enter your number");
var storage = [654987];
var output =[];
// storage.push(store);
var len =storage.length;


for (let i=0;i<6;i++){
  var fun =Math.floor(storage[i]/10);
  storage.push(fun);
  var mod = storage[i]%10;
  output.push(mod); 
}
var res=0;
for(i=0;i<6;i++)
{
    res*=10; // 54=> 540 + 6    = 546
  res+=output[i];
}
// console.log(output);
console.log(res);

var num=56723;
var rem=0;
var n=num;
while(n!=0)
  {
    rem=n%10;
    res=rem*10;
    n/=10;
  }


// var div = Math.floor(123/10);
// console.log(div);

// function stringrev(){
  
// }


