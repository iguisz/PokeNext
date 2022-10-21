import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.content}>
      <h2 className={styles.text}>Sobre o Projeto</h2><br></br>
      <p className={styles.smText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <Image className={styles.Charizard} src="/images/charizard.png" height="300" width="300" alt="Charizard" />
    </div>
  )
}