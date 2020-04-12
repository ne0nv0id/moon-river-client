import React, {Component} from 'react'

class About extends Component {
    render(){
        return(
            <section className="abt-section">
                <h3 className="abt-heading">About</h3>
                <article className="abt-info">
                    <p>
                        Moon River was built to serve as a blog based on a news feed with posts that include:</p> <br/>
                        <ul>
                            <li>A song title, release date, and artist</li>
                            <li>A short description about that song, or a story relating to it</li>
                            <li>A YouTube or Spotify link to each respective song</li>
                        </ul><br/>
                        <p>I chose to start with the feed populated entirely with Frank Sinatra's music, as I listen to Sinatra very often - and it fit the poetic narrative of using the Sinatra framework.
                    </p>
                </article>
            </section>
        )
    }
}

export default About
