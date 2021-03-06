import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../_actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <div className='item' key={index}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songsReducer,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
