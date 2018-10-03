import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

    handleSearchBarSubmit = function(query) {
        this.props.fetchPostsWithQuery(query)
    }

   render() {
       return (
           <div>
               <Logo size={50}/>
               <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
           </div>
       )
   }
}

Results = connect(null, actions)(Results);

export default Results;