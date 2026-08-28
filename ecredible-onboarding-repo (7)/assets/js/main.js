window.addEventListener('scroll', function () {
  var h = document.documentElement;
  var scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  document.getElementById('progress').style.width = scrolled + '%';
  var toTop = document.getElementById('toTop');
  if (h.scrollTop > 400) { toTop.classList.add('show'); } else { toTop.classList.remove('show'); }
});

document.querySelectorAll('.faq-item').forEach(function (item) {
  item.querySelector('.faq-q').addEventListener('click', function () {
    item.classList.toggle('open');
  });
});

// 사업 영역 탭 필터 (전체가 기본으로 모두 노출됨)
var tabs = document.querySelectorAll('.biz-tab');
var cards = document.querySelectorAll('.biz-card');
tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    tabs.forEach(function (t) { t.classList.remove('active'); });
    tab.classList.add('active');
    var cat = tab.getAttribute('data-cat');
    cards.forEach(function (c) {
      c.style.display = (cat === 'all' || c.getAttribute('data-cat') === cat) ? 'block' : 'none';
    });
  });
});

// 타임라인 "전체 보기" 모달
function openTlModal(sourceId, title) {
  var src = document.getElementById(sourceId);
  document.getElementById('tlModalBody').innerHTML = src.innerHTML;
  document.getElementById('tlModalTitle').textContent = title;
  document.getElementById('tlModal').classList.add('open');
}
function closeTlModal() {
  document.getElementById('tlModal').classList.remove('open');
}
document.getElementById('tlModal').addEventListener('click', function (e) {
  if (e.target === this) { closeTlModal(); }
});

// 터치 기기에서 hover 콘텐츠(사업영역 설명, 직급 툴팁) 탭 토글
var isTouch = window.matchMedia('(hover: none)').matches;
if (isTouch) {
  document.querySelectorAll('.biz-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      var wasActive = card.classList.contains('touch-active');
      document.querySelectorAll('.biz-card.touch-active').forEach(function (c) { c.classList.remove('touch-active'); });
      if (!wasActive) { card.classList.add('touch-active'); }
    });
  });
  document.querySelectorAll('.rank-step').forEach(function (step) {
    step.addEventListener('click', function (e) {
      var wasActive = step.classList.contains('touch-active');
      document.querySelectorAll('.rank-step.touch-active').forEach(function (s) { s.classList.remove('touch-active'); });
      if (!wasActive) { step.classList.add('touch-active'); }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.biz-card')) {
      document.querySelectorAll('.biz-card.touch-active').forEach(function (c) { c.classList.remove('touch-active'); });
    }
    if (!e.target.closest('.rank-step')) {
      document.querySelectorAll('.rank-step.touch-active').forEach(function (s) { s.classList.remove('touch-active'); });
    }
  });
}

// 모바일 내비게이션 토글
var navToggle = document.getElementById('navToggle');
var mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
});
