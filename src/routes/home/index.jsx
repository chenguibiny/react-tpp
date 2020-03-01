import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import TopBar from './component/TopBar';
import Slide from './component/Slide';
import Movieitem from './component/Movieitem';
import TabMenu from '../../components/TabMenu';
import RenderToBody from '../../components/RenderToBody';
import CityLayer from './component/CityLayer';
import './index.css';
 class Home extends Component {
    state = {
        city:"杭州",                // 当前城市
        // poster:[],              // slide 海报
        movie:[
            {
                actor: "",
                description: "场质低标内事克育很长布把十式带统。形按基布低员风长实样只心名达管也。",
                director: "卫铁",
                name: "厉害了，我的国",
                poster: "/source/movie/asset1.jpeg",
                score: 9.3,
                tags: []
            },
            {
                actor: "邹娜",
                description: "千样切高手边识影东感边件济越步正过。论习律每解比样历等基速书。",
                director: "林超贤",
                name: "红海行动",
                poster: "/source/movie/asset2.jpeg",
                score: 9.3,
                tags: ["今日最佳","口碑最好"]
            },
            {
                actor: "姜平",
                description: "属龙千认增据值照当化此确。准军即不布段正清只到的准线领精。群时由入价石几越还商价时。",
                director: "卡比尔·汗",
                name: "小萝莉的猴神大叔",
                poster: "/source/movie/asset3.jpeg",
                score: 9.4,
                tags: ["今日最佳"]
            },
            {
                actor: "董洋",
                description: "全据志音对过清将和而成先。",
                director: "陈思成",
                name: "唐人街探案2",
                poster: "/source/movie/asset4.jpeg",
                score: 8.9,
                tags: []
            },
            {
                actor: "彭杰",
                description: "百海道本成业他出做劳百很断子路。式便月斯七步状场原议往南原结本品越。",
                director: "威尔·古泐",
                name: "比得兔",
                poster: "/source/movie/asset5.jpeg",
                score: 7.4,
                tags: []
            },
            {
                actor: "余秀兰",
                description: "习张花总快易义军根划自界。",
                director: "马丁·麦克唐纳",
                name: "三块广告牌",
                poster: "/source/movie/asset6.jpeg",
                score: 8.9,
                tags:  ["口碑最好"]
            }
        ],               //当前热映电影
        cityLayerVisible:false  // 城市浮层是否展现
    }
    // 下拉城市列表
    showCityLayer = () =>{
        this.setState({
            cityLayerVisible:true
        })
    }

    hideCityLayer = () => {
        this.setState({
            cityLayerVisible:false
        })
    }

    onChangeCity = (city) => {
        this.setState({
            city,
        });
        this.hideCityLayer();
    }


    render() {
        const {city, movie, cityLayerVisible} = this.state;
        return (
            <div className="home">
                <TopBar city={city} showCityLayer={this.showCityLayer}/>
                <div className="home__slide">
                    <div className="home__slideWrap">
                        <Slide />
                    </div>
                </div>
                <ul className="home__content">
                    {
                        movie.map(ele => <li key={ele.name}><Link to="/detail"><Movieitem data={ele}></Movieitem></Link> </li>)
                    }
                </ul>
                {/* current  传递 "movie"||"user" */}
                <TabMenu current="movie"/>
                {cityLayerVisible && <RenderToBody ><CityLayer city={this.state.city} onClose={this.hideCityLayer} onSelect={this.onChangeCity}/></RenderToBody> }
            </div>
        );
    }
}
export default Home;
