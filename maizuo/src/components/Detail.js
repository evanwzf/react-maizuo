import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import '../css/detail.css';
import { Drawer, List, NavBar } from 'antd-mobile';

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detail:null
        }
    }
    componentDidMount(){
        var fid = this.props.match.params.fid;
        console.log(fid)
        axios.get(`/v4/api/film/${fid}?__t=1517023269073`)
        .then((res)=>{
            console.log(res);
            this.setState({
            detail: res.data.data.film
        })
     })
    }
    render(){
        var data = this.state.detail
        var a;
        if(data == null){
            a=null;
        }else{
            a=<div>
                <div className="application-view">
                    <section className="content film-view">
                        <div className="film-img-wrap">
                            <img src={data.cover.origin} alt=""style={{width:"100%"}}/>
                        </div>
                        <div className="film-intro">
                            <div className="film-word1">{data.name}</div>
                            <div className="film-word2">
                                <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                                <span>{data.director}</span>
                            </div>
                            <div className="film-word2">
                                <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                                {
                                    data.actors.map((item, index)=>{
                                        return (
                                            <span key={item.name}>{item.name} | </span>
                                        )
                                    })
                                }
                            </div>
                            <div className="film-word2">
                                <span>地区语言:</span>
                                <span>印度</span>
                                <span>(</span>
                                <span>{data.language}</span>
                                <span>)</span>
                            </div>
                            <div className="film-word2">
                                <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
                                <span>{data.category}</span>
                            </div>
                            <div className="film-word2">
                                <span>上映日期:</span>
                                <span>1月19日上映</span>
                            </div>
                            <div className="film-word3">{data.synopsis}</div>
                        </div>
                        <div className="operation">
                            <button className="cpn-primary-button ">立即购票</button>
                        </div>
                    </section>
                </div>
            </div>
        }
        return (
            <div>
                <Header/>
                <Drawer>
                    {a}
                </Drawer>
            </div>
        )
    }
}