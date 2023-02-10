import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import bookImg from '../assets/images/booktgg.png'
import { COLORS } from '../styles/Constant'

const BookCard = () => {
  return (
    <div className={css(styles.root)}>
      <img src={bookImg} alt="book -image" className={css(styles.image)} />

      <div className={css(styles.contentBar)}>
        <div className={css(styles.titleSec)}>
            <div className={css(styles.title)}>
            The Great Gatsby
            </div>
            <div className={css(styles.price)}>
                $4.99
            </div>
        </div>
        <div className={css(styles.author)}>
        F.Scott Fitzgerald
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
    root:{
        width: 355,
        height: 530,
        backgroundColor: '#F7F7F7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,

    },
    images:{
        width: 229,
        height: 343,
    },
    contentBar:{
        display: 'flex',
        flexDirection: 'column',
        height: 132,
        backgroundColor: COLORS.white,
        marginTop: 35,
        justifyContent: 'space-between',
        width: 355, 
    },
    titleSec:{
        display: 'flex',
        justifyContent: 'space-between',
        
        margin: 15
    },
    title:{
        fontSize: 22,
        fontWeight: 600,
    },
    price:{
        color: COLORS.secondary,
        fontSize: 22,
        fontWeight: 600,
    },
    author:{
        margin: 15,
        fontSize: 18,
        fontWeight: 400,
        color: COLORS.grey
    }
})

export default BookCard
