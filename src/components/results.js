import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchBarSubmit = function() {
        
    }.bind(this)

   render() {
       return (
           <div>
               <Logo size={50}/>
               <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
           </div>
       )
   }
}

export default Results;