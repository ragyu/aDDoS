import styles from '../board/board.module.css';
import Button from '../components/Button/Button';

interface Post {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  likes: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'ㅎㅇㅎㅇ님들',
    author: '김동철',
    createdAt: '2024-06-01',
    likes: 20,
  },
  {
    id: 2,
    title: 'ㅎㅇㅎㅇ님들',
    author: '박주형',
    createdAt: '2024-06-12',
    likes: 56,
  },
  {
    id: 3,
    title: 'ㅎㅇㅎㅇ님들',
    author: '송경선',
    createdAt: '2024-06-25',
    likes: 93,
  },
  {
    id: 4,
    title: 'ㅎㅇㅎㅇ님들',
    author: '이건우',
    createdAt: '2024-07-09',
    likes: 37,
  },
  {
    id: 5,
    title: 'ㅎㅇㅎㅇ님들',
    author: '이두리',
    createdAt: '2024-07-17',
    likes: 68,
  },
  {
    id: 6,
    title: 'ㅎㅇㅎㅇ님들',
    author: '이라규',
    createdAt: '2024-07-23',
    likes: 71,
  },
];

const Board = () => {
  return (
    <div className={styles.board}>
      <div className={styles.boardtext}>공지사항</div>
      {posts.map((post) => (
        <li key={post.id} className={styles.postItem}>
          <span className={styles.idRatio}>{post.id} </span>
          <span className={styles.titleRatio}>{post.title}</span>
          <span className={styles.authorRatio}>{post.author} </span>
          <span className={styles.createdAtRatio}>{post.createdAt} </span>
        </li>
      ))}
      {/* <Button type="submit" text="글쓰기" /> */}
    </div>
  );
};

export default Board;
