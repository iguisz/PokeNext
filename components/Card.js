import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

export default function Card({pokemon}) {
  return (
    <div className={styles.card}>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="150" height="150" alt="pokemon" />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <Link href={`/pokemons/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  )
}