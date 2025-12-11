# 이크레더블 신규입사자 가이드북 유지보수 가이드

## 📋 목차
1. [기본 구조 이해하기](#기본-구조-이해하기)
2. [컨텐츠 수정하기](#컨텐츠-수정하기)
3. [컨텐츠 추가하기](#컨텐츠-추가하기)
4. [이미지 추가하기](#이미지-추가하기)
5. [새 섹션 추가하기](#새-섹션-추가하기)
6. [자주 묻는 질문](#자주-묻는-질문)

---

## 기본 구조 이해하기

### 파일 구조
```
cursor/
├── index.html          # 메인 웹페이지 파일
├── styles.css          # 스타일 파일 (색상, 레이아웃 등)
├── script.js           # 동작 관련 파일
├── fonts/              # 폰트 파일들
└── ecredible-b-kr-crop.png  # 로고 이미지
```

### 주요 섹션 구조
웹페이지는 다음과 같은 섹션들로 구성되어 있습니다:
1. **회사소개** (`#intro`)
2. **환경설정** (`#setup`)
3. **회사제도 안내** (`#policies`)
4. **시설 안내** (`#facilities`)
5. **기타 안내사항** (`#reference`)
6. **FAQ** (`#faq`)

---

## 컨텐츠 수정하기

### 텍스트 수정
가장 간단한 작업입니다. `index.html` 파일을 열고 원하는 텍스트를 찾아 수정하세요.

**예시: 회사 개요 수정**
```html
<!-- index.html 파일에서 찾기: "회사 개요" -->
<div class="content-card slide-in-left">
    <div class="card-icon">🏢</div>
    <h3>회사 개요</h3>
    <p>여기를 수정하세요. 이크레더블은 글로벌 3대 신용평가사...</p>
</div>
```

### 연락처 수정
연락처는 여러 곳에 있습니다. 검색 기능(Ctrl+F)을 사용하여 찾아 수정하세요.

---

## 컨텐츠 추가하기

### 1. 회사소개 섹션에 카드 추가

**위치**: `index.html` 파일에서 `<!-- 회사소개 Section -->` 섹션 찾기

**템플릿 코드** (복사해서 사용):
```html
<!-- 기존 카드들 아래에 추가 -->
<div class="content-card slide-in-right">
    <div class="card-icon">🎯</div>
    <h3>새로운 제목</h3>
    <p>여기에 설명을 입력하세요. 여러 줄로 작성할 수 있습니다.</p>
</div>
```

**아이콘 변경**: `card-icon` 안의 이모지를 원하는 것으로 변경하세요.
- 🏢 회사
- 🎯 목표
- 🤝 협력
- 📊 데이터
- 💡 아이디어
- 등등...

### 2. 환경설정 섹션에 항목 추가

**위치**: `index.html` 파일에서 `<!-- 초기 환경설정 Section -->` 섹션 찾기

**템플릿 코드**:
```html
<div class="setup-item fade-in">
    <div class="setup-number">5</div>
    <div class="setup-content">
        <h3>새로운 설정 항목</h3>
        <p>설명을 입력하세요.</p>
        <ul class="setup-details">
            <li>항목 1</li>
            <li>항목 2</li>
            <li>항목 3</li>
        </ul>
    </div>
</div>
```

**중요**: `setup-number`의 숫자를 순서에 맞게 변경하세요.

### 3. FAQ에 질문 추가

**위치**: `index.html` 파일에서 `<!-- FAQ Section -->` 섹션 찾기

**템플릿 코드**:
```html
<div class="faq-item">
    <div class="faq-question">
        <h3>Q. 새로운 질문을 입력하세요?</h3>
        <span class="faq-icon">+</span>
    </div>
    <div class="faq-answer">
        <p>답변을 입력하세요. 여러 줄로 작성할 수 있습니다.</p>
    </div>
</div>
```

---

## 이미지 추가하기

### 1. 이미지 파일 준비
- 이미지 파일을 프로젝트 폴더에 저장 (예: `images/` 폴더 생성)
- 권장 형식: PNG, JPG
- 권장 크기: 너비 800px 이하

### 2. 회사소개 카드에 이미지 추가

**템플릿 코드**:
```html
<div class="content-card slide-in-left">
    <div class="card-icon">🏢</div>
    <h3>회사 개요</h3>
    <!-- 이미지 추가 위치 -->
    <img src="images/회사사진.jpg" alt="회사 설명" style="width: 100%; border-radius: 12px; margin: 15px 0;">
    <p>이크레더블은 글로벌 3대 신용평가사...</p>
</div>
```

**중요**: 
- `src="images/회사사진.jpg"` 부분을 실제 이미지 파일 경로로 변경
- `alt="회사 설명"` 부분에 이미지 설명 입력 (접근성 향상)

---

## 새 섹션 추가하기

### 1. HTML에 섹션 추가

**템플릿 코드** (기타 안내사항 섹션 다음에 추가):
```html
<!-- 새 섹션 Section -->
<section id="new-section" class="section">
    <div class="container">
        <div class="section-header">
            <span class="section-number">07</span>
            <h2 class="section-title">새 섹션 제목</h2>
            <p class="section-subtitle">섹션에 대한 간단한 설명</p>
        </div>
        
        <!-- 여기에 컨텐츠 추가 -->
        <div class="content-card">
            <h3>하위 제목</h3>
            <p>내용을 입력하세요.</p>
        </div>
    </div>
</section>
```

### 2. 네비게이션 메뉴에 추가

**위치**: `index.html` 파일 상단의 `<nav>` 섹션

```html
<ul class="nav-menu" id="navMenu">
    <!-- 기존 메뉴들... -->
    <li><a href="#new-section" class="nav-link">새 섹션</a></li>
</ul>
```

**중요**: 
- `section-number`를 순서에 맞게 변경 (07, 08, 09...)
- `id="new-section"`과 `href="#new-section"`이 일치해야 합니다

---

## 법인관계도 수정하기

### 법인 추가/삭제

**위치**: `index.html` 파일에서 `<!-- 법인관계도 -->` 섹션 찾기

**템플릿 코드** (법인 추가):
```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer" class="org-item-link">
    <div class="org-item">새 법인명</div>
</a>
<div class="org-connector"></div>
```

**중요**: 
- 법인을 추가할 때는 `org-connector`도 함께 추가해야 합니다
- 마지막 법인 다음에는 `org-connector`를 추가하지 않습니다
- 이크레더블은 `highlight` 클래스를 유지하세요: `<div class="org-item highlight">이크레더블</div>`

---

## 자주 묻는 질문

### Q1. 색상을 변경하고 싶어요
**A**: `styles.css` 파일을 열고 `:root` 섹션을 찾으세요. 여기서 색상을 변경할 수 있습니다.
```css
:root {
    --primary-color: #000049;  /* 메인 색상 */
    --primary-dark: #000033;   /* 어두운 색상 */
    --primary-light: #000066;   /* 밝은 색상 */
}
```

### Q2. 폰트 크기를 변경하고 싶어요
**A**: `styles.css` 파일에서 해당 요소의 `font-size` 값을 찾아 변경하세요.
- 제목: `.section-title { font-size: 3rem; }`
- 본문: `body { font-size: ... }`

### Q3. 섹션 순서를 변경하고 싶어요
**A**: 
1. `index.html`에서 섹션 블록 전체를 잘라내기(Ctrl+X)
2. 원하는 위치에 붙여넣기(Ctrl+V)
3. 네비게이션 메뉴 순서도 함께 변경
4. `section-number`도 순서에 맞게 변경

### Q4. 이미지가 표시되지 않아요
**A**: 
- 이미지 파일 경로가 올바른지 확인 (`src="images/파일명.jpg"`)
- 파일명에 한글이나 특수문자가 있으면 영어로 변경
- 파일이 실제로 해당 폴더에 있는지 확인

### Q5. 변경사항이 웹페이지에 반영되지 않아요
**A**: 
- 브라우저를 새로고침(Ctrl+F5 또는 Shift+F5)
- 브라우저 캐시를 지우고 다시 시도

---

## ⚠️ 주의사항

1. **HTML 태그 닫기**: 모든 태그는 열고 닫아야 합니다 (`<div>` → `</div>`)
2. **따옴표 사용**: 속성값은 항상 따옴표로 감싸세요 (`class="content-card"`)
3. **백업**: 수정 전에 파일을 백업하세요
4. **테스트**: 변경 후 브라우저에서 확인하세요

---

## 📞 도움이 필요하신가요?

문제가 발생하거나 도움이 필요하시면:
- 인력개발팀으로 문의
- 또는 개발팀에 문의

---

**마지막 업데이트**: 2025년

