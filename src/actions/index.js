export const ActionTypes = {
  INCREMENT: 'INCREMENT', // you can delete these
  DECREMENT: 'DECREMENT', // if you don't want the counter anymore
  SELECT_VIDEO: 'SELECT_VIDEO',
  SET_VIDEOS: 'SET_VIDEOS',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

export function selectVideo(video) {
  return {
    type: ActionTypes.SELECT_VIDEO,
    payload: video,
  };
}

export function setVideos(videos) {
  return {
    type: ActionTypes.SET_VIDEOS,
    payload: videos,
  };
}
