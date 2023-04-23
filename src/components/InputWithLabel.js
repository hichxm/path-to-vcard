import {Input} from "./Input.js";

export function InputWithLabel({
    prefix = null,
    suffix = null,
    value = '',
    id = '',
    name = '',
    placeholder = "",
    inputClassName = "",
    type = "text",
    onChange,
    children,
   className = '',
}) {
    return <div className={className}>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-white">{children}</label>
        <div className="mt-2">
            <Input id={id} prefix={prefix} suffix={suffix} placeholder={placeholder} name={name} value={value} inputClassName={inputClassName} onChange={onChange} type={type} />
        </div>
    </div>
}