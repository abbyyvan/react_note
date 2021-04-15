//这是父类
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}


//这是子类，美国人
class American {
   

}

const a1 = new American('jack', 20)

console.log(a1)

//这是子类，中国人
class Chinese {
    
}

const c1 = new Chinese('小轩',23)
console.log(c1)