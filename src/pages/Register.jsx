import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../components/LabelInput'

function Register() {
  const navigate = useNavigate()
  const [isAgency, setIsAgency] = useState('yes')

  const handleCreateAccount = () => {
    navigate('/account-settings')
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-6 pt-10 pb-4">
        <h1 className="font-bold text-3xl text-[#1a1a2e] mb-6">
          Create your <br/> PopX account
        </h1>

        <LabelInput label="Full Name*" name="fullName" />
        <LabelInput label="Phone number*" type="tel" name="phone" />
        <LabelInput label="Email address*" type="email" name="email" />
        <LabelInput label="Password*" type="password" name="password" />
        <LabelInput label="Company name" name="company" />

        <div className="mt-6">
          <p className="text-black text-xs font-medium mb-3">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>

          <div className="flex gap-8">
          
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
                className="sr-only"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isAgency === 'yes' ? 'border-[#6C25FF]' : 'border-gray-300'
                }`}
              >
                {isAgency === 'yes' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6C25FF]" />
                )}
              </span>
              <span className="text-sm text-gray-700">Yes</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
                className="sr-only"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isAgency === 'no' ? 'border-[#6C25FF]' : 'border-gray-300'
                }`}
              >
                {isAgency === 'no' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6C25FF]" />
                )}
              </span>
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
      </div>
      <div className="shrink-0 px-6 pb-6 pt-4 bg-[#f7f8f9]">
        <button
          type="button"
          onClick={handleCreateAccount}
          className="bg-[#6C25FF] text-white rounded-lg py-3 w-full font-semibold"
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default Register
