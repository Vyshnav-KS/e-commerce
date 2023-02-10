import React from 'react'
import Header from '../components/Header'
import { StyleSheet, css } from 'aphrodite'
import { COLORS } from '../styles/Constant'
import HomeImg from '../assets/images/Home.png'
import CategoryCard from '../components/CategoryCard'
import BookCard from '../components/BookCard'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Header />
        <div className={css(styles.introContents)}>

          <div className={css(styles.leftContents)}>
            <div className={css(styles.title)}>
            Explore the World Through Pages
            </div>
            <div className={css(styles.text)}>
            Your one-stop shop for endless books and endless adventures. <br/>Discover your next favorite read today!
            </div>
            <div className={css(styles.button)}> Explore More</div>

          </div>
          <div className={css(styles.rightContents)}>
            <img src={HomeImg} alt="home" />
          </div>

        </div>

        <div className={css(styles.category)}>
          <div className={css(styles.catSecTitle)}>Shop Our Top Categories</div>
          <div className={css(styles.catCards)}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>

        <div className={css(styles.books)}>
          <div className={css(styles.bookSecTitle)}> Books for you</div>
          <div className={css(styles.bookSec)}>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>

          <div className={css(styles.button)}> Explore More</div>
        </div>

        <div className={css(styles.footer)}>
          <Footer />
        </div>
    
    </div>
  )
}

const styles = StyleSheet.create({
  introContents:{
    display: 'flex',
    marginLeft: 200,
    marginRight: 200,
    justifyContent: 'space-between'
  },
  leftContents:{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 665,
    marginTop: 75
  },
  title:{
    fontSize: 70,
    fontWeight: 700,
    color: COLORS.secondary
  },
  text:{
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '31px',
    color: COLORS.secondary,
    marginTop: 15
  },
  button:{
    width: 244,
    height: 66,
    border: 'none',
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    fontSize: 23,
    fontWeight: 500,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  rightContents:{
    marginTop: 23
  },
  category:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 200,
    marginRight: 200,
    marginTop: 108,
    alignItems: 'center',
  },
  catSecTitle:{
      fontSize: 30,
      fontWeight: 600,
  },
  catCards:{
    marginTop: 64,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 28,
  },
  books:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: 84,
    alignItems: 'center'
  },
  bookSecTitle:{
    fontSize: 30,
    fontWeight: 600,
  },
  bookSec:{
    marginTop: 55,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: 33,
    rowGap: 56,
    justifyContent: 'space-between' ,

  }
})

export default Home
