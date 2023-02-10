import { StyleSheet , css} from 'aphrodite'
import React from 'react'

const Footer = () => {
  return (
    <div className={css(styles.root)} >
      Footer
    </div>
  )
}

const styles = StyleSheet.create({
    root:{
        height: 300
    }
})

export default Footer
