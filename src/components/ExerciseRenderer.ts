import { Exercise } from '../types/curriculum';
import { isArabicMatch } from '../utils/arabic';
import { renderArabicAssistantKeyboard } from './ArabicKeyboard';

export function renderExerciseBox(
  exercise: Exercise,
  container: HTMLElement,
  onCompleted?: (isCorrect: boolean) => void
): void {
  const card = document.createElement('div');
  card.className = 'exercise-card';
  card.dataset.id = exercise.id;

  // Header & Type Badge
  const header = document.createElement('div');
  header.className = 'exercise-header';
  const badge = document.createElement('span');
  badge.className = 'exercise-type-badge';
  badge.textContent = getExerciseTypeTitle(exercise.type);
  header.appendChild(badge);

  const prompt = document.createElement('div');
  prompt.className = 'exercise-prompt';
  prompt.innerHTML = exercise.prompt;
  header.appendChild(prompt);
  card.appendChild(header);

  // Body container for input controls
  const body = document.createElement('div');
  body.className = 'exercise-body';

  // Keyboard container
  const kbSlot = document.createElement('div');
  kbSlot.className = 'keyboard-slot';

  // Feedback area
  const feedback = document.createElement('div');
  feedback.className = 'exercise-feedback';
  feedback.style.display = 'none';

  // Check button
  const checkBtn = document.createElement('button');
  checkBtn.type = 'button';
  checkBtn.className = 'btn btn-primary check-btn';
  checkBtn.innerHTML = '✨ Cevabı Kontrol Et';

  if (exercise.type === 'fill_conjugate') {
    const blankWrap = document.createElement('div');
    blankWrap.className = 'exercise-blank-row';

    const [before, after] = exercise.sentenceWithBlank.split('[___]');
    const beforeSpan = document.createElement('span');
    beforeSpan.className = 'ar text-sentence';
    beforeSpan.textContent = before || '';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'exercise-input ar';
    input.placeholder = `(${exercise.baseWord})`;
    input.autocomplete = 'off';
    input.autocapitalize = 'off';

    const afterSpan = document.createElement('span');
    afterSpan.className = 'ar text-sentence';
    afterSpan.textContent = after || '';

    blankWrap.appendChild(beforeSpan);
    blankWrap.appendChild(input);
    blankWrap.appendChild(afterSpan);
    body.appendChild(blankWrap);

    input.onfocus = () => renderArabicAssistantKeyboard(input, kbSlot);

    checkBtn.onclick = () => {
      const isCorrect = isArabicMatch(input.value, exercise.acceptedAnswers);
      showFeedback(feedback, isCorrect, exercise.acceptedAnswers[0], exercise.explanation);
      if (onCompleted) onCompleted(isCorrect);
    };
  } else if (exercise.type === 'error_correction') {
    const sentenceBox = document.createElement('div');
    sentenceBox.className = 'exercise-target-sentence ar';
    sentenceBox.innerHTML = exercise.incorrectSentence;
    body.appendChild(sentenceBox);

    const inputWrap = document.createElement('div');
    inputWrap.className = 'correction-input-wrap';
    const label = document.createElement('label');
    label.textContent = 'Doğru cümleyi veya kelimeyi yazın:';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'exercise-input ar';
    input.placeholder = 'Cümlenin düzeltilmiş hâli...';
    inputWrap.appendChild(label);
    inputWrap.appendChild(input);
    body.appendChild(inputWrap);

    input.onfocus = () => renderArabicAssistantKeyboard(input, kbSlot);

    checkBtn.onclick = () => {
      const isCorrect = isArabicMatch(input.value, exercise.acceptedCorrectSentences);
      showFeedback(feedback, isCorrect, exercise.acceptedCorrectSentences[0], exercise.explanationOfError);
      if (onCompleted) onCompleted(isCorrect);
    };
  } else if (exercise.type === 'irab_matrix') {
    const sentenceBox = document.createElement('div');
    sentenceBox.className = 'exercise-target-sentence ar';
    sentenceBox.innerHTML = exercise.targetSentence.replace(
      exercise.targetWord,
      `<span class="matrix-target-word">${exercise.targetWord}</span>`
    );
    body.appendChild(sentenceBox);

    const matrixGrid = document.createElement('div');
    matrixGrid.className = 'irab-matrix-grid';
    const inputs: HTMLInputElement[] = [];

    exercise.fields.forEach((field, i) => {
      const fieldRow = document.createElement('div');
      fieldRow.className = 'matrix-field-row';
      const fLabel = document.createElement('span');
      fLabel.className = 'matrix-field-label';
      fLabel.textContent = field.label + ':';

      const fInput = document.createElement('input');
      fInput.type = 'text';
      fInput.className = 'matrix-field-input';
      fInput.placeholder = 'Cevabınız...';
      fInput.dataset.fieldIndex = i.toString();
      inputs.push(fInput);

      fieldRow.appendChild(fLabel);
      fieldRow.appendChild(fInput);
      matrixGrid.appendChild(fieldRow);
    });
    body.appendChild(matrixGrid);

    checkBtn.onclick = () => {
      let allCorrect = true;
      const expectedTexts: string[] = [];

      inputs.forEach((inp, idx) => {
        const field = exercise.fields[idx];
        const ok = isArabicMatch(inp.value, field.acceptedAnswers);
        inp.classList.toggle('correct-input', ok);
        inp.classList.toggle('wrong-input', !ok);
        expectedTexts.push(`${field.label}: ${field.acceptedAnswers[0]}`);
        if (!ok) allCorrect = false;
      });

      showFeedback(feedback, allCorrect, expectedTexts.join(' | '), exercise.explanation);
      if (onCompleted) onCompleted(allCorrect);
    };
  }

  body.appendChild(kbSlot);
  body.appendChild(checkBtn);
  body.appendChild(feedback);
  card.appendChild(body);
  container.appendChild(card);
}

function showFeedback(
  el: HTMLElement,
  isCorrect: boolean,
  expected: string,
  explanation: string
): void {
  el.style.display = 'block';
  el.className = `exercise-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`;
  el.innerHTML = `
    <div class="feedback-status">${isCorrect ? '✅ Mükemmel, Doğru!' : '❌ Tekrar Deneyin veya Doğru Cevabı İnceleyin'}</div>
    ${!isCorrect ? `<div class="feedback-expected"><b>Kabul Edilen Doğru Cevap:</b> <span class="ar">${expected}</span></div>` : ''}
    <div class="feedback-exp">${explanation}</div>
  `;
}

function getExerciseTypeTitle(type: Exercise['type']): string {
  switch (type) {
    case 'fill_conjugate': return '✍️ Boşluk Doldurma & Çekim';
    case 'irab_matrix': return '📋 İ\'râb Künyesi Çıkarma';
    case 'error_correction': return '🔍 Hata Bulma ve Düzeltme';
    case 'sentence_transform': return '🔄 Cümle Dönüştürme';
    case 'text_token_hunt': return '🎯 Metin Üzerinde Keşif';
    case 'sarf_wezn_root': return '🧱 Kök ve Vezin Tahlili';
    default: return 'Alıştırma';
  }
}
