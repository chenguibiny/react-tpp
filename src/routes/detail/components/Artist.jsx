import React from 'react'
import './Artist.css'
/**
 * 详情页演职员表
 */
function Artist(props) {
    return (
        <div className="mArtist">
            <ul className="mArtist__list">
                {
                    props.data.map((item,index) => (
                        <li key={index}>
                            <a href="/detail" className="artistInfo">
                                <div className="artistInfo__image" style={{backgroundImage:`url{${item.image}}`}}></div>
                                <div>
                                    <dl className="artistInfo__name">{item.name}</dl>
                                    <dd className="artistInfo__job">{item.job}</dd>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Artist;
