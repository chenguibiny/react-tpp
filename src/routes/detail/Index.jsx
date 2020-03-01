import React, { Component } from 'react'
import BaseInfo from './components/BaseInfo'
import ScoreSummary from './components/ScoreSummary'
import CollapsibleText from '../../components/CollapsibleText'
import Artist from './components/Artist'
import Comment from './container/Comment'
import LinkLink from '../../components/LinkLink'
import request from '../../helpers/request'
import ImageSlider from './container/ImageSlide'
import {Link} from 'react-router-dom'
import './Index.css'
class Detail extends Component {
    state = {
        artist:[],
        showImage:false
    }
    componentDidMount(){
        this.getArtist();
    }
    getArtist = async () => {
        const data =await request('/artist');
        if(data && data.length) {
            this.setState({
                artist:data
            })
        }
    }
    toggleImage =() => {
        this.setState((prevState) => ({
            showImage:!prevState.showImage
        }))
    }
    render() {
        const {artist} = this.state
        return (
            <div className="detail">
                <div className="detail__top">
                    <div className="tOperator">
                        <div className="tOperator__icon tOperator__icon--back" onClick={() => window.history.back()}></div>
                        <div className="tOperator__icon tOperator__icon--share"></div>
                    </div>
                    <BaseInfo onShowImage={this.toggleImage}></BaseInfo>
                </div>
                <div className="detail__content">
                    {/* 每一模块的上下间距一样  都用detail__module包裹起来 */}
                    <div className="detail__module">
                        <ScoreSummary></ScoreSummary>
                    </div>
                    <div className="detail__module">
                        <CollapsibleText height={84}>
                            <div className="detail__overview">
                                卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上卡拉拉沙发上
                            </div>
                        </CollapsibleText>
                    </div>
                    <div className="detail__module">
                        <h2 className="detail__moduleTitle">演职员表</h2>
                        <Artist data={artist}></Artist>
                    </div>
                    <div className="detail__module">
                        <h2 className="detail__moduleTitle">热门评论</h2>
                        <Comment></Comment>
                    </div>
                    <div className="detail__module">
                        <h2 className="detail__moduleTitle">影片资料</h2>
                        <div>
                            <LinkLink title="幕后花絮"></LinkLink>
                            <LinkLink title="台词精选"></LinkLink>
                            <LinkLink title="出品发行"></LinkLink>
                        </div>

                    </div>
                </div>
                <Link to="/seat" className="detail__buyBtn">选座购票</Link>
                {this.state.showImage && <ImageSlider onClose={this.toggleImage}></ImageSlider>}
            </div>
        )
    }
}
export default Detail;
