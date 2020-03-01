import React from 'react'
import './BaseInfo.css'
 function BaseInfo(props) {
    return (
        <div className="baseInfo">
            <div className="baseInfo__detail">
                <h3 className="baseInfo__name">唐人街探案2</h3>
                <div className="baseInfo__subTitle">akjfklajafslkfjadfafdas2</div>
                <div className="baseInfo__other">喜剧 / 动作 /剧情</div>
                <div className="baseInfo__other">中国大陆|130分钟</div>
                <div className="baseInfo__other">2018年2月大陆上映</div>
            </div>
            <div className="baseInfo__poster" style={{backgroundImage:'url(/source/movie/asset4.jpeg)'}} onClick={props.onShowImage}></div>
        </div>
    )
}
export default BaseInfo;
