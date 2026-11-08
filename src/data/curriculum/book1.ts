import { Book } from '../../types/curriculum';

export const BOOK_1: Book = {
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
        },
        {
          id: "b1-l2-mebni-mureb",
          bookLevel: 1,
          chapterId: "b1-kelime",
          order: 2,
          title: "Mebnî ve Mu'reb Kelimeler",
          arabicTitle: "الْمَبْنِيُّ وَالْمُعْرَبُ",
          desc: "Son harfinin harekesi değişenler (Mu'reb) ve daima sabit kalanlar (Mebnî).",
          starterCard: {
            title: "Odak: Değişen ve Sabit Kalan Kelimeler",
            focusPoints: [
              "Mu'reb: Cümledeki amile göre son harekesi değişen kelimelerdir (Çoğu isim ve muzâri fiil).",
              "Mebnî: Önüne ne gelirse gelsin son harekesi asla değişmeyen kelimelerdir (Tüm harfler, mâzî, emir, zamirler, işaret isimleri).",
              "Mebnî bir kelime fetha, damme, kesra veya sükûn üzere mebnîdir denir."
            ],
            ruleBox: "Harflerin tamamı mebnîdir, mahalli i'râbı yoktur. İsimlerin aslı ise mu'reb olmaktır.",
            transformation: {
              beforeLabel: "Mu'reb İsim (Değişken)",
              beforeArabic: "جَاءَ زَيْدٌ ➔ رَأَيْتُ زَيْدًا ➔ مَرَرْتُ بِزَيْدٍ",
              beforeTr: "Damme ➔ Fetha ➔ Kesra (Göreve göre harekesi değişti)",
              afterLabel: "Mebnî İsim (Sabit)",
              afterArabic: "جَاءَ هَـٰذَا ➔ رَأَيْتُ هَـٰذَا ➔ مَرَرْتُ بِهَـٰذَا",
              afterTr: "hâzâ her durumda aynı sükûn üzere kaldı",
              highlightExplanation: "Mebnî kelimeler görev değişse de lafzen şekil değiştirmez, mahallen i'râb edilir."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 19'a göre kelimeler son durumlarına göre ikiye ayrılır:</p>
            <ul>
              <li><b>الْمُعْرَبُ:</b> Âmillerin değişmesiyle sonu değişen kelimedir. Örn: <span class="ar">الْقَلَمُ، الْقَلَمَ، الْقَلَمِ</span>.</li>
              <li><b>الْمَبْنِيُّ:</b> Âmiller değişse bile son hâli tek bir şekilde sabit kalan kelimedir: <span class="ar">كَتَبَ</span> (fetha üzere mebnî), <span class="ar">مِنْ</span> (sükûn üzere mebnî), <span class="ar">هَـٰذَا</span> (sükûn üzere mebnî).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "كَتَبَ هَـٰذَا الطَّالِبُ الدَّرْسَ",
              translation: "Bu öğrenci dersi yazdı.",
              analysisText: "كَتَبَ (mâzî fiil, fetha üzere mebnî), هَـٰذَا (işaret ismi, sükûn üzere mebnî fâil)."
            },
            {
              level: "quran",
              arabic: "قَالَ لَهُ صَاحِبُهُ وَهُوَ يُحَاوِرُهُ",
              translation: "Arkadaşı ona hitap ederek dedi ki...",
              analysisText: "قَالَ (mebnî mâzî fiil), هُوَ (mebnî zamir, mübteda mahallen merfû).",
              verseRef: { sura: 18, ayah: 37, linkUrl: "index.html#ayet-37" }
            }
          ],
          exercises: [
            {
              id: "b1-l2-ex1",
              type: "irab_matrix",
              prompt: "Aşağıdaki cümlede altı çizili mebnî kelimenin künyesini çıkarın:",
              targetSentence: "سَلَّمْتُ عَلَى هَـٰذَا",
              targetWord: "هَـٰذَا",
              fields: [
                { label: "Kelime Grubu", acceptedAnswers: ["işaret ismi", "isaret ismi", "isim"] },
                { label: "Mu'reb / Mebnî", acceptedAnswers: ["mebnî", "mebni"] },
                { label: "İ'râb Mahalli", acceptedAnswers: ["mahallen mecrûr", "mahallen mecrur", "mecrur"] }
              ],
              explanation: "İşaret isimleri mebnîdir; harf-i cerden sonra geldiklerinde mahallen mecrûr olurlar."
            }
          ]
        }
      ]
    },
    {
      id: "b1-fiil-irabi",
      bookLevel: 1,
      title: "Fiil-i Muzâri'nin İ'râbı",
      arabicTitle: "إِعْرَابُ الْفِعْلِ الْمُضَارِعِ",
      icon: "⚡",
      desc: "Muzâriyi nasb eden edatlar (أَنْ، لَنْ، كَيْ، إِذَنْ) ve cezm eden edatlar (لَمْ، لَمَّا، لا، لام).",
      lessons: [
        {
          id: "b1-l3-muzari-nasb",
          bookLevel: 1,
          chapterId: "b1-fiil-irabi",
          order: 3,
          title: "Muzâriyi Nasb Eden 4 Edat",
          arabicTitle: "نَوَاصِبُ الْمُضَارِعِ",
          desc: "Fiil-i muzârinin önüne gelip sonunu fetha yapan edatlar: أَنْ، لَنْ، كَيْ، إِذَنْ.",
          starterCard: {
            title: "Odak: Muzâriyi Mansûb Kılan Edatlar",
            focusPoints: [
              "Muzâri fiilin asıl hâli merfûdur (damme alır): يَكْتُبُ.",
              "Başına nasb edatı geldiğinde sonu fetha olur: لَنْ يَكْتُبَ.",
              "Dört temel nasb edatı vardır: أَنْ (-mek, -mak masdariyye), لَنْ (asla, gelecek zaman olumsuzu), كَيْ (-sın diye, sebep), إِذَنْ (o halde, cevap)."
            ],
            ruleBox: "Nasb alameti müfred fiilde fetha, ef'âl-i hamsede ise sondaki nûn harfinin düşmesidir (hazf-ı nûn).",
            transformation: {
              beforeLabel: "Merfû Muzâri (Asıl Hâl)",
              beforeArabic: "يَذْهَبُ زَيْدٌ",
              beforeTr: "Zeyd gidiyor (Sonu dammeli)",
              afterLabel: "Nasb Edatı Girdikten Sonra",
              afterArabic: "لَنْ يَذْهَبَ زَيْدٌ",
              afterTr: "Zeyd asla gitmeyecek (Fetha ile MANSÛB oldu)",
              highlightExplanation: "لَنْ edatı fiili hem gelecekte kesin olumsuz yaptı hem de sonunu fethaya çevirdi."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 34 ve sunumlarımızdaki kural:</p>
            <p>Muzâri fiil şu dört edattan biriyle mansûb olur:</p>
            <ul>
              <li><b>أَنْ (Masdariyye):</b> Fiili masdar manasına çevirir: <span class="ar">أُرِيدُ أَنْ أَقْرَأَ</span> (Okumak istiyorum).</li>
              <li><b>لَنْ (Nefy-i İstikbâl):</b> Geleceği kesin olumsuzlar: <span class="ar">لَنْ أَكْذِبَ</span> (Asla yalan söylemeyeceğim).</li>
              <li><b>كَيْ (Sebep / Ta'lîl):</b> Amaç bildirir: <span class="ar">جِئْتُ كَيْ أَتَعَلَّمَ</span> (Öğreneyim diye geldim).</li>
              <li><b>إِذَنْ (Cevap):</b> Cümleye 'öyleyse / o halde' anlamı katar.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ",
              translation: "Arapça öğrenmek istiyorum.",
              analysisText: "أَنْ nasb edatı; أَتَعَلَّمَ fetha ile mansûb muzâri fiil."
            },
            {
              level: "quran",
              arabic: "فَأَرَدتُّ أَنْ أَعِيبَهَا",
              translation: "Onu kusurlu kılmak istedim.",
              analysisText: "أَنْ edatından sonra gelen أَعِيبَ fiili açık fetha ile mansûbdur.",
              verseRef: { sura: 18, ayah: 79, linkUrl: "index.html#ayet-79" }
            },
            {
              level: "quran",
              arabic: "قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ",
              translation: "Ona tapmaktan asla vazgeçmeyeceğiz dediler.",
              analysisText: "لَنْ edatı نَبْرَحَ fiilini fetha ile nasb etmiştir.",
              verseRef: { sura: 20, ayah: 91 }
            }
          ],
          exercises: [
            {
              id: "b1-l3-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede fiili nasb edatı sonrasına uygun harekeli hâliyle boşluğa yazın:",
              sentenceWithBlank: "يَجِبُ عَلَيْكَ أَنْ [___] الدَّرْسَ .",
              baseWord: "تَفْهَمُ",
              acceptedAnswers: ["تَفْهَمَ", "تفهمَ", "تفهم"],
              explanation: "أَنْ edatından sonra muzâri fiil fetha ile mansûb olur: تَفْهَمَ.",
              hint: "Fiilin son harekesini fetha (َ) yapın."
            },
            {
              id: "b1-l3-ex2",
              type: "error_correction",
              prompt: "Aşağıdaki cümledeki hareke hatasını tespit edip cümlenin doğrusunu yazın:",
              incorrectSentence: "لَنْ يَرْجِعُ الْمُسَافِرُ الْيَوْمَ .",
              acceptedCorrectSentences: ["لَنْ يَرْجِعَ الْمُسَافِرُ الْيَوْمَ", "لن يرجعَ المسافر اليوم"],
              errorTarget: "يَرْجِعُ",
              explanationOfError: "لَنْ edatından sonra muzâri fiil damme alamaz; fetha ile mansûb olmalıdır: يَرْجِعَ.",
              explanation: "Len edatı muzâriyi nasbeder."
            }
          ]
        },
        {
          id: "b1-l4-muzari-cezm",
          bookLevel: 1,
          chapterId: "b1-fiil-irabi",
          order: 4,
          title: "Muzâriyi Cezm Eden Edatlar",
          arabicTitle: "جَوَازِمُ الْمُضَارِعِ",
          desc: "Tek bir fiili cezmeden meşhur dört edat: لَمْ، لَمَّا، لا النَّاهِيَة، لاَمُ الأَمْر.",
          starterCard: {
            title: "Odak: Muzâriyi Meczûm Kılan Amiller",
            focusPoints: [
              "Muzâri fiilin başına cezm edatı geldiğinde asıl alâmet sükûndur (ْ): لَمْ يَكْتُبْ.",
              "لَمْ geçmişi olumsuzlar (yazmadı); لَمَّا henüz yapmadı anlamı katar.",
              "لَا النَّاهِيَة yasaklama bildirir (لَا تَكْتُبْ = yazma!); لَامُ الأَمْر ise üçüncü şahsa emir verir (لِيَكْتُبْ = yazsın!)."
            ],
            ruleBox: "Cezm alâmeti: Sahih fiilde sükûn (ْ), illetli fiilde son harfin düşmesi (hazf-ı illet), 5 fiilde ise nûn harfinin düşmesidir.",
            transformation: {
              beforeLabel: "Merfû Fiil",
              beforeArabic: "يَجْعَلُ",
              beforeTr: "Kılıyor / yapıyor (Dammeli)",
              afterLabel: "Meczûm Fiil",
              afterArabic: "وَلَمْ يَجْعَلْ",
              afterTr: "Kılmadı (Sükûn ile MECZÛM oldu)",
              highlightExplanation: "لَمْ edatı geçmiş zaman olumsuzu yaptı ve fiilin sonunu sükûnla cezm etti."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 35'e göre tek fiili cezmeden 4 harf şunlardır:</p>
            <ul>
              <li><b>لَمْ:</b> Fiilin manasını geçmişe çevirip olumsuzlar: <span class="ar">لَمْ يَحْضُرْ</span> (Gelmedi).</li>
              <li><b>لَمَّا:</b> Konuşma anına kadar henüz gerçekleşmediğini bildirir: <span class="ar">لَمَّا يَرْجِعْ</span> (Henüz dönmedi).</li>
              <li><b>لَامُ الأَمْرِ:</b> Emir lâmıdır: <span class="ar">لِيُنْفِقْ</span> (İnfak etsin!).</li>
              <li><b>لَا النَّاهِيَةُ:</b> Yasaklama lâ'sıdır: <span class="ar">لَا تَحْزَنْ</span> (Üzülme!).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "لَا تَكْتُبْ عَلَى الْجِدَارِ",
              translation: "Duvara yazma!",
              analysisText: "لَا nehiy harfi; تَكْتُبْ sükûn ile meczûm muzâri fiil."
            },
            {
              level: "quran",
              arabic: "وَلَمْ يَجْعَل لَّهُۥ عِوَجَاۜ",
              translation: "Onda hiçbir eğrilik kılmadı.",
              analysisText: "لَمْ cezm harfi; يَجْعَلْ sükûn ile meczûm muzâri fiildir.",
              verseRef: { sura: 18, ayah: 1, linkUrl: "index.html#ayet-1" }
            }
          ],
          exercises: [
            {
              id: "b1-l4-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede fiili cezm edatından sonraya uygun sükûnlu hâliyle yazın:",
              sentenceWithBlank: "الطَّالِبُ لَمْ [___] إِلَى الْمَدْرَسَةِ أَمْسِ .",
              baseWord: "يَذْهَبُ",
              acceptedAnswers: ["يَذْهَبْ", "يذهبْ", "يذهب"],
              explanation: "لَمْ edatından sonra sahih muzâri fiil sükûn ile meczûm olur: يَذْهَبْ.",
              hint: "Son harfe sükûn (ْ) koyun."
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
          id: "b1-l5-fail-naib",
          bookLevel: 1,
          chapterId: "b1-merfuat",
          order: 5,
          title: "Fâil ve Nâib-i Fâil (Özne ve Sözde Özne)",
          arabicTitle: "الْفَاعِلُ وَنَائِبُ الْفَاعِلِ",
          desc: "Fiil cümlesinin merfû özneleri; malûm fiilde fâil, meçhul fiilde nâib-i fâil.",
          starterCard: {
            title: "Odak: Fiil Cümlesinin Merfû Özneleri",
            focusPoints: [
              "Fâil: Etken (malûm) fiilden sonra gelen ve işi yapan merfû isimdir.",
              "Nâib-i Fâil: Edilgen (meçhul) fiilden sonra gelen ve gerçek fâil gizlendiğinde nesnenin onun yerine geçtiği merfû ögedir.",
              "Fiil meçhul yapıldığında mâzîde başı dammelenir, sondan önceki kesralanır: كَتَبَ ➔ كُتِبَ."
            ],
            ruleBox: "Kural: Hem fâil hem nâib-i fâil daima MERFÛDUR (damme, tesniyede elif, cemi müzekkerde vâv alır).",
            transformation: {
              beforeLabel: "Malûm Cümle (Fâil Açık)",
              beforeArabic: "وَضَعَ الْمَلَكُ الْكِتَابَ",
              beforeTr: "Melek kitabı koydu (el-Kitâbe nesne/mansûb)",
              afterLabel: "Meçhul Cümle (Nâib-i Fâil)",
              afterArabic: "وَوُضِعَ الْكِتَابُ",
              afterTr: "Kitap ortaya kondu (el-Kitâbu nâib-i fâil/MERFÛ oldu)",
              highlightExplanation: "Fâil kaldırılınca nesne fâilin makamına geçip merfû (damme) oldu."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 38–39'daki kural:</p>
            <ul>
              <li><b>الْفَاعِلُ:</b> Kendisinden önce tam malûm fiil geçen ve fiili yapan merfû isimdir: <span class="ar">حَضَرَ الْمُعَلِّمُ</span>.</li>
              <li><b>نَائِبُ الْفَاعِلِ:</b> Fâili zikredilmeyen meçhul fiilden sonra gelip fâilin ref' hükmünü alan isimdir: <span class="ar">كُتِبَ الدَّرْسُ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "فَتَحَ الْوَلَدُ الْبَابَ ➔ فُتِحَ الْبَابُ",
              translation: "Çocuk kapıyı açtı ➔ Kapı açıldı.",
              analysisText: "الْوَلَدُ fâil (merfû); ikinci cümlede الْبَابُ nâib-i fâildir (merfû)."
            },
            {
              level: "quran",
              arabic: "وَوُضِعَ الْكِتَابُ فَتَرَى الْمُجْرِمِينَ",
              translation: "Kitap ortaya konmuştur; suçluları görürsün...",
              analysisText: "وُضِعَ meçhul fiil; الْكِتَابُ damme ile merfû nâib-i fâildir.",
              verseRef: { sura: 18, ayah: 49, linkUrl: "index.html#ayet-49" }
            }
          ],
          exercises: [
            {
              id: "b1-l5-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki meçhul fiilli cümleye nâib-i fâili uygun merfû harekesiyle yazın:",
              sentenceWithBlank: "خُلِقَ [___] ضَعِيفًا .",
              baseWord: "الإنسان",
              acceptedAnswers: ["الْإِنسَانُ", "الإنسانُ", "الانسانُ", "الإنسان"],
              explanation: "Meçhul fiilden sonra gelen isim nâib-i fâil olup damme ile merfûdur: الْإِنسَانُ.",
              hint: "Son harfi damme (ُ) ile bitirin."
            }
          ]
        },
        {
          id: "b1-l6-mubteda-haber",
          bookLevel: 1,
          chapterId: "b1-merfuat",
          order: 6,
          title: "İsim Cümlesi: Mübteda ve Haber",
          arabicTitle: "الْمُبْتَدَأُ وَالْخَبَرُ",
          desc: "İsimle başlayan cümlenin iki temel merfû sütunu; özne (mübteda) ve yüklem (haber).",
          starterCard: {
            title: "Odak: İsim Cümlesinin İki Merfû Ögesi",
            focusPoints: [
              "Mübteda cümlenin başında gelen ve kendisinden bahsedilen belirli (marife) merfû isimdir.",
              "Haber ise mübteda hakkında yeni bir bilgi veren ve cümleyi tamamlayan merfû ögedir.",
              "Her ikisi de kural olarak MERFÛDUR."
            ],
            ruleBox: "Mübteda genellikle marife, haber ise genellikle nekiredir: الْبَيْتُ كَبِيرٌ.",
            transformation: {
              beforeLabel: "Tek Kelime",
              beforeArabic: "الْقَمَرُ",
              beforeTr: "Ay (Tam bir cümle değil, tek isim)",
              afterLabel: "Tam İsim Cümlesi",
              afterArabic: "الْقَمَرُ مُنِيرٌ",
              afterTr: "Ay aydınlatıcıdır (Mübteda merfû + Haber merfû)",
              highlightExplanation: "Haber eklenince zihinde tam bir hüküm ve faydalı cümle meydana geldi."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 42'ye göre:</p>
            <ul>
              <li><b>الْمُبْتَدَأُ:</b> Cümlenin başında yer alan, lafzen veya mahallen merfû isimdir: <span class="ar">اللَّهُ رَبُّنَا</span>.</li>
              <li><b>الْخَبَرُ:</b> Mübteda ile birlikte tam bir mana oluşturan merfû parçadır. Haber tek kelime (müfred) olabileceği gibi harf-i cerli (şibh-i cümle) de olabilir: <span class="ar">الْحَمْدُ لِلَّهِ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "الْمَدِينَةُ نَظِيفَةٌ",
              translation: "Şehir temizdir.",
              analysisText: "الْمَدِينَةُ mübteda (damme ile merfû), نَظِيفَةٌ haber (damme ile merfû)."
            },
            {
              level: "quran",
              arabic: "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا",
              translation: "Mal ve oğullar dünya hayatının süsüdür.",
              analysisText: "الْمَالُ mübteda (merfû), زِينَةُ haber (merfû).",
              verseRef: { sura: 18, ayah: 46, linkUrl: "index.html#ayet-46" }
            }
          ],
          exercises: [
            {
              id: "b1-l6-ex1",
              type: "error_correction",
              prompt: "Aşağıdaki isim cümlesindeki haberin hareke hatasını düzeltin:",
              incorrectSentence: "الْبَابُ مَفْتُوحًا .",
              acceptedCorrectSentences: ["الْبَابُ مَفْتُوحٌ", "الباب مفتوحٌ", "الباب مفتوح"],
              errorTarget: "مَفْتُوحًا",
              explanationOfError: "Yalın isim cümlesinde haber mansûb değil merfû (tenvin-damme) olmalıdır: مَفْتُوحٌ.",
              explanation: "Haber merfûdur."
            }
          ]
        },
        {
          id: "b1-l7-kane-kardesleri",
          bookLevel: 1,
          chapterId: "b1-merfuat",
          order: 7,
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
          `,
          examples: [
            {
              level: "simple",
              arabic: "كَانَ الْمَحَلُّ مَفْتُوحًا",
              translation: "Dükkân açıktı.",
              analysisText: "الْمَحَلُّ kâne'nin ismi (merfû), مَفْتُوحًا kâne'nin haberi (mansûb)."
            },
            {
              level: "quran",
              arabic: "وَكَانَ أَبُوهُمَا صَالِحًا",
              translation: "Babaları salih bir kimseydi.",
              analysisText: "أَبُوهُمَا kâne'nin ismi (vâv ile merfû); صَالِحًا kâne'nin haberi (fetha ile mansûb).",
              verseRef: { sura: 18, ayah: 82, linkUrl: "index.html#ayet-82" }
            }
          ],
          exercises: [
            {
              id: "b1-l7-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıda verilen kök kelimeyi [حاضرون] nâkıs fiilin haberi olacak şekilde uygun hâle sokup boşluğa yazın:",
              sentenceWithBlank: "كَانَ الْمُعَلِّمُونَ [___] فِي الْفَصْلِ .",
              baseWord: "حاضرون",
              acceptedAnswers: ["حَاضِرِينَ", "حاضرين"],
              explanation: "Haber mansûb olmalıdır. Cem-i müzekker sâlim kelimelerde nasb alâmeti yâ (ي) harfidir: حاضرين.",
              hint: "Cem-i müzekker sâlim nasb hâlinde -îne (ـِينَ) alır."
            },
            {
              id: "b1-l7-ex2",
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
            }
          ]
        },
        {
          id: "b1-l7-inne-kardesleri",
          bookLevel: 1,
          chapterId: "b1-merfuat",
          order: 8,
          title: "İnne ve Kardeşleri",
          arabicTitle: "إِنَّ وَأَخَوَاتُهَا",
          desc: "İsim cümlesine girip ismi mansûb, haberi merfû bırakan harfler (Kâne'nin tam zıddı).",
          starterCard: {
            title: "Odak: İsmi Nasb, Haberi Ref' Eden Harfler",
            focusPoints: [
              "İnne ve kardeşleri (إِنَّ، أَنَّ، كَأَنَّ، لَـكِنَّ، لَيْتَ، لَعَلَّ) isim cümlesine girer.",
              "Kâne'nin tam tersini yapar: İsmi MANSÛB yapar, haberi MERFÛ bırakır.",
              "إِنَّ şüpheyi giderir ve pekiştirir (Muhakkak ki...); لَيْتَ keşke temennisi bildirir."
            ],
            ruleBox: "Unutma: Kâne haberi nasbeder, İnne ise ismi nasbeder!",
            transformation: {
              beforeLabel: "Yalın İsim Cümlesi",
              beforeArabic: "اللَّهُ غَفُورٌ",
              beforeTr: "Allah bağışlayıcıdır (Mübteda merfû, Haber merfû)",
              afterLabel: "İnne Girdikten Sonra",
              afterArabic: "إِنَّ اللَّهَ غَفُورٌ",
              afterTr: "Şüphesiz Allah bağışlayıcıdır (İsmi MANSÛB oldu)",
              highlightExplanation: "Lafzatullah fetha ile mansûb oldu, haber ise damme ile merfû kaldı."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 44'teki temel kural:</p>
            <p><b>إِنَّ</b> ve benzerleri mübteda ile haberin başına gelir. Mübtedayı kendi ismi yapıp nasbederler, haberi ise kendi haberi yapıp merfû bırakırlar.</p>
          `,
          examples: [
            {
              level: "simple",
              arabic: "إِنَّ النَّصْرَ قَرِيبٌ",
              translation: "Şüphesiz zafer yakındır.",
              analysisText: "النَّصْرَ inne'nin ismi (fetha ile mansûb); قَرِيبٌ inne'nin haberi (merfû)."
            },
            {
              level: "quran",
              arabic: "إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ",
              translation: "Şüphesiz onlar Rablerine inanmış gençlerdi.",
              analysisText: "ـهُمْ muttasıl zamir inne'nin ismi (mahallen mansûb); فِتْيَةٌ inne'nin haberi (merfû).",
              verseRef: { sura: 18, ayah: 13, linkUrl: "index.html#ayet-13" }
            }
          ],
          exercises: [
            {
              id: "b1-l7-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede İnne'nin ismini doğru mansûb harekesiyle yazın:",
              sentenceWithBlank: "إِنَّ [___] مُمْتِعٌ جِدًّا .",
              baseWord: "الدرس",
              acceptedAnswers: ["الدَّرْسَ", "الدرسَ", "الدرس"],
              explanation: "İnne'nin ismi fetha ile mansûb olur: الدَّرْسَ.",
              hint: "Son harfe fetha (َ) koyun."
            }
          ]
        }
      ]
    },
    {
      id: "b1-mansubat",
      bookLevel: 1,
      title: "İsmin Mansûb Olduğu Haller",
      arabicTitle: "نَصْبُ الاسْمِ وَمَوَاضِعُهُ",
      icon: "📐",
      desc: "5 Mef'ûl (bih, mutlak, leh, fih, maah), Hâl, Temyîz ve Müstesnâ.",
      lessons: [
        {
          id: "b1-l8-mefuller",
          bookLevel: 1,
          chapterId: "b1-mansubat",
          order: 9,
          title: "Mef'ûller: Bih, Mutlak, Fîh ve Leh",
          arabicTitle: "الْمَفَاعِيلُ",
          desc: "Eylemin doğrudan nesnesi, pekiştirici masdarı, zaman/mekân zarfı ve gerekçesi.",
          starterCard: {
            title: "Odak: Mansûb Mef'ûller",
            focusPoints: [
              "Mef'ûlün Bih: Neyi / kimi sorusuna cevap veren açık nesnedir: قَرَأْتُ الْكِتَابَ.",
              "Mef'ûl-i Mutlak: Fiilin manasını pekiştiren kendi kökünden masdardır: كَلَّمَ اللَّهُ مُوسَى تَكْلِيمًا.",
              "Mef'ûlün Fîh (Zarf): Ne zaman ve nerede olduğunu bildiren zaman/mekân ismidir: صُمْتُ يَوْمًا.",
              "Mef'ûlün Leh: Eylemin niçin yapıldığını bildiren gerekçedir: قُمْتُ إِجْلَالًا لَهُ."
            ],
            ruleBox: "Bütün mef'ûller istisnasız MANSÛBDUR (fetha, yâ veya kesra alır).",
            transformation: {
              beforeLabel: "Yalın Fiil Cümlesi",
              beforeArabic: "جَمَعْنَاهُمْ",
              beforeTr: "Onları topladık",
              afterLabel: "Mef'ûl-i Mutlak ile Pekiştirme",
              afterArabic: "فَجَمَعْنَاهُمْ جَمْعًا",
              afterTr: "Onları tam bir toplayışla topladık (Cem'an mansûb)",
              highlightExplanation: "Aynı kökten masdar eklenerek manadaki kesinlik en üst seviyeye çıkarıldı."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 46–50'de mef'ûller şöyle açıklanır:</p>
            <ul>
              <li><b>مَفْعُولٌ بِهِ:</b> Fiilin eyleminin doğrudan üzerine vaki olduğu isimdir: <span class="ar">شَرِبَ الْوَلَدُ الْمَاءَ</span>.</li>
              <li><b>مَفْعُولٌ مُطْلَقٌ:</b> Fiilden sonra zikredilen ve fiilin lafzından türeyen masdardır: <span class="ar">حَفِظْتُ الدَّرْسَ حِفْظًا</span>.</li>
              <li><b>مَفْعُولٌ فِيهِ:</b> Eylemin vaktini veya mekânını gösteren zarftır: <span class="ar">سَافَرْتُ لَيْلًا</span>, <span class="ar">جَلَسْتُ أَمَامَ الْمُعَلِّمِ</span>.</li>
              <li><b>مَفْعُولٌ لِأَجْلِهِ:</b> Fiilin işlenme sebebini bildirir: <span class="ar">تَصَدَّقْتُ ابْتِغَاءَ مَرْضَاةِ اللَّهِ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "زُرْتُكَ رَغْبَةً فِي الْعِلْمِ",
              translation: "İlim arzusuyla seni ziyaret ettim.",
              analysisText: "رَغْبَةً ziyaretin sebebini açıklayan mef'ûlün lehtir (mansûb)."
            },
            {
              level: "quran",
              arabic: "وَفُتِحَتِ أَبْوَابُهَا وَقَالَ لَهُمْ خَزَنَتُهَا",
              translation: "Kapıları açıldı...",
              analysisText: "أَبْوَابُ meçhul fiilden sonra nâib-i fâildir.",
              verseRef: { sura: 39, ayah: 73 }
            },
            {
              level: "quran",
              arabic: "فَجَمَعْنَاهُمْ جَمْعًا",
              translation: "Onları büsbütün topladık.",
              analysisText: "جَمْعًا fiilin kendi kökünden gelip anlamı pekiştiren mef'ûl-i mutlaktır.",
              verseRef: { sura: 18, ayah: 99, linkUrl: "index.html#ayet-99" }
            }
          ],
          exercises: [
            {
              id: "b1-l8-ex1",
              type: "irab_matrix",
              prompt: "Aşağıdaki cümlede altı çizili mef'ûlün künyesini çıkarın:",
              targetSentence: "صَبَرْتُ صَبْرًا جَمِيلًا",
              targetWord: "صَبْرًا",
              fields: [
                { label: "Mef'ûl Türü", acceptedAnswers: ["mef'ûl-i mutlak", "mefulu mutlak", "meful-i mutlak", "مفعول مطلق"] },
                { label: "İ'râb Hâli", acceptedAnswers: ["mansûb", "mansub", "منصوب"] },
                { label: "İ'râb Alâmeti", acceptedAnswers: ["fetha", "tenvin fetha", "الفتحة"] }
              ],
              explanation: "Fiille aynı kökten gelen masdar mef'ûl-i mutlaktır ve fetha ile mansûbdur."
            }
          ]
        },
        {
          id: "b1-l9-hal-temyiz",
          bookLevel: 1,
          chapterId: "b1-mansubat",
          order: 10,
          title: "Hâl ve Temyîz",
          arabicTitle: "الْحَالُ وَالتَّمْيِيزُ",
          desc: "Öznenin durumunu bildiren Hâl ve cümledeki kapalılığı/oranı gideren Temyîz.",
          starterCard: {
            title: "Odak: Durum Bildiren Hâl ve Kapalılığı Gideren Temyîz",
            focusPoints: [
              "Hâl (الْحَالُ): 'Nasıl?' sorusuna cevap verir. Fâil veya mef'ûlün eylem anındaki durumunu bildirir: جَاءَ زَيْدٌ رَاكِبًا (Zeyd binici vaziyette geldi).",
              "Temyîz (التَّمْيِيزُ): 'Ne bakımından / hangi açıdan?' sorusuna cevap verir; üstünlük veya sayıdaki kapalılığı netleştirir.",
              "Her ikisi de nekire ve MANSÛBDUR."
            ],
            ruleBox: "Hâl çoğunlukla müştak (ism-i fâil/mef'ûl), Temyîz ise çoğunlukla donuk isim veya masdardır.",
            transformation: {
              beforeLabel: "Kapalı İfade",
              beforeArabic: "أَنَا أَكْثَرُ مِنْكَ",
              beforeTr: "Ben senden daha çoğum (Neyce daha çok? Kapalı)",
              afterLabel: "Temyîz ile Açıklama",
              afterArabic: "أَنَا أَكْثَرُ مِنكَ مَالًا",
              afterTr: "Ben malca senden daha çoğum (Temyîz mansûb oldu)",
              highlightExplanation: "مَالًا kelimesi üstünlüğün hangi alanda olduğunu netleştirdi."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 53–54'e göre:</p>
            <ul>
              <li><b>الْحَالُ:</b> Fâil veya mef'ûlün eylem sırasındaki şeklini açıklayan nekire mansûb isimdir: <span class="ar">شَرِبْتُ الْمَاءَ صَافِيًا</span> (Suyu berrakken içtim).</li>
              <li><b>التَّمْيِيزُ:</b> Kendisinden önceki bir kelimeden veya cümlenin tamamından kaynaklanan kapalılığı gideren isimdir: <span class="ar">اشْتَرَيْتُ عِشْرِينَ كِتَابًا</span> (Yirmi kitap aldım).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "رَجَعَ الْجَيْشُ مُنْتَصِرًا",
              translation: "Ordu zafer kazanmış olarak döndü.",
              analysisText: "مُنْتَصِرًا ordunun durumunu açıklayan hâldir (fetha ile mansûb)."
            },
            {
              level: "quran",
              arabic: "مَاكِثِينَ فِيهِ أَبَدًا",
              translation: "Orada ebediyen kalıcılar olarak...",
              analysisText: "مَاكِثِينَ hâl olup cem-i müzekker sâlim olduğu için yâ ile mansûbdur.",
              verseRef: { sura: 18, ayah: 3, linkUrl: "index.html#ayet-3" }
            },
            {
              level: "quran",
              arabic: "أَنَا۠ أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا",
              translation: "Ben malca senden daha çoğum, adamca da daha güçlüyüm.",
              analysisText: "مَالًا ve نَفَرًا üstünlük isimlerinin hangi yönde olduğunu belirten temyîzdir.",
              verseRef: { sura: 18, ayah: 34, linkUrl: "index.html#ayet-34" }
            }
          ],
          exercises: [
            {
              id: "b1-l9-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede boşluğa durum bildiren hâl kelimesini mansûb şekilde yazın:",
              sentenceWithBlank: "جَاءَ الطَّالِبُ إِلَى الْمَدْرَسَةِ [___] .",
              baseWord: "مسرور",
              acceptedAnswers: ["مَسْرُورًا", "مسروراً", "مسرورا"],
              explanation: "Hâl müfred olduğunda fetha tenvini ile mansûb okunur: مَسْرُورًا.",
              hint: "Sonuna -an (-ًا) tenvini ekleyin."
            }
          ]
        }
      ]
    },
    {
      id: "b1-mecrurat-tevabi",
      bookLevel: 1,
      title: "Mecrûrât ve Tâbi Olanlar (Tevâbi')",
      arabicTitle: "الْمَجْرُورَاتُ وَالتَّوَابِعُ",
      icon: "🔗",
      desc: "Harf-i cer ile mecrûr olanlar, İzâfet tamlaması ve 4 Tâbi (Sıfat, Atıf, Te'kîd, Bedel).",
      lessons: [
        {
          id: "b1-l10-mecrurat-izafet",
          bookLevel: 1,
          chapterId: "b1-mecrurat-tevabi",
          order: 11,
          title: "Mecrûrât: Harf-i Cer ve İzâfet",
          arabicTitle: "الْمَجْرُورُ بِالْحَرْفِ وَالْمَجْرُورُ بِالإِضَافَةِ",
          desc: "İsmin kesra alma sebepleri; önüne harf-i cer gelmesi veya isim tamlamasında muzâfun ileyh olması.",
          starterCard: {
            title: "Odak: İsmin Cer Hâli ve Tamlama",
            focusPoints: [
              "İsim ya harf-i cerle (بِـ، فِي، مِنْ، إِلَى، عَلَى...) ya da izâfetle mecrûr olur.",
              "Muzâf (tamlanan) asla tenvin veya الـ almaz; cümledeki görevine göre harekelenir.",
              "Muzâfun İleyh (tamlayan) ise DAİMA MECRÛRDUR (kesra alır)."
            ],
            ruleBox: "Muzâf tesniye veya cem-i müzekker sâlim olduğunda sonundaki nûn harfi düşer: عَبْدَا اللَّهِ.",
            transformation: {
              beforeLabel: "Ayrı İki Kelime",
              beforeArabic: "كِتَابٌ + الطَّالِبُ",
              beforeTr: "Kitap + Öğrenci",
              afterLabel: "İzâfet Tamlaması",
              afterArabic: "كِتَابُ الطَّالِبِ",
              afterTr: "Öğrencinin kitabı (Muzâfun İleyh kesra ile MECRÛR oldu)",
              highlightExplanation: "Birinci kelimenin tenvini düştü, ikinci kelime mecrûr oldu."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 57–59'daki kurallar:</p>
            <ul>
              <li><b>الْمَجْرُورُ بِالْحَرْفِ:</b> Harf-i cerden sonra gelen isim kesra ile mecrûr olur: <span class="ar">فِي الْبَيْتِ</span>.</li>
              <li><b>الْمَجْرُورُ بِالإِضَافَةِ:</b> İsim tamlamasında ikinci ögedir (muzâfun ileyh): <span class="ar">نُورُ الشَّمْسِ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "خَرَجْتُ مِنْ بَيْتِ الْمُعَلِّمِ",
              translation: "Öğretmenin evinden çıktım.",
              analysisText: "مِنْ harf-i cer; بَيْتِ mecrûr muzâf; الْمُعَلِّمِ kesra ile mecrûr muzâfun ileyh."
            },
            {
              level: "quran",
              arabic: "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ",
              translation: "Gençler mağaraya sığındıklarında...",
              analysisText: "الْكَهْفِ kelimesi إِلَى harf-i cerinden sonra kesra ile mecrûrdur.",
              verseRef: { sura: 18, ayah: 10, linkUrl: "index.html#ayet-10" }
            }
          ],
          exercises: [
            {
              id: "b1-l10-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki tamlamada muzâfun ileyhi doğru mecrûr harekesiyle yazın:",
              sentenceWithBlank: "قَرَأْتُ كِتَابَ [___] .",
              baseWord: "التاريخ",
              acceptedAnswers: ["التَّارِيخِ", "التاريخِ", "التاريخ"],
              explanation: "İsim tamlamasında muzâfun ileyh daima kesra ile mecrûr olur: التَّارِيخِ.",
              hint: "Son harfe kesra (ِ) koyun."
            }
          ]
        },
        {
          id: "b1-l11-tevabi",
          bookLevel: 1,
          chapterId: "b1-mecrurat-tevabi",
          order: 12,
          title: "Tevâbi': Sıfat, Atıf, Te'kîd, Bedel",
          arabicTitle: "التَّوَابِعُ",
          desc: "Kendi başına bağımsız bir amili olmayıp önündeki kelimenin i'râbına uyan 4 öge.",
          starterCard: {
            title: "Odak: Önceki Kelimenin İ'râbına Uyanlar",
            focusPoints: [
              "Tevâbi' kendinden önceki kelimenin (metbû') harekesini aynen alır.",
              "1. Sıfat (Na't): Nitelediği isme hareke, belirlilik, cinsiyet ve sayıda uyar: كِتَابٌ مُفِيدٌ.",
              "2. Atıf: Bağlaçla bağlanan kelimedir: جَاءَ عَلِيٌّ وَحَسَنٌ.",
              "3. Te'kîd: Lafzı pekiştirir: جَاءَ الْقَوْمُ كُلُّهُمْ.",
              "4. Bedel: Asıl kastedilen ögedir: قَالَ الْإِمَامُ عَلِيٌّ."
            ],
            ruleBox: "Tevâbi'nin tek başına ref/nasb/cer amili yoktur; metbûu merfûsa merfû, mansûbsa mansûb, mecrûrsa mecrûr olurlar.",
            transformation: {
              beforeLabel: "Tek İsim",
              beforeArabic: "أَجْرًا",
              beforeTr: "Bir mükâfat (Mansûb nesne)",
              afterLabel: "Sıfat Eklenince",
              afterArabic: "أَجْرًا حَسَنًا",
              afterTr: "Güzel bir mükâfat (Sıfat da mevsûfu gibi mansûb oldu)",
              highlightExplanation: "حَسَنًا sıfatı أَجْرًا ismine harekesi ve nekireliğiyle tam uydu."
            }
          },
          explanationHtml: `
            <p><i>ed-Durûsü'n-Nahviyye</i> s. 60–66'daki 4 tâbi:</p>
            <ul>
              <li><b>النَّعْتُ (Sıfat):</b> Önceki ismin niteliğini gösterir: <span class="ar">قَرَأْتُ كِتَابًا نَافِعًا</span>.</li>
              <li><b>الْعَطْفُ:</b> Harf-i atıf ile bağlanan kelimedir: <span class="ar">نَجَحَ سَعِيدٌ وَخَالِدٌ</span>.</li>
              <li><b>التَّوْكِيدُ:</b> Şüpheyi def etmek için gelir: <span class="ar">فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ</span>.</li>
              <li><b>الْبَدَلُ:</b> Önündeki kelimeyi açıklayan veya onun yerine geçen isimdir: <span class="ar">نَفَعَنِي الْمُعَلِّمُ عِلْمُهُ</span>.</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "اشْتَرَيْتُ الْقَلَمَ الْجَدِيدَ",
              translation: "Yeni kalemi satın aldım.",
              analysisText: "الْجَدِيدَ mevsûfu olan الْقَلَمَ gibi fetha ile mansûb bir sıfattır."
            },
            {
              level: "quran",
              arabic: "وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا",
              translation: "Onlar için güzel bir mükâfat olduğunu müjdelesin...",
              analysisText: "حَسَنًا sıfat olup mevsûfu olan أَجْرًا kelimesine uyarak mansûb gelmiştir.",
              verseRef: { sura: 18, ayah: 2, linkUrl: "index.html#ayet-2" }
            }
          ],
          exercises: [
            {
              id: "b1-l11-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede mevsûfun harekesine uyacak şekilde sıfatı doğru harekeyle yazın:",
              sentenceWithBlank: "قَرَأْتُ فِي الْكِتَابِ [___] .",
              baseWord: "الْمُفِيد",
              acceptedAnswers: ["الْمُفِيدِ", "المفيدِ", "المفيد"],
              explanation: "Sıfat tabi olduğu ismin harekesini alır; الْكِتَابِ mecrûr olduğu için sıfatı da kesralı olur: الْمُفِيدِ.",
              hint: "Son harfe kesra (ِ) koyun."
            }
          ]
        }
      ]
    }
  ]
};
