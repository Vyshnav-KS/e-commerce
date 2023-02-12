import { StyleSheet, css } from 'aphrodite'
import React, { useEffect, useState } from 'react'
import cardImg from '../assets/images/categoryCardimg1.png'
import { COLORS } from '../styles/Constant'
import axios from 'axios'


const CategoryCard = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/categories/')
    .then(res => {
      setCategories(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className={css(styles.catCards)}>
    {categories.map(category => (
      <div key={category.id} className={css(styles.root)}>

      <div className={css(styles.card)}>
        <div className={css(styles.cardTitle)}>
            {category.category_name}
        </div>  
      </div>
  
</div>
    ))}
    </div>
  )
}

const styles = StyleSheet.create({
  catCards:{
    marginTop: 64,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 28,
  },
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
    },
    
})

export default CategoryCard
