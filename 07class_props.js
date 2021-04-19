import React from 'react'

export default class Movie extends React.Component{
    constructor(){
        //super继承了父类components
        super()
        //有了super（）才能使用this关键字
        this.state = {
            msg:'大家好， 我是class创建的Movie组件'
        }
    }
    //render函数的作用， 是渲染当前组件的render函数
    render(){
        this.state.msg = 'msg的值被我修改了'
        return(
            //在class关键字创建的组件中，如果想要使用外界传递过来的props参数，不需要接受， 直接通过this.props.***即可
           //注意：在class组件内部，this表示当前组件的实例对象
           <div>这是Movie组件--{this.props.name}--{this.props.age}--{this.props.gender}
            <h2>{this.state.msg}</h2>
           </div>
        
           )
    }
}

