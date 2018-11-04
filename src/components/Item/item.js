import React from 'react';
import styles from './item.css'

const item = (props) => {
        return (
            <div  className={styles.item} >
                  <iframe id="Item"
            title="Test Example"
            width="800"
            height="500"
            src={`https://www.youtube.com/embed/${props.id}`}
            allowFullScreen='true' >
</iframe>
            </div>
        )
}
export default item