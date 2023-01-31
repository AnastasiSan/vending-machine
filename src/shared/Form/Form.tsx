import React, { useEffect, useState } from 'react';
import { nominal } from '../../data/Nominal';
import { change, pokemon } from '../PokemonList';
import styles from './form.css';
import { ModalChange } from './ModalChange';

interface IFormProp {
  onClick: (id: string, nominal: number) => void
  balance: number;
  getChange: () => void;
  arrCount: change[];
  modal: boolean;
  closeModal: () => void;
  disabled: boolean;
  arrPokemon: pokemon[];
}

export function Form({ onClick, balance, getChange, arrCount, modal,closeModal,disabled,arrPokemon }: IFormProp) {

  return (
    <div className={styles.formContainer}>
      <div className={styles.money}>
        <h2 className={styles.moneyHeading}>Внесите деньги</h2>
        <div className={styles.buttonContainer}>
          {nominal.map(item => (
            <button key={item.id} className={styles.button} onClick={() => onClick(item.id, item.number)}> {item.number} р.</button>
          ))
          }
        </div>
        <p className={styles.balance}>Баланс: <span>{balance} рублей</span></p>
        <button className={styles.changeButton} onClick={getChange} disabled={!disabled}>Получить сдачу</button>
        {modal && (
          <ModalChange onClick={()=>closeModal()} arrCount={arrCount} arrPokemon={arrPokemon} balance={balance}/>
        )
        }
      </div>
    </div>

  );
}
