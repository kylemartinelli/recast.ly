var VideoListEntry = ({ video, setSelectedVideo }) => (
  //onclick on top div (anywher on div)
  <div className="video-list-entry media" onClick={() => setSelectedVideo(video)} >
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);
//{console.log(props.video)}
//video list entry, looking at the elements of each individual video
//
//props.video.snippet.thumbnails.default.url
//props.video.snippet.title
//ç

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
