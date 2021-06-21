import React,{useState,useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((prevCount) => prevCount+1)
    }

    return (
            <div>
				<button onClick={() => incrementCount()}>
                    Count: {count}
				</button>
			</div>
    )
}

export default Counter