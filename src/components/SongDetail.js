import React from 'react';
import { connect } from 'react-redux';

import selectedSongReducer from '../_reducers/SelectedSongReducer';

const SongDetail = ({ song }) => {
  return !song ? (
    <div>Select a song</div>
  ) : (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSongReducer };
};

export default connect(mapStateToProps, { selectedSongReducer })(SongDetail);
