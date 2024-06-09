'use client';
import React, { useState } from 'react';
import styles from './Myinfo.module.css';
import Image from 'next/image';

function Myinfo() {
  const [image, setImage] = useState('/assets/user.png');
  const [introduction, setIntroduction] =
    useState('여기에 사용자 소개를 적어주세요.');
  const [tempIntroduction, setTempIntroduction] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setImage(result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmitIntroduction = () => {
    setIntroduction(tempIntroduction);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.avatarContainer}>
          <Image
            src={image}
            alt="프로필사진"
            className={styles.avatar}
            width={80}
            height={80}
          />
        </div>
        <label htmlFor="imageInput" className={styles.changeImageButton}>
          이미지 변경
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      <table className={styles.infoSection}>
        <tr>
          <td className={styles.label}>이메일</td>
          <td className={styles.data}>user@example.com</td>
        </tr>
        <tr>
          <td className={styles.label}>이름</td>
          <td className={styles.data}>UserName</td>
        </tr>
        <tr>
          <td className={styles.label}>성별</td>{' '}
          <td className={styles.data}>남성</td>
        </tr>
        <tr>
          <td className={styles.label}>전화번호</td>{' '}
          <td className={styles.data}>010-1234-5678</td>
        </tr>
        <tr>
          <td className={styles.label}>가입날짜</td>{' '}
          <td className={styles.data}>2024-04-30</td>
        </tr>
        <tr>
          <td className={styles.label}>소개</td>
          <td className={styles.data}>{introduction}</td>
        </tr>
      </table>
      <textarea
        className={styles.introductionInput}
        placeholder="소개를 수정하세요."
        value={tempIntroduction}
        onChange={(e) => setTempIntroduction(e.target.value)}
      />
      <button className={styles.edit} onClick={handleSubmitIntroduction}>
        수정하기
      </button>
    </div>
  );
}

export default Myinfo;
