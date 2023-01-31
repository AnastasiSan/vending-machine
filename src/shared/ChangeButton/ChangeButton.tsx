import React, { useState } from 'react';
import { Change } from '../../data/Change';
import { Pokemons } from '../../data/Pokemon';
import styles from './changebutton.css';

interface IChangeButton {
  valueChange: number;
}
interface change {
  number: number;
  count: number;
}
export function ChangeButton({ valueChange }: IChangeButton) {
  const [isGetChange, setIsGetChange] = useState(false)
  let [withdraw, setWithdraw] = useState(valueChange)
  const [items, setItems] = useState(Change)
  const [itemsPokemon, setItemsPokemon] = useState(Pokemons);


  // const getChange = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   // e.preventDefault()
  //   let arr: change[] = [];

  //   let n: number = 0
  //   const last = Change[Change.length - 1].number
  //   let withdrawSum = 0

  //   items.map(item => {
  //     if (withdraw >= item.number && item.count > 0) {
  //       while (withdraw >= item.number && item.count > 0) {
  //         n++
  //         withdraw = withdraw - item.number
  //         item.count = item.count - n
  //         setItems([...Change])
  //         withdrawSum = withdrawSum + item.number
  //       }
  //       arr.push({ number: item.number, count: n })
  //       n = 0
  //     }
  //   })
  //   whatChange(withdrawSum, arr)
  // }
  // const whatChange = (withdrawSum: number, arr: change[]) => {
  //   if (valueChange == withdrawSum) {
  //     setIsGetChange(true)
  //     console.log(arr)
  //   } else {
  //     console.log('net sdatchi')
  //     console.log(withdraw)
  //     itemsPokemon.map(itemPokemon => {

  //       if (itemPokemon.price <= withdraw) {
  //         if (itemPokemon.price == withdraw) {
  //           withdraw = withdraw - itemPokemon.price
  //           console.log(itemPokemon.name)
  //         } else {
  //           console.log(itemPokemon.name)
  //         }
  //       }
  //     })
  //   }
  // }

  return (
    <div className={styles.changeContainer}>

      <p className={styles.description}>
        Ваша сдача
      </p>
      <button className={styles.button} >Получить сдачу</button>

    </div>
  );
}
