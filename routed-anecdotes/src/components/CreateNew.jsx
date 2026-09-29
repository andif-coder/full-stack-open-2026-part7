import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

const CreateNew = ({ addNew }) => {
	const { reset: contentReset, ...contentInput }= useField('text')
	const { reset: authorReset, ...authorInput }= useField('text')
	const { reset: infoReset, ...infoInput }= useField('text')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({ content: contentInput.value, author: authorInput.value, info: infoInput.value, votes: 0 })
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
