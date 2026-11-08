import { Book } from '../types/curriculum';

export const DURUS_CURRICULUM: Book[] = [
  {
    level: 1,
    title: "1. Kitap: Temel Halka",
    arabicTitle: "الكتاب الأول: مبادئ النحو الضرورية",
    subtitle: "Zâhirî İ'râb, Kelime Türleri ve Temel Cümle Ögeleri",
    desc: "Öğrencinin zihni dağılmasın diye takdîrî ve mahallî i'râba girmeden, sadece açık lafzî harekelerle kelimenin oluşumu, fiil ve ismin 3 ana hâli.",
    chapters: [
      {
        id: "b1-kelime",
        bookLevel: 1,
        title: "Kelime ve Türleri",
        arabicTitle: "تكوّن الكلمات وأنواعها",
        icon: "🌱",
        desc: "Harflerden kelimeye, isim-fiil-harf ayrımı ve mebnî-mu'reb esası.",
        lessons: [
          {
            id: "b1-l1-kelime-turleri",
            bookLevel: 1,
            chapterId: "b1-kelime",
            order: 1,
            title: "Kelime Türleri: İsim, Fiil ve Harf",
            arabicTitle: "أَنْوَاعُ الْكَلِمَاتِ",
            desc: "Arapçada kelimelerin 3 sınıfa ayrılması ve tanınma alâmetleri.",
            starterCard: {
              title: "Odak: Arapçada 3 Kelime Türü",
              focusPoints: [
                "Arapçada her kelime istisnasız İsim, Fiil veya Harf'tir.",
                "İsim zaman bildirmez (kitap, Muhammed); Fiil zamanla birlikte iş bildirir (yazdı, yazıyor).",
                "Harf tek başına müstakil bir anlam taşımaz, kelimeleri birbirine bağlar (fî, min, ve)."
              ],
              ruleBox: "Bir kelimenin başına الـ (elif-lâm) veya harf-i cer geliyorsa İSİM; başına قَدْ veya سَـ geliyorsa FİİL; ikisini de kabul etmiyorsa HARF'tir.",
              transformation: {
                beforeLabel: "Fiil Örneği (Zaman Bildirir)",
                beforeArabic: "كَتَبَ",
                beforeTr: "Yazdı (Geçmiş zamanlı fiil)",
                afterLabel: "İsim Karşılaştırması (Varlık Bildirir)",
                afterArabic: "الْكِتَابُ",
                afterTr: "Kitap (Zaman bildirmez, elif-lâm takısı alır)",
                highlightExplanation: "Aynı ك-ت-ب kökünden türese de fiil zamanlı işi, isim ise müstakil varlığı gösterir."
              }
            },
            explanationHtml: `
              <p>Hifnî Nâsıf ve heyetinin <i>ed-Durûsü'n-Nahviyye</i>'deki ifadesiyle: Arapçadaki tüm kelimeler üç dairede toplanır:</p>
              <ul>
                <li><b>الْفِعْلُ (Fiil):</b> Zamana bağlı bir eylemi gösterir: <span class="ar">كَتَبَ</span> (yazdı), <span class="ar">يَكْتُبُ</span> (yazıyor), <span class="ar">اُكْتُبْ</span> (yaz!).</li>
                <li><b>الاِسْمُ (İsim):</b> Kendi başına bir anlam ifade eden ve zaman içermeyen kelimedir: <span class="ar">مُحَمَّدٌ</span>, <span class="ar">كِتَابٌ</span>, <span class="ar">شَجَرَةٌ</span>.</li>
                <li><b>الْحَرْفُ (Harf):</b> Anlamı ancak başka bir kelimeyle birleştiğinde ortaya çıkan bağlaç ve edatlardır: <span class="ar">فِي</span>, <span class="ar">إِلَى</span>, <span class="ar">هَلْ</span>, <span class="ar">لَمْ</span>.</li>
              </ul>
            `,
            examples: [
              {
                level: "simple",
                arabic: "الْعِلْمُ نُورٌ",
                translation: "İlim ışıktır.",
                analysisText: "الْعِلْمُ (İsim - başında elif lâm var), نُورٌ (İsim - sonunda tenvin var)."
              },
              {
                level: "hadith",
                arabic: "الطُّهُورُ شَطْرُ الْإِيمَانِ",
                translation: "Temizlik imanın yarısıdır.",
                analysisText: "Tüm kelimeler isimdir; الطُّهُورُ mübteda olarak merfûdur."
              },
              {
                level: "quran",
                arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
                translation: "Hamd, kuluna Kitab'ı indiren Allah'a mahsustur.",
                analysisText: "الْحَمْدُ (isim), لِـ (harf), أَنزَلَ (fiil), عَلَى (harf), الْكِتَابَ (isim).",
                verseRef: { sura: 18, ayah: 1, linkUrl: "index.html#ayet-1" }
              }
            ],
            exercises: [
              {
                id: "b1-l1-ex1",
                type: "fill_conjugate",
                prompt: "Aşağıdaki cümlede belirtilen kelimeyi fiilin mef'ûlü (ismin fethalı mansûb hâli) olacak şekilde boşluğa yazın:",
                sentenceWithBlank: "قَرَأَ الطَّالِبُ [___] فِي الْمَسْجِدِ .",
                baseWord: "الكتاب",
                acceptedAnswers: ["الْكِتَابَ", "الكتابَ", "الكتاب"],
                explanation: "Fiil cümlesinde nesne (mef'ûlün bih) açık fetha ile mansûb okunur: الْكِتَابَ.",
                hint: "Son harfe fetha (َ) ekleyin."
              },
              {
                id: "b1-l1-ex2",
                type: "error_correction",
                prompt: "Aşağıdaki cümledeki hareke hatasını tespit edip cümlenin doğrusunu yazın:",
                incorrectSentence: "ذَهَبَ إِلَى الْمَدْرَسَةُ .",
                acceptedCorrectSentences: ["ذَهَبَ إِلَى الْمَدْرَسَةِ", "ذهب الى المدرسةِ", "ذهب إلى المدرسةِ"],
                errorTarget: "الْمَدْرَسَةُ",
                explanationOfError: "Harf-i cerden (إِلَى) sonra gelen isim daima kesra ile mecrûr olur: الْمَدْرَسَةِ.",
                explanation: "Harf-i cerler ismin sonunu kesra yapar."
              }
            ]
          }
        ]
      },
      {
        id: "b1-merfuat",
        bookLevel: 1,
        title: "İsmin Merfû Olduğu Yerler",
        arabicTitle: "رَفْعُ الاسْمِ وَمَوَاضِعُهُ",
        icon: "⚖️",
        desc: "Fâil, Nâib-i Fâil, Mübteda ve Haber, Kâne'nin İsmi, İnne'nin Haberi.",
        lessons: [
          {
            id: "b1-l2-kane-kardesleri",
            bookLevel: 1,
            chapterId: "b1-merfuat",
            order: 2,
            title: "Kâne ve Kardeşleri (Nâkıs Fiiller)",
            arabicTitle: "كَانَ وَأَخَوَاتُهَا",
            desc: "İsim cümlesine girip mübtedayı ismi (merfû), haberi mansûb yapan amiller.",
            starterCard: {
              title: "Odak: Kâne ve Kardeşlerinin İ'râb Ameli",
              focusPoints: [
                "Kâne ve kardeşleri (أَصْبَحَ، ظَلَّ، لَيْسَ، صَارَ) isim cümlesinin başına gelir.",
                "Mübtedayı kendi İSMİ yapar ve MERFÛ bırakır (damme, vâv, elif).",
                "Haberi kendi HABERİ yapar ve MANSÛB kılar (fetha, yâ, kesre)."
              ],
              ruleBox: "Kural: İsim merfû kalır, haber mansûb olur! (كَانَ زَيْدٌ قَائِمًا)",
              transformation: {
                beforeLabel: "Yalın İsim Cümlesi",
                beforeArabic: "الْعَائِلَةُ كَبِيرَةٌ",
                beforeTr: "Aile büyüktür (Mübteda merfû, Haber merfû)",
                afterLabel: "Kâne Girdikten Sonra",
                afterArabic: "كَانَتِ الْعَائِلَةُ كَبِيرَةً",
                afterTr: "Aile büyüktü (İsmi merfû, Haberi MANSÛB oldu)",
                highlightExplanation: "Haberin harekesi dammeden fethaya dönüştü: كَبِيرَةٌ → كَبِيرَةً"
              }
            },
            explanationHtml: `
              <p><i>ed-Durûsü'n-Nahviyye</i> s. 43 ve alıştırma föyümüzdeki temel kural şudur:</p>
              <p><b>كَانَ</b> ve benzerleri nâkıs fiildir; fâil almazlar. Mübtedâyı kendilerine isim yapıp merfû bırakırlar; haberi ise nasbedip mansûb kılarlar.</p>
              <div class="callout tip">
                <b>💡 Kâne'nin Meşhur Kardeşleri:</b>
                <span class="ar">كَانَ</span> (-idi), <span class="ar">أَصْبَحَ</span> (oldu / sabahladı), <span class="ar">ظَلَّ</span> (gün boyu devam etti), <span class="ar">صَارَ</span> (dönüştü/oldu), <span class="ar">لَيْسَ</span> (değildir), <span class="ar">مَا زَالَ</span> (hâlâ devam ediyor).
              </div>
            `,
            examples: [
              {
                level: "simple",
                arabic: "كَانَ الْمَحَلُّ مَفْتُوحًا",
                translation: "Dükkân açıktı.",
                analysisText: "الْمَحَلُّ kâne'nin ismi (damme ile merfû), مَفْتُوحًا kâne'nin haberi (fetha ile mansûb)."
              },
              {
                level: "simple",
                arabic: "لَيْسَ النَّجَاحُ سَهْلًا",
                translation: "Başarı kolay değildir.",
                analysisText: "النَّجَاحُ leyse'nin ismi (merfû), سَهْلًا leyse'nin haberi (mansûb)."
              },
              {
                level: "quran",
                arabic: "وَكَانَ أَبُوهُمَا صَالِحًا",
                translation: "Babaları salih bir kimseydi.",
                analysisText: "أَبُوهُمَا kâne'nin ismi olup esmâ-i hamseden olduğu için vâv ile merfûdur; صَالِحًا kâne'nin haberi olup fetha ile mansûbdur.",
                verseRef: { sura: 18, ayah: 82, linkUrl: "index.html#ayet-82" }
              }
            ],
            exercises: [
              {
                id: "b1-l2-ex1",
                type: "fill_conjugate",
                prompt: "Aşağıda verilen kök kelimeyi [حاضرون] nâkıs fiilin haberi olacak şekilde uygun hâle sokup boşluğa yazın:",
                sentenceWithBlank: "كَانَ الْمُعَلِّمُونَ [___] فِي الْفَصْلِ .",
                baseWord: "حاضرون",
                acceptedAnswers: ["حَاضِرِينَ", "حاضرين"],
                explanation: "Haber mansûb olmalıdır. Cem-i müzekker sâlim kelimelerde nasb alâmeti yâ (ي) harfidir: حاضرين.",
                hint: "Cem-i müzekker sâlim nasb hâlinde -îne (ـِينَ) alır."
              },
              {
                id: "b1-l2-ex2",
                type: "irab_matrix",
                prompt: "Aşağıdaki âyette altı çizili kelimenin i'râb künyesini çıkarın:",
                targetSentence: "وَكَانَ أَبُوهُمَا صَالِحًا",
                targetWord: "أَبُوهُمَا",
                fields: [
                  { label: "Cümledeki Görevi", acceptedAnswers: ["kâne'nin ismi", "kanenin ismi", "kane ismi", "kâne ismi", "اسم كان"] },
                  { label: "İ'râb Hâli", acceptedAnswers: ["merfû", "merfu", "ref", "مرفوع"] },
                  { label: "İ'râb Alâmeti", acceptedAnswers: ["vav", "vâv", "الواو"] }
                ],
                explanation: "Esmâ-i hamse grubundaki kelimeler kâne'nin ismi olduğunda merfû olup alâmetleri vâv'dır."
              },
              {
                id: "b1-l2-ex3",
                type: "error_correction",
                prompt: "Aşağıdaki cümledeki hatayı tespit edip doğru cümleyi yazın:",
                incorrectSentence: "أَصْبَحَ الْمَاءُ بَارِدٌ .",
                acceptedCorrectSentences: ["أَصْبَحَ الْمَاءُ بَارِدًا", "اصبح الماء باردا", "أصبح الماء بارداً"],
                errorTarget: "بَارِدٌ",
                explanationOfError: "Esbaha fiilinin haberi merfû değil fetha ile mansûb olmalıdır: بَارِدًا.",
                explanation: "Nâkıs fiilin haberi daima mansûbdur."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    level: 2,
    title: "2. Kitap: Genişleyen Nahiv Halkası",
    arabicTitle: "الكتاب الثاني: التوسع النحوي والإعراب التقديري",
    subtitle: "Mu'tel Fiiller, Maksûr/Menkûs İsimler, Gayr-i Munsarif ve Takdîrî İ'râb",
    desc: "Aynı temel konuların bu kez görünmeyen (takdîrî ve mahallî) i'râb yönleriyle, nekire-marife çeşitleriyle ve illetli fiillerle derinleştirilmesi.",
    chapters: [
      {
        id: "b2-takdiri",
        bookLevel: 2,
        title: "Takdîrî ve Mahallî İ'râb",
        arabicTitle: "الإعراب التقديري والمحلي",
        icon: "💎",
        desc: "Maksûr, menkûs ve mebnî kelimelerde i'râbın mantığı.",
        lessons: []
      }
    ]
  },
  {
    level: 3,
    title: "3. Kitap: Sarf ve Nahiv Sentezi",
    arabicTitle: "الكتاب الثالث: بنية الكلمة والمشتقات",
    subtitle: "Sülâsî/Mezîd Bâblar, Sahih/Mu'tel Fiil Çekimi ve Müştak İsimler",
    desc: "Kelimelerin kökü, vezni, bâbı ile cümledeki fâil ve mef'ûl amellerinin birleştirildiği aşama.",
    chapters: [
      {
        id: "b3-mustak",
        bookLevel: 3,
        title: "Müştak İsimler",
        arabicTitle: "الأسماء المشتقة",
        icon: "🧱",
        desc: "İsm-i fâil, ism-i mef'ûl, sıfat-ı müşebbehe, mübalağa, ism-i tafdîl, zaman-mekân ve âlet isimleri.",
        lessons: []
      }
    ]
  },
  {
    level: 4,
    title: "4. Kitap: İleri Sarf, Amel ve Üslûplar",
    arabicTitle: "الكتاب الرابع: علم الصرف وأساليب البيان",
    subtitle: "Mîzânü's-Sarfî, İ'lâl/İbdâl, Müştakların Ameli ve Klasik Üslûplar",
    desc: "Mevcut rehberlerde bulunmayan: vezin değişimleri, tam/nâkıs mukârebe fiilleri, iğrâ-tahzîr, iştiğâl, istiğâse ve harflerin tam tasnifi.",
    chapters: [
      {
        id: "b4-usluplar",
        bookLevel: 4,
        title: "Klasik Arapça Üslûpları",
        arabicTitle: "الأساليب النحوية والبيانية",
        icon: "🏛️",
        desc: "Şart, istisna, nida, taaccüb, tahzîr ve iştiğâl terkibleri.",
        lessons: []
      }
    ]
  }
];
