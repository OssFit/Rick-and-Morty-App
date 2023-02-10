import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './Detail.module.css'


export default function Detail(){
const{detailId}=useParams();
const[character,setCharacter]=useState("");
let array=[]
for(let p in character.origin){array.push(`${p}:${character.origin[p]}`)}

useEffect(() => {
   
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);

return (

<div className={styles.card} style={{border: '1px solid gray', maxWidth: '500px', margin: '10px auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <h3 className={styles.cardName} style={{marginTop: '10px'}}>{character.name}</h3>
  <img src={character.image} alt={character.name} style={{margin: '10px 0'}} />
  <div className={styles.cardInfo}>
    <ul className={styles.cardList}>
      <li><strong>Status:</strong> {character.status}</li>
      <li><strong>Species:</strong> {character.species}</li>
      <li><strong>Gender:</strong> {character.gender}</li>
    </ul>
    <h5 className={styles.cardTitle}>Origin</h5>
    <ul className={styles.cardList}>
      <li>{array[0]}</li>
      <li>{array[1]}</li>
    </ul>
  </div>
</div>



    )

}