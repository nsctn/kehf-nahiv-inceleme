/**
 * Sanal Arapça Hareke ve Ek Tuş Takımı
 * Mobil ve masaüstünde doğrudan tıklamayla hareke veya ek eklemeyi sağlar.
 */

export interface VirtualKey {
  char: string;
  label: string;
  type: 'haraka' | 'suffix' | 'control';
}

export const HARAKAT_KEYS: VirtualKey[] = [
  { char: '\u064E', label: 'َ  Fetha', type: 'haraka' },
  { char: '\u064F', label: 'ُ  Damme', type: 'haraka' },
  { char: '\u0650', label: 'ِ  Kesra', type: 'haraka' },
  { char: '\u0652', label: 'ْ  Sükûn', type: 'haraka' },
  { char: '\u0651', label: 'ّ  Şedde', type: 'haraka' },
  { char: '\u064B', label: 'ً  Tenvin-Fetha', type: 'haraka' },
  { char: '\u064C', label: 'ٌ  Tenvin-Damme', type: 'haraka' },
  { char: '\u064D', label: 'ٍ  Tenvin-Kesra', type: 'haraka' },
  { char: '\u0670', label: 'ٰ  Hançer Elif', type: 'haraka' },
];

export const SUFFIX_KEYS: VirtualKey[] = [
  { char: 'َانِ', label: '+ـَانِ', type: 'suffix' },
  { char: 'َيْنِ', label: '+ـَيْنِ', type: 'suffix' },
  { char: 'ُونَ', label: '+ـُونَ', type: 'suffix' },
  { char: 'ِينَ', label: '+ـِينَ', type: 'suffix' },
  { char: 'َاتٌ', label: '+ـَاتٌ', type: 'suffix' },
  { char: 'َاتٍ', label: '+ـَاتٍ', type: 'suffix' },
  { char: 'ًا', label: '+ـًا', type: 'suffix' },
];

export function renderArabicAssistantKeyboard(
  targetInput: HTMLInputElement | HTMLTextAreaElement,
  container: HTMLElement
): void {
  container.innerHTML = '';
  container.className = 'arabic-keyboard-bar';

  const rowHarakat = document.createElement('div');
  rowHarakat.className = 'keyboard-row';

  HARAKAT_KEYS.forEach(k => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'kb-btn kb-haraka';
    btn.innerHTML = k.char;
    btn.title = k.label;
    btn.onclick = (e) => {
      e.preventDefault();
      insertChar(targetInput, k.char);
    };
    rowHarakat.appendChild(btn);
  });

  const rowSuffixes = document.createElement('div');
  rowSuffixes.className = 'keyboard-row suffixes';

  SUFFIX_KEYS.forEach(k => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'kb-btn kb-suffix';
    btn.innerHTML = k.char;
    btn.title = k.label;
    btn.onclick = (e) => {
      e.preventDefault();
      insertChar(targetInput, k.char);
    };
    rowSuffixes.appendChild(btn);
  });

  const backspaceBtn = document.createElement('button');
  backspaceBtn.type = 'button';
  backspaceBtn.className = 'kb-btn kb-control';
  backspaceBtn.innerHTML = '⌫';
  backspaceBtn.title = 'Sil';
  backspaceBtn.onclick = (e) => {
    e.preventDefault();
    deleteLastChar(targetInput);
  };
  rowHarakat.appendChild(backspaceBtn);

  container.appendChild(rowHarakat);
  container.appendChild(rowSuffixes);
}

function insertChar(input: HTMLInputElement | HTMLTextAreaElement, text: string): void {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  const val = input.value;
  input.value = val.substring(0, start) + text + val.substring(end);
  const newPos = start + text.length;
  input.setSelectionRange(newPos, newPos);
  input.focus();
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function deleteLastChar(input: HTMLInputElement | HTMLTextAreaElement): void {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  const val = input.value;
  if (start === end && start > 0) {
    input.value = val.substring(0, start - 1) + val.substring(end);
    input.setSelectionRange(start - 1, start - 1);
  } else if (start !== end) {
    input.value = val.substring(0, start) + val.substring(end);
    input.setSelectionRange(start, start);
  }
  input.focus();
  input.dispatchEvent(new Event('input', { bubbles: true }));
}
