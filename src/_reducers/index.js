import { combineReducers } from 'redux';

import songsReducer from './songsReducer';
import selectedSongReducer from './SelectedSongReducer';

export default combineReducers({
  songsReducer,
  selectedSongReducer,
});
