# 템플릿 코드 모음

비개발자 관리자가 컨텐츠를 추가할 때 복사해서 사용할 수 있는 템플릿 코드입니다.

---

## 1. 회사소개 카드 추가

```html
<div class="content-card slide-in-left">
    <div class="card-icon">🏢</div>
    <h3>제목 입력</h3>
    <p>내용을 입력하세요. 여러 줄로 작성할 수 있습니다.</p>
    <!-- 이미지 추가 시 아래 주석을 해제하고 사용하세요 -->
    <!-- <img src="images/파일명.jpg" alt="설명" style="width: 100%; border-radius: 12px; margin: 15px 0;"> -->
</div>
```

**사용 위치**: `index.html` 파일의 `<!-- 회사소개 Section -->` 섹션 내부

---

## 2. 환경설정 항목 추가

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

**사용 위치**: `index.html` 파일의 `<!-- 초기 환경설정 Section -->` 섹션 내부  
**주의**: `setup-number`의 숫자를 순서에 맞게 변경하세요.

---

## 3. FAQ 질문 추가

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

**사용 위치**: `index.html` 파일의 `<!-- FAQ Section -->` 섹션 내부

---

## 4. 인사평가 절차 항목 추가

```html
<div class="timeline-item-new">
    <div class="timeline-content">
        <span class="timeline-label">항목 제목</span>
        <span class="timeline-dot">•</span>
        <span class="timeline-description">설명 텍스트를 입력하세요.</span>
    </div>
</div>
```

**사용 위치**: `index.html` 파일의 `<!-- 인사평가제도 -->` 섹션 내부

---

## 5. 법인관계도에 법인 추가

```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer" class="org-item-link">
    <div class="org-item">법인명</div>
</a>
<div class="org-connector"></div>
```

**사용 위치**: `index.html` 파일의 `<!-- 법인관계도 -->` 섹션 내부  
**주의**: 
- 마지막 법인 다음에는 `<div class="org-connector"></div>`를 추가하지 않습니다
- 이크레더블은 `highlight` 클래스를 유지: `<div class="org-item highlight">이크레더블</div>`

---

## 6. 직급 추가

```html
<div class="rank-item rank-gX">
    <div class="rank-badge">
        <span class="rank-level">GX</span>
        <span class="rank-title">직급명</span>
    </div>
</div>
<div class="rank-arrow">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M15 10L25 20L15 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>
```

**사용 위치**: `index.html` 파일의 `<!-- 직급 및 직무 안내 -->` 섹션 내부  
**주의**: 마지막 직급 다음에는 화살표를 추가하지 않습니다

---

## 7. 새 섹션 추가

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

**사용 위치**: `index.html` 파일의 적절한 위치  
**주의**: 
- `section-number`를 순서에 맞게 변경
- 네비게이션 메뉴에도 추가해야 합니다

---

## 8. 이미지 추가

```html
<img src="images/파일명.jpg" alt="이미지 설명" style="width: 100%; border-radius: 12px; margin: 15px 0;">
```

**주의**: 
- 이미지 파일은 `images/` 폴더에 저장
- 파일명은 영어로 권장
- `alt` 속성에 이미지 설명 입력 (접근성 향상)

---

## 9. 링크 추가

```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">링크 텍스트</a>
```

**주의**: 외부 링크는 `target="_blank"`와 `rel="noopener noreferrer"`를 함께 사용

---

## 10. 연락처 정보 수정

연락처는 여러 곳에 있습니다. `Ctrl+F`로 검색하여 찾아 수정하세요:
- 내선 번호
- 이메일 주소
- 전화번호

---

## 💡 팁

1. **복사-붙여넣기**: 템플릿 코드를 복사한 후 필요한 부분만 수정하세요
2. **백업**: 수정 전에 파일을 백업하세요
3. **테스트**: 변경 후 브라우저에서 확인하세요
4. **검색 기능**: `Ctrl+F`로 원하는 텍스트를 빠르게 찾을 수 있습니다

---

**더 자세한 내용은 `MAINTENANCE_GUIDE.md` 파일을 참고하세요.**

