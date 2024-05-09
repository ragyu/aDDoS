import styles from './mypage.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
const MyPage: React.FC = () => {
  const data = [0, 59, 50, 81, 56, 55, -50]; // 그래프에 표시할 데이터

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default MyPage;
