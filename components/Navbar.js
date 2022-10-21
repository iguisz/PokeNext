import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Image src="/images/pokeball.png" width="35" height="35" alt="PokeNext" />
        <Link href="/"><a>PokeNext</a></Link>
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ul>
    </nav>
  )
}  