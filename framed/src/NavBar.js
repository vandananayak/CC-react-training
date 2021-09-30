import styles from './Layout.module.css'; 
function NavBar(props) {
    return (
            <nav className={styles.nav}>
            <a href="layout.html" target="_blank">Home</a>
            <a href="google.com" target="_blank">Google</a>
            <a href="yahoo.com" target="_blank">Yahoo!</a>
            
        </nav>
    );
}

export default NavBar;