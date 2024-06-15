'use client'
import { useState } from 'react';
import styles from './sign-in.module.css';
import Link from 'next/link';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();
      const user = users.find((user: { email: string; password: string }) => user.email === email && user.password === password);

      if (user) {
        // 로그인 성공
        alert('로그인에 성공했습니다.');
        window.location.href = '/';
      } else {
        // 로그인 실패
        setError('이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>로그인</h1>
        {/* 이메일 입력 필드 */}
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 비밀번호 입력 필드 */}
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* 이메일 기억 체크박스 */}
        <div className={styles.remember}>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            이메일 기억하기
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          로그인
        </button>

        {error && <p className={styles.error}>{error}</p>}

        {/* 회원가입 링크 */}
        <div className={styles.signupLink}>
          아이디가 없으신가요?{' '}
          <Link href="/sign-up" className={styles.sign}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
