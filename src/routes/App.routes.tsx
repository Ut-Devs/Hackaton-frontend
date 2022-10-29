import {
	Route,
	Routes,
} from 'react-router-dom'
import Login from '../pages/Login'
import MainPage from '../pages/MainPage'
import Contact from '../components/Contact/Contact'
import Register from '../pages/Register'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<MainPage />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
    
	)
}
