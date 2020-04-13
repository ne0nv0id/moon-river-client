import React, {Component} from 'react'

class Hood extends Component {
    render(){
        return(
            <section className="abt-section">
                <h3 className="abt-heading">Built with Sinatra, a Ruby framework</h3><br/>
                <article className="abt-info">
                    <p>
                        Regarded as  one of the most timeless American musicians of all time, Frank Sinatra is one of my personal favorites. Named after him, the Ruby framework Sinatra has become one of my favorite technologies to develop with throughout this project. <br/><br/>
                        While it can be incredibly frustrating trying to learn a new framework with little guidance and poor documentation, it can also be incredibly rewarding. With the Sinatra documentation being very vague, most of my API development was trying to reverse-engineer and teach myself the configurations of other developers. <br/><br/>
                        Eventually, I landed at a very lighweight and small-scale Sinatra API. While I have a long way to go in terms of implementing Sinatra to be scaled to fit bigger applications, I worked extremely hard to produce a working API and could not be happier.
                    </p>
                </article>
            </section>
        )
    }
}

export default Hood
