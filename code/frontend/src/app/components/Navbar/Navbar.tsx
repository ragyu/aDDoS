import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/assets/DDoS.jpg" alt="로고" width={80} height={80} />
        </Link>
      </h1>

      <ul className={styles.liInline}>
        <li className={styles.dropdownWrapper}>
          소개
          <div className={styles.dropdownMenu}>
            <ul>
              <li>
                <Link href="#" className={styles.link}>
                  팀 소개
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  프로젝트
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/JBU-aDDos/aDDoS"
                  target="blank"
                  className={styles.link}
                >
                  깃허브
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={styles.dropdownWrapper}>
          고객지원
          <div className={styles.dropdownMenu}>
            <ul>
              <li>
                <Link href="#" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={styles.dropdownWrapper}>
          게시판
          <div className={styles.dropdownMenu}>
            <ul>
              <li>
                <Link href="#" className={styles.link}>
                  공지사항
                </Link>
              </li>
              {/* <li>
                <Link href="#" className={styles.link}>
                  보안뉴스
                </Link>
              </li> */}
              <li>
                <Link href="/board" className={styles.link}>
                  자유게시판
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* <input className={styles.input} type="text" />
        <button className={styles.button}>
          <FaSearch size={26} />
        </button> */}
      </ul>
      <h3 className={styles.user}>
        <Link href="#" className={styles.p}>
          로그인
        </Link>
        <b className={styles.b}>/</b>
        <Link href="/signup" className={styles.p}>
          회원가입
        </Link>
      </h3>
    </nav>
  );
}
