import {
	Route,
	Routes,
} from 'react-router-dom'
import { ClassVIdeo } from '../components/ClassVideo/ClassVIdeo'

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<ClassVIdeo />} />
		</Routes>
    
	)
}
