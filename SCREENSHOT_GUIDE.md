# 랜딩페이지 PNG 내보내기 가이드

## 방법 1: Puppeteer 자동 캡처 (권장)

### 1단계: Puppeteer 설치
터미널에서 프로젝트 폴더로 이동 후 실행:
```bash
cd /Users/tagryu/NextRound_Landingpage/next-round-ma
npm install --save-dev puppeteer
```

### 2단계: 개발 서버 실행
새 터미널 창을 열고:
```bash
npm run dev
```

### 3단계: 스크린샷 생성
다른 터미널 창에서:
```bash
node screenshot.js
```

완료되면 `landing-page-full.png` 파일이 프로젝트 폴더에 생성됩니다.

---

## 방법 2: Chrome 개발자 도구 (수동)

### 단계:
1. 개발 서버 실행: `npm run dev`
2. Chrome에서 http://localhost:3000 접속
3. **F12** (Windows) 또는 **Cmd+Option+I** (Mac)로 개발자 도구 열기
4. **Cmd+Shift+P** (Mac) 또는 **Ctrl+Shift+P** (Windows)로 명령 팔레트 열기
5. "**Capture full size screenshot**" 입력 후 실행
6. 자동으로 PNG 파일이 다운로드됩니다

---

## 방법 3: Figma로 직접 가져오기

### HTML to Figma 플러그인 사용:
1. Figma에서 **Plugins** → **Browse plugins in Community** 검색
2. "**HTML to Figma**" 플러그인 설치
3. 플러그인 실행 후 URL 입력: `http://localhost:3000`
4. 자동으로 Figma 레이어로 변환됩니다

**장점:** 편집 가능한 벡터 레이어로 가져올 수 있습니다
**단점:** 복잡한 CSS가 완벽히 변환되지 않을 수 있습니다

---

## 방법 4: 배포된 페이지 캡처

배포 후 공개 URL이 있다면:
- https://screenshot.guru
- https://www.screenshotmachine.com

같은 온라인 서비스로 전체 페이지 스크린샷 가능

---

## 추천 워크플로우

피그마에 올리는 목적에 따라:

### 디자인 참고용
→ **Chrome 개발자 도구** (가장 빠름)

### 고품질 프레젠테이션
→ **Puppeteer 자동 캡처** (2배 해상도)

### 편집 가능한 디자인 파일
→ **HTML to Figma 플러그인**
