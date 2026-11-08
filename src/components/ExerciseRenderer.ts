import { Exercise } from '../types/curriculum';
import { isTextMatch } from '../utils/arabic';
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

  // Hint container (if exercise has hint)
  let hintContainer: HTMLElement | null = null;
  const hintText = 'hint' in exercise ? (exercise as { hint?: string }).hint : undefined;
  if (hintText) {
    hintContainer = document.createElement('div');
    hintContainer.className = 'exercise-hint-wrap';
    hintContainer.innerHTML = `
      <button type="button" class="btn-hint-toggle">💡 İpucu Göster</button>
      <div class="hint-content" style="display: none;">${hintText}</div>
    `;
    const toggleBtn = hintContainer.querySelector('.btn-hint-toggle') as HTMLButtonElement;
    const content = hintContainer.querySelector('.hint-content') as HTMLElement;
    toggleBtn.onclick = () => {
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? 'block' : 'none';
      toggleBtn.textContent = isHidden ? '💡 İpucunu Gizle' : '💡 İpucu Göster';
    };
  }

  // 1. FILL CONJUGATE
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
    input.placeholder = `[${exercise.baseWord}]`;
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
      const isCorrect = isTextMatch(input.value, exercise.acceptedAnswers, false);
      showFeedback(feedback, isCorrect, exercise.acceptedAnswers[0], exercise.explanation);
      if (onCompleted) onCompleted(isCorrect);
    };
  }
  // 2. ERROR CORRECTION
  else if (exercise.type === 'error_correction') {
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
      const isCorrect = isTextMatch(input.value, exercise.acceptedCorrectSentences, true);
      showFeedback(feedback, isCorrect, exercise.acceptedCorrectSentences[0], exercise.explanationOfError);
      if (onCompleted) onCompleted(isCorrect);
    };
  }
  // 3. IRAB MATRIX
  else if (exercise.type === 'irab_matrix') {
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
      fInput.placeholder = field.hint ? `${field.hint}...` : 'Cevabınız...';
      if (field.hint) fInput.title = `İpucu: ${field.hint}`;
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
        const ok = isTextMatch(inp.value, field.acceptedAnswers, false);
        inp.classList.toggle('correct-input', ok);
        inp.classList.toggle('wrong-input', !ok);
        expectedTexts.push(`${field.label}: ${field.acceptedAnswers[0]}`);
        if (!ok) allCorrect = false;
      });

      showFeedback(feedback, allCorrect, expectedTexts.join(' | '), exercise.explanation);
      if (onCompleted) onCompleted(allCorrect);
    };
  }
  // 4. SENTENCE TRANSFORM
  else if (exercise.type === 'sentence_transform') {
    const sentenceBox = document.createElement('div');
    sentenceBox.className = 'exercise-target-sentence ar';
    sentenceBox.textContent = exercise.inputSentence;
    body.appendChild(sentenceBox);

    const inputWrap = document.createElement('div');
    inputWrap.className = 'correction-input-wrap';
    const label = document.createElement('label');
    label.textContent = exercise.instruction;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'exercise-input ar';
    input.placeholder = 'Dönüştürülmüş hâli...';
    inputWrap.appendChild(label);
    inputWrap.appendChild(input);
    body.appendChild(inputWrap);

    input.onfocus = () => renderArabicAssistantKeyboard(input, kbSlot);

    checkBtn.onclick = () => {
      const isCorrect = isTextMatch(input.value, exercise.acceptedAnswers, false);
      showFeedback(feedback, isCorrect, exercise.acceptedAnswers[0], exercise.explanation);
      if (onCompleted) onCompleted(isCorrect);
    };
  }
  // 5. SARF WEZN & ROOT
  else if (exercise.type === 'sarf_wezn_root') {
    const wordBox = document.createElement('div');
    wordBox.className = 'exercise-target-sentence ar';
    wordBox.innerHTML = `Kelime: <span class="matrix-target-word">${exercise.targetWord}</span>`;
    body.appendChild(wordBox);

    const grid = document.createElement('div');
    grid.className = 'irab-matrix-grid';

    const rootRow = document.createElement('div');
    rootRow.className = 'matrix-field-row';
    const rootInp = document.createElement('input');
    rootInp.type = 'text';
    rootInp.className = 'matrix-field-input ar';
    rootInp.placeholder = 'ف-ع-ل';
    rootRow.innerHTML = `<span class="matrix-field-label">Kök (Madde):</span>`;
    rootRow.appendChild(rootInp);

    const weznRow = document.createElement('div');
    weznRow.className = 'matrix-field-row';
    const weznInp = document.createElement('input');
    weznInp.type = 'text';
    weznInp.className = 'matrix-field-input ar';
    weznInp.placeholder = 'فَاعِل...';
    weznRow.innerHTML = `<span class="matrix-field-label">Vezin:</span>`;
    weznRow.appendChild(weznInp);

    grid.appendChild(rootRow);
    grid.appendChild(weznRow);
    body.appendChild(grid);

    rootInp.onfocus = () => renderArabicAssistantKeyboard(rootInp, kbSlot);
    weznInp.onfocus = () => renderArabicAssistantKeyboard(weznInp, kbSlot);

    checkBtn.onclick = () => {
      const rootOk = isTextMatch(rootInp.value, exercise.rootAnswers, false);
      const weznOk = isTextMatch(weznInp.value, exercise.weznAnswers, false);
      rootInp.classList.toggle('correct-input', rootOk);
      rootInp.classList.toggle('wrong-input', !rootOk);
      weznInp.classList.toggle('correct-input', weznOk);
      weznInp.classList.toggle('wrong-input', !weznOk);

      const allOk = rootOk && weznOk;
      showFeedback(
        feedback,
        allOk,
        `Kök: ${exercise.rootAnswers[0]} | Vezin: ${exercise.weznAnswers[0]}${exercise.babName ? ` (${exercise.babName} Bâbı)` : ''}`,
        exercise.explanation
      );
      if (onCompleted) onCompleted(allOk);
    };
  }
  // 6. TEXT TOKEN HUNT
  else if (exercise.type === 'text_token_hunt') {
    const passageBox = document.createElement('div');
    passageBox.className = 'token-hunt-passage ar';
    const tokens = exercise.passage.split(/\s+/);
    const selectedIndices = new Set<number>();

    tokens.forEach((tok, idx) => {
      const tokSpan = document.createElement('span');
      tokSpan.className = 'quran-word';
      tokSpan.textContent = tok;
      tokSpan.onclick = () => {
        if (selectedIndices.has(idx)) {
          selectedIndices.delete(idx);
          tokSpan.classList.remove('active');
        } else {
          selectedIndices.add(idx);
          tokSpan.classList.add('active');
        }
      };
      passageBox.appendChild(tokSpan);
    });
    body.appendChild(passageBox);

    checkBtn.onclick = () => {
      const targetSet = new Set(exercise.targetIndices);
      const isCorrect =
        selectedIndices.size === targetSet.size &&
        [...selectedIndices].every(i => targetSet.has(i));

      showFeedback(
        feedback,
        isCorrect,
        exercise.targetIndices.map(i => tokens[i]).join(' , '),
        exercise.targetTokenExplanation || exercise.explanation
      );
      if (onCompleted) onCompleted(isCorrect);
    };
  }

  if (hintContainer) {
    body.appendChild(hintContainer);
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
