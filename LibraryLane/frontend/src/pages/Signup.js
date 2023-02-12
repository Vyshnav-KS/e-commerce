import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { COLORS } from '../styles/Constant';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
const navigate = useNavigate()
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

    const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password
    };

    axios.post('http://localhost:8000/api/auth/register/', userData)
    .then(res => {
        console.log(res)
        alert("User Created Successfully")
        // eslint-disable-next-line no-restricted-globals
        navigate('/login')
    })
    .catch(error => {
        console.log(error)
        alert("Error creating user")
    })
  }

  return (
    <div className={css(styles.root)}>
        <div className={css(styles.container)}>
            <div className={css(styles.contents)}>
                <div className={css(styles.logo)}>LibraryLane</div>
                <div className={css(styles.inputs)}>
                    <form className={css(styles.form)} onSubmit={handleSubmit}>
                        <div className={css(styles.name)}>
                        <input className={css(styles.inpfname)} type='text' size='15' placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)} ></input>
                        <input className={css(styles.inpfname)} type='text' size='15' placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)} ></input>
                        </div>
                        <input className={css(styles.inpf)} type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} ></input>
                        <input className={css(styles.inpf)} type='text' size='15' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} ></input>
                        <input className={css(styles.inpf)} type='password' size='15' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                        <input className={css(styles.inpf)} type='password' size='15' placeholder='confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                        <input className={css(styles.button)} type='submit' value='Sign Up' />

                    </form>
                    <div className={css(styles.text)}> Already have an account ?<Link  to = '/login' className={css(styles.Signup)}> Signin</Link> </div>
                </div>
            </div>
        </div>
    </div>
  )
}; 

const styles = StyleSheet.create({
    root:{
        display: 'flex',                                                                                                                                                
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '100hv'
        
    },
    container:{
        marginTop: 186,
        minWidth: 522,
        height: 545,
        backgroundColor: COLORS.white,
        borderRadius: 15

    },
    logo:{
        fontSize: 30,
        fontWeight: 700,
        color: COLORS.secondary,
        textAlign: 'center',
        marginTop: 18
    },
    form:{
        marginTop: 43,
        marginLeft: 31,
        marginRight: 31,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 10,
    },
    inpfname:{
        borderRadius: 10,
        width: 212,
        height: 45,
        paddingLeft: 20,
        marginBottom: 9,
        border: `1.5px solid ${COLORS.grey}`, 
        '::placeholder':{
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: '0.06em',
            
        },
    },
    inpf:{
        borderRadius: 10,
        width: 460,
        margin: 9,
        height: 45,
        paddingLeft: 20,
        border: `1.5px solid ${COLORS.grey}`, 
        '::placeholder':{
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: '0.06em',
            
        },
    },
    button:{
        margin: 9,
        width: 480,
        height: 45,
        color: COLORS.white,
        backgroundColor: COLORS.secondary,
        fontSize:16,
        fontWeight: 600,
        letterSpacing: '0.06em',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer'
    },
    text:{
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center',
        margin: 20
    },
    login:{
        color: '#1535AA'
    }

})

export default Signup
