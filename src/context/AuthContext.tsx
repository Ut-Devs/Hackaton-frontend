import React, { createContext, useEffect, useState, useContext } from 'react'
import api from '../services/baseUrl'

interface User {
  id: string
  name: string
  email: string
  birthDate: string
  username: string
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(cpfCpnj: string, pass: string): Promise<void>;
  loading: boolean;
  signOut(): void; 
}

interface AuthProps{
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)


export const AuthProvider = ({ children }: AuthProps) => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)


	useEffect(()=>{
		async function loadStorageData(){
			const storagedToken = sessionStorage.getItem('@grindlearn:token')
      

			if(storagedToken){
				api.defaults.headers.Authorization = `Bearer ${storagedToken}`
			}
			setLoading(false)
		}
		loadStorageData()
	}, [])


	async function signIn(email: string, pass: string){
		try{
			const res = await api.post('/login', {
				email: email,
				password: pass
			})

			console.log('asdasdasdasd')

			// api.defaults.headers.Authorization = `Bearer ${res.data.token}`
			// sessionStorage.setItem('@grindlearn:token', res.data.token)
		}catch(err){
			alert('email ou senha incorretos, retorne a página de login e tente novamente')
		}
	}

	async function signOut(){
		sessionStorage.clear()
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{signed: !!user, user, signIn, loading, signOut}}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth(){
	const context = useContext(AuthContext)

	return context
}