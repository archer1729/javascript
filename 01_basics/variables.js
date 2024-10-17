// there are three types you can use variables in javascript..
// 1. let
// 2. const
// 3. var 

//if u declare variable using let then you can re-assign it.
// let is block-scoped.
//example..
 let accountEmail="rinkujagtap003@gmail.com";

 // if u declare variable using const then you cant re-assign or re-declare it.
 // const is block-scoped.
 //example..
 const accountId=2024301;


 //now-a-days we don't use var to declare variables due to block-scope and functional-scope issues.
 //example..
 var accPassword="root";

// lets try re-assigning the values for variables and see the out put.
//Even, if u re-assign the value ,it wont change.
 const accountId=2024302;
 // above code of line shows error.

 let accountEmail="rinkujagtap56@gmail.com";
// above code of line shows syntax error.

// if u don't assign value to var it will show as "undefined" .


 var accPassword=""
 // when we declare using var then assigned recent value is printed.

//this is how you print in js.
 console.log(accPassword);
 console.log(accountId);
 console.log(accountEmail);