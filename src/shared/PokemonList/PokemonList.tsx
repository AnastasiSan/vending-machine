import React, { useEffect, useState } from 'react';
import { PokemonCard } from '../PokemonCard';
import styles from './pokemonlist.css';
import { Pokemons } from '../../data/Pokemon';
import { Form } from '../Form';
import { Change } from '../../data/Change';
import { generateId } from '../../utils/react/generateRandomIndex';

export interface change {
  number: number;
  count: number
}

export interface pokemon {
  id:string;
  name: string,
  count: number
}

export function PokemonList() {
  let arr: change[] = [];
  let arrPokemon:pokemon[] =[];
  const [isBalance, setIsBalance] = useState(0);
  const [itemPokemon, setItemPokemon] = useState(Pokemons);
  const [itemChange, setItemChange] = useState(Change);
  const [countNominal, setCountNominal] = useState(arr)
  const [changePokemon, setChangePokemon] = useState(arrPokemon)
  const [isModalChange, setIsModalChange] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)


  const handlerClick = (id: string, nominal: number) => {
    let sum = isBalance + nominal
    setIsBalance(sum)
    itemChange.map(item => {
      if (nominal == item.number) {
        item.count = item.count + 1
        setItemChange([...Change])
      }
    })
  }
  const buyPokemon = (id: string, nominal: number) => {
    let sum = isBalance - nominal
    setIsBalance(sum)
    itemPokemon.map(item => {
      if (item.quantity > 0 && item.id == id) {
        item.quantity = item.quantity - 1
        setItemPokemon([...Pokemons])
      }
    })
  }

  const getChange = () => {
    let withdraw = isBalance
    let n: number = 0
    let withdrawSum = 0

    itemChange.map(item => {
      if (withdraw >= item.number && item.count > 0) {
        while (withdraw >= item.number && item.count > 0) {
          n++
          withdraw = withdraw - item.number
          item.count = item.count - n
          setItemChange([...Change])
          withdrawSum = withdrawSum + item.number
        }
        arr.push({ number: item.number, count: n })
        setIsBalance(withdraw)
        setCountNominal(arr)
        n = 0
      }
    })
    setIsModalChange(true)
    whatChange(withdrawSum, arr, withdraw)
  }
  const whatChange = (withdrawSum: number, arr: change[], withdraw: number) => {
    let n:number = 0
    if (isBalance == withdrawSum) {
      // console.log(arr)
    } else {
      itemPokemon.map((item => {
        if (withdraw >= item.price && item.quantity != 0) {
          while (withdraw >= item.price && item.quantity != 0) {
            n++
            withdraw = withdraw - item.price
            item.quantity = item.quantity - 1
            setItemPokemon([...Pokemons])
            setIsBalance(withdraw)
            // console.log(item.name)
          }
          arrPokemon.push({id:item.id,name: item.name, count: n})
          setChangePokemon(arrPokemon)
          console.log(changePokemon)
        } else {
          console.log('Пополните счёт, так как не можем выдать сдачи ни товаром ни покемонами')
          // console.log(arrPokemon)
        }
      }))
    }
  }
  const closeModal = () => {
    setIsModalChange(false)
  }

  useEffect(() => {
    if (isBalance > 0) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [isBalance])

  return (
    <div className={styles.content}>
      <ul className={styles.pokemonList}>
        {Pokemons.map(pokemon => (
          <PokemonCard
            id={pokemon.id}
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            price={pokemon.price}
            quantity={pokemon.quantity}
            balance={isBalance}
            onClick={() => buyPokemon(pokemon.id, pokemon.price)}
          />
        ))}

      </ul>
      <Form
        closeModal={closeModal}
        balance={isBalance}
        onClick={handlerClick}
        getChange={getChange}
        arrCount={countNominal}
        modal={isModalChange}
        disabled={isDisabled} 
        arrPokemon={changePokemon}/>
    </div>
  );
}
