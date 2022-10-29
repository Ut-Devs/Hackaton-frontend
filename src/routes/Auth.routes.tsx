import {
	Route,
	Routes,
} from 'react-router-dom'
import ClassVIdeo  from '../pages/ClassVideo'

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/home" element={<ClassVIdeo />} />
		</Routes>
    
	)
}
