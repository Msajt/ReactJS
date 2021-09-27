import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots';
import './App.css';

//! STATE >> props

class App extends Component{ // Smart Components
    constructor(){
        super(); // Calls the constructor from Component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( users => this.setState({robots: users}) );
    }

    //! Take the values from the search box
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
            //console.log(filterRobots);
    }

    render(){
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (!robots.length) ?
                //! If true
            <h1>Loading</h1> :
                //! If false
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            ) 
    }
}

export default App;