import React, {Component} from 'react'

class Post extends Component {
    render(){
        return(
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.post.name}</h4>
                        <h6 className="card-subtitle">Author: {this.props.post.author} || Released: {this.props.post.release_date}</h6>
                        <p className="card-text">{this.props.post.body}</p>
                        <a href={this.props.post.song_url} className="card-link">Listen on YouTube</a>
                    </div>
                </div>
        )
    }
}

export default Post
