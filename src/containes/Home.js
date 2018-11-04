import React, { Component } from 'react';
import { connect } from 'react-redux'
import Aux from '../hoc/Aux'
import Search from '../components/Search/Search'
import Item from '../components/Item/item'
import List from '../components/List/List'
import styles from './Home.css'
import * as actionCreators from '../store/actions/actions'

class Home extends Component {
componentDidMount() {
 this.props.getVideos('FootBall')   
}
    render() {
        const videos = this.props.videos
        console.log(videos)
return (
    <Aux >
        <Search onSearch={this.props.getVideos}  />
        <Item  id={this.props.currentVideoId} />
           <div className={styles.list}>
        <List  videos ={videos} playVideo = {this.props.playTheVideo}/>
        </div>
        
    </Aux>
)
    }
}
const mapStateToProps = (state) => {
    return {
        API_kEY: state.API_KEY,
        currentVideoId: state.currentVideoId,
        videos: state.videos
    }
}
 const mapDispatchToProps = (dispatch) => {
    return {
        playTheVideo : (id) => dispatch(actionCreators.playVideo(id)),
        getVideos: (searchValue) => dispatch(actionCreators.searchVideos(searchValue))
    }
 } 
export default connect(mapStateToProps, mapDispatchToProps)(Home);