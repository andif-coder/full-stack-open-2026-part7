import { useContext, useState } from "react"
import { AnecdoteContext } from "../contexts/anecdotesContext.jsx"
export const useField = (type) => {
	const [value, setValue] = useState('')
	const onChange = (event) => {
		setValue(event.target.value)
	}
	const reset = () => {
		setValue('')
	}
	return {
		type,
		value,
		onChange,
		reset,
	}
}
export const useAnecdotes = () => {
	return useContext(AnecdoteContext)
}
