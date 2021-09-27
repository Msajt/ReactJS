import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';
import './App.css';

//! STATE >> props

class App extends Component{
    constructor(){
        super(); // Calls the constructor from Component
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //! Take the values from the search box
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
            //console.log(filterRobots);
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
        );
    }
}

export default App;