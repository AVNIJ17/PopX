import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full px-6 pb-10">
     
      <div className="flex-1" />

      <div>
        <h1 className="font-bold text-2xl text-[#1a1a2e]">
          Welcome to PopX
        </h1>
        <p className="text-lg text-gray-500 mt-2 mb-8">
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
        </p>

        <button
          type="button"
          onClick={() => navigate('/register')}
          className="bg-[#6C25FF] text-white rounded-md py-3 w-full font-semibold mb-3 cursor-pointer"
        >
          Create Account
        </button>

        <button
          type="button"
          onClick={() => navigate('/login')}
          className="bg-[#C9B8FF] text-[#6C25FF] rounded-md py-3 w-full font-semibold cursor-pointer"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default Welcome
