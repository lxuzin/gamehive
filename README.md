# GameHive - MMORPG 게임 커뮤니티 플랫폼

![GameHive Banner](https://via.placeholder.com/1200x300/4F46E5/FFFFFF?text=GameHive)

## 프로젝트 소개

GameHive는 MMORPG 게임 유저들을 위한 커뮤니티 플랫폼입니다. 게임 정보 공유, 실시간 채팅, 캐릭터 정보 조회 등 다양한 기능을 제공하여 게이머들 간의 소통과 정보 공유를 촉진합니다.

### 주요 기능

- 🎮 **게임 정보 게시판**
  - Markdown 지원 게시글 작성
  - 카테고리별 필터링 (이벤트, 팁/노하우 등)
  - 좋아요 및 댓글 기능

- 👥 **유저 커뮤니티**
  - 익명 기반 게시글 및 댓글 작성
  - localStorage를 활용한 데이터 관리
  - 게시글/댓글 신고 시스템

- 📊 **캐릭터 정보**
  - 상세 캐릭터 스탯 조회
  - 장비 및 인벤토리 정보 표시
  - 직관적인 UI로 정보 시각화

- 💬 **실시간 채팅**
  - 간편한 실시간 채팅 기능
  - 자동 더미 메시지 생성
  - 채팅 내역 저장 및 표시

- 👨‍💼 **관리자 기능**
  - 신고된 게시글/댓글 관리
  - 게시글 수정 및 삭제
  - 간편한 관리자 대시보드

## 기술 스택

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Markdown**: react-markdown

### 데이터 관리
- Local Storage
- JSON Mock Data

### 개발 도구
- ESLint
- Prettier
- Git

## 프로젝트 구조

```
src/
├── app/                 # Next.js 14 App Router
│   ├── admin/          # 관리자 페이지
│   ├── chat/           # 채팅 페이지
│   ├── posts/          # 게시판 페이지
│   └── characters/     # 캐릭터 정보 페이지
├── components/         # 재사용 가능한 컴포넌트
│   ├── admin/         # 관리자 관련 컴포넌트
│   ├── chat/          # 채팅 관련 컴포넌트
│   ├── posts/         # 게시판 관련 컴포넌트
│   └── characters/    # 캐릭터 관련 컴포넌트
├── store/             # Zustand 상태 관리
├── types/             # TypeScript 타입 정의
├── data/             # Mock 데이터
└── utils/            # 유틸리티 함수
```

## 주요 기능 상세

### 1. 게시판 시스템
- Markdown 기반 게시글 작성
- 카테고리별 필터링
- 좋아요 및 댓글 기능
- 게시글 신고 시스템

### 2. 캐릭터 정보
- 캐릭터 기본 정보 표시
- 상세 스탯 정보
- 장비 및 인벤토리 관리
- 직관적인 UI/UX

### 3. 실시간 채팅
- 실시간 메시지 송수신
- 자동 더미 데이터 생성
- 채팅 내역 저장

### 4. 관리자 기능
- 신고된 콘텐츠 관리
- 게시글 관리
- 사용자 활동 모니터링

## 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/yourusername/gamehive.git

# 디렉토리 이동
cd gamehive

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 배포

이 프로젝트는 GitHub Pages를 통해 배포되었습니다.
- 배포 URL: [https://yourusername.github.io/gamehive](https://yourusername.github.io/gamehive)

## 개선 사항 및 향후 계획

- [ ] 실제 백엔드 서버 연동
- [ ] 실시간 채팅을 위한 WebSocket 구현
- [ ] 사용자 인증 시스템 추가
- [ ] 게시글 검색 기능 강화
- [ ] 모바일 최적화 개선

## 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 제작자

진수진 - [이메일](sujin7048@naver.com)

프로젝트 링크: [https://github.com/lxuzin/gamehive](https://github.com/lxuzin/gamehive)
