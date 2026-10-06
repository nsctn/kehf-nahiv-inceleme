/* Bölüm 3: Nahiv (Sözdizimi ve Cümle Bilgisi) */
TUT.push({
  id: 'nahiv',
  icon: '📐',
  title: 'Nahiv: Cümle Yapısı ve İ’râb',
  desc: 'İsim ve fiil cümlesi, merfûât (özne/yüklem), mansûbât (mef’ûller, hâl, temyiz) ve mecrûrât.',
  topics: [

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-cumle-turleri', level: 'b', title: 'Cümle Türleri: İsim ve Fiil Cümlesi',
    kw: 'isim cümlesi fiil cümlesi mübteda haber fail meful terkip amil mamul',
    html: `
      <p>Arapçada cümleler ilk kelimenin türüne göre iki ana gruba ayrılır:</p>
      ${tbl(['Cümle Türü', 'Nasıl Başlar?', 'Temel Ögeleri', 'İ’râb Kuralı'], [
        ['<b>İsim Cümlesi</b>', 'İsimle başlar', 'Mübtedâ (özne) + Haber (yüklem)', 'Her iki ana öge de kural olarak <b>merfû’</b>dur.'],
        ['<b>Fiil Cümlesi</b>', 'Fiille başlar', 'Fiil + Fâil (özne) [+ Mef’ûl (nesne)]', 'Fâil <b>merfû’</b>, mef’ûl ise <b>mansûb</b>dur.']
      ])}
      <h4>1. İsim Cümlesi (Cümle-i İsmiyye)</h4>
      <p>Varlık veya durumun sabitliğini, sürekliliğini ifade eder. Mübtedâ genellikle marife (belirli), haber ise genellikle nekire (belirsiz) olur.</p>
      ${ex(1, 'ٱلْحَمْدُ لِلَّهِ', 'Hamd, Allah’a mahsustur.',
        '<b>ٱلْحَمْدُ</b>: Mübtedâ, lafzen damme ile merfû’.<br><b>لِلَّهِ</b>: Harf-i cer + mecrûr (şibh-i cümle), mahallen merfû’ haberdir.')}
      <h4>2. Fiil Cümlesi (Cümle-i Fi’liyye)</h4>
      <p>Bir eylemi, hareketi ve zamanı bildirir. Fâil açık bir isim olabileceği gibi, fiilin içine bitişik veya gizli bir zamir de olabilir.</p>
      ${ex(10, 'إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ', 'O vakit o gençler mağaraya sığınmıştı.',
        '<b>أَوَى</b>: Mâzî fiil.<br><b>ٱلْفِتْيَةُ</b>: Fâil (eylemi yapan), açık isim ve damme ile merfû’.')}
      ${tip('Arapçada fiil cümlenin başında geldiğinde fâil çoğul veya ikil olsa bile fiil <b>tekil</b> sîgada kalır: ' + ar('أَوَى ٱلْفِتْيَةُ') + ' (gençler çoğul olduğu halde ' + ar('أَوَوْا') + ' değil, tekil ' + ar('أَوَى') + ' geldi).')}
    `,
    quiz: q(ar('ٱلْحَمْدُ لِلَّهِ') + ' cümlesindeki ' + ar('ٱلْحَمْدُ') + ' kelimesinin cümledeki konumu nedir?',
      ['Fâil', 'Mübtedâ', 'Haber', 'Mef’ûl'], 1,
      'Cümle bir isimle başladığı için isim cümlesidir; cümlenin öznesi olan ilk öge mübtedâdır ve merfû’dur.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-merfuat', level: 'o', title: 'Merfûât: Fâil, Nâib-i Fâil, Mübtedâ ve Haber',
    kw: 'merfuat fail naib-i fail mubteda haber kanenin ismi innenin haberi ozne',
    html: `
      <p>Cümlede özne veya yüklem konumunda olup <b>ref’</b> (merfû’luk) durumunda bulunan ögelere <b>merfûât</b> denir.</p>
      ${tbl(['Öge', 'Görevi', 'Alamet', 'Örnek (Kehf)'], [
        ['<b>Mübtedâ</b>', 'İsim cümlesinin öznesi', 'Damme / Vâv / Elif', ar('ٱلْمَالُ وَٱلْبَنُونَ زِينَةُ') + ' (46)'],
        ['<b>Haber</b>', 'İsim cümlesinin yüklemi', 'Damme / Vâv / Elif', ar('زِينَةُ') + ' (46)'],
        ['<b>Fâil</b>', 'Etken fiilin öznesi', 'Damme / Vâv / Elif', ar('قَالَ قَآئِلٌ مِّنْهُمْ') + ' (19)'],
        ['<b>Nâib-i Fâil</b>', 'Edilgen (meçhul) fiilin sözde öznesi', 'Damme / Vâv / Elif', ar('وَوُضِعَ ٱلْكِتَٰبُ') + ' (49)']
      ])}
      <h4>Nâib-i Fâil (Sözde Özne)</h4>
      <p>Fiil meçhul (edilgen) yapıldığında (' + ar('فُعِلَ') + ' / ' + ar('يُفْعَلُ') + ') fâil hazfedilir; onun yerine nesne (mef’ûl) geçer ve merfû’ olur.</p>
      ${ex(49, 'وَوُضِعَ ٱلْكِتَٰبُ', 'Kitap (ortaya) konulmuştur.',
        '<b>وُضِعَ</b>: Meçhul mâzî fiil.<br><b>ٱلْكِتَٰبُ</b>: Nâib-i fâil; lafzen damme ile merfû’dur (aslı mef’ûl idi).')}
      ${ex(46, 'ٱلْمَالُ وَٱلْبَنُونَ زِينَةُ ٱلْحَيَوٰةِ ٱلدُّنْيَا', 'Mallar ve evlatlar dünya hayatının süsüdür.',
        '<b>ٱلْمَالُ</b>: Mübtedâ (damme ile merfû’).<br><b>ٱلْبَنُونَ</b>: Matuf (mülhak cem-i müzekker sâlim, vâv ile merfû’).<br><b>زِينَةُ</b>: Haber (damme ile merfû’).')}
    `,
    quiz: q(ar('وَوُضِعَ ٱلْكِتَٰبُ') + ' âyetindeki ' + ar('ٱلْكِتَٰبُ') + ' kelimesinin i’râbı nedir?',
      ['Fâil', 'Mef’ûlün bih', 'Nâib-i fâil', 'Mübtedâ'], 2,
      'Fiil meçhul (' + ar('وُضِعَ') + ') olduğu için fail yerine geçen nesne merfû’ nâib-i fâil olur.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-nevasih', level: 'o', title: 'Nevâsih: Kâne ve İnne’nin Kardeşleri',
    kw: 'nevasih kane inneleyte lealle leyse esbaha amil hukum degistirenler',
    html: `
      <p>İsim cümlesinin başına gelerek onun yapısını ve i’râbını değiştiren edat ve fiillere <b>nevâsih</b> (hükmü değiştirenler) denir.</p>
      ${tbl(['Grup', 'Kelimeler', 'Mübtedâya Etkisi', 'Habere Etkisi'], [
        ['<b>Kâne ve benzerleri</b> (Nâkıs fiiller)', ar('كَانَ، أَصْبَحَ، صَارَ، لَيْسَ، مَادَامَ…'), 'İsmi yapar: <b>Merfû’</b> bırakır', 'Haberi yapar: <b>Mansûb</b> kılar'],
        ['<b>İnne ve benzerleri</b> (Müşebbehe bi’l-fiil)', ar('إِنَّ، أَنَّ، كَأَنَّ، لَٰكِنَّ، لَيْتَ، لَعَلَّ'), 'İsmi yapar: <b>Mansûb</b> kılar', 'Haberi yapar: <b>Merfû’</b> bırakır']
      ])}
      <h4>1. Kâne ve Kardeşleri</h4>
      ${ex(82, 'وَكَانَ أَبُوهُمَا صَٰلِحًا', 'Onların babaları salih bir kimseydi.',
        '<b>كَانَ</b>: Nâkıs fiil.<br><b>أَبُوهُمَا</b>: Kâne’nin ismi (esmâ-i hamse olduğu için vâv ile merfû’).<br><b>صَٰلِحًا</b>: Kâne’nin haberi (lafzen fetha ile mansûb).')}
      <h4>2. İnne ve Kardeşleri</h4>
      ${ex(13, 'إِنَّهُمْ فِتْيَةٌ ءَامَنُوا۟', 'Şüphesiz onlar (Rablerine) inanmış gençti.',
        '<b>إِنَّ</b>: Te’kit harfi.<br><b>ـهُمْ</b>: İnne’nin ismi (muttasıl zamir, mahallen mansûb).<br><b>فِتْيَةٌ</b>: İnne’nin haberi (lafzen damme ile merfû’).')}
      ${warn('Kâne ile İnne tam zıt çalışır! <b>Kâne</b> haberi nasb eder; <b>İnne</b> ise ismi nasb eder.')}
    `,
    quiz: q(ar('وَكَانَ أَبُوهُمَا صَٰلِحًا') + ' terkibinde ' + ar('صَٰلِحًا') + ' kelimesi neden mansûbdur?',
      ['Kâne’nin ismi olduğu için', 'Kâne’nin haberi olduğu için', 'Fâil olduğu için', 'Mef’ûl-i mutlak olduğu için'], 1,
      'Kâne nâkıs fiili ismini merfû’, haberini ise mansûb yapar; ' + ar('صَٰلِحًا') + ' kâne’nin haberidir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-mansubat', level: 'o', title: 'Mansûbât: Mef’ûller (5 Mef’ûl)',
    kw: 'mansubat mefulun bih mutlak fih leh maah bes meful nesne zarf sebep',
    html: `
      <p>Cümlede eylemin nesnesi, zamanı, mekânı, sebebi ve tarzıyla ilgili ögeler <b>mansûb</b> (fetha vb.) olur. Klasik nahivde buna <b>5 Mef’ûl</b> (el-Mefâ’îlü’l-Hamse) denir.</p>
      ${tbl(['Mef’ûl Türü', 'Açıklaması / Soru', 'Örnek (Kehf)'], [
        ['<b>Mef’ûlün bih</b>', 'Doğrudan nesne (Neyi? Kimi?)', ar('أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ') + ' (1) → Kitabı indirdi'],
        ['<b>Mef’ûl-i mutlak</b>', 'Fiilin kendi kökünden masdarı (Pekiştirme/Sayı/Tarz)', ar('فَجَمَعْنَٰهُمْ جَمْعًا') + ' (99) → Tam bir toplayışla topladık'],
        ['<b>Mef’ûlün fîh</b>', 'Zaman veya mekân zarfı (Ne zaman? Nerede?)', ar('فِى ٱلْكَهْفِ سِنِينَ عَدَدًا') + ' (11) → Nice yıllar boyunca'],
        ['<b>Mef’ûlün leh</b>', 'Eylemin yapılma sebebi (Niçin?)', ar('أَسَفًا') + ' (6) → Üzüntüden dolayı'],
        ['<b>Mef’ûlün ma’ah</b>', 'Birliktelik bildiren vâv’dan (vâv-ı ma’iyye) sonraki isim', ar('سِرْتُ وَٱلْجَبَلَ') + ' → Dağ boyunca yürüdüm']
      ])}
      ${ex(1, 'أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ', 'Kuluna Kitab’ı indirdi.',
        '<b>ٱلْكِتَٰبَ</b>: Mef’ûlün bih (açık nesne), fetha ile mansûb.')}
      ${ex(99, 'فَجَمَعْنَٰهُمْ جَمْعًا', 'Onları büsbütün topladık.',
        '<b>جَمْعًا</b>: ' + ar('جَمَعَ') + ' fiilinin kendi masdarı olup fiili pekiştiren mef’ûl-i mutlaktır (mansûb).')}
    `,
    quiz: q(ar('فَجَمَعْنَٰهُمْ جَمْعًا') + ' ifadesindeki ' + ar('جَمْعًا') + ' kelimesinin nahiv görevi nedir?',
      ['Mef’ûlün bih', 'Mef’ûl-i mutlak', 'Mef’ûlün leh', 'Hâl'], 1,
      'Fiil ile aynı kökten gelen ve manayı pekiştiren masdara mef’ûl-i mutlak denir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-hal-temyiz', level: 'o', title: 'Hâl ve Temyîz Arasındaki Fark',
    kw: 'hal temyiz nasb nasb alameti nekire nasil ne bakimdan farki',
    html: `
      <p>Her ikisi de mansûb nekire isimlerdir ancak sordukları sorular ve giderdikleri kapalılık tamamen farklıdır:</p>
      ${tbl(['Özellik', 'Hâl (الْحَال)', 'Temyîz (التَّمْيِيز)'], [
        ['<b>Giderdiği kapalılık</b>', 'Öznenin veya nesnenin <b>durumunu/halini</b> açıklar.', 'Cümledeki veya kelimedeki <b>belirsizliği/oranı</b> netleştirir.'],
        ['<b>Cevap verdiği soru</b>', '<b>Nasıl? Ne vaziyette?</b> (حَالَ كَوْنِهِ)', '<b>Ne bakımından? Hangi açıdan?</b>'],
        ['<b>Asıl yapısı</b>', 'Genellikle müştak isimdir (ism-i fâil / mef’ûl).', 'Genellikle câmiddir (donuk isim veya masdar).']
      ])}
      <h4>1. Hâl Örneği</h4>
      ${ex(3, 'مَّٰكِثِينَ فِيهِ أَبَدًا', 'Orada ebedi kalıcılar olarak…',
        '<b>مَّٰكِثِينَ</b>: İsm-i fâil çoğulu; müminlerin durumunu bildiren <b>hâl</b>dir; cem-i müzekker sâlim olduğu için yâ ile mansûbdur.')}
      ${ex(18, 'وَكَلْبُهُم بَٰسِطٌ ذِرَاعَيْهِ', 'Köpekleri de kollarını uzatmış vaziyetteydi.',
        '<b>بَٰسِطٌ</b>: İsm-i fâil; durum bildiren terkibin parçasıdır.')}
      <h4>2. Temyîz Örneği</h4>
      ${ex(34, 'أَنَا۠ أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا', 'Ben malca senden daha çoğum, adamca da daha güçlüyüm.',
        '<b>مَالًا</b> ve <b>نَفَرًا</b>: ' + ar('أَكْثَرُ') + ' ve ' + ar('أَعَزُّ') + ' üstünlük isimlerinin hangi yönden olduğunu belirten <b>temyîz</b>dir (mansûb).')}
      ${tip('Karşılaştırma (ism-i tafdîl: ' + ar('أَفْعَلُ') + ') kalıbından sonra gelen nekire mansûb kelime neredeyse her zaman <b>temyîz</b>dir.')}
    `,
    quiz: q(ar('أَكْثَرُ مِنكَ مَالًا') + ' âyetindeki ' + ar('مَالًا') + ' kelimesi niçin temyîzdir?',
      ['Durum bildirdiği için (nasıl?)', 'Üstünlüğün hangi açıdan olduğunu açıkladığı için (ne bakımından?)', 'Fiilin kendi masdarı olduğu için', 'Harf-i cer aldığı için'], 1,
      'Çokluğun hangi alanda olduğunu netleştirdiği için (mal bakımından) temyîzdir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-mecrurat', level: 'b', title: 'Mecrûrât: Harf-i Cerler ve İsim Tamlaması (İzâfet)',
    kw: 'mecrurat harf-i cer izafet muzaf muzafun ileyh tamlama lam ba min ila fi kesra',
    html: `
      <p>Bir ismin <b>cer</b> (kesra vb.) durumunda olmasının iki temel sebebi vardır:</p>
      <h4>1. Harf-i Cer ile Mecrûr</h4>
      <p>Başında harf-i cer (${ar('مِنْ، إِلَىٰ، عَنْ، عَلَىٰ، فِي، رُبَّ، بِـ، كَـ، لِـ')} vb.) bulunan isim mecrûr olur.</p>
      ${ex(10, 'إِلَى ٱلْكَهْفِ', 'Mağaraya doğru',
        '<b>إِلَىٰ</b>: Harf-i cer.<br><b>ٱلْكَهْفِ</b>: Harf-i cerden dolayı lafzen kesra ile mecrûr.')}
      <h4>2. Muzâfun İleyh (İsim Tamlaması)</h4>
      <p>İki ismin tamlama yapmasıdır: Birinci kelime <b>Muzâf</b> (tamlanan), ikinci kelime <b>Muzâfun İleyh</b> (tamlayan) olur.</p>
      <ul>
        <li><b>Muzâf:</b> Cümledeki yerine göre hareke alır; asla tenvin veya ${ar('ال')} takısı almaz!</li>
        <li><b>Muzâfun İleyh:</b> Her zaman <b>mecrûr</b>dur.</li>
      </ul>
      ${ex(28, 'زِينَةَ ٱلْحَيَوٰةِ ٱلدُّنْيَا', 'Dünya hayatının süsü',
        '<b>زِينَةَ</b>: Muzâf (mef’ûl olduğu için mansûb).<br><b>ٱلْحَيَوٰةِ</b>: Muzâfun ileyh; tamlayan olduğu için kesra ile mecrûr.')}
      ${tip('Muzâf ikil (tesniye) veya cem-i müzekker sâlim olduğunda sonundaki <b>nûn harfi düşer</b>: ' + ar('عَبْدَا ٱللَّهِ') + ' (Allah’ın iki kulu; aslı ' + ar('عَبْدَانِ') + ').')}
    `,
    quiz: q(ar('زِينَةَ ٱلْحَيَوٰةِ') + ' tamlamasındaki ' + ar('ٱلْحَيَوٰةِ') + ' kelimesinin i’râbı nedir?',
      ['Merfû’ haber', 'Mecrûr muzâfun ileyh', 'Mansûb mef’ûl', 'Mübtedâ'], 1,
      'İsim tamlamasında ikinci öge muzâfun ileyh olup her zaman mecrûrdur.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'nahiv-tevabi', level: 'o', title: 'Tevâbi’: Sıfat, Atıf, Te’kîd, Bedel',
    kw: 'tevabi tabi olanlar sıfat mevsuf atıf matuf tekid bedel irab uyumu',
    html: `
      <p>Kendi bağımsız bir i’râb amili olmayıp, kendinden önceki kelimenin (metbû’) i’râbına aynen uyan 4 öge vardır:</p>
      ${tbl(['Tevâbi’', 'Görevi', 'Neye Uyar?', 'Örnek (Kehf)'], [
        ['<b>Sıfat (Na’t)</b>', 'Önceki ismin niteliğini bildirir', 'Harekede, belirlilikte, cinsiyette ve sayıda tam uyar', ar('أَجْرًا حَسَنًا') + ' (2)'],
        ['<b>Atıf</b>', 'Bağlaçla (' + ar('وَ، فَـ، ثُمَّ، أَوْ') + ' vb.) bağlanan kelime', 'İ’râbda matûfun aleyhe uyar', ar('ٱلْمَالُ وَٱلْبَنُونَ') + ' (46)'],
        ['<b>Te’kîd</b>', 'Anlamı pekiştirir (lafzî veya manevî: ' + ar('كُلّ، نَفْس، عَيْن') + ')', 'İ’râbda te’kit edilen isme uyar', ar('فَسَجَدَ ٱلْمَلَٰٓئِكَةُ كُلُّهُمْ')],
        ['<b>Bedel</b>', 'Önceki kelimenin yerini tutan / onu açıklayan öge', 'İ’râbda mübdelün minhe uyar', ar('بِهَٰذَا ٱلْحَدِيثِ') + ' (6)']
      ])}
      ${ex(2, 'أَجْرًا حَسَنًا', 'Güzel bir mükâfat',
        '<b>حَسَنًا</b>: ' + ar('أَجْرًا') + ' kelimesinin sıfatıdır. Mevsûfu mansûb ve nekire olduğu için kendisi de mansûb ve nekire gelmiştir.')}
      ${ex(6, 'بِهَٰذَا ٱلْحَدِيثِ', 'Şu söze (Kur’an’a)',
        'İşaret isminden (' + ar('هَٰذَا') + ') sonra gelen ' + ar('الـ') + ' takılı isimler genellikle <b>bedel</b> veya sıfat olur. Burada ' + ar('ٱلْحَدِيثِ') + ' mecrûr işaret isminin bedeli olarak mecrûrdur.')}
    `,
    quiz: q(ar('أَجْرًا حَسَنًا') + ' terkibindeki ' + ar('حَسَنًا') + ' kelimesi niçin mansûbdur?',
      ['Mef’ûlün bih olduğu için', 'Mevsûfu mansûb olan bir sıfat olduğu için', 'Hâl olduğu için', 'Temyîz olduğu için'], 1,
      'Sıfat tabi olduğu ismin (mevsûf) i’râbını alır; ' + ar('أَجْرًا') + ' mansûb olduğu için sıfatı ' + ar('حَسَنًا') + ' da mansûb olmuştur.')
  }

  ]
});
