import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
//./ go out one file, and then into another
//../ go out the folder

var App = () => {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(exampleVideoData[0]);

  let timeout = null;
//
  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setVideos(videos)
      }))
    }, 500);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler = {(e) => searchHandler(e)} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5>
            <VideoPlayer video={selectedVideo} />
          </h5></div>
        </div>
        <div className="col-md-5">
          <VideoList setSelectedVideo={(v) => setSelectedVideo(v)} videos={videos} />
        </div>
      </div>
    </div>
  )
};
//setSelectedVideo={(v) => setSelectedVideo(v)}
//import exampleVideoList from './data/exampleVideoData.js';
//src/data/exampleVideoData.js
//<script src= "/data/exampleVideoData.js"> </script>

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

//APP
  //NAVBAR
  //VIDEO PLAYER
  //VIDEO LIST
    //Videos
      //Individual video - VideoListEntry
        //IMG
        //TITLE
        //DESCRIPTION

      // /Users/kylemartinelli/rfp2210-recast.ly/src/data/exampleVideoData.js
      //src/data/exampleVideoData.js
      ///src/components/VideoListEntry.jsx

//npx babel . --out-dir=compiled --presets=@babel/preset-react --ignore=node_modules,compiled --source-maps=inline --watch
//npx live-server
//npm test