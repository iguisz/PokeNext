import Image from 'next/image'
import styles from '../../styles/pokemonId.module.css'

export const getStaticPaths = async() => {

  const maxPokemons = 100;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {pokemonId: (index + 1).toString()}
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async(context) => {

  const id = context.params.pokemonId
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}

export default function Pokemon({pokemon}) {
  return (
    <div className={styles.details}>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="150" height="150" alt="pokemon" />
      <h2 className={styles.title}>{pokemon.name}</h2><br></br>
      <p className={styles.id}>Número: <span>#{pokemon.id}</span></p><br></br>
      <div className={styles.extra}>
        <p className={styles.weight}>Peso: {pokemon.weight}</p>
        <p className={styles.height}>Altura: {pokemon.height}</p>
      </div>
    </div>
  )
}