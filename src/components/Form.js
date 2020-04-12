import React, {Component} from 'react'

class Form extends Component{

    constructor(){
        super()
        this.state = {
            posts: [],
                name: '',
                body: '',
                song_url: '',
                author: '',
                release_date: '',
                id: null
        }
    }

    fetchPosts = async () => {
        let response = await fetch('http://localhost:7777/posts')
        let data = await response.json()
        console.log(data)
        this.setState({posts: data})
    }

    handleCreate = async (createData) => {
        console.log(createData);
    let response = await fetch('http://localhost:7777/posts',
    {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
    let data = await response.json()
    this.setState(prevState => {
      return {
        posts: [...prevState.posts, data]
      }
    })
    console.log(data)
  }

  handleChange = (e) => {
      console.log(this.state);
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      console.log(this.state);
      this.handleCreate(this.state)

  }

    componentDidMount(){
        this.fetchPosts()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2 className="abt-heading">Post a Song</h2>
                <div className="input-section">
                    <div class="form-group">
                        <label>
                            <input className="form-control" type="text" placeholder="Song Name" id="name" value={this.state.name} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div class="form-group">
                        <label>
                            <input className="form-control" type="text" placeholder="Song Author" id="author" value={this.state.author} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input className="form-control" type="text" placeholder="Your Thoughts?" id="body" value={this.state.body} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div class="form-group">
                        <label>
                            <input className="form-control" type="text" placeholder="YouTube Link" id="song_url" value={this.state.song_url} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div class="form-group">
                        <label>
                            <input className="form-control" type="date" placeholder="0000-00-00" id="release_date" value={this.state.release_date} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <input className="btn btn-primary" type="submit" value="post"/>
                </div>
            </form>
        )
    }
}

export default Form
