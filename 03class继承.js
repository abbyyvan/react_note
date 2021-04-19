//这是父类
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}


//这是子类，美国人
//在class类中， 可以使用extends关键字，实现子类继承父类
//语法 class子类 extends 父类
class American extends Person {
   

}

const a1 = new American('jack', 20)

console.log(a1)

//这是子类，中国人
class Chinese extends Person{
    
}

const c1 = new Chinese('小轩',23)
console.log(c1)