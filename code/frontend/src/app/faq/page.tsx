import React from 'react'
import styles from './faq.module.css'
import Image from 'next/image'
import FaqImage from '../../../public/assets/faq.png'
import Qmark from '../../../public/assets/qmark.png'

function page() {
  const IMAGE_SIZE = 200;
  return (
    <div>
      <div className={styles.imageLayout}><Image src={FaqImage} width={500} height={300} alt='FaqImage'/></div>
      <div className={styles.qaWrap}>
        <div className={styles.firstQa}>
          <div>
          <Image src={Qmark} width={IMAGE_SIZE} height={IMAGE_SIZE} alt='QuestionMark'/>
          <p><b>Q.</b>DDoS 공격이란 무엇인가요?</p>
          <p><b>A.</b>DDoS 공격은 다수의 시스템이 특정 대상의 서버,<br/> 서비스, 네트워크에 과도한 요청으 보내<br/> 서비스를 마비시키는 공격입니다.</p>
          </div>
          <div>
          <Image src={Qmark} width={IMAGE_SIZE} height={IMAGE_SIZE} alt='QuestionMark'/>
          <p><b>Q.</b>DDoS 공격을 어떻게 탐지할 수 있나요?</p>
          <b>A.</b><span>비정상적인 트래픽 증가, 응답 시간의 지연,<br/>  서비스 접근 실패 등의 징후가 DDOS 공격을 암시할 수 있습니다.</span>
          </div>
        </div>
        <div className={styles.secondQa}>
        <div>
          <Image src={Qmark} width={IMAGE_SIZE} height={IMAGE_SIZE} alt='QuestionMark'/>
          <p><b>Q.</b>DDoS 공격 탐지 및 분석을 위한 도구는 무엇이 있나요?</p>
          <p><b>A.</b>네트워크 모니터링 및 보안 분석 도구가 있습니다.<br/> 이러한 도구는 트래픽을 모니터링하고,<br/>  비정상적인 활동을 식별하며,<br/>  실시간으로 경고를 제공할 수 있습니다.</p>
          </div>
          <div>
          <Image src={Qmark} width={IMAGE_SIZE} height={IMAGE_SIZE} alt='QuestionMark'/>
          <p><b>Q.</b>DDoS 공격의 일반적인 유형에는 어떤 것들이 있나요?</p>
          <p><b>A.</b>Volumetric Attacks (대량 트래픽 공격),<br/>  Protocol Attacks (프로토콜 공격),<br/>  Application Layer Attacks (응용 계층 공격) 등이 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
