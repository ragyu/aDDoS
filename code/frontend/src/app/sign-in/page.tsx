'use client';

import styles from './sign-in.module.css';
import Link from 'next/link';
import Button from '../components/Button/Button';
import { authenticate, googleAuthenticate } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { FcGoogle } from 'react-icons/fc';

export default function signin() {
  const [errorMsg, dispatch] = useFormState(authenticate, undefined);
  const [errorMsgGoogle, dispatchGoogle] = useFormState(
    googleAuthenticate,
    undefined
  );

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form className={styles.login} action={dispatch}>
          <h1 className={styles.title}>로그인</h1>
          {/* 이메일 입력 필드 */}
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="이메일"
            required
          />

          {/* 비밀번호 입력 필드 */}
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            required
          />
          {/* 이메일 기억 체크박스 */}
          <div className={styles.remember}>
            <label htmlFor="remember">
              <input type="checkbox" id="remember" name="remember" />
              이메일 기억하기
            </label>
          </div>

          <Link href="/mypage">
            <Button type="submit" text="로그인" />
          </Link>

          {/* 회원가입 링크 */}
          <div className={styles.signupLink}>
            {/* <Link href="/forgot-password" className={styles.sign}>
            아이디 찾기
          </Link>
          <span className={styles.bar}></span>
          <Link href="/forgot-password" className={styles.sign}>
            비밀번호 찾기
          </Link>
          <span className={styles.bar}></span>
          <Link href="/sign-up" className={styles.sign}>
            회원가입
          </Link> */}
            아이디가 없으신가요?{' '}
            <Link href="/sign-up" className={styles.sign}>
              회원가입
            </Link>
          </div>
          <p>{errorMsg}</p>
        </form>
        <form action={dispatchGoogle}>
          <button className={styles.google}>
            <FcGoogle className={styles.icon} />
            Google 로그인
          </button>
          <p>{errorMsgGoogle}</p>
        </form>
      </div>
      <div></div>
    </div>
  );
}
