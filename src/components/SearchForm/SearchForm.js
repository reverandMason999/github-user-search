import './SearchForm.css'
import { useState } from 'react'

const SearchForm = (props) => {
    const [username, setUsername] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onHandleSubmit(username)
        setUsername('')
    }
    return(
        <div className="search-form">
            <form onSubmit={handleSubmit}>
            <label>
                username:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <input type="submit" value="search" />
            </form>
        </div>
    )

}
export default SearchForm