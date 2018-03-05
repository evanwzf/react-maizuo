import React, { Component } from 'react';
import style from '../css/style.css';
import iconfont from '../iconfont/iconfont.css';
import { Drawer, List, NavBar } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    state = {
    open: false,
    drawerWidth:265,
    data:['1'],
    imgHeight:210,
    slideIndex:0
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
    render(){
        const sidebar = (<List>
            {/*{["首页", "影片", "影院", "商城", "我的", "卖座卡"].map((i, index) => {
                return (<List.Item key={index}
                    thumb=""
                    style={{borderBottom:'1px dottted #333',width:265,background:"#282828",color:"#9a9a9a"}}
                >{i}</List.Item>);
            })}*/}
                <Link to="/"><List.Item key="6" style={{borderBottom:'1px dottted #333',width:265,background:"#282828"}}>首页</List.Item></Link>
                <Link to="/films"><List.Item key="7" style={{borderBottom:'1px dottted #333',width:265,background:"#282828"}}>影片</List.Item></Link>
                <Link to=""><List.Item key="8" style={{borderBottom:'1px dottted #333',width:265,background:"#282828"}}>影院</List.Item></Link>
                <Link to=""><List.Item key="9" style={{borderBottom:'1px dottted #333',width:265,background:"#282828"}}>商城</List.Item></Link>
                <Link to=""><List.Item key="10" style={{borderBottom:'1px dottted #333',width:265,background:"#282828"}}>我的</List.Item></Link>
                <Link to=""><List.Item key="11" style={{borderBottom:'1px dottted #333',width:265,background:"#282828"}}>卖座卡</List.Item></Link>
            </List>);
        return(
            <div id="qz">
            <NavBar icon={<i className="iconfont icon-ai221" style={{color:"#9a9a9a"}}/>} onLeftClick={this.onOpenChange} style={{fontSize:"14px", minHeight:50,background:"#282828",position:"fixed",zIndex:"100",width:"100%"}}
            leftContent={[
                <span key="5" style={{fontSize:"14px"}}>卖座电影</span>
            ]}
            rightContent={[
                <span key="0" style={{fontSize:"14px", color:"#9a9a9a", marginRight:"5px"}}>北京</span>,<i key="1" className="iconfont icon-iconfontjiantou" style={{fontSize:"14px", marginRight: '16px',color:"#9a9a9a" }} />,
                <i key="2" className="iconfont icon-yonghu" style={{fontSize:"14px",color:"#9a9a9a" }}/>,
            ]}
            ></NavBar>
            <Drawer
                  key="3"
            drawerWidth={265}
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight}}
                contentStyle={{ color: '#333', textAlign: 'left', paddingTop: 0, background:'#e1e1e1'}}
                sidebar={sidebar}
                open={this.state.open}
                onOpenChange={this.onOpenChange}
            ></Drawer>
            </div>
        )
    }
}