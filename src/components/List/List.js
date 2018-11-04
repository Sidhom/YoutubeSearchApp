import React from 'react';
import styles from './List.css'


const list = (props) => {
    const videos = props.videos.map(video => {

        return (
    <div key={video.id.videoId} className={styles.item} onClick={()=> props.playVideo(video.id.videoId)}>
        <div className='videoImage'>
            <img src={video.snippet.thumbnails.high.url} alt='videoimage'>
            </img>
        </div>
            <div className='title'>
           <h3>  {video.snippet.title} </h3>
            </div>  
            </div>   
        )
    })
        return (
            <div className={styles.items}>
            {videos}

            </div>
        )
}
export default list