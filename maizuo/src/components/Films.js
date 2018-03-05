import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import '../css/films.css';
import { Drawer, List, NavBar } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Detail extends Component {
   constructor(props){
    super(props);   
    this.state = {
      films: [],
      filmsT:[]
    }
  } 
    componentDidMount() {
        axios.get("/v4/api/film/now-playing?page=1&count=7")
        .then((res)=>{
            console.log(res);
            this.setState({
            films: res.data.data.films
        })
     })
        axios.get("/v4/api/film/coming-soon?page=1&count=7")
        .then((res)=>{
            console.log(res);
            this.setState({
            filmsT: res.data.data.films
        })
     })
    }
    render(){
        const tabs = [
            { title: '正在热映' },
            { title: '即将上映' },
            ];

        const TabExample = () => (
            <div style={{marginTop:"50px",height:"100%"}}>
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',width: "100%",paddingLeft: "15px",paddingRight: "15px"}}>
                    <div className="film-list">
                        <ul className="list-unstyled">
                            {
                                this.state.films.map((item, index)=>{
                                    console.log(this.state.films)
                                    return (
                                        <li>
                                            <Link to={"/detail/" + item.id}>
                                            <div className="film-item">
                                                <div className="film-item-img">
                                                    <img src={item.poster.origin}/>
                                                </div>
                                                <div className="film-desc">
                                                    <div className="film-next-arrow"><i class="iconfont icon-jiantouarrow487 right"></i></div>
                                                    <div className="film-grade">{item.grade}</div>
                                                    <div className="film-name">{item.name}</div>
                                                    <div className="film-intro">{item.intro}</div>
                                                    <div className="film-counts">
                                                        <span className="film-count-color1">{item.cinemaCount}</span>
                                                        <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        <span className="film-count-color1">{item.watchCount}</span>
                                                        <span>人购票</span>
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',width: "100%",paddingLeft: "15px",paddingRight: "15px"}}>
                    <div className="film-list">
                        <ul className="list-unstyled" style={{overflow:"hidden"}}>
                            {
                                this.state.filmsT.map((item, index)=>{
                                    console.log(this.state.films)
                                    return (
                                        <li>
                                            <div className="film-item">
                                                <div className="film-item-img">
                                                    <img src={item.poster.origin}/>
                                                </div>
                                                <div className="film-desc">
                                                    <div className="film-next-arrow"><i class="iconfont icon-jiantouarrow487 right"></i></div>
                                                    <div className="film-grade">{item.grade}</div>
                                                    <div className="film-name">{item.name}</div>
                                                    <div className="film-intro">{item.intro}</div>
                                                    {/*<div className="film-counts">
                                                        <span className="film-count-color1">{item.cinemaCount}</span>
                                                        <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        <span className="film-count-color1">{item.watchCount}</span>
                                                        <span>人购票</span>
                                                    </div>*/}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                </Tabs>
            </div>
            );
        return (
            <div>
                <Header/>
                <Drawer>
                    <TabExample/>                    
                </Drawer>
            </div>
        )
    }
}