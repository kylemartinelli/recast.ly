import VideoListEntry from './VideoListEntry.js';
var VideoList = ({ videos, setSelectedVideo }) => (
  <div className="video-list">
    {videos.map((video) => (
      <VideoListEntry setSelectedVideo={(v) => setSelectedVideo(v)} video={video} key={video.etag} />
    ))}
  </div>
);

//setSelectedVideo={(v) => setSelectedVideo(v)}
//{props.videos.map((video) => (<VideoListEntry video = {video}/>))}s
//can run into errors if we input key, and then use key = {key}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
//SOMEONE SAID use an unordered list

// props in {} = {video}