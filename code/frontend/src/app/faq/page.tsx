import React from 'react'
import styles from './faq.module.css'
import Image from 'next/image'
import FaqImage from '../../../public/assets/faq.png'

function page() {
  return (
    <div>
      <div className={styles.imageLayout}><Image src={FaqImage} width={500} height={300} alt='FaqImage'/></div>
      <div className={styles.qaWrap}>
        <div className={styles.leftQa}>
          <Image src={} width={} height={} alt='QuestionMark'/>
        </div>
        <div className={styles.rightQa}></div>
      </div>
    </div>
  )
}

export default page
