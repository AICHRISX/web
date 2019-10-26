/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-26 10:56:41
*/
import React, { Component } from 'react'

import { Button, Input, Row, Col, List } from 'antd';

import "./App.css"

//UI组件
/*
class AppUI extends Component {
    render() {
        return (
            <div className="App">
            <Row>
                <Col span={18}>
                    <Input 
                        onChange={this.props.handleChange}
                        value={this.props.task}
                    />
                </Col>
                <Col span={6}>
                    <Button 
                        type="primary"
                        onClick={this.props.handleAdd}
                    >
                        Primary
                    </Button>
                </Col>
            </Row>
            <List
              style={{marginTop:10}}
              bordered
              dataSource={this.props.list}
              renderItem={(item,index) => (
                <List.Item
                    onClick={()=>{this.props.handleDel(index)}}
                >
                   {item}
                </List.Item>
              )}
            />  
        </div>
        )
    }
}
*/
const AppUI = (props)=>{
    const { handleChange,task,handleAdd,handleDel,list } = props
    return (
        <div className="App">
        <Row>
            <Col span={18}>
                <Input 
                    onChange={handleChange}
                    value={task}
                />
            </Col>
            <Col span={6}>
                <Button 
                    type="primary"
                    onClick={handleAdd}
                >
                    Primary
                </Button>
            </Col>
        </Row>
        <List
          style={{marginTop:10}}
          bordered
          dataSource={list}
          renderItem={(item,index) => (
            <List.Item
                onClick={()=>{handleDel(index)}}
            >
               {item}
            </List.Item>
          )}
        />  
    </div>
    )    
}

export default AppUI