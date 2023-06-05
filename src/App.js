import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import UHFCPage from './uhfc_page';
import { useState } from 'react';
import logo from './img&font/logo.svg';
import closeIcon from './img&font/close.svg';
import Modal from 'react-modal';
// K리그1 구단 이미지파일
import k1 from './img&font/k1/KLEAGUE1.svg';
import ulsan from './img&font/k1/ulsan.svg';
import gangwon from './img&font/k1/gangwon.svg';
import gwangju from './img&font/k1/gwangju.svg';
import daegu from './img&font/k1/daegu.svg';
import daejeon from './img&font/k1/daejeon.svg';
import seoul from './img&font/k1/seoul.svg';
import suwonb from './img&font/k1/suwonb.svg';
import suwonf from './img&font/k1/suwonf.svg';
import incheon from './img&font/k1/incheon.svg';
import jeonbuk from './img&font/k1/jeonbuk.svg';
import jeju from './img&font/k1/jeju.svg';
import pohang from './img&font/k1/pohang.svg';
// KBO리그 구단 이미지파일
import kbo from './img&font/kbo/KBOLEAGUE.svg';
import doosan from './img&font/kbo/DOOSAN.svg';
import hanhwa from './img&font/kbo/HANHWA.svg';
import kia from './img&font/kbo/KIA.svg';
import kiwoom from './img&font/kbo/KIWOOM.svg';
import kt from './img&font/kbo/KT.svg';
import lg from './img&font/kbo/LG.svg';
import lotte from './img&font/kbo/LOTTE.svg';
import nc from './img&font/kbo/NC.svg';
import samsung from './img&font/kbo/SAMSUNG.svg';
import ssg from './img&font/kbo/SSG.svg';

function App() {
  const [activeTab, setActiveTab] = useState('main');
  
  const hoverStyle = {
    cursor: "pointer", // 가까이 가면 커서를 바꿈
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogoClick = () => {
    setActiveTab('main');
  };

  const handleUlsanClick = () => {
    setActiveTab('main');
  };

  const buttonStyle = {
    width: '190px', // 버튼의 너비
    height: '40px', // 버튼의 높이
    margin: '5px',
    backgroundColor: '#002063', // 버튼 배경색
    color: 'white', // 버튼 폰트 색
    fontSize: '15px', // 버튼의 폰트 크기
    borderRadius: '30px', // 모서리 둥글게
    border: 'none', // 테두리 없앰
    cursor: "pointer" // 가까이 가면 커서를 바꿈
  };

  const closeButtonStyle = {
    width: '30px', // 버튼의 너비
    height: '30px', // 버튼의 높이
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };
  
  // 팝업 설정
  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 투명도 조정
      zIndex: 9999
    },
    content: {
      width: '200px', // 가로 크기
      height: '200px', // 세로 크기
      margin: 'auto', // 가운데 정렬을 위해 margin을 auto로 설정
      borderRadius: '30px', // 팝업 모서리 둥글게
      zIndex: 9999, // 팝업 쌓임 순서 설정
      fontSize: '20px', // 폰트 크기
      color: '#242428', // 폰트 색깔
      textAlign: 'center', // 가운데 정렬 설정
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false); // 팝업 창이 띄워지지 않는 상태(false)로 기본값 설정
  
  const [selectedTeam, setSelectedTeam] = useState(null); // 선택된 구단을 관리할 상태 추가

  const handleLotteClick = () => {
    setSelectedTeam('LOTTE');
    setModalIsOpen(true); // 롯데 자이언츠를 클릭했을 때 모달을 열도록 상태 변경
  };

  const handleSamsungClick = () => {
    setSelectedTeam('SAMSUNG');
    setModalIsOpen(true); // 삼성 라이온즈를 클릭했을 때 모달을 열도록 상태 변경
  };

  const handleGangwonClick = () => {
    setSelectedTeam('gangwon');
    setModalIsOpen(true); // 삼성 라이온즈를 클릭했을 때 모달을 열도록 상태 변경
  };

  const handleLsButtonClick = () => {
    // 버튼 동작시 행동
  };

  const handleLmButtonClick = () => {
    // 버튼 동작시 행동
  };

  const handleSlButtonClick = () => {
    // 버튼 동작시 행동
  };

  const handleSpButtonClick = () => {
    // 버튼 동작시 행동
  };

  const handleGgButtonClick = () => {
    // 버튼 동작시 행동
  };

  const handleGcButtonClick = () => {
    // 버튼 동작시 행동
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <div className='msll'>
            <div className="tabs">
              <a
                href="#kboleague"
                className={`tab1 ${activeTab === 'kboleague' ? 'active' : ''}`}
                onClick={() => handleTabClick('kboleague')}
              >
                KBO 리그
              </a>
              <a
                href="#kleague1"
                className={`tab2 ${activeTab === 'kleague1' ? 'active' : ''}`}
                onClick={() => handleTabClick('kleague1')}
              >
                K리그1
              </a>
            </div>
            <img
              src={logo}
              alt="logo"
              style={hoverStyle}
              onClick={handleLogoClick}
              className="logo"
            />
          </div>
          <div className={`main_content ${activeTab === 'kboleague' ? 'tab-kboleague' : activeTab === 'kleague1' ? 'tab-kleague1' : 'tab-main'}`}>
            {activeTab === 'main' && (
              <div>
                {/* 메인 화면 내용 */}
                <h2>나의 직관 생활을 더욱 편리하게!</h2>
                <div className="team-info">
                  <div className="team-wrapper"><img src={kbo} alt="kbo" /*onClick={handleTabClick('kboleague')}*/ className="kbo"/></div>
                  <div className="team-wrapper"><img src={k1} alt="k1" /*onClick={handleTabClick('kleague1')}*/ className="k1" /></div>
                </div>
                <p>나의 직관 생활은 KBO 리그와 K리그1 구단들의 경기장 정보를 지원합니다</p>
              </div>
            )}
            {activeTab === 'kboleague' && (
              <div>
                {/* KBO 리그 내용 */}
                <h2>KBO 리그 구단들의 경기장 정보를 확인하세요</h2>
                <div className="team-info">
                  <div className="team-wrapper"><img src={doosan} alt="DOOSAN" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>두산 베어스</p></div>
                  <div className="team-wrapper"><img src={lotte} alt="LOTTE" style={hoverStyle} onClick={handleLotteClick} className="kbo-team-logo" /><p>롯데 자이언츠</p></div>
                  <div className="team-wrapper"><img src={samsung} alt="SAMSUNG" style={hoverStyle} onClick={handleSamsungClick} className="kbo-team-logo" /><p>삼성 라이온즈</p></div>
                  <div className="team-wrapper"><img src={kiwoom} alt="KIWOOM" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>키움 히어로즈</p></div>
                  <div className="team-wrapper"><img src={hanhwa} alt="HANHWA" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>한화 이글스</p></div>
                  <div className="team-wrapper"><img src={kia} alt="KIA" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>KIA 타이거즈</p></div>
                  <div className="team-wrapper"><img src={kt} alt="KT" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>kt wiz</p></div>
                  <div className="team-wrapper"><img src={lg} alt="LG" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>LG 트윈스</p></div>
                  <div className="team-wrapper"><img src={nc} alt="NC" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>NC 다이노스</p></div>
                  <div className="team-wrapper"><img src={ssg} alt="SSG" style={hoverStyle} onClick={handleUlsanClick} className="kbo-team-logo" /><p>SSG 랜더스</p></div>
                </div>
              </div>
            )}
            {activeTab === 'kleague1' && (
              <div>
                {/* K리그1 내용 */}
                <h2>K리그1 구단들의 경기장 정보를 확인하세요</h2>
                <div className="team-info">
                  <div className="team-wrapper"><img src={gangwon} alt="gangwon" style={hoverStyle} onClick={handleGangwonClick} className="gangwon" /><p>강원 FC</p></div>
                  <div className="team-wrapper"><img src={gwangju} alt="gwangju" style={hoverStyle} onClick={handleUlsanClick} className="gwangju" /><p>광주 FC</p></div>
                  <div className="team-wrapper"><img src={daegu} alt="daegu" style={hoverStyle} onClick={handleUlsanClick} className="daegu" /><p>대구 FC</p></div>
                  <div className="team-wrapper"><img src={daejeon} alt="daejeon" style={hoverStyle} onClick={handleUlsanClick} className="daejeon" /><p>대전 하나 시티즌</p></div>
                  <div className="team-wrapper"><img src={seoul} alt="seoul" style={hoverStyle} onClick={handleUlsanClick} className="seoul" /><p>FC 서울</p></div>
                  <div className="team-wrapper"><img src={suwonb} alt="suwonb" style={hoverStyle} onClick={handleUlsanClick} className="suwonb" /><p>수원 삼성 블루윙즈</p></div>
                  <div className="team-wrapper"><img src={suwonf} alt="suwonf" style={hoverStyle} onClick={handleUlsanClick} className="suwonf" /><p>수원 FC</p></div>
                  <div className="team-wrapper"><img src={ulsan} alt="ulsan" style={hoverStyle} onClick={handleUlsanClick} className="ulsan" /><p>울산 현대</p></div>
                  <div className="team-wrapper"><img src={incheon} alt="incheon" style={hoverStyle} onClick={handleUlsanClick} className="incheon" /><p>인천 유나이티드 FC</p></div>
                  <div className="team-wrapper"><img src={jeonbuk} alt="jeonbuk" style={hoverStyle} onClick={handleUlsanClick} className="jeonbuk" /><p>전북 현대 모터스</p> </div>
                  <div className="team-wrapper"><img src={jeju} alt="jeju" style={hoverStyle} onClick={handleUlsanClick} className="jeju" /><p>제주 유나이티드 FC</p></div>
                  <div className="team-wrapper"><img src={pohang} alt="pohang" style={hoverStyle} onClick={handleUlsanClick} className="pohang" /><p>포항 스틸러스</p></div>
                </div>
              </div>
            )}
          </div>
        </nav>
        <Modal isOpen={modalIsOpen} style={customModalStyles}>
        {/* 팝업 내용을 구단별로 다르게 표시 */}
        {selectedTeam === 'LOTTE' && (
          <div>
            <h2>롯데 자이언츠</h2>
            <button onClick={handleLsButtonClick} style={buttonStyle}>사직 야구장</button>
            <button onClick={handleLmButtonClick} style={buttonStyle}>울산 문수 야구장</button>
          </div>
        )}
        {selectedTeam === 'SAMSUNG' && (
          <div>
            <h2>삼성 라이온즈</h2>
            <button onClick={handleSlButtonClick} style={buttonStyle}>대구 삼성 라이온즈 파크</button>
            <button onClick={handleSpButtonClick} style={buttonStyle}>포항 야구장</button>
          </div>
        )}
        {selectedTeam === 'gangwon' && (
          <div>
            <h2>강원 FC</h2>
            <button onClick={handleGgButtonClick} style={buttonStyle}>강릉종합운동장</button>
            <button onClick={handleGcButtonClick} style={buttonStyle}>춘천송암스포츠타운</button>
          </div>
        )}
        <img src={closeIcon} alt="Close" onClick={() => setModalIsOpen(false)} style={closeButtonStyle} />
        </Modal>
      </div>
    </BrowserRouter>
  );
}

export default App;
