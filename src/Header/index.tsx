import styles from './styles.module.scss'
import Logo from '../assets/Logo.svg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.brand}>
				<img className={styles.logo} src={Logo} alt="" />
				<h1 className={styles.title}>GRINDLEARN</h1>
			</div>
			<div className={styles.buttonContainer}>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/Contact'>Contact</Link>
				<Button>Entrar</Button>
			</div>
		</div>
	)
}

export default Header
