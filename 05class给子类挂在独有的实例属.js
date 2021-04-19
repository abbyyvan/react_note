//这是父类
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log('hello')
    }

}


//这是子类，美国人
//在class类中， 可以使用extends关键字，实现子类继承父类
//语法 class子类 extends 父类
class American extends Person {
    constructor(name, age){
        //问题1：为什么调用super？
        //答案：因为一个子类通过extends关键字继承父类， 那么子类constructor构造函数中，要先调用一下super
        //问题2:super是什么？
        //答案：super()是一个函数，他是父类的构造器，子类中的super就是父类constructor的引用
        //问题3:为什么super调用后，a1的value就undefined了
        //答案：把name，age的参数传入
        super(name, age)
    } 

  

}

const a1 = new American('jack', 20)

console.log(a1)
a1.sayHello()

//这是子类，中国人
class Chinese extends Person{
    constructor(name, age,IDnumber) {
        super()
        //在子类中this只能放在super之后使用
        this.IDnumber
    }
    // sayHello() {
    //     console.log('hello')
    // }
    
}

const c1 = new Chinese('小轩',23)
console.log(c1)
c1.sayHello()