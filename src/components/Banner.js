import React, {Component} from 'react'

class Banner extends Component {
    render(){
        return(
            <div className="jumbotron banner">
                <h1>Moon River</h1><br/>
                <h5>A jazz music blog built with Sinatra.rb</h5>
            </div>
        )
    }
}

export default Banner
