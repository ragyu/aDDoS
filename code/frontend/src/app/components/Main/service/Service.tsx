import styles from './service.module.css';

const Service = () => {
  return (
    <div>
      <div className={styles.topText}>DDoS 공격 감지 및 알림 시스템 aDDoS</div>
      <div className={styles.serviceintro}>
        <h2>서비스 소개</h2>
        <br />
        저희 DDoS 공격 감지 및 알림 시스템은
        <br />
        <br />
        DDoS공격이 감지되면 사용자에게 알려주고
        <br />
        <br />
        트래픽을 시각화하여 볼 수 있는 대시보드를 제공합니다.
        <br />
        <br />
        다양한 규모의 비즈니스 및 네트워크 인프라에 적용이 가능하며
        <br />
        <br />
        사용자 경험에 중점을 두어 고객에게 안정적이고
        <br />
        <br />
        빠른 서비스를 제공 합니다.
        <br />
        <br />
        DDoS 공격 감지 프로그램을 사용하여 귀하의 네트워크를
        <br />
        <br />
        안전하게 보호하고 최상의 서비스를 느껴보세요 !
        <br />
        <br />
      </div>
    </div>
  );
};

export default Service;
