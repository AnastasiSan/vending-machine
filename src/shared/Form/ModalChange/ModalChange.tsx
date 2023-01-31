import React from 'react';
import ReactDOM from 'react-dom';
import { change, pokemon } from '../../PokemonList';
import styles from './modalchange.css';
interface IModalChangeProp {
  onClick: () => void
  arrCount: change[]
  arrPokemon: pokemon[]
  balance: number
}
export function ModalChange({ onClick, arrCount, arrPokemon, balance }: IModalChangeProp) {
  const node = document.querySelector('#modal_root')
  if (!node) return null
  console.log(arrPokemon)
  return ReactDOM.createPortal((
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.description}>Сдача выдана</p>
        {arrCount.map((item, generateId) => (
          <span key={generateId}>{item.number}:{item.count}</span>
        ))}
        {arrPokemon.map(item => (
          <p key={item.id}>{item.name} x {item.count}</p>
        ))}
        {balance > 0 && (
          <p>К сожалению оставшейся сдачи нет ни покемонами ни деньгами, пожалуйста, пополните баланс</p>
        )}
        <button className={styles.close} onClick={() => onClick()}>Х</button>
      </div>
    </div>
  ), node);
}
