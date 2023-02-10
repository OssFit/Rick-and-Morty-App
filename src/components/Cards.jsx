import Card from "./Card";
import styles from './Cards.module.css'


export default function Cards(props) {
   console.log(props)
  return (
    <>
    <div className={styles.cardsClass}>
      {props.characters.map((element,index) => (
        <Card 
          name={element.name}
          species={element.species}
          gender={element.gender}
          image={element.image}
          onClose={props.onClose}
          id={element.id}
          key={index}
        />
      ))}

    </div>
    </>
  );
}
