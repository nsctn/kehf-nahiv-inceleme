/**
 * Metin karşılaştırma, normalizasyon ve i'râb künyesi doğrulama yardımcıları
 */

export function normalizeArabic(text: string, stripHarakat: boolean = true): string {
  if (!text) return '';
  let str = text.trim();

  // Unicode normalizasyonu (NFKC)
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
  str = str.replace(/[.,،؛؟\-–—]/g, '');
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
  str = str.replace(/['’`ʼ\-–—]/g, '');
  // Şapkalı ünlüleri düzelt
  str = str.replace(/[âÂ]/g, 'a')
           .replace(/[îÎ]/g, 'i')
           .replace(/[ûÛ]/g, 'u');
  // Türkçe küçük harf dönüşümü
  str = str.toLocaleLowerCase('tr');
  str = str.replace(/\s+/g, ' ');
  return str.trim();
}

/**
 * Kök karşılaştırması için tire, nokta ve boşlukları atar (örn: "ط-ع-م" -> "طعم")
 */
export function normalizeRoot(text: string): string {
  if (!text) return '';
  let str = normalizeArabic(text, true);
  str = str.replace(/[\s\-_–—]/g, '');
  return str;
}

export function isTextMatch(userInput: string, acceptedList: string[], requireHarakat: boolean = false): boolean {
  if (!userInput) return false;

  const cleanUserStrict = userInput.trim().normalize('NFKC');
  const cleanUserArabicLoose = normalizeArabic(userInput, true);
  // Harekesi korunarak normalize edilmiş Arapça
  const cleanUserArabicWithHarakat = normalizeArabic(userInput, false);
  const cleanUserLatin = normalizeLatin(userInput);
  const cleanUserRoot = normalizeRoot(userInput);

  for (const accepted of acceptedList) {
    const accStrict = accepted.trim().normalize('NFKC');

    // 1. Birebir katı eşleşme
    if (cleanUserStrict === accStrict) return true;

    // 2. Kök kontrolü (örn. "ط-ع-م" ile "طعم" veya "ط ع م")
    const accRoot = normalizeRoot(accepted);
    if (cleanUserRoot === accRoot && cleanUserRoot.length > 0) return true;

    // 3. Latin / Türkçe cevap kontrolü (örn. "vâv" == "vav", "kâne'nin ismi" == "kanenin ismi")
    const accLatin = normalizeLatin(accepted);
    if (cleanUserLatin === accLatin && cleanUserLatin.length > 0) return true;

    // 4. Arapça kontrol
    if (requireHarakat) {
      // Hareke zorunluysa noktalama ve elif normalize edilmiş ancak harekesi korunmuş metinler eşleşmeli
      const accArabicWithHarakat = normalizeArabic(accepted, false);
      if (cleanUserArabicWithHarakat === accArabicWithHarakat && cleanUserArabicWithHarakat.length > 0) {
        return true;
      }
    } else {
      // Hareke serbestse
      const accArabicLoose = normalizeArabic(accepted, true);
      if (cleanUserArabicLoose === accArabicLoose && cleanUserArabicLoose.length > 0) {
        return true;
      }
    }
  }

  return false;
}
