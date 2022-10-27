import styles from './styles.module.scss'
import  Input from '../../components/Input'
import { BiUser, BiLock } from 'react-icons/bi'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import api from '../../services/baseUrl'
import { useEffect, useState } from 'react'

interface IUser {
	name?: string
	username?: string
	email?: string
	password?: string
	date?: string

}

const Register = () => {
	const [user, setUser] = useState<IUser>()
	let newUser: IUser
	
	const navigate = useNavigate() 
	const changeToLogin = () =>{ 
		const path = '/login' 
		navigate(path)
	}
	const changeToMainPage = () =>{
		const path = '/home'
		navigate(path)
	}

	const hangleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		newUser = { ...newUser, [name]: value }
	}

	const submitFormCallback = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setUser(newUser)
	}

	useEffect(() => {
		if (user) {
			api.post('/user', {
				name: user?.name,
				birthDate: user?.date,
				email: user?.email,
				password: user?.password,
				username: user?.username
			}).then((response) => {
				console.log(response)
				changeToMainPage()
			}).catch((error) => {
				console.log(error)
			})
		}
	}, [user])

	return (
		<div className={styles.login__container}>
			<aside className={styles.login__sideText}>
				<h1>Ainda não tem conta?</h1>
				<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
				</p>
				<Button onClick={changeToLogin} color="neutral">Login</Button>
			</aside>
			<aside className={styles.login__form}>
				<h2>Crie sua conta:</h2>
				<form className={styles.login__form__container} onSubmit={submitFormCallback}>
					<Input name="name" placeholder='Your name' type="text" onChange={hangleOnChange} /> 
					<Input name="username" placeholder='Your nickname' type="text" onChange={hangleOnChange} icon={<BiUser />} /> 
					<Input name="birthdate" placeholder='01/01/1999' type="date" onChange={hangleOnChange} icon={<BiUser />} /> 
					<Input name="email" placeholder='Youremail@somemail.com' type="email" onChange={hangleOnChange} icon={<BiUser />} /> 
					<Input name="password" placeholder='**********' type="password" onChange={hangleOnChange} icon={<BiLock />} /> 
					<Button color="primary">Entrar</Button>
				</form>
			</aside>
		</div>
	)
}

export default Register
