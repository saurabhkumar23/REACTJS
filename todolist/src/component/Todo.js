import React,{useEffect,useState} from 'react'
import auth from '../firebase'

const Todo = () => {

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log('user already logged in')
        })
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSubmitHandle = async() => {
        console.log(email)
        console.log(password)
        let res = await auth.signInWithEmailAndPassword(email,password)
        console.log(res.user)
    }

    const logoutHandle = async() => {
        await auth.signOut()
        console.log('sign out successfully')
    }

    return (
        <div>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={formSubmitHandle}>Submit</button>
            <button onClick={logoutHandle}>Sign out</button>
        </div>
    )
}

export default Todo
