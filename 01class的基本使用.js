function Person(name, age) {
    this.name = name
    this.age = age


}

Person.info = 'aaaa'

const p1 = new Person('nono', 1)
// console.log(p1)
// console.log(p1.name)
// console.log(p1.age)
// console.log(p1.info)
//实例属性：通过new出来的实例访问到的属性
//静态属性：通过构造函数，直接访问到的属性，
//分割线
//console.log('------------------')

class Animal{
    //构造器，每一个类都有一个
    //如果没有指定的构造器，也会有一个默认的看不见的构造器
    //作用：每次new的时候， 必然会优先执行构造器
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static info = "eee"
}

const a1 = new Animal('yvan', 2)
// console.log(a1)

// console.log(Animal.info)





//𝙏𝙞𝙢𝙚 𝙬𝙖𝙞𝙩𝙨 𝙛𝙤𝙧 𝙣𝙤 𝙤𝙣𝙚. 𝙏𝙧𝙚𝙖𝙨𝙪𝙧𝙚 𝙚𝙫𝙚𝙧𝙮 𝙢𝙤𝙢𝙚𝙣𝙩 𝙮𝙤𝙪 𝙝𝙖𝙫𝙚. 
//时间不等人，珍惜你所拥有的每分每秒吧！