import { Book } from '../../types/curriculum';

export const BOOK_3: Book = {
  level: 3,
  title: "3. Kitap: Sarf ve Nahiv Sentezi",
  arabicTitle: "الكتاب الثالث: مدخل إلى التصريف واشتقاق الأسماء",
  subtitle: "Sülâsî ve Mezîd Bâblar, Sahih-Mu'tel Türleri, 7 Müştak İsim ve Masdarlar",
  desc: "Kelimelerin kök (sarf) anatomisi: 6 sülâsî bâb, mezîd bablar ve manaları, ism-i fâil, ism-i mef'ûl, sıfat-ı müşebbehe, masdar çeşitleri, lâzım ve müteaddî fiil yapıları.",
  chapters: [
    {
      id: "b3-sulasi-bablar",
      bookLevel: 3,
      title: "Sülâsî Mücerred ve 6 Bâb",
      arabicTitle: "أَبْوَابُ الْفِعْلِ الثُّلَاثِيِّ الْمُجَرَّدِ",
      icon: "⚖️",
      desc: "Üç harfli kök fiillerin aynü'l-fiil harekelerine göre ayrıldığı 6 temel vezin ve fiil türleri.",
      lessons: [
        {
          id: "b3-l1-sahih-mutel",
          bookLevel: 3,
          chapterId: "b3-sulasi-bablar",
          order: 1,
          title: "Sahih ve Mu'tel Fiil Çeşitleri",
          arabicTitle: "أَقْسَامُ الْفِعْلِ: الصَّحِيحُ وَالْمُعْتَلُّ",
          desc: "Kök harflerinde illet harfi bulunup bulunmamasına göre fiil türleri: Sâlim, Mehmûz, Mudâaf ve Misâl, Ecvef, Nâkıs, Lefîf.",
          starterCard: {
            title: "Odak: Fiilin Kök Yapısı",
            focusPoints: [
              "Sahih Fiil (İllet harfi içermeyenler): Sâlim (كَتَبَ), Mehmûz (أَخَذَ، سَأَلَ، قَرَأَ), Mudâaf/Şeddeli (مَدَّ، فَرَّ).",
              "Mu'tel Fiil (Vâv, Yâ veya Elif içerenler): Misâl (ilk harfi illetli: وَعَدَ، يَئِسَ), Ecvef (orta harfi illetli: قَالَ، بَاعَ), Nâkıs (son harfi illetli: دَعَا، رَمَى), Lefîf (iki harfi illetli: وَقَى، رَوَى).",
              "Sarf kuralı: Kökün harf yapısı çekim esnasında harf düşmelerini (i'lâl) ve şeddeleri belirler."
            ],
            ruleBox: "Kök harflerinde illet harfi (و، ا، ي) bulunmayan fiil SAHİH, en az biri illet harfi olan fiil MU'TEL'dir.",
            transformation: {
              beforeLabel: "Sâlim Fiil Çekimi (Değişmez)",
              beforeArabic: "كَتَبَ ➔ كَتَبْتُ ➔ يَكْتُبُ",
              beforeTr: "Kök harfleri aynen korunur, hiçbir harf düşmez",
              afterLabel: "Ecvef Fiil Çekimi (Harf Düşer)",
              afterArabic: "قَالَ ➔ قُلْتُ ➔ يَقُولُ",
              afterTr: "Keteptü derken düşmeyen harf, Kul-tü derken ortadaki illet harfinin düşmesiyle sonuçlanır",
              highlightExplanation: "Ecvef fiilde sâkin iki harf yan yana gelince ortadaki vâv harfi düşer."
            }
          },
          explanationHtml: `
            <p>Arapça sarf ilminde fiiller asli harflerine göre iki ana kola ayrılır:</p>
            <ol>
              <li><b>الصَّحِيحُ (Sahih):</b> Aslî harflerinde illet harfi (و - ا - ي) bulunmayan fiiller:
                <ul>
                  <li><i>Sâlim:</i> Hemze ve şedde bulunmayan (<span class="ar">كَتَبَ، جَلَسَ، نَصَرَ</span>).</li>
                  <li><i>Mehmûz:</i> Harflerinden biri hemze olan (<span class="ar">أَمَرَ، سَأَلَ، قَرَأَ</span>).</li>
                  <li><i>Mudâaf:</i> İkinci ve üçüncü harfi aynı olan (<span class="ar">مَدَّ، رَدَّ، زَلْزَلَ</span>).</li>
                </ul>
              </li>
              <li><b>الْمُعْتَلُّ (Mu'tel):</b> Aslî harflerinden biri veya ikisi illet harfi olan fiiller:
                <ul>
                  <li><i>Misâl:</i> İlk harfi illetli (<span class="ar">وَعَدَ، وَجَدَ، يَسَرَ</span>).</li>
                  <li><i>Ecvef:</i> Orta harfi illetli (<span class="ar">قَالَ، صَامَ، بَاعَ</span>).</li>
                  <li><i>Nâkıs:</i> Son harfi illetli (<span class="ar">دَعَا، رَمَى، رَضِيَ</span>).</li>
                  <li><i>Lefîf:</i> İki illet harfi olan: Makrûn (<span class="ar">رَوَى، شَوَى</span>) veya Mefrûk (<span class="ar">وَقَى، وَفَى</span>).</li>
                </ul>
              </li>
            </ol>
          `,
          examples: [
            {
              level: "simple",
              arabic: "وَعَدَ الصَّادِقُ فَلَمْ يُخْلِفْ وَقَالَ الْحَقَّ",
              translation: "Doğru sözlü kimse söz verdi ve sözünden dönmedi; hakkı söyledi.",
              analysisText: "وَعَدَ (Misâl-i vâvî), قَالَ (Ecvef-i vâvî)."
            },
            {
              level: "hadith",
              arabic: "قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ",
              translation: "Allah'a inandım de, sonra dosdoğru ol!",
              analysisText: "قُلْ: Ecvef fiilin emridir, illet harfi düşmüştür. اسْتَقِمْ: İstif'âl babında ecvef fiil."
            },
            {
              level: "quran",
              arabic: "وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُمْ",
              translation: "Sabah akşam Rablerine dua edenlerle beraber nefsini sabırlı tut!",
              analysisText: "اصْبِرْ (Sâlim emir), يَدْعُونَ (Nâkıs fiil muzâri cemî).",
              verseRef: { sura: 18, ayah: 28, linkUrl: "index.html#ayet-28" }
            }
          ],
          exercises: [
            {
              id: "b3-l1-ex1",
              type: "sarf_wezn_root",
              prompt: "Aşağıdaki 'قَالَ' (dedi) fiilinin sülâsî kökünü ve veznini belirleyin:",
              targetWord: "قَالَ",
              rootAnswers: ["ق-و-ل", "قول"],
              weznAnswers: ["فَعَلَ", "فعل"],
              babName: "Ecvef-i Vâvî",
              explanation: "قَالَ fiilinin aslı قَوَلَ olup ecvef-i vâvîdir; vâv harfi harekeli ve öncesi fethalı olduğu için elife kalb edilmiştir."
            }
          ]
        },
        {
          id: "b3-l2-alti-bab",
          bookLevel: 3,
          chapterId: "b3-sulasi-bablar",
          order: 2,
          title: "Sülâsî Mücerred 6 Bâb Sistemi",
          arabicTitle: "أَبْوَابُ الثُّلَاثِيِّ السِّتَّةُ",
          desc: "فَتْحُ ضَمٍّ، فَتْحُ كَسْرٍ، فَتْحَتَانِ، كَسْرُ فَتْحٍ، ضَمُّ ضَمٍّ، كَسْرَتَانِ kuralı ve fiillerin hareke uyumu.",
          starterCard: {
            title: "Odak: 6 Bâbın Vezin Formülü",
            focusPoints: [
              "1. Bâb (فَتْحُ ضَمٍّ): فَعَلَ - يَفْعُلُ (نَصَرَ - يَنْصُرُ)",
              "2. Bâb (فَتْحُ كَسْرٍ): فَعَلَ - يَفْعِلُ (ضَرَبَ - يَضْرِبُ)",
              "3. Bâb (فَتْحَتَانِ): فَعَلَ - يَفْعَلُ (فَتَحَ - يَفْتَحُ)",
              "4. Bâb (كَسْرُ فَتْحٍ): فَعِلَ - يَفْعَلُ (عَلِمَ - يَعْلَمُ)",
              "5. Bâb (ضَمُّ ضَمٍّ): فَعُلَ - يَفْعُلُ (حَسُنَ - يَحْسُنُ - sadece lâzımdır)",
              "6. Bâb (كَسْرَتَانِ): فَعِلَ - يَفْعِلُ (حَسِبَ - يَحْسِبُ - en nâdirdir)"
            ],
            ruleBox: "Sülâsî fiillerin bâbı, mâzî ve muzârideki ortanca harfin (aynü'l-fiil) harekesine göre tespit edilir.",
            transformation: {
              beforeLabel: "1. Bâb: Mâzî Fetha / Muzâri Damme",
              beforeArabic: "نَصَرَ ➔ يَنْصُرُ",
              beforeTr: "Sad harfi mâzîde üstün, muzâride ötre",
              afterLabel: "2. Bâb: Mâzî Fetha / Muzâri Kesra",
              afterArabic: "ضَرَبَ ➔ يَضْرِبُ",
              afterTr: "Ra harfi mâzîde üstün, muzâride esre",
              highlightExplanation: "Muzârideki aynü'l-fiil harekesi fiilin hangi babtan geldiğini kesinleştirir."
            }
          },
          explanationHtml: `
            <p>Sarf uleması üç harfli yalın fiilleri mâzî ve muzâri orta harf (aynü'l-fiil) hareke kombinasyonuna göre meşhur beyitte özetlemiştir:</p>
            <p class="ar" style="font-size:1.2rem; text-align:center; color:#059669;">
              فَتْحُ ضَمٍّ ، فَتْحُ كَسْرٍ ، فَتْحَتَانِ ... كَسْرُ فَتْحٍ ، ضَمُّ ضَمٍّ ، كَسْرَتَانِ
            </p>
            <ul>
              <li><b>1. Bâb:</b> <span class="ar">نَصَرَ - يَنْصُرُ</span> (Ketebe, Galebe, Talebe).</li>
              <li><b>2. Bâb:</b> <span class="ar">ضَرَبَ - يَضْرِبُ</span> (Celebe, Recee, Hadere).</li>
              <li><b>3. Bâb:</b> <span class="ar">فَتَحَ - يَفْتَحُ</span> (Boğaz harfi içerir: Zehebe, Karae, Cemea).</li>
              <li><b>4. Bâb:</b> <span class="ar">عَلِمَ - يَعْلَمُ</span> (Şeribe, Fehime, Semie).</li>
              <li><b>5. Bâb:</b> <span class="ar">حَسُنَ - يَحْسُنُ</span> (Tabiat ve seciye bildirir: Kerume, Sahule).</li>
              <li><b>6. Bâb:</b> <span class="ar">حَسِبَ - يَحْسِبُ</span> (Verise, Velie).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "عَلِمَ الطَّالِبُ الْمَسْأَلَةَ فَيَعْلَمُ كَيْفَ يَحُلُّهَا",
              translation: "Öğrenci meseleyi bildi; onu nasıl çözeceğini bilir.",
              analysisText: "عَلِمَ - يَعْلَمُ: 4. bâbdandır (fe'ile - yef'alü)."
            },
            {
              level: "hadith",
              arabic: "مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ",
              translation: "Kim bizim emrimize uygun olmayan bir amel işlerse o merduttur.",
              analysisText: "عَمِلَ: 4. bâb fiil."
            },
            {
              level: "quran",
              arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا",
              translation: "Hamd, kuluna Kitab'ı indiren ve onda hiçbir eğrilik kılmayan Allah'a mahsustur.",
              analysisText: "جَعَلَ - يَجْعَلُ: 3. bâbdandır (fetha - fetha).",
              verseRef: { sura: 18, ayah: 1, linkUrl: "index.html#ayet-1" }
            }
          ],
          exercises: [
            {
              id: "b3-l2-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki 'كَتَبَ' (1. Bâb: fethu dammin) fiilinin muzâri tekil çekimini doğru harekesiyle yazın:",
              sentenceWithBlank: "الطَّالِبُ [___] رِسَالَةً إِلَى أُسْتَاذِهِ .",
              baseWord: "كتب",
              acceptedAnswers: ["يَكْتُبُ", "يكتبُ", "يكتب"],
              explanation: "1. bâbdan gelen ketebe fiilinin muzâri aynü'l-fiili (te harfi) dammelidir: يَكْتُبُ.",
              hint: "Te harfini dammeli yapın: يَكْتُبُ."
            }
          ]
        }
      ]
    },
    {
      id: "b3-mezid-bablar",
      bookLevel: 3,
      title: "Sülâsî Mezîd Bâblar (Türetim Sarfı)",
      arabicTitle: "أَبْوَابُ الثُّلَاثِيِّ الْمَزِيدِ فِيهِ",
      icon: "🏗️",
      desc: "Üç harfli köke 1, 2 veya 3 harf eklenerek türetilen İf'âl, Tef'îl, Mufâ'ale, İnfi'âl, İfti'âl, Tefa'ul ve İstif'âl bâbları.",
      lessons: [
        {
          id: "b3-l3-rubai-mezidler",
          bookLevel: 3,
          chapterId: "b3-mezid-bablar",
          order: 3,
          title: "4 Harfli Mezîdler: İf'âl, Tef'îl ve Mufâ'ale",
          arabicTitle: "الْمَزِيدُ بِحَرْفٍ: إِفْعَال، تَفْعِيل، مُفَاعَلَة",
          desc: "Hemze ilavesiyle İf'âl (أَكْرَمَ), şedde ilavesiyle Tef'îl (عَلَّمَ), elif ilavesiyle Mufâ'ale (قَاتَلَ).",
          starterCard: {
            title: "Odak: 1 Harf İlavesiyle Türeyen 3 Bâb",
            focusPoints: [
              "İf'âl (أَفْعَلَ يُفْعِلُ إِفْعَالًا): Genellikle lâzımı müteaddî yapar (Geçişlilik / Ta'diye): خَرَجَ (çıktı) ➔ أَخْرَجَ (çıkardı).",
              "Tef'îl (فَعَّلَ يُفَعِّلُ تَفْعِيلًا): Çokluk, şiddet veya tedrîcîlik bildirir: عَلِمَ (bildi) ➔ عَلَّمَ (öğretti), قَطَّعَ (parça parça etti).",
              "Mufâ'ale (فَاعَلَ يُفَاعِلُ مُفَاعَلَةً): İki kişi arasında karşılıklılık (Müşâreket) bildirir: كَتَبَ (yazdı) ➔ كَاتَبَ (yazıştı)."
            ],
            ruleBox: "Mezîd bâblar kök anlama yeni semantik boyutlar (ta'diye, müşâreket, mübâlağa, tekellüf) katar.",
            transformation: {
              beforeLabel: "Yalın Kök (Geçişsiz)",
              beforeArabic: "نَزَلَ الْمَطَرُ مِنَ السَّمَاءِ",
              beforeTr: "Yağmur gökten indi (Lâzım / kendi kendine oldu)",
              afterLabel: "İf'âl Babı (Geçişli / Ettirgen)",
              afterArabic: "أَنْزَلَ اللَّهُ الْمَطَرَ مِنَ السَّمَاءِ",
              afterTr: "Allah gökten yağmuru indirdi (Müteaddî oldu, nesne aldı)",
              highlightExplanation: "Başa gelen hemze fiili bir nesne (mef'ûl) alacak hale geçirmiştir."
            }
          },
          explanationHtml: `
            <p>Sülâsî köke tek harf ilave edilerek kurulan 3 bâb Arapça kelime dağarcığının temelidir:</p>
            <table class="irab-table">
              <thead>
                <tr><th>Bâb</th><th>Mâzî</th><th>Muzâri</th><th>Masdar</th><th>Temel Manası</th></tr>
              </thead>
              <tbody>
                <tr><td><b>İf'âl</b></td><td>أَكْرَمَ</td><td>يُكْرِمُ</td><td>إِكْرَامًا</td><td>Ta'diye (Geçişli kılma)</td></tr>
                <tr><td><b>Tef'îl</b></td><td>عَلَّمَ</td><td>يُعَلِّمُ</td><td>تَعْلِيمًا</td><td>Tekrarlama & Öğretme</td></tr>
                <tr><td><b>Mufâ'ale</b></td><td>شَارَكَ</td><td>يُشَارِكُ</td><td>مُشَارَكَةً</td><td>Müşâreket (Ortaklaşa iş)</td></tr>
              </tbody>
            </table>
          `,
          examples: [
            {
              level: "simple",
              arabic: "أَخْرَجَ الْمُعَلِّمُ الْكِتَابَ وَشَارَكَ الطُّلَّابَ فِي الْقِرَاءَةِ",
              translation: "Öğretmen kitabı çıkardı ve okumada öğrencilere ortak oldu.",
              analysisText: "أَخْرَجَ (İf'âl babı), شَارَكَ (Mufâ'ale babı)."
            },
            {
              level: "hadith",
              arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
              translation: "Sizin en hayırlınız Kur'an'ı öğrenen ve öğreteninizdir.",
              analysisText: "تَعَلَّمَ (Tefa'ul), عَلَّمَ (Tef'îl babı)."
            },
            {
              level: "quran",
              arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
              translation: "Kuluna Kitab'ı indiren Allah'a hamdolsun.",
              analysisText: "أَنزَلَ: İf'âl babından mâzî fiildir (Kök: ن-ز-ل).",
              verseRef: { sura: 18, ayah: 1, linkUrl: "index.html#ayet-1" }
            }
          ],
          exercises: [
            {
              id: "b3-l3-ex1",
              type: "sarf_wezn_root",
              prompt: "Aşağıdaki 'أَخْرَجَ' fiilinin kök harflerini ve veznini yazın:",
              targetWord: "أَخْرَجَ",
              rootAnswers: ["خ-ر-ج", "خرج"],
              weznAnswers: ["أَفْعَلَ", "أفعل"],
              babName: "İf'âl",
              explanation: "Kökü خ-ر-ج olup başına ziyâde hemze gelerek أَفْعَلَ vezninde İf'âl bâbına girmiştir."
            }
          ]
        },
        {
          id: "b3-l4-humasi-sudasi",
          bookLevel: 3,
          chapterId: "b3-mezid-bablar",
          order: 4,
          title: "5 ve 6 Harfli Bâblar: İnfi'âl, İfti'âl, Tefa'ul ve İstif'âl",
          arabicTitle: "الْخُمَاسِيُّ وَالسُّدَاسِيُّ: اِنْفِعَال، اِفْتِعَال، تَفَعُّل، اِسْتِفْعَال",
          desc: "Dönüşlülük (mutâvaat), gayret (iktisâb) ve talep anlamları taşıyan ileri türetim vezinleri.",
          starterCard: {
            title: "Odak: Dönüşlülük ve Talep Bâbları",
            focusPoints: [
              "İnfi'âl (اِنْفَعَلَ): Sadece mutâvaat (etkiyi kabul etme/dönüşlülük) içindir ve daima lâzımdır: كَسَرْتُهُ فَانْكَسَرَ (Kırdım, kırıldı).",
              "İfti'âl (اِفْتَعَلَ): Çaba, benimseme ve mutâvaat: جَمَعَ ➔ اِجْتَمَعَ (Toplandı).",
              "Tefa'ul (تَفَعَّلَ): Tedricilik ve zorlanarak edinme (Tekellüf): تَعَلَّمَ (Adım adım öğrendi).",
              "İstif'âl (اِسْتَفْعَلَ): Bir şeyi talep etme/istemek: غَفَرَ (Bağışladı) ➔ اِسْتَغْفَرَ (Bağışlanma diledi)."
            ],
            ruleBox: "İnfi'âl bâbı asla mef'ûl almaz (daima lâzımdır). İstif'âl babı ise genellikle 'talep' manası yükler.",
            transformation: {
              beforeLabel: "Yalın Kök",
              beforeArabic: "غَفَرَ اللَّهُ لِلْعَبْدِ",
              beforeTr: "Allah kulu bağışladı",
              afterLabel: "İstif'âl Bâbı (Talep)",
              afterArabic: "اسْتَغْفَرَ الْعَبْدُ رَبَّهُ",
              afterTr: "Kul Rabbinden bağışlanma istedi (İstiğfâr etti)",
              highlightExplanation: "İstif'âl babı kök fiile 'istemek / talep etmek' manası katmıştır."
            }
          },
          explanationHtml: `
            <p>5 ve 6 harfli mezîd bâblar eylemin gerçekleşme tarzını zenginleştirir:</p>
            <ul>
              <li><b>اِنْفِعَال (İnfi'âl):</b> Eylemin sonucunu kabullenme: <span class="ar">كَسَرَ ➔ انْكَسَرَ</span>.</li>
              <li><b>اِفْتِعَال (İfti'âl):</b> Kendi gayretiyle yapma: <span class="ar">كَسَبَ ➔ اكْتَسَبَ</span>.</li>
              <li><b>تَفَعُّل (Tefa'ul):</b> Aşamalı ve gayretli eylem: <span class="ar">عَلِمَ ➔ تَعَلَّمَ</span>.</li>
              <li><b>اِسْتِفْعَال (İstif'âl):</b> Talep ve arama: <span class="ar">غَفَرَ ➔ اسْتَغْفَرَ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "اسْتَغْفَرَ التَّائِبُ ذَنْبَهُ وَانْشَرَحَ صَدْرُهُ",
              translation: "Tövbe eden günahı için bağışlanma diledi ve göğsü ferahladı.",
              analysisText: "اسْتَغْفَرَ (İstif'âl babı), انْشَرَحَ (İnfi'âl babı - lâzım)."
            },
            {
              level: "hadith",
              arabic: "وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا رِضًا لِطَالِبِ الْعِلْمِ",
              translation: "Melekler ilim talep eden kimseden hoşnut olarak kanatlarını yere sererler.",
              analysisText: "طالب ilim talebi ve sarf vezinleri."
            },
            {
              level: "quran",
              arabic: "وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُمْ بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ",
              translation: "Sabah akşam Rablerinin rızasını dileyerek O'na yalvaranlarla beraber nefsini sabırlı tut!",
              analysisText: "يُرِيدُونَ (İf'âl muzârisi).",
              verseRef: { sura: 18, ayah: 28, linkUrl: "index.html#ayet-28" }
            }
          ],
          exercises: [
            {
              id: "b3-l4-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede 'غَفَرَ' kökünden türeyen İstif'âl masdarını (İstiğfâr) uygun biçimde boşluğa yazın:",
              sentenceWithBlank: "يُكْثِرُ الْمُؤْمِنُ مِنَ [___] فِي السَّحَرِ .",
              baseWord: "استغفار",
              acceptedAnswers: ["الِاسْتِغْفَارِ", "الاستغفارِ", "الاستغفار"],
              explanation: "İstif'âl bâbının masdarı اِسْتِفْعَال veznindedir: الِاسْتِغْفَارِ.",
              hint: "Harf-i cerden sonra kesralı yapın."
            }
          ]
        }
      ]
    },
    {
      id: "b3-mustak-isimler",
      bookLevel: 3,
      title: "7 Müştak İsim (Türemiş İsimler)",
      arabicTitle: "الْأَسْمَاءُ الْمُشْتَقَّةُ السَّبْعَةُ",
      icon: "💎",
      desc: "Kökten türeyen sıfat ve isim kalıpları: İsm-i Fâil, İsm-i Mef'ûl, Sıfat-ı Müşebbehe, Mübalağa, İsm-i Tafdîl, Mekân/Zaman ve Âlet isimleri.",
      lessons: [
        {
          id: "b3-l5-fail-meful-isimleri",
          bookLevel: 3,
          chapterId: "b3-mustak-isimler",
          order: 5,
          title: "İsm-i Fâil ve İsm-i Mef'ûl Kalıpları",
          arabicTitle: "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُولِ",
          desc: "Sülâsîlerde فَاعِل ve مَفْعُول; mezîdlerde ise muzâri harfi yerine ötreli mîm (مُـ) getirilerek yapılan kalıplar.",
          starterCard: {
            title: "Odak: İsm-i Fâil ve İsm-i Mef'ûl",
            focusPoints: [
              "Sülâsî Fiillerden: İsm-i fâil فَاعِلٌ veznindedir (كَتَبَ ➔ كَاتِبٌ). İsm-i mef'ûl مَفْعُولٌ veznindedir (كَتَبَ ➔ مَكْتُوبٌ).",
              "Mezîd Fiillerden: Muzâri harfi atılır, yerine ötreli mîm (مُـ) konur. Aynü'l-fiil KESRA ise ism-i fâil (مُكْرِمٌ), FETHA ise ism-i mef'ûl (مُكْرَمٌ) olur.",
              "İsm-i fâil işi yapanı, ism-i mef'ûl ise işten etkileneni gösterir."
            ],
            ruleBox: "Mezîd fiillerde ism-i fâil sondan bir önceki harfi KESRALI (مُسْتَغْفِر), ism-i mef'ûl ise FETHALI (مُسْتَغْفَر) olandır.",
            transformation: {
              beforeLabel: "Sülâsî Türetim",
              beforeArabic: "نَصَرَ ➔ نَاصِرٌ (Fâil) / مَنْصُورٌ (Mef'ûl)",
              beforeTr: "Yardım eden / Yardım edilmiş",
              afterLabel: "Mezîd Türetim (Ötreli Mîm)",
              afterArabic: "أَكْرَمَ ➔ مُكْرِمٌ (İkram eden) / مُكْرَمٌ (İkram olunan)",
              afterTr: "Esre ile fâil, üstün ile mef'ûl ismi yapılır",
              highlightExplanation: "Mezîdlerde fâil ile mef'ûl arasındaki yegâne fark sondan bir önceki harfin harekesidir."
            }
          },
          explanationHtml: `
            <p>Müştaklar fiilden türeyip eylemin fâilini veya nesnesini niteleyen isimlerdir:</p>
            <ul>
              <li><b>Sülâsî İsm-i Fâil:</b> <span class="ar">عَالِمٌ، صَابِرٌ، قَائِلٌ، رَاعٍ</span>.</li>
              <li><b>Sülâsî İsm-i Mef'ûl:</b> <span class="ar">مَعْلُومٌ، مَكْتُوبٌ، مَقُولٌ، مَرْمِيٌّ</span>.</li>
              <li><b>Mezîd İsm-i Fâil:</b> <span class="ar">مُعَلِّمٌ، مُجْتَهِدٌ، مُسْتَغْفِرٌ</span>.</li>
              <li><b>Mezîd İsm-i Mef'ûl:</b> <span class="ar">مُعَلَّمٌ، مُجْتَمَعٌ، مُسْتَغْفَرٌ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "الْمُعَلِّمُ نَاصِحٌ لِلطُّلَّابِ وَكَلَامُهُ مَسْمُوعٌ",
              translation: "Öğretmen öğrencilere öğüt verendir ve sözü dinlenendir.",
              analysisText: "الْمُعَلِّمُ (mezîd ism-i fâil), نَاصِحٌ (sülâsî ism-i fâil), مَسْمُوعٌ (ism-i mef'ûl)."
            },
            {
              level: "hadith",
              arabic: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ",
              translation: "Güçlü mümin Allah katında zayıf müminden daha hayırlı ve daha sevimlidir.",
              analysisText: "الْمُؤْمِنُ: İf'âl babından ism-i fâil (آمن يُؤمِن فهو مُؤْمِن)."
            },
            {
              level: "quran",
              arabic: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ",
              translation: "Köpekleri de girişte iki kolunu uzatmış vaziyetteydi.",
              analysisText: "بَاسِطٌ: Sülâsî ism-i fâildir (فَاعِل vezninde) ve amel ederek ذِرَاعَيْهِ kelimesini mef'ûl almıştır.",
              verseRef: { sura: 18, ayah: 18, linkUrl: "index.html#ayet-18" }
            }
          ],
          exercises: [
            {
              id: "b3-l5-ex1",
              type: "sarf_wezn_root",
              prompt: "Aşağıdaki 'مَنْصُور' kelimesinin sülâsî kökünü ve veznini belirleyin:",
              targetWord: "مَنْصُور",
              rootAnswers: ["ن-ص-ر", "نصر"],
              weznAnswers: ["مَفْعُول", "مفعول"],
              babName: "İsm-i Mef'ûl",
              explanation: "نَصَرَ kökünden türeyen sülâsî ism-i mef'ûldür."
            }
          ]
        },
        {
          id: "b3-l6-tafdil-zaman-mekan",
          bookLevel: 3,
          chapterId: "b3-mustak-isimler",
          order: 6,
          title: "İsm-i Tafdîl, İsm-i Mekân, İsm-i Zaman ve İsm-i Âlet",
          arabicTitle: "اِسْمُ التَّفْضِيلِ، وَاسْمَا الزَّمَانِ وَالْمَكَانِ، وَاسْمُ الْآلَةِ",
          desc: "Karşılaştırma ve üstünlük (أَفْعَل), mekan/zaman (مَفْعَل / مَفْعِل) ve alet isimleri (مِفْعَال، مِفْعَل، مِفْعَلَة).",
          starterCard: {
            title: "Odak: Tafdîl, Mekân ve Âlet Kalıpları",
            focusPoints: [
              "İsm-i Tafdîl (أَفْعَلُ): Üstünlük bildirir (أَكْبَرُ - daha büyük, أَحْسَنُ - daha güzel). Gayr-i munsariftir.",
              "İsm-i Zaman ve Mekân: Eylemin yapıldığı yer ve zamanı bildirir. Sülâsîlerde مَفْعَلٌ (مَكْتَبٌ - yazıhane) veya مَفْعِلٌ (مَسْجِدٌ - secde yeri) veznindedir.",
              "İsm-i Âlet: İşi yapmakta kullanılan vasıtayı bildirir: مِفْتَاحٌ (anahtar), مِبْرَدٌ (eğe), مِكْنَسَةٌ (süpürge)."
            ],
            ruleBox: "İsm-i zaman ve mekân kalıbı mezîd fiillerde aynen ism-i mef'ûl (مُسْتَشْفَى - hastane) vezninde gelir.",
            transformation: {
              beforeLabel: "Kök Fiil",
              beforeArabic: "فَتَحَ الْبَابَ بِالْيَدِ",
              beforeTr: "Kapıyı eliyle açtı",
              afterLabel: "İsm-i Âlet Kullanımı",
              afterArabic: "فَتَحَ الْبَابَ بِالْمِفْتَاحِ",
              afterTr: "Kapıyı anahtarla açtı (مِفْتَاح = açma aleti)",
              highlightExplanation: "Fiilden alet ismi مِفْعَال vezninde türetilmiştir."
            }
          },
          explanationHtml: `
            <p>Müştak isimlerin özel fonksiyonel kalıpları:</p>
            <ul>
              <li><b>İsm-i Tafdîl (<span class="ar">أَفْعَلُ</span>):</b> İki şey arasında bir vasfın üstünlüğünü bildirir: <span class="ar">الْعِلْمُ أَنْفَعُ مِنَ الْمَالِ</span>. Dişili <span class="ar">فُعْلَى</span> kalıbındadır (<span class="ar">كُبْرَى، عُلْيَا</span>).</li>
              <li><b>İsm-i Mekân ve Zaman (<span class="ar">مَفْعَلٌ / مَفْعِلٌ</span>):</b> Eylemin mekanını veya vaktini bildirir: <span class="ar">مَكْتَبٌ، مَسْجِدٌ، مَوْعِدٌ</span>.</li>
              <li><b>İsm-i Âlet:</b> Eylemin aletini bildirir: <span class="ar">مِفْتَاحٌ، مِيزَانٌ، مِقَصٌّ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "الْعِلْمُ أَنْفَعُ مِنَ الْمَالِ ، وَالْمَسْجِدُ مَجْمَعُ الْمُؤْمِنِينَ",
              translation: "İlim maldan daha faydalıdır; mescid ise müminlerin toplanma yeridir.",
              analysisText: "أَنْفَعُ (ism-i tafdîl), مَجْمَعُ (ism-i mekân)."
            },
            {
              level: "hadith",
              arabic: "أَحَبُّ الْبِلَادِ إِلَى اللَّهِ مَسَاجِدُهَا",
              translation: "Şehirlerin Allah'a en sevimli olan yerleri mescidleridir.",
              analysisText: "أَحَبُّ ism-i tafdîl, مَسَاجِد ism-i mekân çoğulu."
            },
            {
              level: "quran",
              arabic: "مَا لَهُم مِّن دُونِهِ مِن وَلِيٍّ وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا",
              translation: "Onların O'ndan başka hiçbir dostu yoktur; O kendi hükmüne kimseyi ortak kılmaz.",
              analysisText: "Kahf Suresi sarf tahlili.",
              verseRef: { sura: 18, ayah: 26, linkUrl: "index.html#ayet-26" }
            }
          ],
          exercises: [
            {
              id: "b3-l6-ex1",
              type: "sarf_wezn_root",
              prompt: "Aşağıdaki 'مِفْتَاح' (anahtar) alet isminin kökünü ve veznini belirleyin:",
              targetWord: "مِفْتَاح",
              rootAnswers: ["ف-ت-ح", "فتح"],
              weznAnswers: ["مِفْعَال", "مفعال"],
              babName: "İsm-i Âlet",
              explanation: "فَتَحَ kökünden türetilmiş alet ismidir, vezni مِفْعَال'dır."
            }
          ]
        }
      ]
    }
  ]
};
