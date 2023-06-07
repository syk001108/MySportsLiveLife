import React from 'react';
import './App.css';
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

  {/* 버튼 설정 */}
  const buttonStyles = {
    width: '190px', // 버튼의 너비
    height: '40px', // 버튼의 높이
    margin: '5px',
    fontSize: '15px', // 버튼의 폰트 크기
    borderRadius: '30px', // 모서리 둥글게
    border: 'none', // 테두리 없앰
    cursor: "pointer", // 가까이 가면 커서를 바꿈
  };
  
  const custombuttonStyles = { // 팀별 버튼 커스텀
    lot : {
      ...buttonStyles,
      backgroundColor: '#022346', // 버튼 배경색
      color: 'white', // 버튼 폰트 색
      fontFamily: "kbom", // 폰트
    },
    sam : {
      ...buttonStyles,
      backgroundColor: '#0066b3', // 버튼 배경색
      color: 'white', // 버튼 폰트 색
      fontFamily: "kbom", // 폰트
    },
    gan : {
      ...buttonStyles,
      backgroundColor: '#dc5310', // 버튼 배경색
      color: 'white', // 버튼 폰트 색
      fontFamily: "k1m", // 폰트
    },
    kbo : {
      ...buttonStyles,
      backgroundColor: '#002063', // 버튼 배경색
      color: 'white', // 버튼 폰트 색
      fontFamily: "kbom", // 폰트
    },
    k1 : {
      ...buttonStyles,
      backgroundColor: '#002063', // 버튼 배경색
      color: 'white', // 버튼 폰트 색
      fontFamily: "k1m", // 폰트
    },
  }

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
  
  {/* 팝업 설정 */}
  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 투명도 조정
      zIndex: 9999
    },
    content: {
      margin: 'auto', // 가운데 정렬을 위해 margin을 auto로 설정
      borderRadius: '30px', // 팝업 모서리 둥글게
      zIndex: 9999, // 팝업 쌓임 순서 설정
      fontSize: '20px', // 폰트 크기
      color: '#242428', // 폰트 색깔
      textAlign: 'center', // 가운데 정렬 설정
    },
  };

  const popupStyles = { // 
    l_s : {
      ...customModalStyles.content,
      width: '200px', // 가로 크기
      height: '200px', // 세로 크기
      fontFamily: "kbo",
    },
    gw : {
      ...customModalStyles.content,
      width: '200px', // 가로 크기
      height: '200px', // 세로 크기
      fontFamily: "k1",
    },
    content: {
      ...customModalStyles.content,
      width: '100%',
      height: '100%',
      fontFamily: "nanum",
      fontSize: '15px', // 폰트 크기
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    kbohead: {
      ...customModalStyles.content,
      fontFamily: "kbo",
      fontSize: "40px"
    },
    k1head: {
      ...customModalStyles.content,
      fontFamily: "k1",
      fontSize: "40px"
    },
  }

  const [modalIsOpen, setModalIsOpen] = useState(false); // 팝업 창이 띄워지지 않는 상태(false)로 기본값 설정
  
  const [selectedTeam, setSelectedTeam] = useState(null); // 선택된 구단을 관리할 상태 추가
  
  {/* KBO 리그 */}
  const handleLotteClick = () => {
    setSelectedTeam('LOTTE');
    setModalIsOpen(true); // 롯데 자이언츠를 클릭했을 때 모달을 열도록 상태 변경
  };
  const handleSamsungClick = () => {
    setSelectedTeam('SAMSUNG');
    setModalIsOpen(true); // 삼성 라이온즈를 클릭했을 때 모달을 열도록 상태 변경
  };
  const handleJamsilClick = () => {
    setSelectedTeam('jamsil');
    setModalIsOpen(true);
  }
  const handleLsButtonClick = () => {
    setSelectedTeam('sajik');
    setModalIsOpen(true);
  };
  const handleLmButtonClick = () => {
    setSelectedTeam('munsu');
    setModalIsOpen(true);
  };
  const handleSlButtonClick = () => {
    setSelectedTeam('slions');
    setModalIsOpen(true);
  };
  const handleSpButtonClick = () => {
    setSelectedTeam('spohang');
    setModalIsOpen(true);
  };
  const handleKiwoomClick = () => {
    setSelectedTeam('kiwoom');
    setModalIsOpen(true);
  };
  const handleHanhwaClick = () => {
    setSelectedTeam('hanhwa');
    setModalIsOpen(true);
  };
  const handleKiaClick = () => {
    setSelectedTeam('kia');
    setModalIsOpen(true);
  };
  const handleKtClick = () => {
    setSelectedTeam('kt');
    setModalIsOpen(true);
  };
  const handleNcClick = () => {
    setSelectedTeam('nc');
    setModalIsOpen(true);
  };
  const handleSsgClick = () => {
    setSelectedTeam('ssg');
    setModalIsOpen(true);
  };

  {/* K리그 */}
  const handleGangwonClick = () => {
    setSelectedTeam('gangwon');
    setModalIsOpen(true); // 강원FC를 클릭했을 때 모달을 열도록 상태 변경
  };
  const handleGgButtonClick = () => {
    setSelectedTeam('gg');
    setModalIsOpen(true);
  };
  const handleGcButtonClick = () => {
    setSelectedTeam('gc');
    setModalIsOpen(true);
  };
  const handleGwangjuClick = () => {
    setSelectedTeam('gwangju');
    setModalIsOpen(true); 
  };
  const handleDaeguClick = () => {
    setSelectedTeam('daegu');
    setModalIsOpen(true); 
  };
  const handleDaejeonClick = () => {
    setSelectedTeam('daejeon');
    setModalIsOpen(true); 
  };
  const handleSeoulClick = () => {
    setSelectedTeam('seoul');
    setModalIsOpen(true); 
  };
  const handleSuwonbClick = () => {
    setSelectedTeam('suwonb');
    setModalIsOpen(true); 
  };
  const handleSuwonfClick = () => {
    setSelectedTeam('suwonf');
    setModalIsOpen(true); 
  };
  const handleUlsanClick = () => {
    setSelectedTeam('ulsan');
    setModalIsOpen(true); 
  };
  const handleIncheonClick = () => {
    setSelectedTeam('incheon');
    setModalIsOpen(true); 
  };
  const handleJeonbukClick = () => {
    setSelectedTeam('jeonbuk');
    setModalIsOpen(true); 
  };
  const handleJejuClick = () => {
    setSelectedTeam('jeju');
    setModalIsOpen(true); 
  };
  const handlePohangClick = () => {
    setSelectedTeam('pohang');
    setModalIsOpen(true); 
  };
  return (
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
                  <div className="team-wrapper"><img src={doosan} alt="DOOSAN" style={hoverStyle} onClick={handleJamsilClick} className="kbo-team-logo" /><p>두산 베어스</p></div>
                  <div className="team-wrapper"><img src={lotte} alt="LOTTE" style={hoverStyle} onClick={handleLotteClick} className="kbo-team-logo" /><p>롯데 자이언츠</p></div>
                  <div className="team-wrapper"><img src={samsung} alt="SAMSUNG" style={hoverStyle} onClick={handleSamsungClick} className="kbo-team-logo" /><p>삼성 라이온즈</p></div>
                  <div className="team-wrapper"><img src={kiwoom} alt="KIWOOM" style={hoverStyle} onClick={handleKiwoomClick} className="kbo-team-logo" /><p>키움 히어로즈</p></div>
                  <div className="team-wrapper"><img src={hanhwa} alt="HANHWA" style={hoverStyle} onClick={handleHanhwaClick} className="kbo-team-logo" /><p>한화 이글스</p></div>
                  <div className="team-wrapper"><img src={kia} alt="KIA" style={hoverStyle} onClick={handleKiaClick} className="kbo-team-logo" /><p>KIA 타이거즈</p></div>
                  <div className="team-wrapper"><img src={kt} alt="KT" style={hoverStyle} onClick={handleKtClick} className="kbo-team-logo" /><p>kt wiz</p></div>
                  <div className="team-wrapper"><img src={lg} alt="LG" style={hoverStyle} onClick={handleJamsilClick} className="kbo-team-logo" /><p>LG 트윈스</p></div>
                  <div className="team-wrapper"><img src={nc} alt="NC" style={hoverStyle} onClick={handleNcClick} className="kbo-team-logo" /><p>NC 다이노스</p></div>
                  <div className="team-wrapper"><img src={ssg} alt="SSG" style={hoverStyle} onClick={handleSsgClick} className="kbo-team-logo" /><p>SSG 랜더스</p></div>
                </div>
              </div>
            )}
            {activeTab === 'kleague1' && (
              <div>
                {/* K리그1 내용 */}
                <h2>K리그1 구단들의 경기장 정보를 확인하세요</h2>
                <div className="team-info">
                  <div className="team-wrapper"><img src={gangwon} alt="gangwon" style={hoverStyle} onClick={handleGangwonClick} className="gangwon" /><p>강원 FC</p></div>
                  <div className="team-wrapper"><img src={gwangju} alt="gwangju" style={hoverStyle} onClick={handleGwangjuClick} className="gwangju" /><p>광주 FC</p></div>
                  <div className="team-wrapper"><img src={daegu} alt="daegu" style={hoverStyle} onClick={handleDaeguClick} className="daegu" /><p>대구 FC</p></div>
                  <div className="team-wrapper"><img src={daejeon} alt="daejeon" style={hoverStyle} onClick={handleDaejeonClick} className="daejeon" /><p>대전 하나 시티즌</p></div>
                  <div className="team-wrapper"><img src={seoul} alt="seoul" style={hoverStyle} onClick={handleSeoulClick} className="seoul" /><p>FC 서울</p></div>
                  <div className="team-wrapper"><img src={suwonb} alt="suwonb" style={hoverStyle} onClick={handleSuwonbClick} className="suwonb" /><p>수원 삼성 블루윙즈</p></div>
                  <div className="team-wrapper"><img src={suwonf} alt="suwonf" style={hoverStyle} onClick={handleSuwonfClick} className="suwonf" /><p>수원 FC</p></div>
                  <div className="team-wrapper"><img src={ulsan} alt="ulsan" style={hoverStyle} onClick={handleUlsanClick} className="ulsan" /><p>울산 현대</p></div>
                  <div className="team-wrapper"><img src={incheon} alt="incheon" style={hoverStyle} onClick={handleIncheonClick} className="incheon" /><p>인천 유나이티드 FC</p></div>
                  <div className="team-wrapper"><img src={jeonbuk} alt="jeonbuk" style={hoverStyle} onClick={handleJeonbukClick} className="jeonbuk" /><p>전북 현대 모터스</p> </div>
                  <div className="team-wrapper"><img src={jeju} alt="jeju" style={hoverStyle} onClick={handleJejuClick} className="jeju" /><p>제주 유나이티드 FC</p></div>
                  <div className="team-wrapper"><img src={pohang} alt="pohang" style={hoverStyle} onClick={handlePohangClick} className="pohang" /><p>포항 스틸러스</p></div>
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* 팝업 내용을 구단별로 다르게 표시 */}
        <Modal isOpen={modalIsOpen} style={customModalStyles}>
        {selectedTeam === 'LOTTE' && (
          <div style={popupStyles.l_s}>
            <h2>롯데 자이언츠</h2>
            <button onClick={handleLsButtonClick} style={custombuttonStyles.lot}>사직 야구장</button>
            <button onClick={handleLmButtonClick} style={custombuttonStyles.lot}>울산 문수 야구장</button>
          </div>
        )}
        {selectedTeam === 'SAMSUNG' && (
          <div style={popupStyles.l_s}>
            <h2>삼성 라이온즈</h2>
            <button onClick={handleSlButtonClick} style={custombuttonStyles.sam}>대구 삼성 라이온즈 파크</button>
            <button onClick={handleSpButtonClick} style={custombuttonStyles.sam}>포항 야구장</button>
          </div>
        )}
        {selectedTeam === 'gangwon' && (
          <div style={popupStyles.gw}>
            <h2>강원 FC</h2>
            <button onClick={handleGgButtonClick} style={custombuttonStyles.gan}>강릉종합운동장</button>
            <button onClick={handleGcButtonClick} style={custombuttonStyles.gan}>춘천송암스포츠타운</button>
          </div>
        )}
        {selectedTeam === 'jamsil' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>서울종합운동장 야구장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>서울특별시 송파구 올림픽로 25 (잠실동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>23,750석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 종합운동장역(서울 지하철 2호선, 9호선)</div>
                <div>시내버스: 잠실종합운동장(24144), 잠실종합운동장(24710), 잠실종합운동장(24154), 잠실종합운동장(24711), 아시아선수촌아파트(24155, 24164)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07001&TeamCode=PB004")}} style={custombuttonStyles.kbo}>두산 베어스 예매하기</button>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/59#reservation")}} style={custombuttonStyles.kbo}>LG 트윈스 예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'sajik' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>사직 야구장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>부산광역시 동래구 사직로 45 (사직동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>22,990석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 사직역(부산 도시철도 3호선)</div>
                <div>시내버스: 사직사거리(06-124), 사직야구장(06-125), 사직야구장(06-240), 사직야구장(마을버스 전용), 사직야구장(06-131)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.giantsclub.com/loginForm.do")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'munsu' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>울산 문수 야구장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>울산광역시 남구 문수로 44 (옥동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>12,088석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 문수경기장(12701), 문수경기장(12704), 문수경기장앞(40617, 3618), 문수경기장앞(40618, 3630), 문수경기장입구(30713)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.giantsclub.com/loginForm.do")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'slions' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>대구 삼성 라이온즈 파크</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>대구광역시 수성구 야구전설로 1 (연호동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>24,000석</div>
                <h2>홈|원정</h2>
                <div>3루(홈)|1루(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 대공원역(대구 도시철도 2호선)</div>
                <div>시내버스: 대공원역(1번출구)(1097, 20262), 대공원역(5번출구)(1089, 20345)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/57#reservation")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'spohang' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>포항 야구장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>경상북도 포항시 남구 희망대로 790 (대도동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>12,000석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 남구청(야구장)(292029), 남구청(야구장)(292009)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/57#reservation")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'kiwoom' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>고척 스카이돔</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>서울특별시 구로구 경인로 430 (고척동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>16,000석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 구일(동양미래대학)역(수도권 전철 1호선)</div>
                <div>시내버스: 동양미래대학.구로성심병원(17008), 동양미래대학.구로성심병원(17007), 동양미래대학.성심병원(17737)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07001&TeamCode=PB003")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'hanhwa' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>대전 한화생명 이글스파크</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>대전광역시 중구 대종로 373 (부사동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>13,000석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 한화생명이글스파크(23300), 한화생명이글스파크(21050), 한밭종합운동장(21090), 한밭종합운동장(21100), 보문오거리(21030), 보문오거리(23260), 보문오거리(20740), 보문오거리(20730)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/63#reservation")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'kia' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>광주-기아 챔피언스 필드</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>광주광역시 북구 서림로 10 (임동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>20,500석</div>
                <h2>홈/원정</h2>
                <div>3루(홈)|1루(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 광주기아챔피언스필드(4490), 광주기아챔피언스필드(4489), 무등야구장(4439), 무등야구장(4440), 광주기아챔피언스필드정문(4492), 광주기아챔피언스필드정문(4491), 광주기아챔피언스필드입구(4336), 제2광천교(4450), 제2광천교(4509), 경신여고(4434), 경신여고(4435), 광주지방기상청(4446), 광주지방기상청(4447)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/58#reservation")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'kt' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>수원 케이티 위즈 파크</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>경기도 수원시 장안구 경수대로 893 (조원동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>18,700석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 수원KT위즈파크(01131), 수원KT위즈파크.행정동우회관(01128), 수원KT위즈파크.수원종합운동장(01128)(창룡문 방면, 장안구청 방면), 장안지하차도.수원KT위즈파크(01238)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/62#reservation")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'nc' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>창원 NC 파크</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>경상남도 창원시 마산회원구 삼호로 63 (양덕동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>17,861석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 마산회원구청·창원NC파크, 문화방송·건강관리협회, 야구장앞홈플러스, 고속버스터미널, 신세계백화점</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.ncdinos.com/login")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'ssg' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.kbohead}>인천 SSG 랜더스필드</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                <div>인천광역시 미추홀구 매소홀로 618 (문학동)</div>
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>23,000석</div>
                <h2>홈|원정</h2>
                <div>1루(홈)|3루(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 문학경기장역(인천 1호선)</div>
                <div>시내버스: 문학경기장(월드컵경기장)(37144), 문학경기장(월드컵경기장)(37157), 신비마을아파트(37555·37164), 신비마을아파트(112동)(37171), 문학경기장(X게임장)(37643), 문학경기장(박태환수영장)(38311·38329), 문학경기장(박태환수영장)(38310·38423)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/baseball/476#reservation")}} style={custombuttonStyles.kbo}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'gg' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>강릉종합운동장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                강원도 강릉시 종합운동장길 69 (교동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>21,146석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S구역(원정)</div>
                <h2>교통</h2>
                <div>철도: 강릉역</div>
                <div>시내버스: 종합경기장, e-편한세상아파트</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07002&TeamCode=PS014")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'gc' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>춘천송암스포츠타운</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                강원도 춘천시 스포츠타운길 136 (송암동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>20,000석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S구역(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 송암스포츠타운(2250), 송암스포츠타운(2233)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07002&TeamCode=PS014")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'gwangju' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>광주축구전용구장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                광주광역시 서구 금화로 278 (풍암동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>10,007석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|D1~D3구역(안전 문제로 S구역 폐쇄)(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 월드컵경기장, 월드컵경기장주차장, 염주체육관</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/79#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'daegu' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>DGB 대구은행 파크</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                대구광역시 북구 고성로 191 (고성동3가)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>12,419석</div>
                <h2>홈|원정</h2>
                <div>S구역(홈)|N5구역(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 대구역(대구 도시철도 1호선), 북구청역 (DGB대구은행파크)(대구 도시철도 3호선)</div>
                <div>시내버스: DGB대구은행파크동편, DGB대구은행파크남편, 시민교회, 대구도시공사, 대구은행제2본점</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/84#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'daejeon' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>대전월드컵경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                대전광역시 유성구 월드컵대로 32 (노은동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>40,903석(42,000명 수용)</div>
                <h2>홈|원정</h2>
                <div>S구역(홈)|N구역(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 월드컵경기장(노은도매시장)역(대전 도시철도 1호선)</div>
                <div>시내버스: 노은농수산물시장(42260, 42270)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.dhcfc.kr/dhboard/dhboard_view.php?no_seq=23970&page=1&buid=notice&s_field=&s_value=")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'seoul' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>서울월드컵경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                서울특별시 마포구 월드컵로 240 (성산동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>66,704석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S(A~C)구역(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 월드컵경기장(성산)역(서울 지하철 6호선), 디지털미디어시티역(서울 지하철 6호선, 수도권 전철 경의중앙선, 인천국제공항철도)</div>
                <div>시내버스: 월드컵경기장남측월드컵공원, 월드컵경기장 북측, 월드컵경기장 서측</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/65#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'suwonb' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>수원월드컵경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                경기도 수원시 팔달구 월드컵로 310 (우만동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>42,542석 (최대 44,000명 수용)</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S구역(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 광교중앙(아주대)역(신분당선)</div>
                <div>시내버스: 수원월드컵경기장.아름학교, 수원월드컵경기장.동성중학교, 여권민원실.풍림아파트</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07002&TeamCode=PS003")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'suwonf' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>수원종합운동장 주경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                경기도 수원시 장안구 경수대로 893 (조원동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>11,808석 (최대 15,000명 수용) </div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S구역(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 수원종합운동장.한국건강검진협회, 한국건강검진협회.수원종합운동장, 로얄팰리스, 수원종합운동장.로얄팰리스.아너스빌위즈, 수원종합운동장.수원시체육회관.아너스빌위즈, 영화초등학교.한국건강관리협회</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07002&TeamCode=PS061")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'ulsan' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>울산문수축구경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                울산광역시 남구 문수로 44 (옥동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>37,897석</div>
                <h2>홈|원정</h2>
                <div>S구역(홈)|N구역(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 문수경기장(12701), 문수경기장(12704), 문수경기장앞(40617, 3618), 문수경기장앞(40618, 3630), 문수경기장입구(30713)</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/66#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'incheon' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>인천축구전용경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                인천광역시 중구 참외전로 246 (도원동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>18,989석</div>
                <h2>홈|원정</h2>
                <div>S구역(홈)|N1~N4구역(원정)</div>
                <h2>교통</h2>
                <div>도시철도: 도원역(수도권 전철 1호선), 숭의(인하대병원)역(수도권 전철 수인·분당선)</div>
                <div>시내버스: 도원역, 인천축구전용경기장, 숭의로터리</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/77#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'jeonbuk' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>전주월드컵경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                전라북도 전주시 덕진구 기린대로 1055 (장동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>36,781석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S(A~C)구역(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 월드컵경기장, 월드컵경기장남문, 면허시험장월드컵경기장, 호남제일문, 원반월마을</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/73#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'jeju' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>제주월드컵경기장</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                제주특별자치도 서귀포시 월드컵로 33 (법환동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>29,791석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S구역(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 제주월드컵경기장, 제주월드컵경기장 서문, 서귀포버스터미널, 제주월드컵경기장 서귀포버스터미널,대륜동주민센터</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/76#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        {selectedTeam === 'pohang' && (
          <div style={popupStyles.content}>
            <h1 style={popupStyles.k1head}>포항스틸야드</h1>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {/* 좌측 내용 */}
                경상북도 포항시 남구 동해안로6213번길 20 (괴동동)
              </div>
              <div style={{ flex: 1 }}>
                {/* 우측 내용 */}
                <h2>수용 인원</h2>
                <div>15,521석</div>
                <h2>홈|원정</h2>
                <div>N구역(홈)|S(A1~A3)구역(원정)</div>
                <h2>교통</h2>
                <div>시내버스: 포항스틸야드, 포스코 본사</div>
                <h2>예매 링크</h2>
                <button onClick={()=>{window.open("https://www.ticketlink.co.kr/sports/football/74#reservation")}} style={custombuttonStyles.k1}>예매하기</button>
              </div>
            </div>
          </div>  
        )}
        <img src={closeIcon} alt="Close" onClick={() => setModalIsOpen(false)} style={closeButtonStyle} />
        </Modal>
      </div>
  );
}

export default App;
