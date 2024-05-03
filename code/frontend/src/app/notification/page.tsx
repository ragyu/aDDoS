import React from 'react'
import styles from './notification.module.css'
import Link from 'next/link';

function notification() {
    return (
        <div className={styles.notiWrap}>
          <div className={styles.noticeText}>
            공지사항
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoItem}>번호</span>
            <span className={styles.infoItem}>제목</span>
            <span className={styles.infoItem}>글쓴이</span>
            <span className={styles.infoItem}>작성일</span>
          </div>
    
          <div className={styles.infoBottom}>
            <span className={styles.infoData}>1</span>
            <Link href="#" className={styles.infoData}>공지사항 예시 제목</Link>
            <span className={styles.infoData}>관리자</span>
            <span className={styles.infoData}>2024-05-03</span>
         </div>    

         <div className={styles.infoBottom}>
            <span className={styles.infoData}>2</span>
            <Link href="#" className={styles.infoData}>ㅎㅇㅎㅇ</Link>
            <span className={styles.infoData}>Admin</span>
            <span className={styles.infoData}>2024-05-03</span>
         </div>    

         <div className={styles.infoBottom}>
            <span className={styles.infoData}>3</span>
            <Link href="#" className={styles.infoData}>ㅗ</Link>
            <span className={styles.infoData}>GM</span>
            <span className={styles.infoData}>2024-05-03</span>
         </div>    

         <div className={styles.infoBottom}>
            <span className={styles.infoData}>4</span>
            <Link href="#" className={styles.infoData}>호우</Link>
            <span className={styles.infoData}>Master</span>
            <span className={styles.infoData}>2024-05-03</span>
         </div>    

         <div className={styles.infoBottom}>
            <span className={styles.infoData}>5</span>
            <Link href="#" className={styles.infoData}>헤헤</Link>
            <span className={styles.infoData}>King</span>
            <span className={styles.infoData}>2024-05-03</span>
         </div>    
        </div>  
      );
    }


export default notification