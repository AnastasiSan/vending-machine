import React, { useState } from 'react';
import { ModalPokemon } from './ModalPokemon';
import styles from './pokemoncard.css';

interface IPokemonCardProps {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  balance: number;
  onClick: (id: string, nominal: number) => void;
}

export function PokemonCard({ id, name, img,  price, quantity, balance, onClick }: IPokemonCardProps) {

  return (
    <li className={styles.card} >
      <img className={styles.img} src={img} alt={name} />
      <div className={styles.description}>
        {quantity == 0
          ? <p className={styles.none}>Нет в наличии</p>
          : <p className={styles.quantity}>В наличии {quantity}</p>
        }
        <p className={styles.price}>{price} руб.</p>
      </div>
      <p className={styles.name}>{name}</p>
      {balance >= price && quantity != 0 && (
        <button className={styles.choise} onClick={()=>onClick(id, price)}>Выбрать</button>
      )
      }
    </li >
  );
}
