'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, MapPin, Calendar, Clock, Users, ArrowRight, CheckCircle, Building2, Briefcase, TrendingUp, FileText, Bot, Handshake, Network, X, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const curriculum = [
    {
      week: 1,
      date: '1/21',
      title: '후속 투자 유치 및 인수합병 시장과 구조 이해',
      contents: ['M&A Class 취지 및 방안', '파이브락스(5Rocks) M&A 사례 스터디', 'M&A 생태계, 매수·매도자의 역할, 실제 성공사례'],
      instructors: ['명승은 대표', '노정석 대표', '지현철 대표'],
      instructorIndices: [0, 7, 1]
    },
    {
      week: 2,
      date: '1/28',
      title: '매칭 시뮬레이션 & 협상 실습',
      contents: ['글로싸인 M&A 사례 스터디', '매수자-매도자 실시간 매칭 협상 및 피칭'],
      instructors: ['최충열 COO', '고민철 심사역'],
      instructorIndices: [6, 5]
    },
    {
      week: 3,
      date: '2/4',
      title: '딜 구조 설계 & 가치평가',
      contents: ['밸류에이션 실습, 거래 프로세스 시뮬레이션'],
      instructors: ['전명석 회계사'],
      instructorIndices: [2]
    },
    {
      week: 4,
      date: '2/11',
      title: '법률·세무 및 리스크 관리',
      contents: ['계약서(LOI, SPA) 작성 및 리스크 대응', '팩트시트 데이터룸 활용법'],
      instructors: ['장효준 변호사', '함세희 대표'],
      instructorIndices: [4, 3]
    }
  ];

  const instructors = [
    {
      name: '명승은',
      role: '벤처스퀘어 대표',
      desc: 'M&A 생태계 및 시장 구조 전문가',
      image: '/assets/profile/명승은.png',
      careers: [
        { period: '현재', company: '벤처스퀘어', position: '대표이사', details: [] },
        { period: '현재', company: '(사)한국초기투자기관협회(KESIA)', position: '부회장', details: [] },
        { period: '경력', company: 'IT전문 기자/편집장', position: '10년', details: [] },
        { period: '경력', company: '파워블로거', position: '12년, 누적 1300만 방문자', details: [] },
        { period: '경력', company: '창업기획자', position: '13년+a, 1000여개 스타트업 보육', details: [] },
        { period: '경력', company: '전문투자자', position: '10년+a, 187+a개 사, 220억원', details: [] },
        { period: '전', company: '경희사이버대학교', position: '미디어커뮤니케이션학과 겸임교수', details: [] },
        { period: '전', company: '티엔엠미디어', position: '공동대표', details: [] },
        { period: '전', company: '한국블로그산업협회', position: '회장', details: [] },
        { period: '전', company: '야후 코리아', position: '네트워크 프로그래밍 팀장', details: [] },
        { period: '전', company: '매경인터넷', position: '디지털미디어전략 기자', details: [] },
        { period: '전', company: '씨넷코리아/지디넷코리아', position: '편집장', details: [] },
        { period: '전', company: '하우피씨/아하피씨/피씨플러스', position: '팀장', details: [] },
        { period: '2018', company: '인터넷에코어워드', position: '언론분야 대상', details: [] },
        { period: '2017', company: '제54회 무역의 날', position: '산업통상자원부 장관 표창', details: [] },
        { period: '2015', company: '경기도 문화콘텐츠산업', position: '발전 유공 경기도지사 표창장', details: [] },
        { period: '2015', company: '미래창조과학부', position: '대한민국창조경제대상 공헌 부문 단체상', details: [] }
      ]
    },
    {
      name: '지현철',
      role: '아일럼인베스트 파트너',
      desc: '투자 및 인수합병 전략 자문',
      image: '/assets/profile/지현철.png',
      careers: [
        { period: '2024.12 - 현재', company: '아일럼인베스트', position: '파트너', details: [] },
        { period: '2023.03 - 2024.11', company: '빅뱅엔젤스㈜', position: '대표이사/파트너', details: ['총 펀드 관리 규모 250억원 핵심운용인력', '89개사 발굴 투자'] },
        { period: '2019.12 - 2022.12', company: '빅뱅엔젤스㈜', position: '이사/파트너', details: [] },
        { period: '2016.09 - 현재', company: '빅뱅엔젤스㈜ TIPS', position: '투자심사역', details: [] },
        { period: '2016', company: '㈜재무컨설팅 TF', position: 'Co-Founder, 이사', details: [] },
        { period: '2009', company: '㈜쓰리제이커뮤니케이션', position: 'Founder, CEO', details: ['IT SW 전문 개발사'] },
        { period: '2004', company: '㈜픽스바이트', position: 'Co-Founder, CSO', details: ['SI 전문 개발사'] },
        { period: '2002', company: '㈜이카디아', position: 'Co-Founder, CSO', details: ['네트워크보안 전문회사'] },
        { period: '2000', company: 'MFIS 웹에이전시', position: '설립, 대표', details: [] },
        { period: '1998', company: 'KCC 정보통신', position: '대리', details: [] }
      ]
    },
    {
      name: '전명석',
      role: '정동회계법인 Director',
      desc: '밸류에이션 및 재무 실사 전문',
      image: '/assets/profile/전명석.png',
      careers: [
        { period: '2024.12 - 현재', company: '정동회계법인', position: 'Director', details: [] },
        { period: '2021.05 - 2024.12', company: '삼일회계법인', position: 'Deals, FDD, Valuation 및 CF', details: [] },
        { period: '2018.09 - 2021.04', company: '삼일회계법인', position: 'International Tax Services 본부', details: [] },
        { period: '2011 - 2018', company: '성균관대학교', position: '글로벌 경제학과 졸업', details: [] },
        { period: 'Deals', company: '매각/매수자문', position: '', details: ['Cross-border 인수자문 (인도시장 정수기업체)', '성인교육업체, 정보보안업체, 네트워크 솔루션 업체 등 자문', '스튜디오레논 인수자문, 명품 플랫폼 투자유치 자문', '2차전지, 반도체, 원자력 기자재 등 다수 업체 자문'] },
        { period: 'Deals', company: '재무실사 및 기업가치평가', position: '', details: ['에듀윌, 보령바이오파마 매수실사 및 기업가치평가', '키다리엔터테인먼트(바이트댄스), 브랜뉴뮤직(카카오엔터) 매수실사', '무신사 영업권 손상 평가, 가상자산플랫폼 밸류에이션'] },
        { period: 'Tax', company: 'Tax Due Diligence', position: '', details: ['SKC코오롱PI, 대우조선해양, 에어아시아 세무실사'] },
        { period: 'Audit', company: '회계감사', position: '', details: ['수성웹툰, 투믹스홀딩스 회계감사', '에스알(SRT) 내부회계 평가'] }
      ]
    },
    {
      name: '함세희',
      role: '팩트시트 CEO',
      desc: 'AI 기반 데이터룸 솔루션',
      image: '/assets/profile/함세희.png',
      careers: [
        { period: '2023.02 - 현재', company: '㈜팩트시트', position: 'CEO', details: ['factsheet.biz 서비스 세일즈 총괄'] },
        { period: '2023.02 - 현재', company: '㈜벤처스퀘어', position: '투자담당 파트너/이사', details: ['신규 투자 스타트업 발굴 및 투자 심사', '보육기업 멘토링 및 컨설팅', '투자조합운영'] },
        { period: '2016.10 - 2023.05', company: '더화이트커뮤니케이션㈜', position: '전사 전략담당 임원(CSO) Cofounder', details: ['AI 오퍼레이션 솔루션 CloudGate 서비스 기획', '신규 클라이언트 확대 (연 300% 성장)', '투자 유치를 위한 IR 진행 (370억 투자유치)', '서비스 제휴 및 M&A'] },
        { period: '2011.07 - 2016.09', company: '㈜위메프', position: '플랫폼실 실장', details: ['위메프 서비스 기획 관리', '위메프 APP & 모바일web 기획 런칭', '백오피스 시스템 구축 및 운영관리'] },
        { period: '2004.08 - 2011.05', company: '㈜나무커뮤니케이션', position: '사업부장', details: ['Daum.net 검색광고 상품 개편 프로젝트 참여', 'Overture, Google korea, daum.net 매체 커뮤니케이션'] }
      ]
    },
    {
      name: '장효준',
      role: '법무법인 미션 변호사',
      desc: 'M&A 계약 및 법률 자문',
      image: '/assets/profile/장효준.png',
      careers: [
        { period: '2022 - 현재', company: '법무법인 미션 MISSION', position: '변호사', details: [] },
        { period: '2025', company: '㈜핀다', position: '파견 변호사', details: [] },
        { period: '2025 - 현재', company: '서울소셜벤처허브', position: '전문가 멘토', details: [] },
        { period: '2025 - 현재', company: 'DGIST', position: '창업지원 멘토', details: [] },
        { period: '2025 - 현재', company: '초기투자엑셀러레이터협회', position: 'LIPS II 투자적절성검증위원회 위원', details: [] },
        { period: '2024 - 현재', company: '한국여성벤처협회', position: '예비창업패키지 멘토', details: [] },
        { period: '2022 - 2024', company: '중소벤처기업부 창업진흥원', position: '전담멘토', details: [] },
        { period: '2023', company: '공정거래위원회', position: '가맹거래사', details: [] },
        { period: '2024', company: '특허청', position: '변리사', details: [] },
        { period: '업무', company: '투자계약 및 M&A', position: '', details: ['RCPS 투자 Term Sheet 및 투자계약서 검토', 'Cross-border M&A deal 자문 (미국 게임회사 등)', '헬스케어, 소비재 스타트업 법률실사(LDD) 자문', '다수의 기업 투자, M&A, 법률실사 자문'] },
        { period: '업무', company: '스타트업 기업 일반', position: '', details: ['전자금융거래법, 전자상거래법 자문', '공정거래법, 약관규제법 자문', '기술이전계약, 독점공급계약 등 자문', '정관, 임원보수규정, 영업비밀관리규정 등 내규 자문'] },
        { period: '업무', company: 'IP, 콘텐츠, 미디어', position: '', details: ['영업비밀 침해 사건 형사 고소 및 민사 가처분 대리', '상표권 및 저작권 침해 관련 자문', '광고/출연/음원 제작 및 유통 계약 자문'] },
        { period: '업무', company: 'AI, 가상화폐 등', position: '', details: ['버츄얼 휴먼 스타트업 계약 자문', '가상화폐 및 NFT 서비스 운영 자문', '가상화폐 SaaS 기업 소송 대리'] }
      ]
    },
    {
      name: '고민철',
      role: '아일럼인베스트 투자팀 팀장',
      desc: '딜 매칭 및 협상 전략',
      image: '/assets/profile/고민철.png',
      careers: [
        { period: '2025 - 현재', company: '아일럼인베스트', position: '투자팀 팀장', details: [] },
        { period: '2023 - 2025', company: '쿠팡로지스틱스서비스', position: '전략기획 팀장', details: [] },
        { period: '2021 - 2023', company: '쿠팡', position: '프로세스혁신팀 과장', details: [] },
        { period: '2017 - 2019', company: '한솔섬유 베트남', position: '주재원', details: [] },
        { period: '학력', company: '서울대학교', position: '경영전문대학원 졸업', details: [] },
        { period: '학력', company: '연세대학교', position: '국어국문학과 졸업', details: [] },
        { period: '업무', company: '온라인 교육기업 인수 검토 및 실사', position: '', details: ['온라인 교육 기업 인수 관련 사업, 재무, 조직 전반 실사', '투자 타당성 검토 및 투자위원회 보고용 IM 작성', 'FDD(재무실사) 및 LDD(법률실사) 총괄'] },
        { period: '업무', company: '테크 기반 스타트업 M&A 검토', position: '', details: ['SaaS, AI 기반 스타트업 대상 투자 및 M&A 검토', '투자 구조 설계 및 전략적 시너지 분석', '피투자사 경영진 미팅 및 투자 조건 협의'] },
        { period: '업무', company: '중소·중견기업 매도자문', position: '', details: ['상장사 및 비상장사 기업 매각/투자 유치 자문', '매각 가치 극대화 위한 거래 조건 협의', '딜 클로징 전 과정 프로젝트 매니지먼트'] },
        { period: '업무', company: '부동산 개발 프로젝트 자문', position: '', details: ['복합 부동산 개발 수익증권 매각 구조 검토', '사업비, 수익 배분 구조 분석', '자산운용사 및 투자자 대상 커뮤니케이션'] }
      ]
    },
    {
      name: '최충열',
      role: '현 누아 COO',
      desc: '글로싸인 창업 → 케이사인 M&A EXIT',
      image: '/assets/profile/최충열.png',
      careers: [
        { period: '현재', company: '누아(NUUA)', position: '최고운영책임자(COO)', details: ['항공 데이터 통합 및 AI 기반 항공권 유통 플랫폼 비즈니스 운영 총괄', '항공사 NDC(New Distribution Capability) 기술 상용화 및 B2B 파트너십 확장 주도', '기업가치 500억 스타트업'] },
        { period: 'EXIT', company: '글로싸인(Glosign)', position: '대표이사 / 창업자', details: ['클라우드 기반 전자계약 플랫폼 설립', '블록체인 기술 접목한 계약 위변조 방지 및 API 연동 서비스 개발', '설립 18개월 만에 상장사 케이사인(KSign)에 50억 M&A'] },
        { period: '창업', company: '프라핏(Profit)', position: '대표', details: ['중소형 상업용 건물 관리 솔루션 개발', '프롭테크 분야 스타트업 운영'] },
        { period: '활동', company: '스타트업 멘토링', position: '', details: ['광운대학교 등 대학가 스타트업 멘토', 'CEO 강연 및 창업 컨설팅 활동'] }
      ]
    },
    {
      name: '노정석',
      role: '비팩토리 대표',
      desc: '연쇄 창업가, 파이브락스·태터앤컴퍼니 M&A 전문가',
      image: '/assets/profile/노정석.png',
      careers: [
        { period: '현재', company: '비팩토리', position: '대표 (2020~)', details: ['AI 기반 실시간 개인 맞춤 화장품 조제 스마트 팩토리', '킵(KYYB): 스킨케어 브랜드', '아멜리: AI 기술 접목 색조 브랜드'] },
        { period: 'EXIT', company: '파이브락스(5Rocks)', position: '창업자', details: ['모바일 게임 데이터 분석 기업', '미국 탭조이(Tapjoy)에 매각'] },
        { period: 'EXIT', company: '태터앤컴퍼니', position: '창업자 (2005)', details: ['블로그·콘텐츠 솔루션', '아시아 스타트업 최초 구글(Google) 인수'] },
        { period: 'IPO', company: '인젠(Inzen)', position: '창업자', details: ['보안 스타트업', '코스닥 상장'] },
        { period: '2008 - 2010', company: '구글 코리아', position: '프로덕트 매니저', details: [] },
        { period: '경력', company: 'SK텔레콤', position: 'CI사업본부 대리', details: [] },
        { period: '투자', company: '엔젤 투자자', position: '', details: ['티몬, 패스트트랙아시아, 미미박스 등 다수 투자'] },
        { period: '학력', company: 'KAIST', position: '경영공학 학사', details: ['1996년 국내 최초 해킹 사건의 주역'] }
      ]
    }
  ];

  const partners = [
    { name: '벤처스퀘어', desc: '국내 최대 스타트업 미디어 & 액셀러레이터', logo: '/assets/logo/VentureSquare_Ci.png' },
    { name: '아일럼인베스트', desc: '전략적 M&A 투자 전문', logo: '/assets/logo/yleminvest.png' },
    { name: '팩트시트', desc: '투자자를 위한 스타트업 정보 관리 플랫폼', logo: '/assets/logo/FactSheet_Ci.png' }
  ];

  const targetAudience = [
    {
      icon: TrendingUp,
      title: '인수 기업 탐색 투자자',
      desc: '인수하기 좋은 기업을 실제로 탐색하는 방법을 배우고 싶은 투자자'
    },
    {
      icon: Briefcase,
      title: '후속투자·M&A 전략 리더',
      desc: '후속투자 유치, 인수합병 실전 전략을 파악하고 싶은 리더'
    },
    {
      icon: Building2,
      title: '전략적 성장 CEO',
      desc: '인수합병을 통한 전략적 성장을 꾀하는 CEO'
    },
    {
      icon: Users,
      title: '투자 심사역·액셀러레이터',
      desc: '투자 포트폴리오의 성장을 돕는 투자 심사역, 액셀러레이터, 엔젤 투자자'
    }
  ];

  const processSteps = [
    { icon: FileText, title: '딜룸 업로드 및 분석', desc: 'IR자료, 회사소개서 등 기업 정보를 딜룸에 업로드, 팩트 기반 분석' },
    { icon: Handshake, title: '실습 교육 & 매칭', desc: '교육 중 실제 기업 케이스로 실습\n딜룸 정보에 따른 매칭 진행' },
    { icon: Network, title: '네트워크', desc: 'M&A 전문가 커뮤니티 형성\n지속적 매칭 및 교류' }
  ];

  const faqs = [
    { q: '교육 대상은 누구인가요?', a: '매각을 고려 중인 스타트업 CEO, 기업 M&A 담당 실무자, 그리고 M&A 딜 소싱에 관심 있는 투자자(LP)를 대상으로 합니다.' },
    { q: '교육 비용은 얼마인가요?', a: '교육 비용은 250만원입니다. 넥스트라운드 성장 포럼 멤버십이 포함된 가격입니다. 단, 초대권 지참시 할인이 적용됩니다.' },
    { q: '수료증이 발급되나요?', a: '네, 전체 교육 과정을 이수하신 분들께 수료증을 발급해 드립니다.' },
    { q: '환불 규정은 어떻게 되나요?', a: '교육 시작 7일 전까지 100% 환불, 3일 전까지 50% 환불이 가능합니다. 교육 시작 이후에는 환불이 어렵습니다.' },
    { q: '네트워킹 시간에는 무엇을 하나요?', a: '매주 2부(18:30-20:00)에는 강사진과 함께 저녁식사를 하며 자유로운 Q&A와 네트워킹이 진행됩니다.' }
  ];

  const placeImages = [
    { name: 'place_hall', label: '메인홀 1' },
    { name: 'place_hall2', label: '메인홀 2' },
    { name: 'place_classroom', label: '교육실' },
    { name: 'place_snackbar', label: '스낵바' }
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % placeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + placeImages.length) % placeImages.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/95 backdrop-blur-xl shadow-lg'
            : 'bg-white/90 backdrop-blur-md'
        } border-b border-gray-100`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative h-12 w-40 md:h-14 md:w-48 -translate-y-0.5 flex-shrink-0">
              <Image
                src="/assets/logo/VenturesquareAcademy.png"
                alt="Venturesquare Academy"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="hidden md:block text-xl font-bold tracking-tight whitespace-nowrap">
              Next Round <span className="text-blue-600">Class</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#curriculum" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
              커리큘럼
            </a>
            <a href="#instructors" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
              강사진
            </a>
            <a href="#venue" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
              교육장소
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
              가격
            </a>
            <a
              href="https://event-us.kr/factsheet/event/118829"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm transition-all shadow-md hover:shadow-lg"
            >
              교육 신청하기
            </a>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <a
              href="#curriculum"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              커리큘럼
            </a>
            <a
              href="#venue"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              교육장소
            </a>
            <a
              href="#pricing"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              가격
            </a>
            <a
              href="https://event-us.kr/factsheet/event/118829"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              교육 신청하기
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/renewal/hero_background_optimized.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pt-24 md:pt-20 pb-8">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6 md:mb-8">
            2025년 1월 21일 개강 · 4주 과정
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-4 md:mb-6 text-white">
            Next Round Class
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-1 leading-snug">
            실제 투자 및 M&A 사례와 실습으로 배우는
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-snug">
            후속투자와 M&A, EXIT 실전 전략
          </p>

          <p className="text-white/70 text-sm mb-10">
            투자자, 창업자, 심사역 모두를 위한 전문가 네트워크
          </p>

          {/* 실제 M&A 사례 발표 하이라이트 카드 */}
          <div className="max-w-3xl mx-auto mb-12 px-4">
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <span className="px-3 py-1.5 bg-amber-400 text-slate-900 font-black text-sm rounded-full">1기 특별 세션</span>
              <span className="text-white font-bold text-base md:text-lg">실제 M&A EXIT 창업가의 생생한 경험담</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 노정석 대표 카드 */}
              <div
                className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all group"
                onClick={() => setSelectedInstructor(7)}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/assets/profile/노정석.png"
                        alt="노정석"
                        fill
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded">
                      2회 EXIT
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-900 font-bold text-lg">노정석</span>
                      <span className="text-slate-500 text-sm">대표</span>
                    </div>
                    <div className="text-blue-600 text-sm font-medium mb-2 text-left">비팩토리</div>
                    <div className="text-slate-700 text-sm leading-relaxed text-left">
                      <span className="font-semibold text-slate-900">아시아 최초 구글 매각</span> +<br/>
                      파이브락스 → 미국 탭조이 매각
                    </div>
                  </div>
                </div>
              </div>
              {/* 최충열 COO 카드 */}
              <div
                className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all group"
                onClick={() => setSelectedInstructor(6)}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/assets/profile/최충열.png"
                        alt="최충열"
                        fill
                        className="object-cover object-top"
                        unoptimized
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 px-2 py-0.5 bg-amber-500 text-white text-[10px] font-bold rounded">
                      50억 EXIT
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-900 font-bold text-lg">최충열</span>
                      <span className="text-slate-500 text-sm">COO</span>
                    </div>
                    <div className="text-blue-600 text-sm font-medium mb-2 text-left">누아 (500억 기업가치)</div>
                    <div className="text-slate-700 text-sm leading-relaxed text-left">
                      <span className="font-semibold text-slate-900">18개월 만에 50억 마이크로 M&A</span><br/>
                      글로싸인 창업 → EXIT<br/>
                      → 현 500억 스타트업 COO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
            <a
              href="https://event-us.kr/factsheet/event/118829"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-sm md:text-base transition-all shadow-lg"
            >
              교육 신청하기
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm md:text-base border border-white/30 transition-all"
            >
              커리큘럼 보기
            </a>
          </div>

          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-12 max-w-3xl mx-auto px-2">
            {/* 벤처스퀘어 */}
            <div className="h-10 sm:h-14 md:h-16 w-24 sm:w-36 md:w-44 relative flex items-center justify-center">
              <Image
                src="/assets/logo/VentureSquare_hero.png"
                alt="벤처스퀘어"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            {/* 아일럼인베스트 */}
            <div className="h-12 sm:h-16 md:h-18 w-20 sm:w-32 md:w-36 relative flex items-center justify-center translate-y-1 sm:translate-y-2 translate-x-1 sm:translate-x-3">
              <Image
                src="/assets/logo/yleminvest_2.png"
                alt="아일럼인베스트"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            {/* 팩트시트 */}
            <div className="h-14 sm:h-18 md:h-22 w-28 sm:w-44 md:w-52 relative flex items-center justify-center translate-y-0.5 sm:translate-y-1">
              <Image
                src="/assets/logo/factsheet_hero.png"
                alt="팩트시트"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">M&A 사례와 실습으로 배우는 후속투자, M&A, EXIT 실전 전략</span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Exit 시장이 열리는 2026년,<br />
            <span className="text-blue-600">지금 준비하지 않으면 3년 더 기다립니다</span>
          </h2>

          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            M&A는 타이밍입니다. 시장이 열릴 때 준비된 사람만이 기회를 잡습니다.<br />
            실제 딜을 경험한 전문가에게 배우지 않으면, 시행착오만 반복됩니다.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-base transition-all shadow-lg shadow-blue-600/30"
            >
              지금 준비 시작하기
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Target Audience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">이런 분들이 함께 합니다!</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">핵심 프로세스</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              딜룸과 팩트 기반 분석을 활용한 실전 중심의 M&A 학습 네트워크
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-white border border-slate-200 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-base font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mt-4 mb-4">
                  <step.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold mb-3 text-slate-900 text-lg">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Partners</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">운영 주체</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-slate-200 rounded-2xl text-center hover:shadow-xl transition-all"
              >
                {partner.logo ? (
                  <div className="w-full h-24 flex items-center justify-center mb-6">
                    <div className={`relative ${
                      partner.name === '팩트시트'
                        ? 'h-40 w-full max-w-[320px] mt-4'
                        : partner.name === '아일럼인베스트'
                          ? 'h-24 w-full max-w-[280px] mt-3'
                          : 'h-16 w-full max-w-[200px]'
                    }`}>
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-xl font-bold text-slate-700">
                    {partner.name}
                  </div>
                )}
                <p className="text-slate-600">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section - 임시로 숨김 처리 (hidden) */}
      <section id="instructors" className="hidden py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Instructors</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">전문 강사진</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              M&A 현장에서 활동하는 최고의 전문가들이 함께합니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedInstructor(index)}
              >
                {/* Logo in top right */}
                <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20">
                  <span className="text-[8px] md:text-[10px] font-bold text-slate-700">Next Round <span className="text-blue-600">Class</span></span>
                </div>

                {/* Gradient Background Section */}
                <div className="relative bg-gradient-to-b from-sky-50 via-blue-100 to-blue-600 h-48 overflow-hidden">
                  {/* Large White Circle Background */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white rounded-full z-0"></div>

                  {/* Profile Image */}
                  <div className="relative z-10 pt-2 px-0 h-full flex items-end justify-center">
                    {instructor.image ? (
                      <div className="w-full h-44">
                        <div className="relative w-full h-full">
                          <Image
                            src={instructor.image}
                            alt={instructor.name}
                            fill
                            className="object-contain object-bottom"
                            unoptimized
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                        {instructor.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Section - White Background */}
                <div className="bg-white pt-3 pb-4 px-3 md:pt-4 md:pb-5 md:px-5 text-center">
                  <h3 className="text-base md:text-xl font-bold mb-1 text-slate-900">{instructor.name}</h3>
                  <p className="text-blue-600 text-xs md:text-sm mb-1 font-semibold">{instructor.role}</p>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{instructor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2 text-slate-900">4주 완성 커리큘럼</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">+ 넥스트라운드 성장 포럼 멤버십</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-4">
              매주 수요일 오후, 이론과 실습, 실제 사례 연구를 병행하는 체계적인 커리큘럼
            </p>
            <p className="text-orange-600 max-w-2xl mx-auto text-base font-medium">
              💡 매출 30억 이상, 이익률 15% 이상, 기술 보유 스타트업의 경우 적극 지원 바람.<br />
              강사진이 실제 인수 대상 물색중.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar size={20} className="text-blue-600" />
              <span className="font-medium">매주 수요일</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Clock size={20} className="text-blue-600" />
              <span className="font-medium">17:00 - 20:00</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Users size={20} className="text-blue-600" />
              <span className="font-medium">총 15시간</span>
            </div>
          </div>

          {curriculum.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-5 mb-3 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="w-14 h-14 bg-blue-100 border border-blue-200 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-[10px] font-semibold">WEEK</span>
                    <span className="text-blue-600 text-xl font-bold">{item.week}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-slate-600 text-xs mb-2 font-medium">
                      {item.date} (수) | 1부 17:00-18:30
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>

                    <ul className="space-y-1 mb-3">
                      {item.contents.map((content, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{content}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.instructors.map((instructor, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-slate-100 rounded-full text-xs text-slate-700 font-medium"
                        >
                          {instructor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 강사 이미지 */}
                {item.instructorIndices.length > 0 && (
                  <div className="flex items-center justify-center lg:items-start gap-3 sm:gap-5 flex-shrink-0 pt-2 lg:pt-0">
                    {item.instructorIndices.map((instructorIdx, i) => (
                      <div
                        key={i}
                        className="group flex flex-col items-center cursor-pointer w-16 sm:w-20 lg:w-28"
                        onClick={() => setSelectedInstructor(instructorIdx)}
                      >
                        {/* 이미지 래퍼 */}
                        <div className="relative">
                          {/* 외곽 링 */}
                          <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />

                          {/* 이미지 컨테이너 */}
                          <div className="relative w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-blue-200 ring-2 ring-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                            {instructors[instructorIdx].image ? (
                              <Image
                                src={instructors[instructorIdx].image}
                                alt={instructors[instructorIdx].name}
                                fill
                                className="object-cover object-top"
                                unoptimized
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-blue-400 text-3xl font-bold">
                                {instructors[instructorIdx].name.charAt(0)}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 이름 라벨 */}
                        <div className="mt-1 sm:mt-2 text-center">
                          <div className="text-[10px] sm:text-xs lg:text-sm font-semibold text-blue-600 whitespace-nowrap">
                            {instructors[instructorIdx].name}
                          </div>
                          <div className="text-[8px] sm:text-[10px] lg:text-xs text-slate-500 whitespace-nowrap">
                            {instructors[instructorIdx].role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2 text-slate-600 text-xs">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-semibold">
                  2부
                </span>
                <span className="font-medium">18:30-20:00 | Dinner Talk - 강사와 저녁식사 Q&A 토크</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Venue</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">교육 장소</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">모비데이즈</h3>
              <div className="flex items-start gap-2 text-slate-700 mb-6">
                <MapPin size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">서울 강남구 언주로 417 모비빌딩 7층</p>
                  <p className="text-slate-500 text-sm mt-1">(지번) 역삼동 721-38 · 선릉역 도보 5분</p>
                </div>
              </div>
              <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=서울+강남구+언주로+417+모비빌딩&output=embed&hl=ko"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* 큰 이미지 (첫 번째) */}
              {placeImages.length > 0 && (
                <div
                  className="aspect-[16/9] relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal(0)}
                >
                  <Image
                    src={`/assets/place/${placeImages[0].name}.jpeg`}
                    alt={placeImages[0].label}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              {/* 작은 이미지 3개 (가로 배치) */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {placeImages.slice(1, 4).map((place, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer transition-transform hover:scale-105"
                    onClick={() => openModal(i + 1)}
                  >
                    <Image
                      src={`/assets/place/${place.name}.jpeg`}
                      alt={place.label}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Price</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">가격</h2>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 text-center shadow-lg border border-slate-200">
            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-3">
                2,500,000<span className="text-3xl">원</span>
              </div>
              <div className="text-slate-500">
                VAT 별도
              </div>
            </div>

            <div className="text-left bg-slate-50 rounded-xl p-4 mb-8 text-sm text-slate-600">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  4주 완성 커리큘럼 전체 수강
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  넥스트라운드 성장 포럼 멤버십
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  강사진과 네트워킹 디너
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://event-us.kr/factsheet/event/118829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
              >
                교육 신청하기
                <ArrowRight size={22} />
              </a>

              <a
                href="mailto:mna@factsheet.biz?subject=Next Round Class 초대권 요청"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-full text-lg transition-all border border-slate-300 hover:border-slate-400"
              >
                초대권 요청하기
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 mb-3">초대권 요청 대상</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">초기투자액셀러레이터협회 회원사 임직원</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">벤처스퀘어 투자 포트폴리오 임직원</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">아일럼벤처스 투자 포트폴리오 임직원</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">팩트시트 회원사 임직원</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">팩트시트 회원사 관리 포트폴리오 임직원</span>
              </div>
              <p className="mt-4 text-sm text-blue-600 font-semibold">
                초대권 지참시 1,500,000원으로 할인됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">자주 묻는 질문</h2>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden mb-4 bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-all"
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-blue-600 flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 bg-slate-50 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/assets/place/${placeImages[currentImageIndex].name}.jpeg`}
              alt={placeImages[currentImageIndex].label}
              fill
              className="object-contain"
              unoptimized
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {placeImages[currentImageIndex].label} ({currentImageIndex + 1} / {placeImages.length})
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section + Footer */}
      <section id="apply" className="relative overflow-hidden">
        {/* 배경 이미지 (히어로 섹션과 동일) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/renewal/hero_background_optimized.jpg"
            alt="Background"
            fill
            className="object-cover"
            unoptimized
          />
          {/* 위쪽은 밝게, 아래로 갈수록 어둡게 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900/90"></div>
        </div>

        {/* CTA 영역 */}
        <div className="relative z-10 pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              M&A의 다음 라운드,
              <br />
              지금 시작하세요
            </h2>

            <p className="text-lg text-slate-300 mb-8">
              2025년 1월 21일 개강 · 선착순 마감
            </p>

            <a
              href="https://event-us.kr/factsheet/event/118829"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full text-lg transition-all"
            >
              교육 신청하기
              <ArrowRight size={20} />
            </a>

            <p className="mt-8 text-slate-400 text-sm">
              문의:{' '}
              <a href="mailto:mna@factsheet.biz" className="text-white hover:underline">
                mna@factsheet.biz
              </a>
            </p>
          </div>
        </div>

        {/* Footer 영역 */}
        <footer className="relative z-10 py-8 bg-slate-800/80">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="text-lg font-bold mb-3 text-white">
              Next Round <span className="text-blue-400">M&A</span>
            </div>

            <div className="text-slate-400 text-sm mb-2">
              벤처스퀘어 · 아일럼인베스트 · 팩트시트
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-slate-500 text-sm">장소 협찬</span>
              <div className="relative h-6 w-24">
                <Image
                  src="/assets/logo/mobidays.png"
                  alt="모비데이즈"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="text-slate-500 text-sm">
              © 2025 Next Round M&A. All rights reserved.
            </div>
          </div>
        </footer>
      </section>

      {/* Instructor Profile Modal */}
      {selectedInstructor !== null && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedInstructor(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="relative bg-gradient-to-b from-sky-50 via-blue-100 to-blue-400 p-6 rounded-t-2xl">
              <button
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-slate-700" />
              </button>

              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* 프로필 이미지 */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-lg">
                  {instructors[selectedInstructor].image ? (
                    <Image
                      src={instructors[selectedInstructor].image}
                      alt={instructors[selectedInstructor].name}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-4xl font-bold text-white">
                      {instructors[selectedInstructor].name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* 기본 정보 */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                    {instructors[selectedInstructor].name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {instructors[selectedInstructor].role}
                  </p>
                  <p className="text-slate-600">
                    {instructors[selectedInstructor].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* 경력 테이블 */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-blue-600" />
                경력사항
              </h4>

              {instructors[selectedInstructor].careers.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-slate-200">
                        <th className="text-left py-3 px-2 text-slate-600 font-semibold w-32">기간</th>
                        <th className="text-left py-3 px-2 text-slate-600 font-semibold">경력내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      {instructors[selectedInstructor].careers.map((career, idx) => (
                        <tr key={idx} className="border-b border-slate-100">
                          <td className="py-3 px-2 text-slate-500 align-top whitespace-nowrap">
                            {career.period === 'EXIT' ? (
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">EXIT</span>
                            ) : career.period === 'IPO' ? (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">IPO</span>
                            ) : (
                              career.period
                            )}
                          </td>
                          <td className="py-3 px-2">
                            <div className="font-semibold text-slate-900">
                              {career.company}
                            </div>
                            <div className="text-blue-600 text-xs mb-1">
                              {career.position}
                            </div>
                            <ul className="text-slate-600 text-xs space-y-0.5">
                              {career.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <span className="text-blue-400 mt-1">•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  경력 정보가 준비 중입니다.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
