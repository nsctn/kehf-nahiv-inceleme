import { Book } from '../../types/curriculum';

export const BOOK_4: Book = {
  level: 4,
  title: "4. Kitap: İleri Nahiv ve Üslûplar",
  arabicTitle: "الكتاب الرابع: الغاية في النحو ودقائق الأساليب",
  subtitle: "Mîzânü's-Sarfî, Müştakların Ameli, Mukârebe, Sayılar ve Klasik Üslûplar",
  desc: "Arapça gramerinin zirve halkası: Vezinlerde harf düşmesi (i'lâl/ibdâl), masdar ve sıfatların fiil gibi amel etmesi, mukârebe ve şürû' fiilleri, sayıların i'râb ve temyizi, şart, istisnâ, taaccüb, tahzîr üslûpları ve harflerin tam tasnifi.",
  chapters: [
    {
      id: "b4-mizan-sarfi",
      bookLevel: 4,
      title: "Mîzânü's-Sarfî, İ'lâl ve İbdâl",
      arabicTitle: "الْمِيزَانُ الصَّرْفِيُّ وَالْإِعْلَالُ وَالْإِبْدَالُ",
      icon: "⚖️",
      desc: "Kelimelerde harf düşmesi, ziyâdesi ve harf dönüşümlerinde (ibdâl) sarf terazisi tartımı.",
      lessons: [
        {
          id: "b4-l1-hazif-ve-ziyade",
          bookLevel: 4,
          chapterId: "b4-mizan-sarfi",
          order: 1,
          title: "Vezinde Hazif ve Ziyâde Kuralları",
          arabicTitle: "الْحَذْفُ وَالزِّيَادَةُ فِي الْمِيزَانِ الصَّرْفِيِّ",
          desc: "Kelimeden düşen kök harfinin vezinden de düşmesi: قَالَ ➔ فَالَ değil فَعَلَ; fakat قُلْ ➔ فُلْ; عِ ➔ عِ.",
          starterCard: {
            title: "Odak: Sarf Terazisinde Düşen Harfler",
            focusPoints: [
              "Temel Kural: Kök harflerinden (Fâ, Ayn, Lâm) hangisi kelimeden düşerse, vezinden de o harf düşürülür.",
              "Örnek 1: قَالَ fiilinin emri قُلْ olunca ortadaki aynü'l-fiil düşer; vezni فُلْ olur (فَعَلَ değil!).",
              "Örnek 2: وَقَى fiilinin emri tek harf kalır: قِ (Sakın!); vezni عِ olur (Fâ ve Lâm düşmüştür).",
              "Örnek 3: وَعَدَ fiilinin masdarı عِدَةٌ olunca vezni عِلَةٌ olur (Vâv düşmüştür)."
            ],
            ruleBox: "Sarf terazisi (ف-ع-ل) kelimenin somut harf yapısını aynen yansıtır. Aslî harf eksilirse vezin eksilir, harf artarsa vezin artar.",
            transformation: {
              beforeLabel: "Kök Fiil (3 Harf Tam)",
              beforeArabic: "قَالَ ➔ فَعَلَ",
              beforeTr: "Kök harflerinin tamamı vezinde mevcuttur",
              afterLabel: "Emir Kipi (Orta Harf Düştü)",
              afterArabic: "قُلْ ➔ فُلْ",
              afterTr: "Ayn harfi düşünce vezin de iki harfli 'ful' (فُلْ) haline gelir",
              highlightExplanation: "Mîzânü's-sarfî'de aynü'l-fiil atılarak terazi denkleştirilir."
            }
          },
          explanationHtml: `
            <p>Arapça sarf terazisinde (<span class="ar">ف - ع - ل</span>) kelimedeki tüm fonetik değişiklikler birebir tartılır:</p>
            <ul>
              <li>Kelimede ziyâde varsa vezinde de aynı harf ziyâde edilir: <span class="ar">أَكْرَمَ ➔ أَفْعَلَ</span>, <span class="ar">انْطَلَقَ ➔ انْفَعَلَ</span>.</li>
              <li>Kelimeden bir harf hazfedilmişse (düşürülmüşse) vezinden de karşılığı düşürülür:
                <ul>
                  <li><span class="ar">يَصِلُ</span> (Aslı: يَوْصِلُ) ➔ Fâü'l-fiil düştü ➔ Vezni: <span class="ar">يَعِلُ</span>.</li>
                  <li><span class="ar">قُلْ</span> (Aslı: اُقْوُلْ) ➔ Aynü'l-fiil düştü ➔ Vezni: <span class="ar">فُلْ</span>.</li>
                  <li><span class="ar">ادْعُ</span> (Aslı: اُدْعُو) ➔ Lâmü'l-fiil düştü ➔ Vezni: <span class="ar">افْعُ</span>.</li>
                  <li><span class="ar">عِ</span> (Kök: و-ع-ي) ➔ Fâ ve lâm düştü ➔ Vezni: <span class="ar">عِ</span>.</li>
                </ul>
              </li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "قُلِ الْحَقَّ وَادْعُ إِلَى سَبِيلِ رَبِّكَ",
              translation: "Hakkı söyle ve Rabbinin yoluna davet et!",
              analysisText: "قُلْ (Vezni: فُلْ), ادْعُ (Vezni: افْعُ)."
            },
            {
              level: "hadith",
              arabic: "قُلْ خَيْرًا أَوْ لِيَصْمُتْ",
              translation: "Ya hayır söylesin yahut sussun!",
              analysisText: "قُلْ fiilinin sarf tahlili."
            },
            {
              level: "quran",
              arabic: "قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ",
              translation: "De ki: Rabbimin kelimeleri için deniz mürekkep olsa deniz tükenirdi...",
              analysisText: "قُلْ: Aynü'l-fiili düşmüş ecvef emir, vezni فُلْ.",
              verseRef: { sura: 18, ayah: 109, linkUrl: "index.html#ayet-109" }
            }
          ],
          exercises: [
            {
              id: "b4-l1-ex1",
              type: "sarf_wezn_root",
              prompt: "Aşağıdaki 'قُلْ' (de/söyle) emir fiilinin sarf veznini ve kökünü yazın:",
              targetWord: "قُلْ",
              rootAnswers: ["ق-و-ل", "قول"],
              weznAnswers: ["فُلْ", "فل"],
              babName: "Ecvef Emir (Hazifli)",
              explanation: "Ortadaki vâv harfi sâkin iki harf buluştuğu için düşmüş ve vezin فُلْ kalmıştır."
            }
          ]
        },
        {
          id: "b4-l2-ibdal-iftial",
          bookLevel: 4,
          chapterId: "b4-mizan-sarfi",
          order: 2,
          title: "İbdâl Kuralları: İfti'âl Bâbında Tâ Harfinin Değişimi",
          arabicTitle: "الْإِبْدَالُ فِي بَابِ الِافْتِعَالِ (اصْطَبَرَ، ازْدَادَ، اتَّقَى)",
          desc: "İfti'âl te'sinin boğaz veya ıtbâk harfleriyle kaynaşması sonucu ط veya د harfine dönüşmesi.",
          starterCard: {
            title: "Odak: İbdâl (Harf Değişimi)",
            focusPoints: [
              "İfti'âl Bâbı (اِفْتَعَلَ): Kök harfi ص، ض، ط، ظ olduğunda ifti'âl tâ'sı (ت) kalınlaşarak Tâ (ط) harfine döner: صَبَرَ ➔ اصْتَبَرَ ➔ اصْطَبَرَ.",
              "Kök harfi ز، د، ذ olduğunda ifti'âl tâ'sı Dâl (د) harfine döner: زَادَ ➔ ازْتَادَ ➔ ازْدَادَ.",
              "Kök harfi و، ي olduğunda illet harfi tâ'ya kalb edilir ve şeddelenir: وَقَى ➔ اوْتَقَى ➔ اتَّقَى."
            ],
            ruleBox: "اصْطَبَرَ kelimesindeki kalın Tâ (ط) harfi, ifti'âl vezninin ince tâ (ت) harfinin ıtbâk sebebiyle kalınlaşmış halidir; vezni yine اِفْتَعَلَ olarak kalır.",
            transformation: {
              beforeLabel: "Kural Öncesi Asıl Şekil (İnce Tâ)",
              beforeArabic: "اصْتَبَرَ / ازْتَادَ / اوْتَقَى",
              beforeTr: "İnce ت harfiyle telaffuzu zor olan yapı",
              afterLabel: "İbdâl Sonrası Fasih Şekil (Kalın Tâ)",
              afterArabic: "اصْطَبَرَ / ازْدَادَ / اتَّقَى",
              afterTr: "Ses uyumu (itbâk/cehr) sağlanarak harf dönüştürüldü",
              highlightExplanation: "Vezin tartılırken harf dönüştürülse bile vezin daima اِفْتَعَلَ olarak kalır."
            }
          },
          explanationHtml: `
            <p>İfti'âl bâbında harflerin mahreç uyumu için gerçekleşen 3 büyük ibdâl kuralı:</p>
            <ol>
              <li><b>Itbâk Harfleri (ص - ض - ط - ظ):</b> Peşinden gelen ifti'âl ت harfi kalın <b>ط</b> harfine çevrilir: <span class="ar">صَبَرَ ➔ اصْطَبَرَ</span>, <span class="ar">ضَرَبَ ➔ اضْطَرَبَ</span>.</li>
              <li><b>Cehr Harfleri (د - ذ - ز):</b> Peşinden gelen ifti'âl ت harfi <b>د</b> harfine çevrilir: <span class="ar">زَادَ ➔ ازْدَادَ</span>, <span class="ar">دَعَا ➔ ادَّعَى</span>.</li>
              <li><b>Misâl Fiiller (و - ي):</b> Fâü'l-fiil olan vâv ve yâ harfi ت'ye çevrilip şeddelenir: <span class="ar">وَصَلَ ➔ اتَّصَلَ</span>, <span class="ar">وَقَى ➔ اتَّقَى</span>.</li>
            </ol>
          `,
          examples: [
            {
              level: "simple",
              arabic: "اصْطَبَرَ الْمُؤْمِنُ عَلَى الْبَلَاءِ وَاتَّقَى اللَّهَ",
              translation: "Mümin belaya sabretti ve Allah'tan sakındı.",
              analysisText: "اصْطَبَرَ (İbdâl: t ➔ tà), اتَّقَى (İbdâl: vâv ➔ te)."
            },
            {
              level: "hadith",
              arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ",
              translation: "Nerede olursan ol Allah'tan sakın!",
              analysisText: "اتَّقِ: Aslı اوْتَقِ olup ifti'âl bâbı emir."
            },
            {
              level: "quran",
              arabic: "وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُمْ",
              translation: "Sabah akşam Rablerine yalvaranlarla beraber nefsini sabırlı tut!",
              analysisText: "Sarf ve ibdâl tahlilleri.",
              verseRef: { sura: 18, ayah: 28, linkUrl: "index.html#ayet-28" }
            }
          ],
          exercises: [
            {
              id: "b4-l2-ex1",
              type: "sarf_wezn_root",
              prompt: "Aşağıdaki 'اتَّقَى' (sakındı) fiilinin sülâsî kökünü ve veznini belirleyin:",
              targetWord: "اتَّقَى",
              rootAnswers: ["و-ق-ي", "وقي"],
              weznAnswers: ["اِفْتَعَلَ", "افتعل"],
              babName: "İfti'âl İbdâl",
              explanation: "Kökü و-ق-ي olup aslı اوْتَقَى idi; vâv harfi tâ'ya dönüştürülüp şeddeli okunmuştur: اتَّقَى (اِفْتَعَلَ)."
            }
          ]
        }
      ]
    },
    {
      id: "b4-mustaklarin-ameli",
      bookLevel: 4,
      title: "Masdar ve Müştakların Ameli",
      arabicTitle: "إِعْمَالُ الْمَصْدَرِ وَالْمُشْتَقَّاتِ",
      icon: "⚡",
      desc: "İsim oldukları halde fiil gibi fâil ref' eden ve mef'ûl nasb eden masdarlar, ism-i fâil, mübâlağa ve ism-i mef'ûller.",
      lessons: [
        {
          id: "b4-l3-ism-i-fail-ameli",
          bookLevel: 4,
          chapterId: "b4-mustaklarin-ameli",
          order: 3,
          title: "İsm-i Fâil ve İsm-i Mef'ûlün Ameli",
          arabicTitle: "عَمَلُ اسْمِ الْفَاعِلِ وَاسْمِ الْمَفْعُولِ",
          desc: "Tıpkı mâlûm fiil gibi fâil/mef'ûl alan ism-i fâil ve meçhûl fiil gibi nâib-i fâil alan ism-i mef'ûl.",
          starterCard: {
            title: "Odak: Fiil Gibi Hükmeden İsimler",
            focusPoints: [
              "İsm-i Fâil Ameli: Fiili müteaddî ise arkasından gelen ismi mef'ûlün bih olarak nasb eder: كَاتِبٌ الدَّرْسَ (Dersi yazan).",
              "İsm-i Mef'ûl Ameli: Meçhul fiil anlamı taşıdığı için arkasından gelen ismi nâib-i fâil olarak REF' eder: مَكْتُوبٌ دَرْسُهُ (Dersi yazılmış olan).",
              "Şartı: Başında الـ varsa kayıtsız şartsız amel eder. Elif-lâmsız ise şimdiki/gelecek zamana delâlet etmeli ve nefy/istifhâm/mübtedaya dayanmalıdır."
            ],
            ruleBox: "İsm-i fâil fiil-i mâruf gibi fâil ref' edip mef'ûl nasb eder; ism-i mef'ûl ise fiil-i meçhul gibi nâib-i fâil ref' eder.",
            transformation: {
              beforeLabel: "Fiil Cümlesi",
              beforeArabic: "يَكْتُبُ الطَّالِبُ الدَّرْسَ",
              beforeTr: "Öğrenci dersi yazıyor (Fiil nesnesini nasb etti)",
              afterLabel: "İsm-i Fâil Ameli",
              afterArabic: "أَكَاتِبٌ الطَّالِبُ الدَّرْسَ؟",
              afterTr: "Öğrenci dersi yazıyor mu? (İsm-i fâil nesneyi fetha ile nasb etti)",
              highlightExplanation: "كَاتِبٌ ismi fiil gibi amel ederek الدَّرْسَ kelimesini mansûb yapmıştır."
            }
          },
          explanationHtml: `
            <p>Arapçada isim soylu kelimelerden bazıları fiillerinin amelini üstlenirler:</p>
            <ul>
              <li><b>İsm-i Fâil:</b> Fâilini ref', mef'ûlünü nasb eder: <span class="ar">أَرَاجٍ أَنْتَ رَحْمَةَ رَبِّكَ؟</span> (رَحْمَةَ: İsm-i fâilin mef'ûlü olarak mansûbtur).</li>
              <li><b>İsm-i Mef'ûl:</b> Nâib-i fâilini ref' eder: <span class="ar">الْمَحْمُودُ خُلُقُهُ مَحْبُوبٌ</span> (خُلُقُهُ: İsm-i mef'ûlün nâib-i fâili olarak merfûdur).</li>
            </ul>
          `,
          examples: [
            {
              level: "simple",
              arabic: "مَا حَافِظٌ زَيْدٌ عَهْدَهُ",
              translation: "Zeyd ahdini/sözünü tutmuş değildir.",
              analysisText: "حَافِظٌ (sülâsî ism-i fâil), زَيْدٌ (fâil olarak merfû), عَهْدَهُ (mef'ûlün bih olarak mansûb)."
            },
            {
              level: "hadith",
              arabic: "كُلُّ مَعْرُوفٍ صَدَقَةٌ",
              translation: "Her iyilik bir sadakadır.",
              analysisText: "مَعْرُوف: İsm-i mef'ûl."
            },
            {
              level: "quran",
              arabic: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ",
              translation: "Köpekleri de mağara girişinde iki ön ayağını uzatmış durumdaydı.",
              analysisText: "بَاسِطٌ: İsm-i fâildir ve amel ederek ذِرَاعَيْهِ (iki kolunu) tesniye yâ'sı ile mef'ûl olarak nasb etmiştir.",
              verseRef: { sura: 18, ayah: 18, linkUrl: "index.html#ayet-18" }
            }
          ],
          exercises: [
            {
              id: "b4-l3-ex1",
              type: "irab_matrix",
              prompt: "Aşağıdaki ayette geçen 'ذِرَاعَيْهِ' kelimesinin 'بَاسِطٌ' ism-i fâilinin ameliyle aldığı i'râb konumunu seçiniz:",
              targetSentence: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ",
              targetWord: "ذِرَاعَيْهِ",
              fields: [
                { label: "Cümledeki Görevi", acceptedAnswers: ["Mef'ûlün Bih", "meful", "ism-i failin mefulü", "nesne", "مفعول به"] },
                { label: "İ'râb Hâli", acceptedAnswers: ["Mansûb", "mansub", "nasb", "منصوب"] },
                { label: "İ'râb Alâmeti", acceptedAnswers: ["Tesniye Yâ'sı", "ya", "yâ", "الياء"] }
              ],
              explanation: "بَاسِطٌ ism-i fâili fiil gibi amel etmiş ve nesnesini ikili (tesniye) yâ harfi ile nasb etmiştir."
            }
          ]
        }
      ]
    },
    {
      id: "b4-mukarebe-reca-suru",
      bookLevel: 4,
      title: "Mukârebe, Recâ ve Şürû' Fiilleri",
      arabicTitle: "أَفْعَالُ الْمُقَارَبَةِ وَالرَّجَاءِ وَالشُّرُوعِ (كَادَ وَأَخَوَاتُهَا)",
      icon: "⏳",
      desc: "Kâne gibi isim alıp haber alan fakat haberi mutlaka muzâri fiil cümlesi olan özel yardımcı fiiller.",
      lessons: [
        {
          id: "b4-l4-kade-ve-kardesleri",
          bookLevel: 4,
          chapterId: "b4-mukarebe-reca-suru",
          order: 4,
          title: "Kâde, Asâ ve Şürû' Fiillerinin Ahkâmı",
          arabicTitle: "أَحْكَامُ كَادَ وَعَسَى وَأَفْعَالِ الشُّرُوعِ",
          desc: "Yaklaşma (كَادَ، أَوْشَكَ), umut (عَسَى، حَرَى) ve başlama (شَرَعَ، طَفِقَ، بَدَأَ) fiillerinin haberlerinde 'أن' kullanımı.",
          starterCard: {
            title: "Odak: Yaklaşma, Umut ve Başlama Fiilleri",
            focusPoints: [
              "İ'râb Ameli: Tıpkı Kâne gibi isimlerini REF', haberlerini mahallen MANSÛB kılarlar.",
              "Temel Şart: Haberleri mutlaka bir MUZÂRİ FİİL cümlesi olmalıdır: كَادَ الْمَطَرُ يَنْزِلُ (Yağmur neredeyse yağıyordu).",
              "Mukârebe (Yaklaşma): كَادَ ، أَوْشَكَ (Neredeyse oluyordu).",
              "Recâ (Umut): عَسَى ، حَرَى (Umulur ki / Belki).",
              "Şürû' (Başlama): شَرَعَ ، طَفِقَ ، أَخَذَ ، جَعَلَ (Başladı). Haberlerine asla 'أنْ' gelmez!"
            ],
            ruleBox: "Şürû' fiillerinin haberinde 'أن' bulunması haramdır (memnûdur): طَفِقَ يَقْرَأُ denir, طَفِقَ أَنْ يَقْرَأَ denemez.",
            transformation: {
              beforeLabel: "Kâne Cümlesi (İsim Haberi)",
              beforeArabic: "كَانَ الْمَطَرُ غَزِيرًا",
              beforeTr: "Yağmur bol idi (Haberi müfred isimdir)",
              afterLabel: "Kâde Cümlesi (Muzâri Fiil Haberi)",
              afterArabic: "كَادَ الْمَطَرُ يَهْطِلُ",
              afterTr: "Yağmur neredeyse boşanacaktı (Haberi muzâri fiildir)",
              highlightExplanation: "Kâde ve kardeşlerinin haberi daima muzâri fiil cümlesi olmak zorundadır."
            }
          },
          explanationHtml: `
            <p>Bu fiiller nakıs fiil olup 3 gruba ayrılır:</p>
            <ol>
              <li><b>أَفْعَالُ الْمُقَارَبَةِ (Yaklaşma):</b> Eylemin gerçekleşmeye yaklaştığını bildirir: <span class="ar">كَادَ، أَوْشَكَ، كَرَبَ</span>.</li>
              <li><b>أَفْعَالُ الرَّجَاءِ (Umut):</b> Eylemin gerçekleşmesinin umulduğunu bildirir: <span class="ar">عَسَى، حَرَى، اخْلَوْلَقَ</span>. Haberinde 'أن' bulunması çoktur (kesîr).</li>
              <li><b>أَفْعَالُ الشُّرُوعِ (Başlama):</b> Eyleme başlandığını bildirir: <span class="ar">شَرَعَ، أَنْشَأَ، طَفِقَ، أَخَذَ، جَعَلَ، بَدَأَ</span>. Haberinde 'أن' bulunması yasaktır.</li>
            </ol>
          `,
          examples: [
            {
              level: "simple",
              arabic: "كَادَ الْوَقْتُ يَنْتَهِي وَطَفِقَ الطَّالِبُ يَكْتُبُ",
              translation: "Vakit neredeyse bitiyordu ve öğrenci yazmaya başladı.",
              analysisText: "كَادَ (mukârebe fiili), يَنْتَهِي (haberi). طَفِقَ (şürû' fiili), يَكْتُبُ (haberi)."
            },
            {
              level: "hadith",
              arabic: "يُوشِكُ أَنْ تَدَاعَى عَلَيْكُمُ الْأُمَمُ",
              translation: "Milletlerin sofraya üşüşür gibi üzerinize toplanması yaklaşmıştır.",
              analysisText: "يُوشِكُ: Mukârebe fiili muzârisi; haberi 'en' ile gelmiştir."
            },
            {
              level: "quran",
              arabic: "عَسَىٰ رَبُّكُمْ أَن يَرْحَمَكُمْ",
              translation: "Umulur ki Rabbiniz size merhamet eder.",
              analysisText: "عَسَى: Recâ fiili, رَبُّكُمْ ismi (merfû), أَن يَرْحَمَكُمْ mansûb muzâri cümlesi haberidir.",
              verseRef: { sura: 17, ayah: 8 }
            }
          ],
          exercises: [
            {
              id: "b4-l4-ex1",
              type: "error_correction",
              prompt: "Aşağıdaki şürû' cümlesindeki 'أن' edatı hatasını düzeltin:",
              incorrectSentence: "طَفِقَ الرَّجُلُ أَنْ يَحْرُثَ الْأَرْضَ .",
              acceptedCorrectSentences: ["طَفِقَ الرَّجُلُ يَحْرُثُ الْأَرْضَ", "طفق الرجل يحرث الأرض"],
              errorTarget: "أَنْ يَحْرُثَ",
              explanationOfError: "Şürû' (başlama) fiillerinin haberine asla 'أن' edatı gelemez; muzâri doğrudan merfû olarak gelir: يَحْرُثُ.",
              explanation: "Şürû' fiillerinin haberi 'en' almaz."
            }
          ]
        }
      ]
    },
    {
      id: "b4-sayilarin-temyizi",
      bookLevel: 4,
      title: "Sayılar ve Temyîzi (Ahkâmü'l-Aded)",
      arabicTitle: "أَحْكَامُ الْعَدَدِ وَتَمْيِيزِهِ",
      icon: "🔢",
      desc: "1'den milyona kadar sayı kuralları: Cinsiyet uyumu ve zıtlığı, müfred-çoğul ve mansûb-mecrûr temyiz kuralları.",
      lessons: [
        {
          id: "b4-l5-aded-kurallari",
          bookLevel: 4,
          chapterId: "b4-sayilarin-temyizi",
          order: 5,
          title: "3-10 Arası ve 11-99 Arası Sayıların İ'râbı",
          arabicTitle: "الْعَدَدُ الْمُفْرَدُ وَالْمُرَكَّبُ وَالْمَعْطُوفُ",
          desc: "3-10 arası zıtlık ve çoğul mecrûr kuralı; 11-99 arası müfred mansûb temyiz kuralı.",
          starterCard: {
            title: "Odak: Sayıların Matematiği ve Cinsiyeti",
            focusPoints: [
              "1 ve 2: Sayılan kelimeye sıfat olur ve cinsiyette tam uyar: كِتَابٌ وَاحِدٌ ، امْرَأَةٌ وَاحِدَةٌ.",
              "3 ile 10 Arası: Sayı ile sayılan ZIT cinsiyette olur! Temyizi ÇOĞUL ve MECRÛRDUR: ثَلَاثَةُ رِجَالٍ (erkek için dişil sayı) / ثَلَاثُ نِسَاءٍ (kadın için eril sayı).",
              "11 ile 99 Arası: Temyizi daima TEKİL (müfred) ve MANSÛBDUR: أَحَدَ عَشَرَ كَوْكَبًا.",
              "100 ve 1000: Temyizi TEKİL ve MECRÛRDUR: مِائَةُ كِتَابٍ / أَلْفُ سَنَةٍ."
            ],
            ruleBox: "3-10 arası çoğul mecrûr; 11-99 arası tekil mansûb; 100 ve 1000 tekil mecrûr temyiz alır.",
            transformation: {
              beforeLabel: "3-10 Arası (Çoğul Mecrûr)",
              beforeArabic: "ثَلَاثَةُ كُتُبٍ",
              beforeTr: "Üç kitap (كُتُب çoğul ve esrelidir)",
              afterLabel: "11-99 Arası (Tekil Mansûb)",
              afterArabic: "خَمْسَةَ عَشَرَ كِتَابًا",
              afterTr: "On beş kitap (كِتَابًا tekil ve üstünlüdür)",
              highlightExplanation: "11 ve sonrasında sayılan varlık müfred mansûb temyiz haline dönüşür."
            }
          },
          explanationHtml: `
            <p>Arapçada sayı kuralları sayılan nesnenin tekilinin cinsiyetine (müzekker/müennes) göre belirlenir:</p>
            <table class="irab-table">
              <thead>
                <tr><th>Sayı Grubu</th><th>Cinsiyet Uyumu</th><th>Temyizin Hali</th><th>Örnek</th></tr>
              </thead>
              <tbody>
                <tr><td><b>3 - 10</b></td><td>Zıt (Ters Orantılı)</td><td>Çoğul Mecrûr</td><td>ثَلَاثَةُ رِجَالٍ / ثَلَاثُ فَتَيَاتٍ</td></tr>
                <tr><td><b>11 - 12</b></td><td>Her iki cüz de uyar</td><td>Müfred Mansûb</td><td>أَحَدَ عَشَرَ كَوْكَبًا</td></tr>
                <tr><td><b>13 - 19</b></td><td>1. cüz zıt, 2. cüz uyar</td><td>Müfred Mansûb</td><td>خَمْسَةَ عَشَرَ طَالِبًا</td></tr>
                <tr><td><b>20 - 90 (Ukûd)</b></td><td>Cinsiyete göre değişmez</td><td>Müfred Mansûb</td><td>عِشْرُونَ يَوْمًا</td></tr>
                <tr><td><b>100 / 1000</b></td><td>Değişmez</td><td>Müfred Mecrûr</td><td>مِائَةُ لَيْلَةٍ</td></tr>
              </tbody>
            </table>
          `,
          examples: [
            {
              level: "simple",
              arabic: "قَرَأْتُ ثَلَاثَةَ كُتُبٍ وَخَمْسَ عَشْرَةَ مَقَالَةً",
              translation: "Üç kitap ve on beş makale okudum.",
              analysisText: "كُتُب (müzekker tekili كِتَاب) olduğu için sayı dişil (ثَلَاثَةَ) geldi. مَقَالَة (dişil) olduğu için ilk cüz müzekker (خَمْسَ), ikinci cüz müennes (عَشْرَةَ) geldi."
            },
            {
              level: "hadith",
              arabic: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ",
              translation: "İslam beş esas üzerine kurulmuştur.",
              analysisText: "خَمْسٍ: Cinsiyet ve sayı kullanımı."
            },
            {
              level: "quran",
              arabic: "وَلَبِثُوا فِي كَهْفِهِمْ ثَلَاثَ مِائَةٍ سِنِينَ وَازْدَادُوا تِسْعًا",
              translation: "Onlar mağaralarında üç yüz yıl kaldılar ve dokuz yıl da artırdılar.",
              analysisText: "ثَلَاثَ مِائَةٍ: Yüz sayısı izâfetle mecrûr kılınmıştır; سِنِينَ bedel veya temyizdir.",
              verseRef: { sura: 18, ayah: 25, linkUrl: "index.html#ayet-25" }
            }
          ],
          exercises: [
            {
              id: "b4-l5-ex1",
              type: "fill_conjugate",
              prompt: "Aşağıdaki cümlede 'طَالِب' (müzekker) kelimesi için 11 sayısını (أَحَدَ عَشَرَ) yazın:",
              sentenceWithBlank: "حَضَرَ [___] طَالِبًا إِلَى الصَّفِّ .",
              baseWord: "أحد عشر",
              acceptedAnswers: ["أَحَدَ عَشَرَ", "أحد عشر"],
              explanation: "11 sayısı müzekker madûd ile her iki cüzde de fetha üzere mebnîdir: أَحَدَ عَشَرَ.",
              hint: "İki kelime de fethalı biter."
            }
          ]
        }
      ]
    },
    {
      id: "b4-klasik-usluplar",
      bookLevel: 4,
      title: "Klasik Nahiv Üslûpları",
      arabicTitle: "الْأَسَالِيبُ النَّحْوِيَّةُ الْعَالِيَةُ",
      icon: "🎯",
      desc: "Şart ve 'Fâ' rabıtası, İstisnâ, Taaccüb, İğrâ/Tahzîr ve İhtisâs üslûpları.",
      lessons: [
        {
          id: "b4-l6-sart-ve-istisna",
          bookLevel: 4,
          chapterId: "b4-klasik-usluplar",
          order: 6,
          title: "Şartta Fâ Rabıtası ve İstisnâ Hükümleri",
          arabicTitle: "اقْتِرَانُ جَوَابِ الشَّرْطِ بِالْفَاءِ وَأَحْكَامُ الِاسْتِثْنَاءِ",
          desc: "Cezâ cümlesine 'Fâ' gelmesinin vacip olduğu yerler ve İllâ'dan sonraki ismin 3 durumu.",
          starterCard: {
            title: "Odak: Fâ-i Râbıta ve İstisnâ",
            focusPoints: [
              "Şart Cevabına Fâ Gelmesi: Şartın cevabı doğrudan cezm alamıyorsa başına FÂ (فَـ) gelmesi VACİPTİR: İsim cümlesi ise, emir/nehiy gibi talep ise, câmid fiil ise (عسى، ليس), mâ/len/kad/sin/sevfe varsa.",
              "Meşhur Beyit: اسْمِيَّةٌ طَلَبِيَّةٌ وَبِجَامِدٍ ... وَبِمَا وَلَنْ وَبِقَدْ وَبِالتَّنْفِيسِ.",
              "İstisnâ (إِلَّا): Kelâm tam ve olumlu ise mansûb (جَاءَ الْقَوْمُ إِلَّا زَيْدًا). Menfî ve tam ise bedel veya nasb câizdir. Menfî ve nâkıs (müferrağ) ise âmile göre i'râb edilir (مَا جَاءَ إِلَّا زَيْدٌ - fâildir)."
            ],
            ruleBox: "Müferrağ istisnâda إِلَّا yokmuş gibi amel edilir: مَا قَرَأْتُ إِلَّا كِتَابًا ➔ قَرَأْتُ كِتَابًا (Mef'ûldür).",
            transformation: {
              beforeLabel: "Cezm Edilebilen Cevap (Fâ Yok)",
              beforeArabic: "مَنْ يَجْتَهِدْ يَنْجَحْ",
              beforeTr: "Kim çalışırsa kazanır (Muzâri fiil doğrudan meczûm oldu)",
              afterLabel: "İsim Cümlesi Cevap (Fâ Vâcip)",
              afterArabic: "مَنْ يَجْتَهِدْ فَالنَّجَاحُ حَلِيفُهُ",
              afterTr: "Kim çalışırsa başarı onun dostudur (İsim cümlesi olduğu için başına 'Fâ' geldi)",
              highlightExplanation: "Cevap cümlesi cezm alamadığı için fâ rabıtası zorunlu olmuştur."
            }
          },
          explanationHtml: `
            <p>Klasik Arapça metin ve Kur'an üslûbunun iki büyük kaidesi:</p>
            <ol>
              <li><b>İktirânü'l-Cevâb bi'l-Fâ (Şartta Fâ):</b> Cevap cümlesi şu durumlardan biriyse başına 'Fa' gelmesi zorunludur:
                <ul>
                  <li>İsim cümlesi: <span class="ar">إِنْ تَنْصُرُوا اللَّهَ فَهُوَ حَسْبُكُمْ</span>.</li>
                  <li>Talep cümlesi (Emir/Nehiy): <span class="ar">إِنْ رَأَيْتَهُ فَاكْتُمْهُ</span>.</li>
                  <li>Câmid fiil: <span class="ar">مَنْ غَشَّنَا فَلَيْسَ مِنَّا</span>.</li>
                  <li><span class="ar">مَا، لَنْ، قَدْ، سَـ، سَوْفَ</span> ile başlayan cümle.</li>
                </ul>
              </li>
              <li><b>Ahkâmü'l-İstisnâ:</b>
                <ul>
                  <li><i>Tâmm Mûceb:</i> Kesinlikle mansûb (<span class="ar">قَامَ الْقَوْمُ إِلَّا زَيْدًا</span>).</li>
                  <li><i>Müferrağ:</i> Amile göre (<span class="ar">مَا مُحَمَّدٌ إِلَّا رَسُولٌ</span> - Resûl haberdir).</li>
                </ul>
              </li>
            </ol>
          `,
          examples: [
            {
              level: "simple",
              arabic: "مَا فَازَ إِلَّا الْمُجْتَهِدُ ، وَإِنْ تَصْبِرْ فَهُوَ خَيْرٌ لَكَ",
              translation: "Çalışkandan başkası kazanmadı; eğer sabredersen bu senin için daha hayırlıdır.",
              analysisText: "الْمُجْتَهِدُ: Müferrağ istisnâda fâil olarak merfû. فَهُوَ خَيْرٌ: İsim cümlesi şart cevabı olduğu için fâ vâciptir."
            },
            {
              level: "hadith",
              arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
              translation: "Bizi aldatan bizden değildir.",
              analysisText: "فَلَيْسَ: Şartın cevabı câmid fiil olduğu için fâ bitişmiştir."
            },
            {
              level: "quran",
              arabic: "وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ",
              translation: "Sen onların içindeyken Allah onlara azap edecek değildi; onlar istiğfar ederlerken de Allah onlara azap edecek değildir.",
              analysisText: "Lâm-ı cuhûd ve istisnâi nefy tahlili.",
              verseRef: { sura: 8, ayah: 33 }
            }
          ],
          exercises: [
            {
              id: "b4-l6-ex1",
              type: "irab_matrix",
              prompt: "Aşağıdaki 'مَا جَاءَ إِلَّا عَلِيٌّ' cümlesindeki 'عَلِيٌّ' kelimesinin müferrağ istisnâ kuralına göre cümledeki i'râbını seçiniz:",
              targetSentence: "مَا جَاءَ إِلَّا عَلِيٌّ فِي الْمَوْعِدِ .",
              targetWord: "عَلِيٌّ",
              fields: [
                { label: "Cümledeki Görevi", acceptedAnswers: ["Fâil", "fail", "özne", "فاعل"] },
                { label: "İ'râb Hâli", acceptedAnswers: ["Merfû", "merfu", "ref", "مرفوع"] },
                { label: "İ'râb Alâmeti", acceptedAnswers: ["Damme", "açık damme", "tenvin", "الضمة"] }
              ],
              explanation: "Müferrağ istisnâda olumsuzluk ve illâ yok sayılır: جَاءَ عَلِيٌّ cümlesinde Ali kelimesi fâildir."
            }
          ]
        }
      ]
    }
  ]
};
