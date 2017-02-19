class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: fakeVideoData[0],
      videos: fakeVideoData
    }

  this.playCurrentVideo = this.playCurrentVideo.bind(this);
  }

  this.props.searchYouTube(options, (vidoes) => 
    this.setState({
      videos: videos,
      currentVideo: videos[0]
    })
  );

  playCurrentVideo(video) {
    this.setState ({
      currentVideo: video
    });
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    }
  }

  render() {
    return (      
      <div>
        <Nav changeSearchInput={this.getVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList playCurrentVideo={this.playCurrentVideo} videos={this.state.videos}/>
        </div>
      </div>  
    )  
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// ReactDOM.render(<App />, document.getElementById('app'));