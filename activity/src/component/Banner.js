import React,{useState,useEffect} from 'react'

export const Banner = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Boom')
    })

    const updateState = () => {
        setCount((prevCount) => prevCount+1)
    }

    return (
            <div>
				<button onClick={() => updateState()}>
					State: {count}
				</button>
			</div>
    )
}


