/**
 * Metin karşılaştırma, normalizasyon ve i'râb künyesi doğrulama yardımcıları
 */

export function normalizeArabic(text: string, stripHarakat: boolean = true): string {
  if (!text) return '';
  let str = text.trim();

  // Unicode normalizasyonu
  str = str.normalize('NFKC');

  // Farklı elifleri birleştirme: أ إ آ ٱ -> ا
  str = str.replace(/[أإآٱ]/g, 'ا');

  // Yâ-i maksûra: ى -> ي
  str = str.replace(/ى/g, 'ي');

  if (stripHarakat) {
    // Harekeleri ve tenvinleri kaldır (Fetha, Damme, Kesra, Sukun, Şedde vb.)
    str = str.replace(/[\u064B-\u065F\u0670]/g, '');
  }

  // Noktalama ve fazla boşlukları temizle
  str = str.replace(/[.,،؛؟]/g, '');
  str = str.replace(/\s+/g, ' ');

  return str.trim();
}

/**
 * Türkçe / Latin alfabeli metinleri ve i'râb künyesi terimlerini normalleştirir
 * (şapkalı â, î, û, kesme işareti, küçük harf ve Türkçe i/ı dönüşümleri)
 */
export function normalizeLatin(text: string): string {
  if (!text) return '';
  let str = text.trim();
  // Kesme işaretlerini ve benzer karakterleri temizle
  str = str.replace(/['’`ʼ]/g, '');
  // Şapkalı ünlüleri düzelt
  str = str.replace(/[âÂ]/g, 'a')
           .replace(/[îÎ]/g, 'i')
           .replace(/[ûÛ]/g, 'u');
  // Türkçe küçük harf dönüşümü
  str = str.toLocaleLowerCase('tr');
  str = str.replace(/\s+/g, ' ');
  return str.trim();
}

export function isTextMatch(userInput: string, acceptedList: string[], requireHarakat: boolean = false): boolean {
  if (!userInput) return false;

  const cleanUserStrict = userInput.trim().normalize('NFKC');
  const cleanUserArabicLoose = normalizeArabic(userInput, true);
  const cleanUserLatin = normalizeLatin(userInput);

  for (const accepted of acceptedList) {
    const accStrict = accepted.trim().normalize('NFKC');

    // 1. Birebir eşleşme (harekeli dahil)
    if (cleanUserStrict === accStrict) return true;

    // Latin / Türkçe cevap kontrolü (örn. "vâv" == "vav", "kâne'nin ismi" == "kanenin ismi")
    const accLatin = normalizeLatin(accepted);
    if (cleanUserLatin === accLatin && cleanUserLatin.length > 0) return true;

    // 2. Arapça gevşek kontrol (Yalnızca hareke zorunlu tutulmamışsa)
    if (!requireHarakat) {
      const accArabicLoose = normalizeArabic(accepted, true);
      if (cleanUserArabicLoose === accArabicLoose && cleanUserArabicLoose.length > 0) {
        return true;
      }
    }
  }

  return false;
}
