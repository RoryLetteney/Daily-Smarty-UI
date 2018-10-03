import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import SearchBar from './searchBar';
import ResultsPosts from './resultsPosts';

class Results extends Component {

    handleSearchBarSubmit = function(query) {
        this.props.fetchPostsWithQuery(query)
    }

   render() {
       return (
           <div className="results">
               <Logo size={50}/>
               <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} page="results"/>
               <ResultsPosts/>
           </div>
       )
   }
}

Results = connect(null, actions)(Results);

export default Results;