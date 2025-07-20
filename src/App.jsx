import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/LoginForm'
import Register from './components/RegisterForm'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
            </Routes>
        </Router>
    )
}
export default App;