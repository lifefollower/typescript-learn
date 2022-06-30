/* 基本声明 */

//  声名一个变量a,同时指定它的类型为number
let a: number;
//  在以后的使用过程中,a的值只能是number
a = 10;
a = 20;
//  a='hello'   会报错

let b: string;
b = "hello";

//  声明完变量直接进行赋值
//  let c:boolean=true

//  如果变量的声明和复制是同时进行的,TS会自动对变量进行类型检测
let c = true;

/* 函数声明 */

//  JS中的函数是不考虑参数的类型和个数的,TS可以声明形参类型
function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(111, 222);
//  sum(111,"222") 报错
console.log(result);

let d: any;
let e: unknown;
e = "hello";
e = true;

let s: string;

//  d的类型是any,它可以赋值给任意变量
//  s=d;

e = "hello";

//  unknown实际上就是一个类型安全的any
//  unknown类型的变量,不能直接赋值给其它变量
if (typeof e === "string") {
  s = e;
}

//  类型断言,可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;

//  void表示空,以函数为例,就表示没有返回值的函数
function fn(): void {}

//  never表示永远不会返回结果
function fn2(): never {
  throw new Error("报错");
}

//  object表示一个js对象
let obj: object;
obj = {};
obj = function () {};

//  {}用来指定对象中可以包含哪些属性
//  语法:{属性名:属性值,属性名:属性值}
//  在属性名后面加上?,表示属性是可选的
let obj1: { name: string; age?: number };
obj1 = { name: "haha", age: 18 };

//  [propName:string]:any表示任意类型的属性
let obj2: { name: string; [propName: string]: any };

//  设置函数结构的类型声明
//  语法:(形参:类型,形参:类型)=>类型
let fn1: (a: number, b: number) => number;

/* 
    数组的类型声明
    类型[]
    Array<类型>
*/
//string[]表示字符串数组
let str: string[];
str = ["a", "b", "c"];

/*
    元组就是固定长度的数组
    语法:[类型,类型,类型]
 */
let h: [string, string];
h = ["hello", "abc"];

/* 
    enum 枚举
*/
enum Gender {
  Male = 0,
  Female = 1,
}
let i: { name: string; gender: 0 | 1 };
i = {
  name: "haha",
  gender: Gender.Male,
};

//  &表示同时
let j: { name: string } & { age: number };
j = { name: "haha", age: 18 };

//  类型的别名
type myType=1|2|3|4|5
let l:myType
