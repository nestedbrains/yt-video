import React, {Component} from 'react'
import SearchBar from '../SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

export class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('in the end')
    }

    onTermSubmit = async term => {
        const KEY = 'AIzaSyBguL_hKbVNujeQYe84ks-oDSClBdqqBM0'
        const response = youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                q: term,
                key: KEY
            }
        });

        this.setState({
            videos: (await response).data.items,
            selectedVideo: (await response).data.items[0]
        })

    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
