import { AuthRoutes } from './Auth.routes'
import { AppRoutes } from './App.routes'

export default function Routes() {  
	const logged = true
	return logged ? <AppRoutes /> : <AuthRoutes />
}