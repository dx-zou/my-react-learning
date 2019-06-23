import React from "react";
import Item from "./Item";
import { Button } from "antd";
import "../css/Comment.scss";
//创建一个有状态的组件
export default class CommentLsit extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 1, name: "小王", content: "哈哈哈哈哈哈" },
        { id: 2, name: "小明", content: "哈哈哈哈哈哈" }
      ],
      msg: "this is comment component"
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="Comment-container">
        {/* <button onClick={() => {this.show();this.handleClick()}}>点击</button> */}
        <Button onClick={this.handleClick.bind(this)} type="primary">
          点击
        </Button>
        <Button onClick={this.show} type="primary">
          按钮
        </Button>
        <ul>
          {this.state.list.map(item => (
            <Item {...item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
  handleClick() {}
  // setState 是异步的方法，使用之后需要在回调函数中拿到最新的数据
  show = () => {
    this.setState(
      {
        msg: "Comment component"
      },
      function() {}
    );
  };
}
