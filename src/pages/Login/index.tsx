import styles from './styles.module.scss'
import  Input from '../../components/Input'
import { BiUser, BiLock } from 'react-icons/bi'
import Button from '../../components/Button'

const Login = () => {
	return (
		<div className={styles.login__container}>
			<aside className={styles.login__sideText}>
				<h1>Bem vindo de volta!!</h1>
				<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
				</p>
				<Button color="neutral">Cadastre-se</Button>
			</aside>
			<aside className={styles.login__form}>
				<h2>Entrar na conta:</h2>
				<form action="" className={styles.login__form__container}>
					<Input name="email" type="email" icon={<BiUser />} /> 
					<Input name="password" type="password" icon={<BiLock />} /> 
					<Button color="primary">Entrar</Button>
				</form>
			</aside>
		</div>
	)
}

export default Login
