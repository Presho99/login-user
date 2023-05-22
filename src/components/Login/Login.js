import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './Login.module.css'

function Login(props) {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState('')
    const [validForm, setValidForm] = useState(false)

    useEffect(()=> {
        setValidForm(
            email.includes('@') && password.trim().length>6)
    }, [ email, password])

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
        
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
      
    }

    const validateEmailHandler = () => {
        setValidEmail(email.includes('@'))
    }

    const validatePasswordHandler = () => {
        setValidPassword(password.trim().length > 6)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.onLogin(email, password)

    }

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <div className={`${classes.control} ${validEmail === false ? classes.invalid : ''}`}>
                <label htmlFor='email'>Email</label>
                <input
                   type="email"
                    id="email"
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
            </div>
            <div className={`${classes.control} ${validPassword === false ? classes.invalid : ''}`}>
                <label htmlFor='password'>Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                />
            </div>
            <div className={classes.actions}>
                <Button type="submit" className={classes.btn} disabled={!validForm}>
                    Login
                </Button>
            </div>
        </form>
    </Card>
  )
}

export default Login