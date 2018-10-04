import React, { Component } from "react";
import { connect } from 'react-redux';

import Post from './post';

class ResultsPosts extends Component {

    renderPosts() {
        var n = 0;
        const getLastPost = this.props.posts.map(post => {
          n++;
        })
        const posts = this.props.posts.map((post, index) => {
            if (index == n - 1) {
              return <Post className="last-post" type="result" key={index} {...post}/>
            } else {
              return <Post className="" type="result" key={index} {...post}/>
            }
            
        })
        return posts;
    }

  render() {
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <ul className="results-posts__posts">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { posts: state.posts.resultsPosts }
}

export default connect(mapStateToProps)(ResultsPosts);
