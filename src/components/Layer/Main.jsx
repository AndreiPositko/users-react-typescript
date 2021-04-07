import React from 'react';

import Header from '../Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.scss';

const PrivateLayout = ({ children }) => {

    return (
        <div className={styles.main__page}>
            <Header />
            {children}
        </div>
    )
}

export default PrivateLayout;
