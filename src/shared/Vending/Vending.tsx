import React from 'react';
import { PokemonList } from '../PokemonList';
import styles from './vending.css';

export function Vending() {
  return (
    <>
    <h1 className={styles.heading}>Выбери себе покемонов</h1>
    <PokemonList/>
    </>
  );
}
