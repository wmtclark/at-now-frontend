import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <div id="listheader">
      <ul>
        <li>More videos</li>
        {videoItems}
      </ul>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  videos: reduxState.video.list,
});

export default connect(mapStateToProps, null)(VideoList);
