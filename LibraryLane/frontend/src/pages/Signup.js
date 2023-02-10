import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { COLORS } from '../styles/Constant';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className={css(styles.root)}>
        <div className={css(styles.container)}>
            <div className={css(styles.contents)}>
                <div className={css(styles.logo)}>LibraryLane</div>
                <div className={css(styles.inputs)}>
                    <form className={css(styles.form)}>
                        <div className={css(styles.name)}>
                        <input className={css(styles.inpfname)} type='text' size='15' placeholder='first name' ></input>
                        <input className={css(styles.inpfname)} type='text' size='15' placeholder='last name' ></input>
                        </div>
                        <input className={css(styles.inpf)} type='email' placeholder='email'></input>
                        <input className={css(styles.inpf)} type='text' size='15' placeholder='username'></input>
                        <input className={css(styles.inpf)} type='password' size='15' placeholder='password'></input>
                        <input className={css(styles.inpf)} type='password' size='15' placeholder='confirm password'></input>
                        <input className={css(styles.button)} type='button' value='Sign Up' />

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
