import {
	Route,
	Routes,
} from 'react-router-dom'
import Login from '../pages/Login'
import MainPage from '../pages/MainPage'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<MainPage />} />
		</Routes>
    
	)
}
