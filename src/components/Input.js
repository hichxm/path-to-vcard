export function Input({
    prefix = null,
    suffix = null,
    value = '',
    id = '',
    name = '',
    placeholder = "",
    inputClassName = "",
    type = "text",
    onChange,
}) {
    return <div
        className="flex rounded-md shadow-sm ring-1 ring-inset ring-white focus-within:ring-2 transition focus-within:ring-inset focus-within:ring-white sm:max-w-lg w-full">
        {prefix ? <span className="flex select-none items-center pl-3 text-white sm:text-sm">{prefix}</span> : ''}
        <input type={type} name={name} id={id}
               value={value}
               onChange={onChange}
               className={(inputClassName + ' ') + "block transition flex-1 border-0 bg-transparent py-1.5 px-1 text-white placeholder:text-gray-300 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"}
               placeholder={placeholder} />
        {suffix ? <span className="flex select-none items-center pr-3 text-white sm:text-sm">{suffix}</span> : ''}
    </div>
}