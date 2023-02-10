import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import logo from './imagenes/logo.png'


export default function Nav(props) {
  function handlerOnclick() {
    props.logout();

  }

  return (
    <div className={styles.navDiv}>
      <SearchBar onSearch={props.onSearch} />

      <NavLink to="/home">
        <button className={styles.home}>Home</button>
      </NavLink>

      <NavLink to="/About">
        <button className={styles.about}>About</button>
      </NavLink>

      <NavLink to="/Favorites">
        <button className={styles.favorites}>Favorites</button>
      </NavLink>

      <button onClick={handlerOnclick} className={styles.logout}>
        Logout
      </button>
      <div className={styles.logoContainner}>
      <img className={styles.logo}src={logo} alt='logo' width='300px'/>
      </div>
      
    </div>
  );
}
