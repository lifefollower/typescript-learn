##  面向对象
要想面向对象,操作对象,首先需要有个对象;
要创建对象,必循要先定义类,所谓的类可以理解为对象的模型;
程序中可以根据类创建指定类型的对象;
举例来说:
可以通过Person类来创建人的对象,通过Dog类创建狗的对象,不同的类可以创建不同的对象;

### 定义类
```ts
class 类名{
    属性名:类型;

    constructor(参数:类型){
        this.属性名 = 参数;
    }

    方法名(){
        ....
    }
}
```
示例:
```ts
class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log(`Hello,I am ${this.name}`);
        
    }
}
```
使用类:
```ts
const p = new Person('haha',18);
p.sayHello();
```
### 构造函数
可以使用constructor定义一个构造器方法;
>注:在TS中只能有一个构造器方法!
例如:
```ts
class C{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
```
同时也可以直接将属性定义在构造函数中:
```ts
class C{
    constructor(public name:string,public age:number){

    }
}
```
上面两种定义方法是完全相同的
>注:子类继承父类时,必须调用父类的构造方法(如果子类中也定义了构造方法)
例如:
```ts
class A{
    protected num:number;
    constructor(num:number){
        this.num=num;
    }
}

class X extends A{
    protected name:string;
    constructor(num:number,name:string){
        super(num);
        this.name=name;
    }
}
```
如果在X类中不调用super将会报错!
### 封装
对象实质上就是属性和方法的容器,它的主要作用就是存储属性和方法,这就是所谓的封装
默认情况下,对象的属性是可以任意的修改的,为了确保数据的安全性,在TS中可以对属性的权限进行设置
-   静态属性(static):
    -   声明为static的属性或方法不再属于实例,而是类的属性
-   只读属性(readonly):
    -   如果在声明属性时添加一个readonly,则属性只读无法修改
-   TS中属性具有三种修饰符:
    -   public(默认值),可以在类、子类和对象中修改
    -   protected,可以在类、子类中修改
    -   private,可以在类中修改

示例:
```ts
/* public */
class Person{
    public name:string;
    public age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log(`hello,${this.name}`)
    }
}

class Employee extends Person{
    constructor(name:string,age:number){
        super(name,age);
        this.name=name;
    }
}

const p=new Person('haha',18);
p.name='hehe';  //  可以通过对象修改

/* protected */
...
p.name='hehe';  //  不能修改

/* private */
...
    constructor(name:string,age:number){
        this.name=name; //  可以修改
        this.age=age;
    }
```
### 属性存取器
对于一些不希望被任意修改的属性,可以将其设置为private
直接将其设置为private将导致无法通过对象修改其中的属性
我们可以在类中定义一组读取、设置属性的方法,这种对属性读取或设置的属性被称为属性的存取器
读取属性的方法叫做setter方法,设置属性的方法叫做getter方法
示例:
```ts
class Peron{
    private _name:string;

    constructor(name:string){
        this._name=name;
    }

    get name(){
        return this._name;
    }

    set name(name:string){
        this.name=name;
    }
}

const p1 = new Person('haha');
//实际通过调用getter方法读取name属性
console.log(p1.name);
//实际通过调用setter方法修改name属性
p1.name = 'hehe';
```
### 静态属性
静态属性(方法),也称为类属性.使用静态属性无需创建实例,通过类即可直接使用
静态属性使用static开头
示例:
```ts
class Tools{
    static PI = 3.1415926;

    static sum(num1:number,num2:number){
        return num1+num2;
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123,456))
```
**this**
在类中,使用this表示当前对象

### 继承
继承是面向对象中的另一个特性
通过继承可以将其他类中的属性和方法引入到当前类中
示例:
```ts
calss Animal{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name}wangwangwang`);
    }
}

const dog=new Dog('wangcai',3);
dog.bark();
```
通过继承可以在不修改类的情况下完成对类的扩展

### 重写
发生继承时,如果子类中的方法会替换掉父类中的同名方法,这就称为方法的重写
示例:
```ts
class Animal{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    run(){
        console.log('run')
    }
}

class Dog extends Animal{
    bark(){

    }

    run(){
        console.log('重写run');
    }
}

const dog = new Dog('wangcai',3);
dog.bark();
```
在子类中可以使用super来完成对父类的引用

### 抽象类(abstract class)
抽象类是专门用来被其他类所继承的类,它只能被其他类所继承,不能用来创建实例
```ts
abstract class Animal{
    abstract run():void;
    bark(){

    }
}

class Dog extends Animal{
    run(){

    }
}
```
使用abstract开头的方法叫做抽象方法,抽象方法没有方法体只能定义在抽象类中,继承抽象类时抽象方法必须要实现

### 接口(interface)
接口的作用类似于抽象类,不同点在于:接口中的所有方法和属性都是没有实值的,换句话说接口中的所有方法都是抽象方法;
接口主要负责定义一个类的结构,接口可以去限制一个对象的接口:对象只有包含接口中定义的所有属性和方法时才能匹配接口;
同时,可以让一个类去实现接口,实现接口时类中要保护接口中的所有属性;
示例(检查对象类型):
```ts
interface Person{
    name:string;
    sayHello():void;
}

function fn(per:Person){
    per.sayHello();
}

fn({name:'haha',sayHello(){console.log('hello')}});
```
示例(实现):
```ts
interface Person{
    name:string;
    sayHello():void;
}

class Student implements Person{
    constructor(public name:string){

    }

    sayHello(){
        console.log('hello,I am'+this.name)
    }
}
```

### 泛型(Generic)
定义一个函数或类时,有些情况下无法确定其中要使用的具体类型(返回值、参数、属性的类型不能确定);
此时泛型便能发挥作用;
示例:
```ts
function test(arg:any):any{
    return arg;
}
```
上例中,test函数有一个参数类型不确定,但是能确定的是其返回值的类型和参数的类型是相同的;
由于类型不确定所以参数和返回值均使用any,但是很明显这样做是不合适的;
首先使用any会关闭TS的类型检查,其次这样设置也不能体现出参数和返回值是相同的类型;

####    泛型函数
**创建泛型函数**

```ts
function test<T>(arg:T):T{
    return arg;
}
```
这里的<T>就是泛型;
T是我们给这个类型起的名字,设置泛型后即可在函数中使用T表示该泛型;
所以泛型其实很好理解,就表示某个类型;

**使用泛型函数**

方式一(直接使用):
`test(10)`
使用时可以直接传递参数使用,类型会由TS自动推断出来,但有时编译器无法自动判断时还需使用下列方式
方式二(指定类型):
`test<number>(10)`
也可以在函数后手动指定泛型;

**函数中声明多个泛型**

可以同时指定多个泛型,泛型间使用逗号隔开:
```ts
function test<T,K>(a:T,b:K):K{
    return b;
}

test<number,string>(10,'hello');
```
使用泛型时,完全可以将泛型当成是一个普通的类去使用;

**泛型类**

类中同样可以使用泛型:
```ts
class MyClass<T>{
    prop:T;

    constructor(prop:T){
        this.prop = prop;
    }
}
```

**泛型继承**

除此之外,也可以对泛型的范围进行约束
```ts
interface MyInter{
    length:number;
}

function test<T extends MyInter>(arg:T):number{
    return arg.length;
}
```
使用`T extends MyInter`表示泛型T必须是MyInter的子类,不一定非要使用接口类,抽象类同样适用

