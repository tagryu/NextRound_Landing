'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, MapPin, Calendar, Clock, Users, ArrowRight, CheckCircle, Building2, Briefcase, TrendingUp, FileText, Bot, Handshake, Network, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const curriculum = [
    {
      week: 1,
      date: '1/14',
      title: '후속 투자 유치 및 인수합병 시장과 구조 이해',
      contents: ['M&A Class 취지 및 방안', 'M&A 생태계, 매수·매도자의 역할, 실제 성공사례'],
      instructors: ['명승은 대표', '지현철 대표']
    },
    {
      week: 2,
      date: '1/21',
      title: '딜 구조 설계 & 가치평가',
      contents: ['밸류에이션 실습, 거래 프로세스 시뮬레이션', '팩트시트 데이터룸 활용법'],
      instructors: ['전명석 회계사', '함세희 대표']
    },
    {
      week: 3,
      date: '1/28',
      title: '법률·세무 및 리스크 관리',
      contents: ['계약서(LOI, SPA) 작성 및 리스크 대응'],
      instructors: ['장효준 변호사']
    },
    {
      week: 4,
      date: '2/4',
      title: '매칭 시뮬레이션 & 협상 실습',
      contents: ['매수자-매도자 실시간 매칭 협상 및 피칭'],
      instructors: ['고민철 심사역']
    },
    {
      week: 5,
      date: '2/11',
      title: 'Deal Case Study',
      contents: ['실제 M&A 사례, 인사이드'],
      instructors: ['전문가 패널']
    }
  ];

  const instructors = [
    { name: '명승은', role: '벤처스퀘어 대표', desc: 'M&A 생태계 및 시장 구조 전문가' },
    { name: '지현철', role: '아일럼인베스트 대표', desc: '투자 및 인수합병 전략 자문' },
    { name: '전명석', role: '회계사', desc: '밸류에이션 및 재무 실사 전문' },
    { name: '함세희', role: '팩트시트 대표', desc: 'AI 기반 데이터룸 솔루션' },
    { name: '장효준', role: '변호사', desc: 'M&A 계약 및 법률 자문' },
    { name: '고민철', role: '심사역', desc: '딜 매칭 및 협상 전략' }
  ];

  const partners = [
    { name: '벤처스퀘어', desc: '국내 최대 스타트업 미디어 & 액셀러레이터', logo: '/assets/logo/VentureSquare_Ci.png' },
    { name: '아일럼인베스트', desc: '전략적 M&A 투자 전문', logo: null },
    { name: '팩트시트', desc: 'AI 기반 M&A 데이터룸 플랫폼', logo: '/assets/logo/FactSheet_Ci.png' }
  ];

  const targetAudience = [
    {
      icon: Building2,
      title: '매각 의지가 있는 CEO',
      desc: '기업 가치를 극대화하고 성공적인 Exit을 준비하는 창업자'
    },
    {
      icon: Briefcase,
      title: 'M&A 담당 실무자',
      desc: '기업 또는 전략적 인수합병을 담당하는 실무 전문가'
    },
    {
      icon: TrendingUp,
      title: 'M&A 중계 투자자 (LP)',
      desc: '포트폴리오 Exit 및 딜 소싱에 관심 있는 투자자'
    }
  ];

  const processSteps = [
    { icon: FileText, title: '딜룸 업로드 및 분석', desc: 'IR자료, 회사소개서 등 기업 정보를 딜룸에 업로드하고 AI Agent가 자동 분석' },
    { icon: Handshake, title: '실습 교육 & 매칭', desc: '교육 중 실제 기업 케이스로 실습하고 매칭 진행' },
    { icon: Network, title: '네트워크', desc: 'M&A 전문가 커뮤니티 형성 및 지속적 교류' }
  ];

  const faqs = [
    { q: '교육 대상은 누구인가요?', a: '매각을 고려 중인 스타트업 CEO, 기업 M&A 담당 실무자, 그리고 M&A 딜 소싱에 관심 있는 투자자(LP)를 대상으로 합니다.' },
    { q: '교육 비용은 얼마인가요?', a: '교육 비용은 이벤터스 신청 페이지에서 확인하실 수 있습니다.' },
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
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/95 backdrop-blur-xl shadow-lg'
            : 'bg-white/90 backdrop-blur-md'
        } border-b border-gray-100`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">
            Next Round <span className="text-blue-600">M&A</span>
          </div>
          <a
            href="https://event-us.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm transition-all shadow-md hover:shadow-lg"
          >
            신청하기
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <div className="inline-block px-4 py-2 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-700 font-semibold text-sm mb-8">
            2025년 1월 14일 개강 · 5주 과정
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
            M&A, 다음 라운드를
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">준비하세요</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-4 leading-relaxed">
            실제 케이스 스터디와 실습으로 배우는
            <br />
            M&A 실무 교육 프로그램
          </p>

          <p className="text-slate-600 mb-10">
            매수자와 매도자 모두를 위한 전문가 네트워크
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-all shadow-lg shadow-blue-600/30"
            >
              교육 신청하기
              <ArrowRight size={20} />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-full text-lg border-2 border-slate-200 transition-all"
            >
              커리큘럼 보기
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="h-32 flex items-center justify-center">
              <div className="relative h-12 w-48">
                <Image
                  src="/assets/logo/VentureSquare_Ci.png"
                  alt="벤처스퀘어"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="h-32 flex items-center justify-center">
              <span className="text-base text-slate-700 font-medium">
                아일럼인베스트
              </span>
            </div>
            <div className="h-32 flex items-center justify-center">
              <div className="relative h-32 w-96">
                <Image
                  src="/assets/logo/FactSheet_Ci.png"
                  alt="팩트시트"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">5주 완성 커리큘럼</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              매주 수요일 저녁, 이론과 실습을 병행하는 체계적인 M&A 교육
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
              <div className="flex flex-wrap gap-4">
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

      {/* Target Audience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Target Audience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">이런 분들을 위한 교육입니다</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
              딜룸과 AI 분석을 활용한 실전 중심의 M&A 학습 경험
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
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Instructors</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">전문 강사진</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              M&A 현장에서 활동하는 최고의 전문가들이 함께합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-slate-200 rounded-2xl text-center hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {instructor.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-900">{instructor.name}</h3>
                <p className="text-blue-600 text-sm mb-3 font-semibold">{instructor.role}</p>
                <p className="text-slate-600 text-sm">{instructor.desc}</p>
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
                    <div className={`relative ${partner.name === '팩트시트' ? 'h-32 w-96' : 'h-16 w-48'}`}>
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

      {/* Venue Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Venue</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">교육 장소</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">모비데이즈</h3>
              <div className="flex items-start gap-2 text-slate-700 mb-6">
                <MapPin size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">서울특별시 강남구 언주로 417 7층</p>
                  <p className="text-slate-500 text-sm mt-1">선릉역 도보 5분</p>
                </div>
              </div>
              <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8889!2d127.045!3d37.5075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzI3LjAiTiAxMjfCsDAyJzUwLjEiRQ!5e0!3m2!1sko!2skr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 content-start">
              {placeImages.map((place, i) => (
                <div
                  key={i}
                  className="aspect-video relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal(i)}
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
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
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

      {/* Final CTA Section */}
      <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            M&A의 다음 라운드,
            <br />
            <span className="text-blue-100">지금 시작하세요</span>
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            2025년 1월 14일 개강 · 선착순 마감
          </p>

          <a
            href="https://event-us.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-blue-50 text-blue-600 font-bold rounded-full text-xl transition-all shadow-2xl"
          >
            교육 신청하기
            <ArrowRight size={24} />
          </a>

          <p className="mt-8 text-blue-100">
            문의:{' '}
            <a href="mailto:edu@venturesquare.net" className="text-white hover:underline font-medium">
              edu@venturesquare.net
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-xl font-bold mb-4 text-white">
            Next Round <span className="text-blue-400">M&A</span>
          </div>

          <div className="text-slate-400 text-sm mb-2">
            벤처스퀘어 · 아일럼인베스트 · 팩트시트
          </div>

          <div className="text-slate-500 text-sm">
            © 2025 Next Round M&A. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
