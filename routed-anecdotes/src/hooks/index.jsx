import { createContext, useState, useEffect, useContext } from "react"
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
export const AnecdoteContext = createContext()

export const AnecdoteContextProvider = (props) => {
	const [anecdotes, setAnecdotes] = useState([])
	useEffect(() => {
		anecdotesServices.getAll().then((data) => 
			setAnecdotes(data)
		)
	}, [])
	const addAnecdote = async (anecdote) => {
		const newAnecode = await anecdotesServices.createNew(anecdote);
    setAnecdotes(prev => prev.concat(newAnecode))
	}
	const deleteAnecdote = async (id) => {
		await anecdotesServices.remove(id)
		setAnecdotes(prev => prev.filter(a => a.id !== id))
	}
	return (
		<AnecdoteContext.Provider value={{ anecdotes, addAnecdote, deleteAnecdote }}>
			{props.children}
		</AnecdoteContext.Provider>
	)
}

export const useAnecdotes = () => {
	return useContext(AnecdoteContext)
}
