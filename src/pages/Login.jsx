import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../components/LabelInput'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = () => {
    if (isFormValid) {
      navigate('/account-settings')
    }
  }

  return (
    <div className="h-full px-6 pt-10">
      <h1 className="font-bold text-3xl text-[#1a1a2e]">
        Signin to your <br/> PopX account
      </h1>
      <p className="text-md text-gray-500 mt-2 mb-6">
        Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
      </p>

      <LabelInput
        label="Email Address"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <LabelInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        onClick={handleLogin}
        disabled={!isFormValid}
        className={`rounded-lg py-3 w-full font-semibold mt-8 text-white ${
          isFormValid ? 'bg-[#6C25FF]' : 'bg-gray-300'
        }`}
      >
        Login
      </button>
    </div>
  )
}

export default Login
