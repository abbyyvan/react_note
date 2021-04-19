
//onClick只接受function作为处理函数
//箭头函数本身就是一个匿名函数function函数

<button onClick = { ()=> {}} 按钮 </ button>

btn.onclick = function (){

}

//就等于
btn.onClick = () =>{}

setTimeOut(function(){}, 
    //this指向window
1000)

setTimeOut( ()=>{} ,
10000)
