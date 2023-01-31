import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modalpokemon.css';
interface IModalPokemonProp {
  onClick: ()=> void
}
export function ModalPokemon({onClick}:IModalPokemonProp) {
  const node = document.querySelector('#modal_root')
  if (!node) return null
  return ReactDOM.createPortal((
    <div className={styles.container}>
      <div className={styles.modal}>
          <p className={styles.description}>Сдача получена</p>
          <button className={styles.close} onClick={()=> onClick()}>Х</button>
      </div>
    </div>
  ), node);
}
