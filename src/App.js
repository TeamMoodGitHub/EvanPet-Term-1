import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost, updatePost, updateSelector } from './actions/postActions';
import { Field, reduxForm, reset } from 'redux-form';
import './styles/App.css';
import { dataFetcher } from './LeagueBackend';

class App extends Component {
  
  componentWillMount() {
    this.props.getPosts();
  }

  // when rendering the posts, we can render them depending on the sort method that is selected!
  renderPosts() {
    console.log(this.props.posts);

    const copied = Object.assign({}, this.props.posts);
    const selector = copied.selector;
    delete copied.selector;
    
    const test2 = Object.values(_.mapObject(copied, (val, key) => {
      return Object.assign(val, { _id: key });
    }));


    // console.log("test2: ", test2);
    const sortedPosts = _
    .chain(test2)
    .sortBy(post => { 
      return post.stats[selector] || post.stats.kills;
    })
    .reverse()
    .value();
    let count = 1;
    return _.map(sortedPosts, (post, key) => {
      return (
        <div className="summoner-info" key={key}>
          <h3>{`${count++}. ${post.summoner}`}</h3> 
          <p>{`Avg K/D/A: ${post.stats.kills}/${post.stats.deaths}/${post.stats.assists}`}</p>  
            <button className="btn btn-primary" onClick={() => { this.getUpdatedData(post._id, post.summoner)}}>Update</button>
            <button className="btn btn-danger" onClick={() => {this.props.deletePost(post._id)}}>Delete</button>
        </div>
      )
    });
  }

  renderField(field) {
    return ( <input type='text' {...field.input} placeholder={`${field.label} name...`} /> );
  }

  async onSubmit(values) {
    values.stats = await dataFetcher(values.summoner);
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  async getUpdatedData(key, summoner) {
    // const newData = await dataFetcher(summoner);
    // this.props.updatePost(key, newData);
    return;
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-4 offset-4'>
            <div className='leaderboard-header'>
              <h1> Leaderboard! </h1>
              <div className="dropdown col-xs-4 offset-4">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.posts.selector}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button" onClick={() => this.props.updateSelector('kills')}>Kills</button>
                  <button className="dropdown-item" type="button" onClick={() => this.props.updateSelector('deaths')}>Deaths</button>
                  <button className="dropdown-item" type="button" onClick={() => this.props.updateSelector('assists')}>Assists</button>
                </div>
              </div>
            </div>

            <div className="post-container">
              {this.renderPosts()}
            </div>

            <div className='form-container col-xs-4 offset-4'>
              
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name='summoner'
                component={this.renderField}
                label='summoner'
                className=''
                />
              <button type='sumbit'>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost',
})(App);

form = connect(state => ({
  posts: state.posts,
}), { getPosts, savePost, updatePost, deletePost, updateSelector })(form);

export default form;
