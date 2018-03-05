import React, { Component } from 'react';
import style from '../css/style.css';
import iconfont from '../iconfont/iconfont.css';
import { Drawer, List, NavBar } from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class Home extends Component {
  constructor(props){
    super(props);   
    this.state = {
      page:0,
      billboards:[],
      films: [],
      filmsT:[]
    }
  } 
  // state = {
  //   open: false,
  //   drawerWidth:265,
  //   data:['1'],
  //   imgHeight:210,
  //   slideIndex:0
  // }
  // onOpenChange = (...args) => {
  //   console.log(args);
  //   this.setState({ open: !this.state.open });
  // }
  componentDidMount() {
    // simulate img loading
        axios.get('/v4/api/billboard/home?__t=1519649093914')
        .then((res)=>{
            console.log(res)
            // this.props.dispatch({
            //     type:"GET_CAROUSEL_DATA",
            //     payload:res.data.data.billboards
            // })
            this.setState({
                billboards: res.data.data.billboards,
            });
        })
        axios.get(`/v4/api/film/now-playing?__t=1519610967079&page=${this.page + 1}&count=5`)
        .then((res)=>{
            console.log(res);
            this.page++;
            this.setState({
            films: res.data.data.films
        })
     })
        axios.get("/v4/api/film/coming-soon?__t=1519976917746&page=1&count=3")
        .then((res)=>{
            console.log(res);
            this.setState({
            filmsT: res.data.data.films
        })
     })
  }
  render() {

    /*const sidebar = (<List>
      {["首页", "影片", "影院", "商城", "我的", "卖座卡"].map((i, index) => {
          return (<List.Item key={index}
            thumb=""
            style={{borderBottom:'1px dottted #333',width:265,background:"#282828",color:"#9a9a9a"}}
          >{i}</List.Item>);
      })}
    </List>);*/

    return (<div>
      {/*<NavBar icon={<i className="iconfont icon-ai221" style={{color:"#9a9a9a"}}/>} onLeftClick={this.onOpenChange} style={{fontSize:"14px", minHeight:50,background:"#282828",position:"fixed",zIndex:"100",width:"100%"}}
      leftContent={[
          <span key="5" style={{fontSize:"14px"}}>卖座电影</span>
      ]}
      rightContent={[
        <span key="0" style={{fontSize:"14px", color:"#9a9a9a", marginRight:"5px"}}>北京</span>,<i key="1" className="iconfont icon-iconfontjiantou" style={{fontSize:"14px", marginRight: '16px',color:"#9a9a9a" }} />,
        <i key="2" className="iconfont icon-yonghu" style={{fontSize:"14px",color:"#9a9a9a" }}/>,
      ]}
      ></NavBar>*/}
      <Header/>
      <Drawer value="">
      <Carousel
          autoplay={true}
          infinite={true}
          dots={false}
          style={{marginTop:"50px"}}
          selectedIndex={1}
        >
          {this.state.billboards.map(item => (
              console.log(),
            <a
              key={item.id}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
            >
              <img
                src={item.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        
        <ul style={{paddingLeft:'0',paddingTop:"18px"}}>
        {
          this.state.films.map((item, index)=>{
              console.log(this.state.films)
            return (
              <li key={item.id} style={{background:"#fff", margin: "0 17px 17px 17px"}}>
                  <div className="move">
                      <div className="loadingDiv">
                            <div className="movie-item">
                                <div className="img-responsive">
                                    <Link to={"/detail/" + item.id}><img src={item.cover.origin} /></Link>
                                <div className="row desc">
                                    <div className="col-xs-10 left">
                                        <div className="film-name">{item.name}</div>
                                        <div className="count">
                                            <span>{item.cinemaCount}</span>
                                            <span>家影院上映</span>
                                            <span>{item.watchCount}</span>
                                            <span>购票</span>
                                        </div>
                                    </div>
                                    <div className="col-xs-2 right">
                                        <span className="score">
                                        {item.grade} 
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                      </div>
                  </div>
              </li>
            )
          })
        }
        <Link to="/films"><div className="more-button" onClick={this.loadMore}>更多热映电影</div></Link>        
        </ul>
        <div>
          <div className="dividing-line">
            <div className="upcoming">即将上映</div>
          </div>
            <ul className="list-unstyled">
              {
                this.state.filmsT.map((item, index)=>{
                  console.log(this.state.films)
                  return (
                    <li key={item.id} style={{background:"#fff", margin: "0 17px 17px 17px"}}>
                        <div className="move">
                            <div className="loadingDiv">
                                  <div className="movie-item">
                                      <div className="img-responsive">
                                          <Link to={"/detail/" + item.id}><img src={item.cover.origin} /></Link>
                                      <div className="row upcoming-desc">
                                          <div className="col-xs-7 left">
                                              <div className="film-name">{item.name}</div>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                            </div>
                        </div>
                    </li>
                  )
                })
              }
            </ul>
            <Link to="/films"><div className="more-button" onClick={this.loadMore}>更多即将上映电影</div></Link> 
        </div>
      </Drawer>                 
    </div>);
  }
}

export default Home;
