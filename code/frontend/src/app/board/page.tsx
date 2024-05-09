import React from 'react';
import styles from '../board/board.module.css';

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
        author: '홍길동',
        createdAt: '2024-05-01',
        likes: 20,
    },
    {
        id: 2,
        title: 'ㅎㅇㅎㅇ님들',
        author: '이건우',
        createdAt: '2024-05-02',
        likes: 50,
    }, {
        id: 3,
        title: 'ㅎㅇㅎㅇ님들',
        author: '이진욱',
        createdAt: '2024-05-01',
        likes: 90,
    },
    {
        id: 4,
        title: 'ㅎㅇㅎㅇ님들',
        author: '이진욱',
        createdAt: '2024-05-01',
        likes: 90,
    },
    {
        id: 5,
        title: 'ㅎㅇㅎㅇ님들',
        author: '이진욱',
        createdAt: '2024-05-01',
        likes: 90,
    },
];

const Board = () => {
    return (
        <div className={styles.board}>
            <h1>자유게시판</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <span className={styles.idRatio}>{post.id} </span>
                        <span className={styles.titleRatio}>{post.title}</span>
                        <span className={styles.authorRatio}>{post.author} </span>
                        <span className={styles.createdAtRatio}>{post.createdAt} </span>
                        <span className={styles.likesRatio}>좋아요❤️: {post.likes}</span>
                    </li>
                ))}
            </ul>
            <button className={styles.writeButton}>글쓰기
            </button>
        </div>
    );
};

export default Board;
