function selectedSongReducer(selectedSong = null, action) {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;

    default:
      return selectedSong;
  }
}

export default selectedSongReducer;
