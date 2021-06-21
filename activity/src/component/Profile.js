import React,{useState} from 'react'

export const Profile = () => {

    const [name, setName] = useState("Backbencher")
    const [age, setAge] = useState(23)

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onAgeChange = (e) => {
        setAge(e.target.value)
    }

    return (
            <div>
				<form>
					<input
						type='text'
						value={name}
						onChange={(e) => onNameChange(e)}
					/>
					<input
						type='text'
						value={age}
						onChange={(e) => onAgeChange(e)}
					/>
					<h2>
						Name: {name}, Age: {age}
					</h2>
				</form>
			</div>
    )
}