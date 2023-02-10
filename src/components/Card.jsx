import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {
  addCharacterFavourite,
  deleteCharacterFavourite,
  deleteCharacter
} from "../redux/actions";
import { connect } from "react-redux";



function Card(props) {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteCharacterFavourite(props.id);
      console.log(props.id)
    }
    if (!isFav) {
      setIsFav(true);
      props.addCharacterFavourite(props);
    }
  };





  

  const clickCerrar = () => {
    props.onClose(props.name);
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.btnContainner}>
      {isFav ? (
        <button className={styles.corazon}onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.corazon}onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.boton} onClick={clickCerrar}>
        X
      </button>
      </div>
      <div className={styles.nameContainer}>
      <Link className={styles.link}to={`/detail/${props.id}`}>
        <h2 data-tooltip={props.name} className={styles.h2Name}>
          {props.name}
        </h2>
      </Link>
      </div>
      <div className={styles.imgContainer}>
      <img className={styles.imagen} src={props.image} alt={props.name} />
      </div>
      <div className={styles.columnas}>
      <p className={styles.pSpecies}>{props.species}</p>
      <p className={styles.pGender}> {props.gender}</p>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addCharacterFavourite: (character) =>
      dispatch(addCharacterFavourite(character)),
    deleteCharacterFavourite: (id) => dispatch(deleteCharacterFavourite(id)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps,mapDispatchToProps)(Card);