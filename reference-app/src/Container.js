import React from 'react';
import styles from './Container.module.css'
function Container(props) {
    return (
        <div className={styles.container}>
            <h1>styled with module</h1>
        </div>
    );
}

export default Container;