import React, {Component} from 'react';
import './App.css';

import Nav from './components/Nav'

// import About from './components/About'
import Banner from './components/Banner'
// import Feed from './components/Feed'
// import Hood from './components/Hood'
// import Post from './components/Post'

class App extends Component{

    state = {
        formInputs: {
            name: '',
            body: '',
            song_url: '',
            author: '',
            release_date: '',
            id: null
        }
    }

    render(){
        return (
          <div className="App">
              <Banner/>
              <Nav/>
          </div>
        )
    }

}

export default App;
