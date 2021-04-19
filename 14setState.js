import React from 'react'

//#region 
export default class BindEvent extends React.Component {
    constructor() {
        super()

        this.state = {
            msg: '环太平洋',
            name: 'mako',
            age: '26',
            gender: 'female'

        }
    }


    //在react中有一套自己的事件绑定机制，事件名是camelcase
    //onClick里面要放一个出发函数
    render(){
        return (
            <div>
                {/*需求， 点击按钮，修改msg的值*/}
                BindEvent组件
                <hr />
                
                <button onClick = {() => this.show('🐷','🐶')}> 按钮</button>
                <h3>{this.state.msg}</h3>
            </div>
        )
    }

    //是一个实例方法,所以在组件内部调用的时候， 要使用this.
    myClickHandler = () => {
        console.log('22222')
        
    }

    show = (arg1, arg2) => {

       //console.log('show方法被调用了'+ arg1 + arg2)
       //console.log(this)
       //在react中，如果重新赋值， 不要直接改
       //应该调用react提供的this.setStat({msg: '123'})
       //this.state.msg = '神奇女侠'
       //在setState中，只会更新state状态， 不会覆盖其他的state状态
       this.setState({msg:'123'+arg1+arg2}, function(){console.log(this.state.mag)})
       
    }

    
   
}




function Persion(){

}


//#endregion
