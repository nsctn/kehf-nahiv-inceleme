import './style.css';
import { DURUS_CURRICULUM } from './data/curriculumData';
import { renderExerciseBox } from './components/ExerciseRenderer';

document.addEventListener('DOMContentLoaded', () => {
  // 1. TEMA DEĞİŞTİRME DÜĞMESİ (themeBtn)
  // index.html ve tutorial.html ile birebir aynı 'kehf-theme' anahtarı kullanılır
  const themeBtn = document.getElementById('themeBtn');
  const themes = ['mushaf', 'dark', 'light'];
  const LS_THEME = 'kehf-theme';
  let currentTheme = localStorage.getItem(LS_THEME) || 'mushaf';

  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LS_THEME, theme);
  };
  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.onclick = () => {
      const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
      currentTheme = themes[nextIdx];
      applyTheme(currentTheme);
    };
  }

  // 2. MÜFREDAT VE KİTAPLARIN RENDER EDİLMESİ
  const booksContainer = document.getElementById('booksContent');
  if (!booksContainer) return;

  booksContainer.innerHTML = '';

  DURUS_CURRICULUM.forEach((book) => {
    const bookSec = document.createElement('section');
    bookSec.className = 'book-section';
    bookSec.id = `book-${book.level}`;

    bookSec.innerHTML = `
      <div class="book-header-banner">
        <div class="book-badge">HALKA ${book.level}</div>
        <h2>${book.title}</h2>
        <div class="book-ar-title ar">${book.arabicTitle}</div>
        <div class="book-subtitle">${book.subtitle}</div>
        <p class="book-desc">${book.desc}</p>
      </div>
      <div class="chapters-list"></div>
    `;

    const chaptersList = bookSec.querySelector('.chapters-list') as HTMLElement;

    book.chapters.forEach((chapter) => {
      const chCard = document.createElement('div');
      chCard.className = 'chapter-card';

      // Eğer ünitede henüz aktif ders yoksa "Hazırlanıyor" placeholder'ı ekle
      const hasLessons = chapter.lessons && chapter.lessons.length > 0;

      chCard.innerHTML = `
        <div class="chapter-head">
          <span class="chapter-icon">${chapter.icon}</span>
          <div>
            <h3>${chapter.title}</h3>
            <span class="ar chapter-ar-title">${chapter.arabicTitle}</span>
          </div>
        </div>
        <div class="lessons-container">
          ${!hasLessons ? `
            <div class="chapter-coming-soon">
              <span class="cs-icon">⏳</span>
              <div>
                <strong>Ders İçeriği ve Alıştırmaları Hazırlanıyor</strong>
                <p>Bu üniteye ait ders metinleri ve seçmeli olmayan alıştırma föyleri yakında eklenecektir.</p>
              </div>
            </div>
          ` : ''}
        </div>
      `;

      const lessonsContainer = chCard.querySelector('.lessons-container') as HTMLElement;

      if (hasLessons) {
        chapter.lessons.forEach((lesson) => {
          const lessonEl = document.createElement('article');
          lessonEl.className = 'lesson-unit';
          lessonEl.id = lesson.id;

          // 1. KISA BAŞLANGIÇ & ODAK KARTI
          const starter = lesson.starterCard;
          const starterHtml = `
            <div class="starter-card">
              <div class="starter-top">
                <span class="starter-badge">🎯 BÖLÜM BAŞLANGICI & ODAK KARTI</span>
                <h4>${starter.title}</h4>
              </div>
              <ul class="focus-points">
                ${starter.focusPoints.map(pt => `<li>${pt}</li>`).join('')}
              </ul>
              <div class="rule-box-callout">
                <b>📌 Anahtar Kural:</b> ${starter.ruleBox}
              </div>
              ${starter.transformation ? `
                <div class="transformation-card">
                  <div class="trans-col before">
                    <span class="col-label">${starter.transformation.beforeLabel}</span>
                    <div class="ar trans-text">${starter.transformation.beforeArabic}</div>
                    <div class="trans-tr">${starter.transformation.beforeTr}</div>
                  </div>
                  <div class="trans-arrow">➔</div>
                  <div class="trans-col after">
                    <span class="col-label">${starter.transformation.afterLabel}</span>
                    <div class="ar trans-text highlight">${starter.transformation.afterArabic}</div>
                    <div class="trans-tr">${starter.transformation.afterTr}</div>
                  </div>
                </div>
                <div class="trans-exp">💡 ${starter.transformation.highlightExplanation}</div>
              ` : ''}
            </div>
          `;

          // 2. DERS ANLATIMI VE ÖRNEKLER
          const bodyHtml = `
            <div class="lesson-body-section">
              <div class="lesson-theory">${lesson.explanationHtml}</div>
              <div class="lesson-examples">
                <h5>📖 Konu Örnekleri ve Tahlilleri (${lesson.examples.length} Örnek):</h5>
                <div class="examples-grid">
                  ${lesson.examples.map(ex => `
                    <div class="example-box level-${ex.level}">
                      <div class="ex-tag">${ex.level === 'simple' ? 'Basit Cümle' : ex.level === 'hadith' ? 'Hadîs-i Şerîf' : 'Kur\'ân-ı Kerîm'}</div>
                      <div class="ar ex-arabic">${ex.arabic}</div>
                      <div class="ex-trans">${ex.translation}</div>
                      <div class="ex-analysis">${ex.analysisText}</div>
                      ${ex.verseRef?.linkUrl ? `<a class="btn-verse-link" href="${ex.verseRef.linkUrl}">🔍 Kehf Suresi ${ex.verseRef.ayah}. Âyet Tahlili ›</a>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `;

          lessonEl.innerHTML = `
            <div class="lesson-title-bar">
              <h3>${lesson.title}</h3>
              <span class="ar lesson-ar">${lesson.arabicTitle}</span>
            </div>
            ${starterHtml}
            ${bodyHtml}
            <div class="exercises-section">
              <div class="exercises-header">
                <h4>✍️ Seçmeli Olmayan Pekiştirme & İ'râb Alıştırmaları</h4>
                <p>Ezber yerine kelimeleri bizzat türetin, harekeleri uygulayın ve i'râb künyesini çıkarın.</p>
              </div>
              <div class="exercises-list"></div>
            </div>
          `;

          const exList = lessonEl.querySelector('.exercises-list') as HTMLElement;
          lesson.exercises.forEach((ex) => {
            renderExerciseBox(ex, exList);
          });

          lessonsContainer.appendChild(lessonEl);
        });
      }

      chaptersList.appendChild(chCard);
    });

    booksContainer.appendChild(bookSec);
  });
});
