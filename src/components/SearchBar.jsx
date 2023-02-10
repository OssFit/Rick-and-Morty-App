import styles from "./SearchBar.module.css";
import { useState,useRef } from "react";


export default function SearchBar(props) {
	const referencia=useRef()
  const [id, setId] = useState("");
  const pasarId = (event) => {
    setId(event.target.value);
  };
  const arrowClick = () => {
    props.onSearch(id);
		referencia.current.value='';
    // elementos[0].value = "";
  };
  const prevent = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.divSearch}>
      <form onSubmit={prevent}>
        <input
          ref={referencia}
          className={styles.barra}
          type="search"
          onChange={pasarId}
          placeholder='Write the Character ID to Find'
        />
        <button className={styles.boton} onClick={arrowClick}>
          Agregar
        </button>
      </form>
    </div>
  );
}

// const elementos = document.getElementsByTagName("input");
