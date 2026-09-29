import { useEffect, useState } from "react"
import anecdotesServices from "../services/anecdotes"
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
	const [anecdotes, setAnecdotes] = useState([])
	useEffect(() => {
		anecdotesServices.getAll().then((data) => 
			setAnecdotes(data)
		)
	}, [])
	return {
		anecdotes,
		setAnecdotes,
	}
}
