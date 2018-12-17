import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSeach from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyByZ0rw-yLyBOxFu_J_cdgnUlPxuKEJI1U';


// create a new component, should produce some html
// JSX <div>Hi!</div>

class App extends Component
{
	constructor(props){
		super(props);

	this.state = {
	 videos: [],
	 selectedVideo: null
	};	

	this.videoSearch('ronaldo');
}

videoSearch(item)
{
	YTSeach({key: API_KEY, term: item}, (videos) => 
	{

		this.setState
		({
			videos : videos,
			selectedVideo : videos[0]
		});

	});
}
	render(){
		const videoSearch = _.debounce(term => {this.videoSearch(term)}, 600);
		return (
		<div>
			<SearchBar onSearchTermChange = {videoSearch}/>
			<VideoDetail  video = {this.state.selectedVideo}/>
			<VideoList 
			onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
			videos = { this.state.videos } />
		</div>
		);
	}
};

// take this component and put it on the page
ReactDOM.render(<App />,document.querySelector('.container'));

