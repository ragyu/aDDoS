import styles from './notice.module.css';
import Post from '../components/Post/Post';

export default function notice() {
  const notices = [
    {
      id: 1,
      title: '공지사항 예시 제목',
      author: '관리자',
      date: '2024-08-01',
    },
    { id: 2, title: '안녕하세요', author: 'Admin', date: '2024-08-08' },
    {
      id: 3,
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure vel veniam pariat',
      author: 'GM',
      date: '2024-08-13',
    },
    { id: 4, title: '반갑습니다', author: 'Master', date: '2024-08-15' },
    { id: 5, title: '공지사항입니다.', author: 'King', date: '2024-08-26' },
  ];

  return (
    <div className={styles.noticeWrap}>
      <div className={styles.notice}>
        <div className={styles.noticeText}>공지사항</div>
        <div className={styles.infoRow}>
          <span className={styles.infoItem}>번호</span>
          <span className={styles.infoItem}>제목</span>
          <span className={styles.infoItem}>글쓴이</span>
          <span className={styles.infoItem}>작성일</span>
        </div>

        {notices.map((notice) => (
          <Post
            key={notice.id}
            id={notice.id}
            title={notice.title}
            author={notice.author}
            date={notice.date}
          />
        ))}
      </div>
    </div>
  );
}
