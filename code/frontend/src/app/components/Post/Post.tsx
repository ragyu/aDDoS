import styles from './Post.module.css';
import Link from 'next/link';

interface PostProps {
  id: number;
  title: string;
  author: string;
  date: string;
}

export default function Post({ id, title, author, date }: PostProps) {
  const isEven = id % 2 === 0;

  return (
    <div className={`${styles.Post} ${isEven ? styles.even : styles.odd}`}>
      <span className={styles.infoData}>{id}</span>
      <Link href="#" className={styles.infoData}>
        {title}
      </Link>
      <span className={styles.infoData}>{author}</span>
      <span className={styles.infoData}>{date}</span>
    </div>
  );
}
