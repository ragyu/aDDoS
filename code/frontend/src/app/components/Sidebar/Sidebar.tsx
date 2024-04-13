'use client';

import React, { useState, FC, useMemo } from 'react';
import styles from './Sidebar.module.css';
import Traffic from './contents/Traffic';
import Log from './contents/Log';
import MyInfo from './contents/MyInfo';

type ActiveComponent = 'Traffic' | 'Log' | 'MyInfo' | null;

interface Button {
  id: ActiveComponent;
  label: string;
}

const buttons: Button[] = [
  { id: 'Traffic', label: '트래픽' },
  { id: 'Log', label: '로그' },
  { id: 'MyInfo', label: '내정보' },
];

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const changeComponent = (component: ActiveComponent) => {
    setActiveComponent(component);
  };

  const renderComponent = useMemo(() => {
    switch (activeComponent) {
      case 'Traffic':
        return <Traffic />;
      case 'Log':
        return <Log />;
      case 'MyInfo':
        return <MyInfo />;
      default:
        return null; // 기본값이거나 선택하지 않았을 때는 아무것도 렌더링하지 않습니다.
    }
  }, [activeComponent]);

  return (
    <div>
      <svg
        width="40"
        height="100"
        className={`${styles.menuButton} ${isOpen ? styles.sidebarOpen : ''}`}
      >
        <path
          d="M0,0 C0,15 40,10 40,50 S0,85 0,100"
          stroke="black"
          fill="#222222"
          onClick={() => toggleSidebar()}
        />
        {isOpen ? (
          // 사이드바가 열렸을 때 "<" 모양
          <>
            <line
              x1="20"
              y1="40"
              x2="10"
              y2="50"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => toggleSidebar()}
            />
            <line
              x1="10"
              y1="50"
              x2="20"
              y2="60"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => toggleSidebar()}
            />
          </>
        ) : (
          // 사이드바가 닫혔을 때 ">" 모양
          <>
            <line
              x1="10"
              y1="40"
              x2="20"
              y2="50"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => toggleSidebar()}
            />
            <line
              x1="20"
              y1="50"
              x2="10"
              y2="60"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => toggleSidebar()}
            />
          </>
        )}
        {/* <circle cx="0" cy="50" r="40" stroke="black" fill="transparent" /> */}
      </svg>
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => changeComponent(button.id)}
            className={styles.sidebarLink}
          >
            <span className={styles.icon}>&#9672;</span>
            {button.label}
          </button>
        ))}
      </div>
      {renderComponent}
    </div>
  );
};

export default Sidebar;
