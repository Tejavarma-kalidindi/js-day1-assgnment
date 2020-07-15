//Console object has different methods in js
/*console.log()
1.To print output to the console
2.can be any thing like string,array etc
*/
console.log("abc");
/*console.error()
1.shows an error message in the console
2.usually in red color*/
console.error("its an error");
/*console.warn()
1.shows an warning sign in console
2.usually in yellow color
*/
console.warn("its a warning");
/*
1.clear the console
*/
console.clear();
/*
1.show the data in a table format in console
*/
var a = 1;
var b = 2;
var c = 3;
console.table({ a, b, c });
/*
1.shows the time taken to run the block between them
*/
console.time("time");
//some block of code
console.timeEnd("time");
/*
1.count the number that the function hit by counting method
*/
console.count(i);
/*
1.group and groupend method are used to group content
between them*/
console.group("group");
//
console.groupEnd("group");
