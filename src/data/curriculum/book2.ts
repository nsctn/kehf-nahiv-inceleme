import { Book } from '../../types/curriculum';

export const BOOK_2: Book = {
  level: 2,
  title: "2. Kitap: Genişleyen Halka",
  arabicTitle: "الكتاب الثاني: توسيع دائرة النحو",
  subtitle: "Mu'tel Fiiller, Takdîrî İ'râb, 7 Marife ve Gayr-i Munsarif",
  desc: "Arapça dilbilgisinin ikinci halkası: Sonunda illet harfi bulunan fiillerin i'râbı, maksûr ve menkûs isimler, takdîrî ve mahallî i'râb, marife sınıfları ve tenvin kabul etmeyen isimler.",
  chapters: [
    {
      id: "b2-mutel-fiil",
      bookLevel: 2,
      title: "Sonu İlletli (Mu'tel) Fiillerin İ'râbı",
      arabicTitle: "إِعْرَابُ الْفِعْلِ الْمُعْتَلِّ الْآخِرِ",
      icon: "🌊",
      desc: "Son harfi Elif (ا/ى), Vâv (و) veya Yâ (ي) olan muzâri fiillerin ref', nasb ve cezm halleri.",
      lessons: [
        {
          id: "b2-l1-vav-ya-muzari",
          bookLevel: 2,
          chapterId: "b2-mutel-fiil",
          order: 1,
          title: "Sonu Vâv ve Yâ Olan Muzâri Fiiller",
          arabicTitle: "الْمُعْتَلُّ بِالْوَاوِ وَالْيَاءِ",
          desc: "يَدْعُو ve يَرْمِي gibi fiillerin damme (takdîrî), fetha (lafzî) ve illet harfi düşmesiyle (cezm) i'râbı.",
          starterCard: {
            title: "Odak: Vâv ve Yâ ile Biten Muzâri",
            focusPoints: [
              "Ref' Hâli: Damme dilde ağırlık (sikal) yaptığı için takdîr edilir: يَكْتُبُ derken lafzîdir ama يَدْعُو ve يَقْضِي derken damme takdîrîdir.",
              "Nasb Hâli: Fetha harfin üzerinde hafif olduğu için açıkça telaffuz edilir (lafzîdir): لَنْ يَدْعُوَ / لَنْ يَقْضِيَ.",
              "Cezm Hâli: Sükûn yerine sonundaki illet harfi tamamen düşürülür: لَمْ يَدْعُ / لَمْ يَقْضِ."
            ],
            ruleBox: "Âhiri Vâv veya Yâ olan fiil; merfû iken takdîrî damme, mansûb iken açık fetha alır; meczûm iken son harfi düşürülerek (hazf-i harfi'l-illet) cezm edilir.",
            transformation: {
              beforeLabel: "Cezm Öncesi (Merfû Hâl)",
              beforeArabic: "هُوَ يَدْعُو إِلَى الْخَيْرِ",
              beforeTr: "O hayra çağırıyor (İllet harfi 'vâv' sonda mevcuttur)",
              afterLabel: "Cezm Sonrası (Meczûm Hâl)",
              afterArabic: "لَمْ يَدْعُ إِلَى الشَّرِّ",
              afterTr: "Şerre çağırmadı (Vâv düştü, önceki harfin dammesi kaldı)",
              highlightExplanation: "Meczûm olunca vâv harfi düştü: Cezm alâmeti sükûn değil 'vâv harfinin hazfidir'."
            }
          },
          explanationHtml: `
            <p>Son harfi illet harflerinden biri olan fiillere <b>el-Fi'lü'l-Mu'tellü'l-Âhir</b> denir. Sonu <b>Vâv (و)</b> veya <b>Yâ (ي)</b> ile biten muzâri fiillerin i'râb kuralları:</p>
            <ol>
              <li><b>Ref' Hâli:</b> Âmir veya nâsıp/câzim yokken fiil merfûdur. Ancak Vâv ve Yâ üzerine damme koymak dile ağır gelir (<i>sikal</i>). Bu sebeple damme takdîr edilir: <span class="ar">يَدْعُو الْمُؤْمِنُ رَبَّهُ</span> (Takdîren merfû).</li>
              <li><b>Nasb Hâli:</b> Başına nasb edatı (أنْ، لَنْ، كَيْ، إِذَنْ) geldiğinde fetha telaffuzu hafif olduğu için açıkça görünür: <span class="ar">لَنْ يَدْعُوَ</span>, <span class="ar">لَنْ يَرْمِيَ</span>.</li>
              <li><b>Cezm Hâli:</b> Başına cezm edatı (لَمْ، لَمَّا، لَامُ الْأَمْرِ، لَا النَّاهِيَةُ) geldiğinde sükûn konamaz; cezm alameti olarak illet harfi düşer: <span class="ar">لَمْ يَدْعُ</span> (Damme vâv'a delalet eder), <span class="ar">لَمْ يَرْمِ</span> (Kesra yâ'ya delalet eder).</li>
            </ol>
          `,
          examples: [
            {
              level: "simple",
              arabic: "يَقْضِي الْقَاضِي بِالْعَدْلِ وَلَمْ يَقْضِ بِالظُّلْمِ",
              translation: "Hâkim adaletle hükmeder, zulümle hükmetmedi.",
              analysisText: "يَقْضِي: Başına edat gelmediği için takdîrî damme ile merfûdur. لَمْ يَقْضِ: Başına 'lem' geldiği için yâ harfinin hazfi ile meczûmdur."
            },
            {
              level: "hadith",
              arabic: "لَا يَقْضِيَنَّ حَكَمٌ بَيْنَ اثْنَيْنِ وَهُوَ غَضْبَانُ",
              translation: "Hiçbir hakem öfkeli iken iki kişi arasında hüküm vermesin.",
              analysisText: "Nehiy lügati ve muzâri fiil mu'tel ahkâmı."
            },
            {
              level: "quran",
              arabic: "وَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ",
              translation: "Allah ile birlikte başka bir ilâha yalvarma / dua etme!",
              analysisText: "تَدْعُ: Başına nehiy lâ'sı (لَا النَّاهِيَةُ) gelmiş meczûm muzâri fiildir; cezm alâmeti sonundaki vâv harfinin hazfidir (aslı: تَدْعُو).",
              verseRef: { sura: 28, ayah: 88 }
            }
          ],
          exercises: [
            {
              id: "b2-l1-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede parantez içindeki fiili başına 'لَمْ' edatı gelmiş meczûm hâliyle boşluğa yazın:",
              sentenceWithBlank: "الرَّجُلُ الصَّالِحُ [___] إِلَى الشَّرِّ أَبَدًا .",
              baseWord: "يَدْعُو",
              acceptedAnswers: ["لَمْ يَدْعُ", "يَدْعُ", "يدعُ", "يدع"],
              explanation: "Muzâri mu'tel fiil başına 'lem' alınca sonundaki illet harfi düşer: يَدْعُو ➔ يَدْعُ.",
              hint: "Sonundaki vâv harfini atın ve önceki harfi dammeli bırakın."
            },
            {
              id: "b2-l1-ex2",
              type: "error_correction",
              prompt: "Aşağıdaki cümledeki cezm hatasını düzeltip doğru cümleyi yazın:",
              incorrectSentence: "لَا تَرْمِي النِّفَايَاتِ فِي الطَّرِيقِ .",
              acceptedCorrectSentences: ["لَا تَرْمِ النِّفَايَاتِ فِي الطَّرِيقِ", "لا ترمِ النفايات في الطريق", "لا ترم النفايات في الطريق"],
              errorTarget: "تَرْمِي",
              explanationOfError: "Nehiy lâ'sı muzâriyi cezm eder; âhiri yâ olan fiilin cezm alâmeti yâ harfinin hazfidir (تَرْمِ).",
              explanation: "Nehiy kipi illet harfini düşürür."
            }
          ]
        },
        {
          id: "b2-l2-elif-muzari",
          bookLevel: 2,
          chapterId: "b2-mutel-fiil",
          order: 2,
          title: "Sonu Elif (Maksûr) Olan Muzâri Fiiller",
          arabicTitle: "الْمُعْتَلُّ بِالْأَلِفِ (يَسْعَى، يَرْضَى)",
          desc: "Son harfi Elif-i Maksûra olan muzâri fiillerin ref' ve nasb hallerinde takdîrî olması, cezmde elifin hazfi.",
          starterCard: {
            title: "Odak: Sonu Elif Olan Fiil (Maksûr Muzâri)",
            focusPoints: [
              "Elif harfi hiçbir harekeyi kabul etmez (imkânsızlık / taazzür sebebiyle).",
              "Ref' Hâli: Takdîrî damme iledir (يَسْعَى).",
              "Nasb Hâli: Takdîrî fetha iledir (لَنْ يَسْعَى - fetha da elif üzerinde takdîr edilir!).",
              "Cezm Hâli: Elif harfi hazfedilir (لَمْ يَسْعَ - öncesi fethalı kalır)."
            ],
            ruleBox: "Sonu elif olan muzâri fiil hem ref' hem de nasb halinde takdîrî hareke alır. Cezm hâlinde ise elif düşer.",
            transformation: {
              beforeLabel: "Nasb Hâli (Fetha Takdîr)",
              beforeArabic: "لَنْ يَسْعَى فِي الشَّرِّ",
              beforeTr: "Asla şerre koşmayacak (Nasb alâmeti takdîrî fethadır)",
              afterLabel: "Cezm Hâli (Elif Düşer)",
              afterArabic: "لَمْ يَسْعَ فِي الشَّرِّ",
              afterTr: "Şerre koşmadı (Elif düştü, ayın harfi fethalı kaldı)",
              highlightExplanation: "Meczûm olunca elif düştü ve cezm alâmeti hazf-i harfi'l-illet oldu."
            }
          },
          explanationHtml: `
            <p>Sonu elif ile biten muzâri fiiller (<span class="ar">يَسْعَى، يَرْضَى، يَنْهَى</span>):</p>
            <ul>
              <li><b>Merfû:</b> Takdîrî damme ile merfûdur (<span class="ar">يَسْعَى الْإِنْسَانُ</span> - taazzür sebebiyle).</li>
              <li><b>Mansûb:</b> Takdîrî fetha ile mansûbdur (<span class="ar">لَنْ يَرْضَى</span> - elif fetha da alamaz!).</li>
              <li><b>Meczûm:</b> Elif-i maksûranın hazfi ile meczûmdur (<span class="ar">لَمْ يَسْعَ</span>).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "الْمُؤْمِنُ يَسْعَى فِي الْخَيْرِ وَلَنْ يَسْعَى فِي الْفَسَادِ",
              translation: "Mümin hayırda koşar, fesatta asla koşmaz.",
              analysisText: "يَسْعَى birinci takdîrî damme ile merfû, ikinci لَنْ يَسْعَى takdîrî fetha ile mansûbtur."
            },
            {
              level: "hadith",
              arabic: "إِنَّ اللَّهَ يَرْضَى لَكُمْ ثَلَاثًا: يَرْضَى لَكُمْ أَنْ تَعْبُدُوهُ وَلَا تُشْرِكُوا بِهِ شَيْئًا",
              translation: "Şüphesiz Allah sizin için üç şeyden razı olur: O'na ibadet edip hiçbir şeyi ortak koşmamanızdan...",
              analysisText: "يَرْضَى: Âhiri elif-i maksûra ile biten muzâri fiildir; merfûdur ve ref' alâmeti taazzür sebebiyle elif üzerindeki takdîrî dammedir."
            },
            {
              level: "quran",
              arabic: "وَلَا تَنْهَ عَنْ خُلُقٍ وَتَأْتِيَ مِثْلَهُ",
              translation: "Bir ahlaktan nehyedip de aynısını kendin yapma!",
              analysisText: "تَنْهَ: Nehiy lâm'ı ile meczûm, elifin hazfi alâmettir."
            }
          ],
          exercises: [
            {
              id: "b2-l2-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede 'يَرْضَى' fiilini 'لَمْ' edatıyla meczûm yaparak boşluğa yazın:",
              sentenceWithBlank: "الْمُؤْمِنُ [___] بِالذُّلِّ .",
              baseWord: "يَرْضَى",
              acceptedAnswers: ["لَمْ يَرْضَ", "يَرْضَ", "يرضَ", "يرض"],
              explanation: "Elif-i maksûra cezm anında düşer ve öncesindeki dad harfi fethalı kalır: يَرْضَ.",
              hint: "Sonundaki elifi atın."
            }
          ]
        },
        {
          id: "b2-l3-efal-hamse",
          bookLevel: 2,
          chapterId: "b2-mutel-fiil",
          order: 3,
          title: "Ef'âl-i Hamse (Beş Fiil) ve Nûn'un Sübûtu/Hazfi",
          arabicTitle: "الْأَفْعَالُ الْخَمْسَةُ",
          desc: "İkili elifi, cemî vâvı veya muhataba yâ'sı bitişen 5 fiil kalıbı ve nûn ile i'râbı.",
          starterCard: {
            title: "Odak: Beş Fiil (الْأَفْعَالُ الْخَمْسَةُ)",
            focusPoints: [
              "5 Kalıp: تَفْعَلَانِ ، يَفْعَلَانِ ، تَفْعَلُونَ ، يَفْعَلُونَ ، تَفْعَلِينَ.",
              "Ref' Alâmeti: Sondaki Nûn harfinin sabit kalmasıdır (Sübûtü'n-Nûn): هُمْ يَكْتُبُونَ.",
              "Nasb ve Cezm Alâmeti: Sondaki Nûn harfinin düşmesidir (Hazfü'n-Nûn): لَنْ يَكْتُبُوا / لَمْ يَكْتُبُوا."
            ],
            ruleBox: "Ef'âl-i Hamse nûn harfi ile ref' olunur; nûn harfinin hazfi ile nasb ve cezm olunur.",
            transformation: {
              beforeLabel: "Merfû Hâl (Nûn Sabit)",
              beforeArabic: "الْمُسْلِمُونَ يَعْمَلُونَ الصَّالِحَاتِ",
              beforeTr: "Müslümanlar salih ameller işliyorlar (Ref' alâmeti nûn'dur)",
              afterLabel: "Meczûm Hâl (Nûn Düştü)",
              afterArabic: "الْمُسْلِمُونَ لَمْ يَعْمَلُوا سُوءًا",
              afterTr: "Müslümanlar kötülük işlemediler (Nûn düştü, koruma elifi geldi)",
              highlightExplanation: "Nûn harfi düşerek cezm alâmeti olmuştur: لَمْ يَعْمَلُوا."
            }
          },
          explanationHtml: `
            <p>Muzâri fiile şu zamirler bitiştiğinde oluşan beş kalıba <b>el-Ef'âlü'l-Hamse</b> denir:</p>
            <ul>
              <li>Tesniye elifi (الألف): <span class="ar">يَفْعَلَانِ - تَفْعَلَانِ</span></li>
              <li>Cemi vâvı (الواو): <span class="ar">يَفْعَلُونَ - تَفْعَلُونَ</span></li>
              <li>Muhataba yâ'sı (الياء): <span class="ar">تَفْعَلِينَ</span></li>
            </ul>
            <p><b>İ'râbı:</b> Ref' hâlinde nûn sabittir. Nasb ve cezm hâlinde ise nûn düşer (hazfedilir).</p>
          `,
          examples: [
            {
              level: "simple",
              arabic: "الطَّالِبَانِ يُذَاكِرَانِ وَلَنْ يَرْسُبَا",
              translation: "İki öğrenci ders çalışıyor ve asla sınıfta kalmayacaklar.",
              analysisText: "يُذَاكِرَانِ: Nûn ile merfû. لَنْ يَرْسُبَا: Nûn'un hazfi ile mansûb."
            },
            {
              level: "hadith",
              arabic: "لَا تَدْخُلُونَ الْجَنَّةَ حَتَّى تُؤْمِنُوا",
              translation: "İman etmedikçe cennete giremezsiniz.",
              analysisText: "تَدْخُلُونَ: Nûn sübûtu ile merfû. تُؤْمِنُوا: Hatta'dan sonra nûn hazfi ile mansûb."
            },
            {
              level: "quran",
              arabic: "فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا النَّارَ",
              translation: "Eğer yapamazsanız -ki asla yapamayacaksınız- o ateşten sakının!",
              analysisText: "لَمْ تَفْعَلُوا (meczûm - hazfü'n-nûn), وَلَنْ تَفْعَلُوا (mansûb - hazfü'n-nûn).",
              verseRef: { sura: 2, ayah: 24 }
            }
          ],
          exercises: [
            {
              id: "b2-l3-ex1",
              type: "sentence_transform",
              prompt: "Aşağıdaki cümleyi başına 'لَنْ' nasb edatı getirerek dönüştürün:",
              inputSentence: "هُمْ يَكْتُبُونَ الدَّرْسَ .",
              instruction: "Başına 'لَنْ' nasb edatı getirerek ef'âl-i hamse nûn'unu hazfedin.",
              acceptedAnswers: ["هُمْ لَنْ يَكْتُبُوا الدَّرْسَ", "هم لن يكتبوا الدرس"],
              explanation: "Başına 'لن' gelince ef'âl-i hamse'nin nûn'u hazfedilir ve yerine elif-i fârika konur: لن يكتبوا."
            }
          ]
        }
      ]
    },
    {
      id: "b2-takdiri-irab",
      bookLevel: 2,
      title: "Takdîrî İ'râb: Maksûr, Menkûs ve Mütekellim Yâ'sı",
      arabicTitle: "الْإِعْرَابُ التَّقْدِيرِيُّ",
      icon: "💎",
      desc: "Lafzen hareke alamayan isimlerde taazzür (imkânsızlık), sikal (ağırlık) ve münâsebet sebebiyle takdîrî i'râb.",
      lessons: [
        {
          id: "b2-l4-ism-i-maksur",
          bookLevel: 2,
          chapterId: "b2-takdiri-irab",
          order: 4,
          title: "İsm-i Maksûr ve Takdîrî İ'râbı",
          arabicTitle: "الِاسْمُ الْمَقْصُورُ (الْفَتَى، الْعَصَا)",
          desc: "Sonunda lâzım elif bulunan isimlerin her üç halde de takdîrî hareke alması.",
          starterCard: {
            title: "Odak: İsm-i Maksûr (ا / ى)",
            focusPoints: [
              "Tanım: Sonu zâhirî bir elif ile biten mu'reb isimdir: الْفَتَى (delikanlı), الْعَصَا (asa), مُوسَى, هُدًى.",
              "Kural: Elif harfi damme, fetha ve kesrayı asla kabul edemez (Taazzür / تعذّر).",
              "İ'râb: Ref' hâlinde takdîrî damme, nasb hâlinde takdîrî fetha, cer hâlinde takdîrî kesra alır."
            ],
            ruleBox: "İsm-i maksûrun bütün i'râb alâmetleri elif üzerinde takdîr edilir; hiçbir harekesi lafzen görünmez.",
            transformation: {
              beforeLabel: "Mu'reb Sahih İsim (Açık İ'râb)",
              beforeArabic: "جَاءَ زَيْدٌ ➔ رَأَيْتُ زَيْدًا ➔ مَرَرْتُ بِزَيْدٍ",
              beforeTr: "Damme, Fetha, Kesra açıkça okunur",
              afterLabel: "İsm-i Maksûr (Takdîrî İ'râb)",
              afterArabic: "جَاءَ الْفَتَى ➔ رَأَيْتُ الْفَتَى ➔ مَرَرْتُ بِالْفَتَى",
              afterTr: "Üç halde de الْفَتَى kelimesi lafzen aynı kalır",
              highlightExplanation: "Harekeler elif üzerinde taazzür (telaffuz imkânsızlığı) sebebiyle takdîr edilmiştir."
            }
          },
          explanationHtml: `
            <p>Sonunda kendinden önceki harfi fethalı olan sabit bir elif bulunan isimlere <b>İsm-i Maksûr</b> denir (<span class="ar">الْفَتَى، الْعَصَا، الدُّنْيَا، الْمُسْتَشْفَى</span>).</p>
            <p><b>İ'râb Hükmü:</b></p>
            <ul>
              <li><b>Ref':</b> Takdîren merfûdur (<span class="ar">نَجَحَ الْفَتَى</span> - Fâil, takdîrî damme).</li>
              <li><b>Nasb:</b> Takdîren mansûbdur (<span class="ar">شَاهَدْتُ الْفَتَى</span> - Mef'ûl, takdîrî fetha).</li>
              <li><b>Cer:</b> Takdîren mecrûrdur (<span class="ar">سَلَّمْتُ عَلَى الْفَتَى</span> - Mecrûr, takdîrî kesra).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "ضَرَبَ مُوسَى الْعَصَا عَلَى الصَّخْرِ",
              translation: "Musa asayı kayaya vurdu.",
              analysisText: "مُوسَى: Fâil merfû bi-dammetin mukadderatin. الْعَصَا: Mef'ûlün bih mansûb bi-fethatin mukadderatin."
            },
            {
              level: "hadith",
              arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
              translation: "Üstteki el alttaki elden hayırlıdır.",
              analysisText: "الْعُلْيَا ve السُّفْلَى ism-i maksûrdur; sıfat olarak mukadder harekeyle i'râb edilirler."
            },
            {
              level: "quran",
              arabic: "قَالَ هِيَ عَصَايَ أَتَوَكَّأُ عَلَيْهَا",
              translation: "Dedi ki: O benim asamdır, ona dayanırım.",
              analysisText: "عَصَا: İsm-i maksûrdur.",
              verseRef: { sura: 20, ayah: 18 }
            }
          ],
          exercises: [
            {
              id: "b2-l4-ex1",
              type: "irab_matrix",
              prompt: "Aşağıdaki cümlede geçen 'الْفَتَى' kelimesinin cümledeki i'râb künyesini seçiniz:",
              targetSentence: "سَمِعَ النَّاسُ قَوْلَ الْفَتَى فِي الْقَرْيَةِ .",
              targetWord: "الْفَتَى",
              fields: [
                { label: "Cümledeki Görevi", acceptedAnswers: ["Muzafun İleyh", "muzafun ileyh", "tamlanan", "مضاف إليه"] },
                { label: "İ'râb Hâli", acceptedAnswers: ["Mecrûr", "mecrur", "cer", "مجرور"] },
                { label: "İ'râb Alâmeti", acceptedAnswers: ["Takdîrî Kesra", "takdiri kesra", "kesra mukaddera", "الكسرة المقدرة"] }
              ],
              explanation: "Kavle kelimesinin muzâfun ileyhidir; mecrûrdur ve elif üzerinde takdîrî kesra ile i'râb edilir."
            }
          ]
        },
        {
          id: "b2-l5-ism-i-menkus",
          bookLevel: 2,
          chapterId: "b2-takdiri-irab",
          order: 5,
          title: "İsm-i Menkûs ve Yâ Harfinin Durumu",
          arabicTitle: "الِاسْمُ الْمَنْقُوصُ (الْقَاضِي، الدَّاعِي)",
          desc: "Sonunda öncesi kesralı yâ bulunan isimlerin ref' ve cerde takdîrî, nasbda açık fetha alması.",
          starterCard: {
            title: "Odak: İsm-i Menkûs (الْقَاضِي)",
            focusPoints: [
              "Tanım: Sonu öncesi kesralı bir Yâ (ي) ile biten mu'reb isimdir: الْقَاضِي, الدَّاعِي, الرَّاعِي.",
              "Ref' ve Cer: Yâ üzerinde damme ve kesra ağırlık yaptığı için takdîr edilir (Sikal / ثِقَل).",
              "Nasb Hâli: Fetha yâ üzerinde hafiftir, bu yüzden AÇIKÇA (lafzen) görünür: رَأَيْتُ الْقَاضِيَ.",
              "Nekire İken: Ref' ve cer halinde yâ düşer ve tenvin alır: جَاءَ قَاضٍ / مَرَرْتُ بِقَاضٍ."
            ],
            ruleBox: "İsm-i menkûs ref' ve cer hallerinde mukadder hareke alır; nasb hâlinde ise zâhir fetha alır.",
            transformation: {
              beforeLabel: "Ref' Hâli (Takdîrî Damme)",
              beforeArabic: "جَاءَ الْقَاضِي إِلَى الْمَحْكَمَةِ",
              beforeTr: "Hâkim mahkemeye geldi (Damme yâ üzerinde telaffuz edilmez, takdîrîdir)",
              afterLabel: "Nasb Hâli (Açık Fetha!)",
              afterArabic: "رَأَيْتُ الْقَاضِيَ فِي الْمَحْكَمَةِ",
              afterTr: "Hâkimi mahkemede gördüm (Fetha hafif olduğu için açıkça yazılır ve okunur)",
              highlightExplanation: "Maksûrdan farklı olarak menkûsun nasb alâmeti fetha lafzîdir."
            }
          },
          explanationHtml: `
            <p>Sonunda mâkabli (öncesi) kesralı olan lâzım bir yâ bulunan isimlere <b>İsm-i Menkûs</b> denir (<span class="ar">الْقَاضِي، الْمُحَامِي، الرَّاعِي</span>).</p>
            <ul>
              <li><b>Ref' Hâli:</b> Takdîren merfû (<span class="ar">عَدَلَ الْقَاضِي</span> - fâil, takdîrî damme).</li>
              <li><b>Cer Hâli:</b> Takdîren mecrûr (<span class="ar">ذَهَبْتُ إِلَى الْقَاضِي</span> - takdîrî kesra).</li>
              <li><b>Nasb Hâli:</b> Lafzen mansûb (<span class="ar">شَاهَدْتُ الْقَاضِيَ</span> - açık fetha).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "حَكَمَ الْقَاضِي عَلَى الْجَانِي وَأَنْصَفَ الشَّاكِيَ",
              translation: "Hâkim suçluya hükmetti ve davacının hakkını verdi.",
              analysisText: "الْقَاضِي fâil (takdîrî damme), الْجَانِي mecrûr (takdîrî kesra), الشَّاكِيَ mef'ûl (açık fetha)."
            },
            {
              level: "hadith",
              arabic: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ",
              translation: "Hepiniz birer çobansınız ve hepiniz güttüklerinizden sorumlusunuz.",
              analysisText: "رَاعٍ: Nekire ism-i menkûstur, ref' halinde yâ düşmüş ve tenvin almıştır."
            },
            {
              level: "quran",
              arabic: "مُهْطِعِينَ إِلَى الدَّاعِ",
              translation: "O çağırıcıya doğru boyunlarını uzatmış koşarak...",
              analysisText: "الدَّاعِ: Menkûs isim olup cer halinde yâ hazfedilmiştir.",
              verseRef: { sura: 54, ayah: 8 }
            }
          ],
          exercises: [
            {
              id: "b2-l5-ex1",
              type: "error_correction",
              prompt: "Aşağıdaki cümlede ism-i menkûsun nasb harekesi hatasını düzeltin (fethasını belirginleştirin):",
              incorrectSentence: "احْتَرَمَ النَّاسُ الْمُحَامِي فِي دِفَاعِهِ .",
              acceptedCorrectSentences: ["احْتَرَمَ النَّاسُ الْمُحَامِيَ فِي دِفَاعِهِ", "احترم الناس المحاميَ في دفاعه", "احترم الناس المحامي في دفاعه"],
              errorTarget: "الْمُحَامِي",
              explanationOfError: "İsm-i menkûs mef'ûlün bih olarak mansûb olduğunda sonundaki yâ harfi açık fetha alır: الْمُحَامِيَ.",
              explanation: "Menkûs isim nasb anında açık fetha alır."
            }
          ]
        }
      ]
    },
    {
      id: "b2-marife-nekire",
      bookLevel: 2,
      title: "Marife (Belirli) ve Nekire (Belirsiz) İsimler",
      arabicTitle: "الْمَعْرِفَةُ وَالنَّكِرَةُ (أَقْسَامُ الْمَعَارِفِ السَّبْعَةِ)",
      icon: "🔦",
      desc: "Belirlilik bildiren 7 marife sınıfı: Zamirler, Alem, İşaret, Mevsûl, Harf-i Tarifli, İzâfet ve Münâdâ.",
      lessons: [
        {
          id: "b2-l6-zamirler",
          bookLevel: 2,
          chapterId: "b2-marife-nekire",
          order: 6,
          title: "Zamirler (Damâir): Munfasıl ve Muttasıl",
          arabicTitle: "الضَّمَائِرُ الْمُنْفَصِلَةُ وَالْمُتَّصِلَةُ",
          desc: "Ayrık ve bitişik zamirler, fâil zamirleri ve nasb/cer zamirlerinin mebnîlik tablosu.",
          starterCard: {
            title: "Odak: Zamirler (En Belirli Marife)",
            focusPoints: [
              "Zamirler marifelerin en kuvvetlisidir (mütecellâ / mütekellim, muhatap, gâib).",
              "Munfasıl Zamirler: Tek başına yazılabilenler (هُوَ ، هِيَ ، أَنْتَ ، أَنَا... merfû munfasıl; إِيَّاكَ ، إِيَّاهُ... mansûb munfasıl).",
              "Muttasıl Zamirler: Kelimeye bitişenler (كَتَبْتُ 'deki tâ fâil; كِتَابُهُ 'deki he muzâfun ileyh; ضَرَبَهُ 'deki he mef'ûlün bih).",
              "Tüm zamirler MEBNÎDİR; mahallen i'râb edilirler."
            ],
            ruleBox: "Fiile bitişen zamir fâil ise mahallen merfû; fiile bitişip nesne oluyorsa mahallen mansûb; isme veya harf-i cere bitişiyorsa mahallen mecrûrdur.",
            transformation: {
              beforeLabel: "Zâhir İsim Nesne",
              beforeArabic: "شَكَرَ الْمُعَلِّمُ زَيْدًا",
              beforeTr: "Öğretmen Zeyd'e teşekkür etti (Lafzen mansûb isim)",
              afterLabel: "Muttasıl Zamir Nesne",
              afterArabic: "شَكَرَهُ الْمُعَلِّمُ",
              afterTr: "Öğretmen ona teşekkür etti (Hû zamiri mahallen mansûb mef'ûldür)",
              highlightExplanation: "Zamir zâhir ismin yerini alarak mebnîlik kazandı ve mahallen i'râb edildi."
            }
          },
          explanationHtml: `
            <p>Arapçada zamirler konuşan (mütekellim), muhatap veya gâib şahısları temsil eder. Tamamı <b>mebnî</b>dir.</p>
            <p><b>1. Munfasıl Merfû Zamirler:</b> <span class="ar">أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، أَنْتُمَا، أَنْتُمْ، أَنْتُنَّ، هُوَ، هِيَ، هُمَا، هُمْ، هُنَّ</span> (Genellikle mübteda olarak mahallen merfûdur).</p>
            <p><b>2. Munfasıl Mansûb Zamirler:</b> <span class="ar">إِيَّايَ، إِيَّانَا، إِيَّاكَ، إِيَّاكِ، إِيَّاكُمَا، إِيَّاكُمْ، إِيَّاكُنَّ، إِيَّاهُ، إِيَّاهَا، إِيَّاهُمَا، إِيَّاهُمْ، إِيَّاهُنَّ</span> (Öne geçmiş mef'ûlün bih).</p>
            <p><b>3. Muttasıl Zamirler:</b> Kelimenin sonuna bitişen <span class="ar">تُ، نَا، تَ، تِ، تُمَا، تُمْ، كَ، كِ، هُ، هَا</span> vb.</p>
          `,
          examples: [
            {
              level: "simple",
              arabic: "أَنْتَ مُجْتَهِدٌ وَأَكْرَمْتُكَ الْيَوْمَ",
              translation: "Sen çalışkansın ve bugün sana ikram ettim.",
              analysisText: "أَنْتَ: Munfasıl merfû zamir (mübteda). أَكْرَمْتُكَ: Tû zamiri fâil, ke zamiri mef'ûldür."
            },
            {
              level: "hadith",
              arabic: "إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ",
              translation: "Zandan sakının; zira zan sözün en yalanıdır.",
              analysisText: "إِيَّاكُمْ: Tahzîr üslûbunda mansûb munfasıl zamir."
            },
            {
              level: "quran",
              arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
              translation: "Yalnız sana ibadet eder ve yalnız senden yardım dileriz.",
              analysisText: "إِيَّاكَ: Mahallen mansûb mukaddem mef'ûlün bihtir.",
              verseRef: { sura: 1, ayah: 5 }
            }
          ],
          exercises: [
            {
              id: "b2-l6-ex1",
              type: "irab_matrix",
              prompt: "Aşağıdaki ayette altı çizili 'ك' zamirinin cümledeki mahalli i'râbını seçiniz:",
              targetSentence: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
              targetWord: "وَدَّعَكَ",
              fields: [
                { label: "Cümledeki Görevi", acceptedAnswers: ["Mef'ûlün Bih", "mef'ulün bih", "meful", "nesne", "مفعول به"] },
                { label: "İ'râb Hâli", acceptedAnswers: ["Mahallen Mansûb", "mansub", "mansûb", "mahallen mansub"] },
                { label: "İ'râb Alâmeti", acceptedAnswers: ["Fetha üzere mebnî", "mebni", "fetha mebni", "مبني على الفتح"] }
              ],
              explanation: "Fiile bitişen 'ke' zamiri fâil değil nesnedir; fâil ise arkasından gelen 'rabbuke' kelimesidir."
            }
          ]
        },
        {
          id: "b2-l7-mevsul-ve-isaret",
          bookLevel: 2,
          chapterId: "b2-marife-nekire",
          order: 7,
          title: "İşaret İsimleri ve İsm-i Mevsûller",
          arabicTitle: "أَسْمَاءُ الْإِشَارَةِ وَالْأَسْمَاءُ الْمَوْصُولَةُ",
          desc: "هَذَا، هَذِهِ ve الَّذِي، الَّتِي kelimeleri, sıla cümlesi ve âid zamiri.",
          starterCard: {
            title: "Odak: İşaret İsimleri ve Mevsûller",
            focusPoints: [
              "İşaret İsimleri: هَـٰذَا (eril), هَـٰذِهِ (dişil), هَـٰؤُلَاءِ (çoğul), ذَٰلِكَ (uzak) mebnîdir.",
              "İsm-i Mevsûl: الَّذِي (eril tekil), الَّتِي (dişil tekil), الَّذِينَ (çoğul) mebnîdir.",
              "İkili halleri (هَذَانِ/هَذَيْنِ ve اللَّذَانِ/اللَّذَيْنِ) müstesna olup tesniye gibi mu'rebtir.",
              "Sıla Cümlesi: İsm-i mevsûlden sonra gelen açıklayıcı cümledir, i'râbdan mahalli yoktur."
            ],
            ruleBox: "İsm-i mevsûl kendisinden sonraki sıla cümlesi olmadan tam anlam kazanmaz. Sıla cümlesinde mevsûle dönen bir âid zamir bulunmalıdır.",
            transformation: {
              beforeLabel: "Ayrı İki Cümle",
              beforeArabic: "جَاءَ الرَّجُلُ . هُوَ فَازَ بِالْجَائِزَةِ",
              beforeTr: "Adam geldi. O ödülü kazandı.",
              afterLabel: "Mevsûl ile Birleşmiş",
              afterArabic: "جَاءَ الرَّجُلُ الَّذِي فَازَ بِالْجَائِزَةِ",
              afterTr: "Ödülü kazanan adam geldi (فَازَ sıla cümlesidir)",
              highlightExplanation: "الَّذِي ile cümle sıfatlaştırılmış ve adam kelimesi nitelenmiştir."
            }
          },
          explanationHtml: `
            <p>İşaret isimleri ve ism-i mevsûller marifeler grubundandır ve tesniyeleri hariç tamamı <b>mebnî</b>dir:</p>
            <ul>
              <li><b>İşaret İsimleri:</b> <span class="ar">هَذَا</span> (eril tekil), <span class="ar">هَذِهِ</span> (dişil tekil), <span class="ar">هَؤُلَاءِ</span> (çoğul).</li>
              <li><b>İsm-i Mevsûller:</b> <span class="ar">الَّذِي</span> (eril tekil), <span class="ar">الَّتِي</span> (dişil tekil), <span class="ar">الَّذِينَ</span> (çoğul). Peşinden gelen sıla cümlesi olmadan anlamları tamamlanmaz.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "هَـٰذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ أَمْسِ",
              translation: "Dün okuduğum kitap işte budur.",
              analysisText: "هَـٰذَا işaret ismi (mübteda), الَّذِي ism-i mevsûl (sıfat), قَرَأْتُهُ sıla cümlesi (hû âid zamirdir)."
            },
            {
              level: "hadith",
              arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
              translation: "Müslüman, Müslümanların dilinden ve elinden esenlikte olduğu kimsedir.",
              analysisText: "مَنْ burada ism-i mevsûl (haber) anlamındadır."
            },
            {
              level: "quran",
              arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
              translation: "Hamd, kuluna Kitab'ı indiren Allah'a mahsustur.",
              analysisText: "الَّذِي: Lafzatullâh'ın sıfatı olarak mahallen mecrûrdur; أَنزَلَ cümlesi sıla cümlesidir.",
              verseRef: { sura: 18, ayah: 1, linkUrl: "index.html#ayet-1" }
            }
          ],
          exercises: [
            {
              id: "b2-l7-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki boşluğu çoğul eril için uygun ism-i mevsûl ile doldurun:",
              sentenceWithBlank: "قَدْ أَفْلَحَ [___] هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ .",
              baseWord: "الذي",
              acceptedAnswers: ["الَّذِينَ", "الذين"],
              explanation: "Çoğul eril için kullanılan ism-i mevsûl الَّذِينَ'dir.",
              hint: "Sonunda ya ve nun harfleri bulunur."
            }
          ]
        }
      ]
    },
    {
      id: "b2-gayri-munsarif",
      bookLevel: 2,
      title: "Gayr-i Munsarif (Memnû' mine's-Sarf)",
      arabicTitle: "الْمَمْنُوعُ مِنَ الصَّرْفِ",
      icon: "🛡️",
      desc: "Tenvin almayan ve cer hâlinde kesra yerine fetha alan isimler, illetleri ve tenvine dönme şartları.",
      lessons: [
        {
          id: "b2-l8-gayri-munsarif-illetleri",
          bookLevel: 2,
          chapterId: "b2-gayri-munsarif",
          order: 8,
          title: "Gayr-i Munsarif İlletleri ve Cer Âlâmeti",
          arabicTitle: "عِلَلُ مَنْعِ الصَّرْفِ وَعَلَامَةُ جَرِّهِ",
          desc: "Tenvinsizlik, fetha ile cer olma hali ve iki illet veya iki illet yerine geçen tek illet mantığı.",
          starterCard: {
            title: "Odak: Gayr-i Munsarif (Tenvinsiz İsim)",
            focusPoints: [
              "Tanım: Tenvin ve kesra kabul etmeyen isimdir.",
              "Temel Kural: Merfû iken damme, mansûb iken fetha, MECRÛR İKEN DE FETHA alır: صَلَّيْتُ فِي مَسَاجِدَ (mesâcid-e).",
              "Tek İlletle Memnû Olanlar: Sigatü müntehe'l-cümû' (مَفَاعِل / مَفَاعِيل gibi: مَسَاجِد، مَصَابِيح) ve elif-i memdûde/maksûra ile bitenler (صَحْرَاء، حُبْلَى).",
              "İki İlletle Memnû Olanlar: Alem (özel isim) + Dişillik (فَاطِمَة), Yabancı köken (إِبْرَاهِيم), Vezin (أَحْمَد), Ziyâde elif-nûn (عُثْمَان)."
            ],
            ruleBox: "Gayr-i munsarif isim asla tenvin almaz. Cer alâmeti kesra yerine FETHA'dır. Ancak başına الـ gelirse veya muzâf olursa kesra alır.",
            transformation: {
              beforeLabel: "Normal Munsarif İsim Cer Hâli",
              beforeArabic: "مَرَرْتُ بِمُحَمَّدٍ",
              beforeTr: "Muhammed'e uğradım (Kesra ve tenvin aldı)",
              afterLabel: "Gayr-i Munsarif Cer Hâli",
              afterArabic: "مَرَرْتُ بِإِبْرَاهِيمَ",
              afterTr: "İbrahim'e uğradım (Tenvin almadı, cer alameti fetha oldu)",
              highlightExplanation: "Arapça kökenli olmayan özel isim gayr-i munsarif olduğu için kesra yerine fetha almıştır."
            }
          },
          explanationHtml: `
            <p>Arapçada sarf tenvin demektir. <b>el-Memnû' mine's-Sarf</b> (Gayr-i Munsarif), tenvinden ve kesradan men edilmiş kelimedir.</p>
            <p><b>Temel İlletler:</b></p>
            <ul>
              <li><b>Müntehe'l-Cümû':</b> Eliften sonra iki veya üç harf bulunan çoğullar: <span class="ar">مَسَاجِدُ، مَفَاتِيحُ، دَرَاهِمُ</span>.</li>
              <li><b>Alem İlletleri:</b> Kadın ismi (<span class="ar">مَرْيَمُ، زَيْنَبُ</span>), A'cemî/yabancı isim (<span class="ar">يُوسُفُ، إِسْحَاقُ</span>), Fiil veznindeki isim (<span class="ar">أَحْمَدُ، يَزِيدُ</span>).</li>
              <li><b>Sıfat İlletleri:</b> Ef'al veznindeki sıfatlar (<span class="ar">أَحْمَرُ، أَحْسَنُ</span>) ve fa'lân vezni (<span class="ar">غَضْبَانُ، عَطْشَانُ</span>).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "سَافَرْتُ إِلَى مَكَّةَ وَصَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ",
              translation: "Mekke'ye yolculuk ettim ve birçok mescitte namaz kıldım.",
              analysisText: "مَكَّةَ: Gayr-i munsarif mecrûr bi'l-fetha. فِي مَسَاجِدَ: Çoğul kalıbı sebebiyle fetha ile mecrûr."
            },
            {
              level: "hadith",
              arabic: "إِنَّا مَعْشَرَ الْأَنْبِيَاءِ لَا نُورَثُ ، مَا تَرَكْنَاهُ صَدَقَةٌ",
              translation: "Biz peygamberler topluluğu miras bırakmayız; bıraktığımız sadakadır.",
              analysisText: "الأنبياء elif-i memdûde ile gayr-i munsariftir fakat izâfetle kesra alabilir."
            },
            {
              level: "quran",
              arabic: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا",
              translation: "Bir selâm ile selâmlandığınızda, ondan daha güzeli ile karşılık verin!",
              analysisText: "بِأَحْسَنَ: Başına bâ harf-i ceri geldiği halde gayr-i munsarif (ef'al vezninde sıfat) olduğu için fetha ile mecrûrdur.",
              verseRef: { sura: 4, ayah: 86 }
            }
          ],
          exercises: [
            {
              id: "b2-l8-ex1",
              type: "error_correction",
              prompt: "Aşağıdaki gayr-i munsarif kelimenin cer harekesindeki hatayı düzeltin:",
              incorrectSentence: "تَعَلَّمْتُ فِي مَدَارِسٍ كَبِيرَةٍ .",
              acceptedCorrectSentences: ["تَعَلَّمْتُ فِي مَدَارِسَ كَبِيرَةٍ", "تعلمت في مدارسَ كبيرة", "تعلمت في مدارس كبيرة"],
              errorTarget: "مَدَارِسٍ",
              explanationOfError: "مَدَارِس sigatü müntehe'l-cümû' kalıbında gayr-i munsariftir; tenvin ve kesra alamaz, fetha ile mecrûr olur: مَدَارِسَ.",
              explanation: "Gayr-i munsarif isimler cer halinde tenvinsiz fetha alır."
            },
            {
              id: "b2-l8-ex2",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede boşluğa 'أَحْمَد' özel ismini harf-i cerin mecrûru olacak doğru harekesiyle yazın:",
              sentenceWithBlank: "سَلَّمْتُ عَلَى [___] فِي الْمَسْجِدِ .",
              baseWord: "أحمد",
              acceptedAnswers: ["أَحْمَدَ", "أحمدَ", "أحمد"],
              explanation: "أَحْمَد fiil vezninde özel isim olduğu için gayr-i munsariftir; cer halinde açık fetha alır: أَحْمَدَ.",
              hint: "Sonuna fetha koyun, tenvin koymayın."
            }
          ]
        }
      ]
    }
  ]
};
