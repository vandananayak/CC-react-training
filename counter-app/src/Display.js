import React from 'react';
import styles from './App.module.css'
function Display({counter}) {
    return (
        <div className={styles.disp}>
            <h1>{counter}</h1>
        </div>
    );
}

export default Display;