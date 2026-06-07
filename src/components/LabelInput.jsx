function LabelInput({
  label,
  type = 'text',
  value,
  onChange,
  name,
  id,
}) {
  const inputId = id || name
  const isRequired = typeof label === 'string' && label.endsWith('*')
  const labelText = isRequired ? label.slice(0, -1) : label

  return (
    <div className="relative mt-4">
      <label
        htmlFor={inputId}
        className="absolute -top-2.5 left-3 px-1 bg-white text-[#6C25FF] text-xs font-medium z-10"
      >
        {labelText}
        {isRequired && <span className="text-red-500">*</span>}
      </label>

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white text-sm focus:outline-none focus:border-[#6C25FF]"
      />
    </div>
  )
}

export default LabelInput
