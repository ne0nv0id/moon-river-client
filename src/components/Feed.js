import React, {Component} from 'react'
import Post from './Post'


class Feed extends Component {
    state = {
        posts: []
    }

    getPosts = async () => {
        let response = await fetch('http://localhost:7777/posts')
        let data = await response.json()
        console.log(data)
        this.setState({posts: data})
    }

    componentDidMount(){
        this.getPosts()
    }

    render(){
        return(
            <>
                <h1 className="abt-heading">Feed</h1>
                {this.state.posts.map(post => (
                    <Post
                    key={post.id}
                    post={post}/>
                ))}
            </>
        )
    }
}

export default Feed
