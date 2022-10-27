import {
	Route,
	Routes,
} from 'react-router-dom'
import { ClassVIdeo } from '../components/ClassVideo/ClassVIdeo'
import Contact from '../components/Contact/Contact'

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<ClassVIdeo />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
    
	)
}
