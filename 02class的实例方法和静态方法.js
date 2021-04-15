function Person(name, age) {
    this.name = name
    this.age = age


}
//info属性，直接挂在给了构造函数， 所以他是静态属性
Person.info = 'aaaa'

//实例方法
Person.prototype.say = function() {
    //console.log('这是Person的实例方法  ')
}

//静态方法
Person.show = function() {
   // console.log('这是person的静态show方法')
}
const p1 = new Person('nono', 1)
console.log(p1)
p1.say()

//类里的静态方法用的不多
class Animal{
    //构造器，每一个类都有一个
    //如果没有指定的构造器，也会有一个默认的看不见的构造器
    //作用：每次new的时候， 必然会优先执行构造器
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static info = "eee"

    //动物的实例方法，今后会经常用到
    bark() {
        //console.log('动物的实例方法')
    }

    static show() {
        //console.log('动物的静态方法')
    }
}

const a1 = new Animal('yvan', 2)
// console.log(a1)

// console.log(Animal.info)



// never let anything stop you from chasing your dream
