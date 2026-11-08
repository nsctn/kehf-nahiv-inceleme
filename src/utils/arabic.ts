/**
 * Arapça metin karşılaştırma ve normalizasyon yardımcıları
 */

export function normalizeArabic(text: string, stripHarakat: boolean = true): string {
  if (!text) return '';
  let str = text.trim();

  // Unicode normalizasyonu
  str = str.normalize('NFKC');

  // Farklı elifleri birleştirme: أ إ آ -> ا
  str = str.replace(/[أإآٱ]/g, 'ا');

  // Tâ-i merbûta: ة -> ه (kullanıcı girdiğinde tolere edilebilir)
  // str = str.replace(/ة/g, 'ه'); // isteğe bağlı

  // Yâ-i maksûra: ى -> ي
  str = str.replace(/ى/g, 'ي');

  if (stripHarakat) {
    // Harekeleri ve tenvinleri kaldır (Fetha, Damme, Kesra, Sukun, Şedde vb.)
    // Harakat aralığı: U+064B - U+065F, U+0670
    str = str.replace(/[\u064B-\u065F\u0670]/g, '');
  }

  // Fazla boşlukları temizle
  str = str.replace(/\s+/g, ' ');

  return str;
}

export function isArabicMatch(userInput: string, acceptedList: string[]): boolean {
  if (!userInput) return false;
  const cleanUserStrict = userInput.trim().normalize('NFKC');
  const cleanUserLoose = normalizeArabic(userInput, true);

  for (const accepted of acceptedList) {
    const accStrict = accepted.trim().normalize('NFKC');
    const accLoose = normalizeArabic(accepted, true);

    // 1. Tam birebir eşleşme (harekeli dahil)
    if (cleanUserStrict === accStrict) return true;

    // 2. Harekeler olmasa bile harf iskeleti tam eşleşme
    if (cleanUserLoose === accLoose) return true;
  }

  return false;
}
