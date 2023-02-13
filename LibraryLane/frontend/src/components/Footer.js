import { StyleSheet , css} from 'aphrodite'
import React from 'react'
import { COLORS } from '../styles/Constant'

const Footer = () => {
  return (
    <div className={css(styles.root)} >
      <div className={css(styles.container)}> 
        <div className={css(styles.top)}>
          <div className={css(styles.contents)}>
            <div className={css(styles.title)}>About</div>
            <div className={css(styles.title)}>Categories</div>
            <div className={css(styles.title)}>Contact Us</div>
          </div>
          <div className={css(styles.contents)}>
            <div className={css(styles.title)}>Blog</div>
            <div className={css(styles.title)}>Events</div>
            <div className={css(styles.title)}>Announcements</div>
          </div>
          <div className={css(styles.contents)}>
            <div className={css(styles.title)}>Log Out</div>
            <div className={css(styles.title)}>Log In</div>
            <div className={css(styles.title)}>Sign Up</div>
          </div>
          <div className={css(styles.contents)}>
            <div className={css(styles.title)}>Facebook</div>
            <div className={css(styles.title)}>Instagram</div>
            <div className={css(styles.title)}>You Tube</div>
            <div className={css(styles.title)}>Twitter</div>
            
          </div>
        </div>
        <div className={css(styles.bottom)}>LibraryLane © 2023 All Rights Reserved </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
    root:{
        maxHeight: 300,
        width: '100%',
        backgroundColor: COLORS.secondary,
        marginTop: 100
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 230,
      marginRight: 230,
    },
    top:{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 61
    },
    contents:{
      height: 92,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 500,
      color: COLORS.white
    },
    bottom:{
      textAlign: 'center',
      marginTop: 47,
      marginBottom: 30,
      fontSize: 15,
      color: COLORS.grey
    }


})

export default Footer
