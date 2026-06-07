function AccountSettings() {
  return (
    <div className="flex flex-col h-full border-b border-dashed border-gray-900">
      {/* Top bar */}
      <div className="py-4 bg-white">
        <span className="text-md text-black font-extralight">Account Settings</span>
      </div>

      {/* Profile card */}
      <div className="bg-[#f7f8f9] mx-0  py-6">
        <div className="flex items-start gap-4">
        
          <div className="relative shrink-0">
            <img
              src="https://i.pravatar.cc/80"
              alt="Profile avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center text-white text-xs">
              📷
            </span>
          </div>

     
          <div>
            <p className="font-bold text-[#1a1a2e]">Marry Doe</p>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 leading-relaxed px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="border-b border-dashed border-gray-300 mt-4" />
        <div className="border-b border-dashed border-gray-300 mt-[460px]" />

      </div>

     
    </div>
  )
}

export default AccountSettings
