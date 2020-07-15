/*
1.var is scoped globally or a function.
2.let and const are scoped with in a block.
3.var can be updated and replaced.
4.let can be updated but not replaced.
5.const is neither updated nor replaced.
6.const must be initialized during declaration.
*/
var a = 1;
var name = "nani";
var arr = ['maths', 'physics', 'chemistry'];
var simple = { name='nani', age='20' };
{
    let name;
    name = 'nani';
}
const abbr = ['name', 'friend'];