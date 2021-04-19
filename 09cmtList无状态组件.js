//评论列表组件
// import ReactDOM from 'react-dom';
// import React from 'react';

// function CmtItem(props) {
//     return (
//         <div >
//                 <h1>评论人： {props.user}</h1>
//                 <p>评论内容：{props.content}</p>
//     </div>)
// }


// //定义父组件使用class关键字
// class CmtList extends React.Component{
//     constructor(){
//         super()
//         this.state = {//评论列表数据
//             CommentList : [
//                 {id:1, user:'yvan', content:'11'},
//                 {id:2, user:'nono', content:'22'},
//                 {id:3, user:'long', content:'33'},
//                 {id:4, user:'mei', content:'44'}
//             ]
//         }
//     }

//     render() {
//         return (
//             <div>
//                <h1>这是评论列表组件</h1> 

//                {this.state.CommentList.map(item => <CmtItem{...item} key = {item.id}></CmtItem>)}
//             </div>
//         )
//     }
// }