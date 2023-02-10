import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cards from "./Cards";
import { orderCards, filterCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import styles from './Favorites.module.css'

const Favorites = (props) => {
  const dispatch = useDispatch();
  const handleDispatch = (e) => {
    if (e.target.value === "Ascendente" || e.target.value === "Descendente") {
      dispatch(orderCards(e.target.value));
    } else {
      dispatch(filterCards(e.target.value));
    }
  };

  return (
    <div className={styles.divPrincipal}>
     
      <div className={styles.filterContainer}>
      <h1>Favorites</h1>
          
      
        <select onChange={handleDispatch}>
          <option value="Ascendente">Ascendent</option>
          <option value="Descendente">Descendent</option>
        </select>
        <select onChange={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <Cards characters={props.myFavorites} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);