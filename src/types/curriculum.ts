/**
 * Ed-Durûsü'n-Nahviyye Müfredat ve Alıştırma Tipleri
 */

export type BookLevel = 1 | 2 | 3 | 4;

export interface StarterCard {
  title: string;
  focusPoints: string[]; // 2-3 maddelik hap özet
  ruleBox: string; // Anahtar kural özeti
  transformation?: {
    beforeLabel: string;
    beforeArabic: string;
    beforeTr: string;
    afterLabel: string;
    afterArabic: string;
    afterTr: string;
    highlightExplanation: string;
  };
}

export type ExerciseType = 
  | 'fill_conjugate'      // Boşluk doldurma / kelimeyi göreve uygun hâle sokma
  | 'irab_matrix'         // İ'râb künyesi tablosu (Grup, Hâl, Alâmet, Sebep)
  | 'sentence_transform'  // Cümle dönüştürme (müfred -> tesniye/cem veya kâne/inne ekleme)
  | 'text_token_hunt'     // Metin üstünde dokunarak kurala uyan ögeyi işaretleme
  | 'error_correction'    // Hatalı cümleyi bulup doğrusunu yazma ve sebebini belirtme
  | 'sarf_wezn_root';     // Vezin, kök (mâdde) veya bâb tahlili

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  explanation: string;
  sourceReference?: string; // Örn. Kehf 18/82 veya Ed-Durûsü'n-Nahviyye s. 38
}

export interface FillConjugateExercise extends BaseExercise {
  type: 'fill_conjugate';
  sentenceWithBlank: string; // "كَانَ الْمُعَلِّمُونَ [___]"
  baseWord: string; // "حاضرون"
  acceptedAnswers: string[]; // ["حَاضِرِينَ", "حاضرين"]
  hint?: string;
}

export interface IrabMatrixExercise extends BaseExercise {
  type: 'irab_matrix';
  targetSentence: string;
  targetWord: string; // Altı çizili hedef kelime
  fields: {
    label: string; // "Kelime Grubu", "İ'râb Hâli", "İ'râb Alâmeti"
    acceptedAnswers: string[];
    hint?: string;
  }[];
}

export interface SentenceTransformExercise extends BaseExercise {
  type: 'sentence_transform';
  inputSentence: string; // "رَأَيْتُ الْمُسْلِمَ فِي الْمَسْجِدِ"
  instruction: string; // "Cümleyi cem-i müzekker sâlim şekline dönüştürün."
  acceptedAnswers: string[]; // ["رَأَيْتُ الْمُسْلِمِينَ فِي الْمَسْجِدِ", "رأيت المسلمين في المسجد"]
}

export interface ErrorCorrectionExercise extends BaseExercise {
  type: 'error_correction';
  incorrectSentence: string; // "سَلَّمْتُ عَلَى أَبُوكَ"
  acceptedCorrectSentences: string[]; // ["سَلَّمْتُ عَلَى أَبِيكَ", "سلمت على أبيك"]
  errorTarget: string; // "أَبُوكَ"
  explanationOfError: string;
}

export interface SarfWeznRootExercise extends BaseExercise {
  type: 'sarf_wezn_root';
  targetWord: string; // "ٱسْتَطْعَمَا"
  rootAnswers: string[]; // ["ط-ع-م", "طعم"]
  weznAnswers: string[]; // ["ٱسْتَفْعَلَ", "استفعل"]
  babName?: string; // "İstif'âl"
}

export interface TextTokenHuntExercise extends BaseExercise {
  type: 'text_token_hunt';
  passage: string;
  targetIndices: number[];
  targetTokenExplanation: string;
}

export type Exercise = 
  | FillConjugateExercise 
  | IrabMatrixExercise 
  | SentenceTransformExercise 
  | ErrorCorrectionExercise 
  | SarfWeznRootExercise
  | TextTokenHuntExercise;

export interface LessonExample {
  level: 'simple' | 'hadith' | 'quran';
  arabic: string;
  translation: string;
  analysisText: string;
  verseRef?: {
    sura: number;
    ayah: number;
    linkUrl?: string;
  };
}

export interface Lesson {
  id: string;
  bookLevel: BookLevel;
  chapterId: string;
  order: number;
  title: string;
  arabicTitle: string;
  desc: string;
  starterCard: StarterCard;
  explanationHtml: string;
  examples: LessonExample[];
  exercises: Exercise[];
}

export interface Chapter {
  id: string;
  bookLevel: BookLevel;
  title: string;
  arabicTitle: string;
  icon: string;
  desc: string;
  lessons: Lesson[];
}

export interface Book {
  level: BookLevel;
  title: string;
  arabicTitle: string;
  subtitle: string;
  desc: string;
  chapters: Chapter[];
}
