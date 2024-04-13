import styles from './mypage.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
const MyPage: React.FC = () => {
  const data = [0, 59, 50, 81, 56, 55, -50]; // 그래프에 표시할 데이터

  return (
    <div>
      <Sidebar />
      <div className={styles.graph}>
        <h1>마이페이지</h1>
        {/* <h2>꺾은선 그래프</h2> */}
        <svg width="100%" height="100%" viewBox="-300 300 1000 1000">
          {data.map((value, index) => (
            <circle
              key={index}
              cx={index * 50}
              cy={500 - value}
              r="3"
              fill="red"
            />
          ))}
          {data.map(
            (value, index) =>
              index < data.length - 1 && (
                <line
                  key={index}
                  x1={index * 50}
                  y1={500 - value}
                  x2={(index + 1) * 50}
                  y2={500 - data[index + 1]}
                  stroke="blue"
                />
              )
          )}
        </svg>
      </div>
    </div>
  );
};

export default MyPage;
