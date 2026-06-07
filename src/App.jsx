import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import AccountSettings from './pages/AccountSettings'

/**
 * Root app component — wraps all routes inside a centered mobile frame.
 */
function App() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-white">
      {/* Mobile frame — fixed to viewport height, capped at 844px */}
      <div className="relative w-[390px] h-full max-h-[844px] bg-[#F7F8F9] mx-auto overflow-hidden flex flex-col">
        <div className="flex-1 min-h-0">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
