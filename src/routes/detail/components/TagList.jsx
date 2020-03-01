import React from 'react'
import './TagList.css'
function TagList(props) {
    const { data, current, onclick } = props;
    // 如果点击的标签与当前的标签一样，就不执行点击事件了
    const onClickTag = value => {
        if(value !== current){
            onclick(value)
        }
    }
    return (
        <div className="tagList">
            {
                data.map(tag => (
                    <span key={tag.text} className={`tagList__item ${current === tag.text && 'tagList__item--active'}`} onClick={() => onClickTag(tag.text)}>
                        {tag.text} {tag.count}
                    </span>
                ))
            }
        </div>

    )
}
export default TagList;
