//  声名一个变量a,同时指定它的类型为number
var a;
//  在以后的使用过程中,a的值只能是number
a = 10;
a = 20;
//  a='hello'   会报错
var b;
b = "hello";
//  声明完变量直接进行赋值
//  let c:boolean=true
//  如果变量的声明和复制是同时进行的,TS会自动对变量进行类型检测
var c = true;
//  JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
console.log(sum(111, 222));
