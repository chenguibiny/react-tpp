import React from 'react'
import Star from '../../../components/Star'
import CollapsibleText from '../../../components/CollapsibleText'
import './CommentList.css'
function CommentList(props) {
    const {data, onZan} = props;
    return (
        <ul className="commentList">
            {
                data.map(comment => (
                    <li key={comment.id}>
                        <div className="commentItem">
                            <div className="commentUser">
                                <div className="commentUser__avatar" style={{backgroundImage:'url(/source/default-avatar.jpg)'}}></div>
                                <div className="commentUser__detail">
                                    <div className="commentUser__name">{comment.name}</div>
                                    <div className="commentUser__score"><Star value={comment.score}></Star> <span className="commentUser__value">{comment.score}</span> </div>
                                </div>
                            </div>
                            <CollapsibleText height={84}>
                                {comment.content}
                            </CollapsibleText>
                            <div className="commentItem__detail">
                                <div className="commentItem__time">{comment.time}</div>
                                <div className={`commentItem__zan ${comment.isZan && 'commentItem__zan--active'}`}>
                                    <i onClick={() => onZan(comment.id)}/>{comment.zan}
                                </div>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>

    )
}
export default CommentList;
