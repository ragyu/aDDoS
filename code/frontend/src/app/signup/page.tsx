import styles from './signup.module.css'; // CSS 모듈 임포트

function Signup() {
  return (
    <div className={styles.container}>
      <form className={styles.signupForm}>
        <h1 className={styles.title}>회원가입</h1>
        {/* 이메일 입력 필드 */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" required />
        </div>
        {/* 비밀번호 입력 필드 */}
        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>
        {/* 비밀번호 확인 필드 */}
        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호 확인</label>
          <input type="password" id="password" name="password" required />
        </div>
        {/* 이름 입력 필드 */}
        <div className={styles.inputGroup}>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name" required />
        </div>
        <button type="submit" className={styles.submitButton}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Signup;
