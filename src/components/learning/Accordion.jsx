import { createContext, useContext, useRef, useEffect, useState } from "react"
import { ChevronDown } from "react-feather"

const AccordianContext = createContext()

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props} className="border-2 border-x border-t rounded-b-md border-gray-600">
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, date, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="border-b border-gray-600 bg-gray-800" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between text-white items-center p-4 font-medium"
      >
        <p className=" flex gap-2 items-center">
          {value + '.'} {trigger}
          <span className="text-sm text-gray-200 select-none">
            - {date}
          </span>
        </p>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4 text-gray-300 " ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}