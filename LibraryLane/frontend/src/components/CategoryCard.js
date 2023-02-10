import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import cardImg from '../assets/images/categoryCardimg1.png'
import { COLORS } from '../styles/Constant'

const CategoryCard = () => {
  return (
    <div className={css(styles.root)}>

          <div className={css(styles.card)}>
            <div className={css(styles.cardTitle)}>
                Fiction
            </div>  
          </div>
      
    </div>
  )
}

const styles = StyleSheet.create({
    root:{
        backgroundImage: `url(${cardImg})`,
        width: 230,
        height: 310,
        borderRadius: 20,
    },
    card:{
        background: 'rgba(0, 0, 0, 0.4)',
        width: 230,
        height: 310,
        borderRadius: 20,
        
    },
    cardTitle:{
        padding: 31,
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 700,
        color: COLORS.white
    }
})

export default CategoryCard
