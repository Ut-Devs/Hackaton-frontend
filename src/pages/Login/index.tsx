import styles from './styles.module.scss'
import  Input from '../../components/Input'
import { BiUser, BiLock } from 'react-icons/bi'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'

const Login = () => {
	const [newUserLogin, setNewUserLogin] = useState<{ email: string, password: string }>()
	let userLogin: { email: string, password: string }
	const navigate = useNavigate() 
	const changeToRegister = () =>{ 
		const path = '/register' 
		navigate(path)
	}

	const hangleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		userLogin = { ...userLogin, [name]: value }
	}

	const {signed, signIn} = useAuth()

	function handleLogin(e: React.FormEvent<HTMLFormElement>){
		setNewUserLogin(userLogin)
		e.preventDefault()
		if(newUserLogin){
			console.log(newUserLogin)
			
		}
	}

	useEffect(() => {
		if (newUserLogin) {
			signIn(newUserLogin?.email, newUserLogin?.password).then(()=>{
				console.log(signed)
				if(sessionStorage.getItem('@grindlearn:user')){
					navigate('/home')
					window.location.reload()
				}
			}).catch((error)=>{
				console.log(error)
			})
		}
	}, [newUserLogin])
  
	return (
		<div className={styles.login__container}>
			<aside className={styles.login__sideText}>
				<h1>Bem vindo de volta!!</h1>
				<p>
          Lorem ipsum dolor sit amet, testing something adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
				</p>
				<Button onClick={changeToRegister} color="neutral">Cadastre-se</Button>
			</aside>
			<aside className={styles.login__form}>
				<h2>Entrar na conta:</h2>
				<form onSubmit={handleLogin} className={styles.login__form__container}>
					<Input name="email" placeholder='Your name' type="email" onChange={hangleOnChange} icon={<BiUser />} /> 
					<Input name="password" placeholder='**********' type="password" onChange={hangleOnChange} icon={<BiLock />} /> 
					<Button color="primary" type='submit'>Entrar</Button>
				</form>
			</aside>
		</div>
	)
}

export default Login
