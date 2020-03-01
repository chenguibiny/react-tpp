import React, { Component } from 'react'
import CommentList from '../components/CommentList'
import TagList from '../components/TagList'
import ScoreDistribute from '../components/ScoreDistribute'
import request from '../../../helpers/request'
import './Comment.css'
class Comment extends Component {
    state = {
        tags:[],
        comments:[],
        current:''   //当前选中标签
    }
    componentWillMount(){
        this.getData();
    }
    getData = async () => {
        const data = await request('/comment')
        const {tags, list} = data;
        this.setState({
            tags,
            comments:list,
            current:tags[0] ? tags[0].text : ''
        })
    }
    // 点击不同的标签，改变current的值来改变评论列表
    changeTag = value => {
        this.setState({
            current:value
        })
    }
    // 点赞按钮触发
    toggleZan = id => {
        this.setState((prevState) => ({
            comments:prevState.comments.map(comment => {
                        if(comment.id === id) {
                            return {
                                ...comment,
                                isZan:!comment.isZan,
                                zan:comment.isZan ? --comment.zan : ++comment.zan
                            }
                        }
                        return {...comment};
                    })
        }))
    }
    render() {
        const {tags, comments, current} = this.state;
        const filterComments = comments.filter(comment => comment.tag === current);
        return (
            <div className="mComment">
                <ScoreDistribute></ScoreDistribute>
                <div style={{marginTop:16}}>
                    <TagList data={tags} current={current} onclick={this.changeTag}></TagList>
                </div>
                <div style={{marginTop:16}}>
                    <CommentList data={filterComments} onZan={this.toggleZan}></CommentList>
                </div>
            </div>
        )
    }
}
export default Comment;
