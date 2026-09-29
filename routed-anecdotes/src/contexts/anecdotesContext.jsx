import { createContext, useState, useEffect } from "react"
import anecdotesServices from "../services/anecdotes"
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
		await anecdotesServices.deleteAnecdote(id)
		setAnecdotes(prev => prev.filter(a => a.id !== id))
	}
	return (
		<AnecdoteContext.Provider value={{ anecdotes, addAnecdote, deleteAnecdote }}>
			{props.children}
		</AnecdoteContext.Provider>
	)
}

