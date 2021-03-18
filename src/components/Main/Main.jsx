import Navigation from './components/Navigation';
import Header from '../Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.scss';

const Main = ({ children }) => {

    return (
        <div className={styles.main__page}>
            <Header />
            <Navigation />
            {children}
        </div>
    )
}

export default Main;
