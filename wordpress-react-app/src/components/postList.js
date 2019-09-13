import React, { Component } from 'react';
import { getPosts } from './getData';

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    let postUrl = `${getPosts}`;
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          posts: data.posts
        });
      });
  }

  render() {
    let listposts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h4>{post.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* dangerouslySetInnerHTML eliminates the html tags */}
        </div>
      );
    });

    return (
      <article>
        <h1>Posts</h1>
        {listposts}
      </article>
    );
  }
}

export default PostList;
