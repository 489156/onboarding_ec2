# 이크레더블 신규입사자 가이드북 (외부 공개용)

이크레더블 신규입사자 온보딩 페이지입니다. 단일 HTML 파일이 아닌, 유지보수와 보안을 고려해
CSS·JS·폰트·이미지를 분리한 정적 웹사이트 구조로 구성되어 있습니다.

## 폴더 구조

```
├── index.html              # 메인 페이지 (모든 섹션 포함)
├── assets/
│   ├── css/
│   │   ├── fonts.css       # 로컬 웹폰트 @font-face 정의 (Spoqa Han Sans Neo, Paperlogy)
│   │   └── style.css       # 전체 레이아웃/컴포넌트 스타일
│   ├── js/
│   │   └── main.js         # 스크롤 진행바, FAQ 아코디언, 탭 필터, 타임라인 모달, 반응형 터치 인터랙션
│   ├── fonts/              # 로컬 임베드된 woff2 폰트 파일 (외부 CDN 의존 제거)
│   └── images/
│       └── logo.png        # 회사 로고
└── data/                   # (예비) 콘텐츠 데이터 분리용 폴더
```

## 이 버전의 보안 처리 사항 (외부 공개용 안전 버전)

⚠️ **원본(사내용) 문서에 포함되어 있던 아래 민감정보는 모두 `[담당팀 문의]` placeholder로 치환되었습니다.**

- 각종 시스템 초기 비밀번호(크로스넷/그룹웨어/타임키퍼/PrintSecure/ECM 등)
- 내부망 IP 주소 및 사내 전용 도메인(ecm.ecredible.co.kr, work.ecredible.co.kr, mail.ecredible.co.kr 등)
- 담당자 실명, 사번, 내선번호, 이메일

**실제 배포 전 반드시 확인하세요.**
1. 이 리포지토리를 공용(Public) GitHub Pages로 배포할 경우, 위 치환이 누락된 곳이 없는지 재검토합니다.
2. `[담당팀 문의]` placeholder는 사내 인트라넷/ECM 등 신뢰된 채널에서만 실제 값으로 채워 넣습니다.
3. 민감정보가 포함된 "사내용 원본"은 이 공개 리포지토리와 별도로 관리(비공개 리포지토리 또는 사내 ECM)합니다.

## 폰트 라이선스

- **Spoqa Han Sans Neo**: Apache License 2.0 (Spoqa) — `assets/fonts/SpoqaHanSansNeo-*.woff2`
- **Paperlogy**: OFL(Open Font License) 기반 배포 폰트(fonts-archive/Paperlogy) — `assets/fonts/Paperlogy-*.woff2`
- 두 폰트 모두 로컬 파일로 포함되어 있어 외부 CDN 장애/차단 환경에서도 정상 렌더링됩니다.

## 지도

- Google Maps iframe 대신 **카카오맵 링크 카드**로 구현되어 있습니다(국내 서비스 안정성 및 접근성 고려).
- 카드의 "카카오맵에서 길찾기" 버튼 클릭 시 각 사업장 주소로 카카오맵 검색 결과가 새 탭에서 열립니다.

## 로컬에서 확인하는 방법

별도 빌드 과정 없이 `index.html`을 브라우저로 바로 열거나, 정적 서버로 구동하세요.

```bash
# 예: Python 내장 서버
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## GitHub Pages로 배포하는 방법

1. 이 폴더 전체를 리포지토리 루트에 커밋/푸시합니다.
2. 리포지토리 Settings → Pages → Branch를 `main`(또는 배포 브랜치), 폴더를 `/ (root)`로 설정합니다.
3. 발급된 `https://<계정>.github.io/<repo>/` 주소로 접속해 정상 동작을 확인합니다.
