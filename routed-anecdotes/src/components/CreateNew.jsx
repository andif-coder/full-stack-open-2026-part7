import { useNavigate } from "react-router-dom"
import { useField, useAnecdotes } from "../hooks"

const CreateNew = () => {
	const { reset: contentReset, ...contentInput }= useField('text')
	const { reset: authorReset, ...authorInput }= useField('text')
	const { reset: infoReset, ...infoInput }= useField('text')
  const navigate = useNavigate()
	const { addAnecdote } = useAnecdotes()

  const handleSubmit = (e) => {
    e.preventDefault()
    addAnecdote({ content: contentInput.value, author: authorInput.value, info: infoInput.value, votes: 0 })
    navigate("/")
  }
	const handleReset = (e) => {
		e.preventDefault()
		contentReset()
		authorReset()
		infoReset()
	}

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
					<input {...contentInput} />
        </div>
        <div>
          author
					<input {...authorInput} />
        </div>
        <div>
          url for more info
					<input {...infoInput} />
        </div>
        <button type="submit">create</button>
				<button type="button" onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
