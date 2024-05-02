import Image from 'next/image';
import styles from './page.module.css';
import Service from './components/Main/service/Service';
import Ability from './components/Main/ability/Ability';
import YoutubeVideo from './components/Main/youtube/Youtube';
import Fullpage from './components/Fullpage/Fullpage';

export default function Home() {
  return (
    <div>
      <Fullpage />
      {/* <Service />
      <div className={styles.feature}>
        <div className={styles.box}>
          <h4 className={styles.title}>주요 기능</h4>
          <Ability
            src="/assets/hifive.png"
            alt="hifive img"
            description="DDOS공격 패턴을 식별하고, 새로운 공격 유형에도 효과적으로 대응"
          />
          <Ability
            src="/assets/pic.png"
            alt="pic img"
            description="공격이 감지되면 사용자에게 SNS로 알림"
          />
          <Ability
            src="/assets/pic2.png"
            alt="pic2 img"
            description="공격 시도와 시스템 반응에 대한 상세한 로그를 제공"
          />
        </div>
      </div>
      <YoutubeVideo videoId="0d8RS7xSXA0"></YoutubeVideo> */}
    </div>
  );
}
