import React from 'react';
import styles from './recipe.module.css';


const Recipe = ({ title, description, imageUrl, productQuantities}) => {

  return (
    <div className={styles.container}>
  
        <div className={styles.left_container}>
        <h1 className={styles.titleRecipe}>{title}</h1>
        <img src={imageUrl} alt="No img" />
        <br />
        <br />
        <h3>Ingredients</h3>
        <ul className={styles.ullist}>
          {productQuantities.map((el) => {
            return <li key={el._id}>{el.product.title} - {el.quantity}{el.quantityType}</li>
          })}
        </ul>
      </div>
      
      <div className={styles.right_container}>
      <br/>
        <h3>Preparation</h3>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default Recipe;