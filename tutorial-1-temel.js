/* Bölüm 1: Temeller */
TUT.push({
  id: 'temel',
  icon: '🌱',
  title: 'Temeller',
  desc: 'Harfler, harekeler, kelime türleri, kök-vezin ve i\'rabın mantığı.',
  topics: [

  /* ------------------------------------------------------------------ */
  {
    id: 'temel-giris', level: 'b', title: 'Sarf ve Nahiv Nedir?',
    kw: 'giriş sarf nahiv ilim nedir i\'rab kelime cümle',
    html: `
      <p>Arapça gramer iki büyük ilme dayanır. İkisini bir bina yapımına benzetebiliriz:</p>
      ${tbl(['İlim', 'Neyi inceler?', 'Benzetme', 'Sorduğu soru'], [
        ['<b>Sarf</b> (morfoloji)', 'Tek bir kelimenin yapısı: kökü, vezni, bâbı, çekimi, çoğulu', 'Tuğlanın nasıl yapıldığı', '“Bu kelime nereden gelir, hangi kalıpta?”'],
        ['<b>Nahiv</b> (sözdizimi)', 'Kelimelerin cümledeki görevi ve sonlarındaki hareke (i\'râb)', 'Tuğlalarla duvar örmek', '“Bu kelime cümlede ne iş yapıyor, sonu neden damme/fetha/kesra?”']
      ])}
      <h4>Arapçada üç temel kelime türü vardır</h4>
      <ul>
        <li><b>İsim:</b> varlık veya kavram bildirir, zaman bildirmez (${ar('كِتَابٌ')} kitap).</li>
        <li><b>Fiil:</b> iş/oluşu zamanla birlikte bildirir (${ar('كَتَبَ')} yazdı).</li>
        <li><b>Harf:</b> tek başına anlamı yoktur, kelimeleri bağlar veya cümleye anlam katar (${ar('فِي')} içinde).</li>
      </ul>
      <h4>Küçük bir deneme: Kehf Suresi'nin ilk cümlesi</h4>
      ${ex(1, 'ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ', 'Hamd, kuluna indiren Allah\'a mahsustur.',
        '<b>Sarf gözüyle:</b> ' + ar('ٱلْحَمْدُ') + ' kökü ح-م-د olan bir masdardır; ' + ar('أَنزَلَ') + ' kökü ن-ز-ل olan if\'âl bâbından mâzî fiildir.<br><b>Nahiv gözüyle:</b> ' + ar('ٱلْحَمْدُ') + ' mübtedâdır, bu yüzden damme ile merfû\'dur; ' + ar('لِلَّهِ') + ' habere işaret eder; ' + ar('عَبْدِهِ') + ' harf-i cerden sonra geldiği için kesra ile mecrûrdur.')}
      ${note('Sunumdaki her âyette hem sarf hem nahiv tahlili yer alır. Bu rehber o tahlillerde geçen terimleri ve mantığı baştan sona açıklar. Dilediğiniz konuya geçebilirsiniz.')}
      ${tip('Arapça sağdan sola yazılır ve okunur. Kelimenin <b>sonundaki harekeyi</b> nahiv, <b>gövdesini</b> sarf belirler. Bu ayrımı akılda tutmak çoğu karışıklığı önler.')}
    `,
    quiz: q('Bir kelimenin kökünü, vezni ve bâbını inceleyen ilim hangisidir?',
      ['Sarf', 'Nahiv', 'Belâgat', 'Hat'], 0,
      'Kelimenin iç yapısını (kök, vezin, bâb, çekim) inceleyen ilim sarftır. Nahiv ise kelimelerin cümledeki görevini ve i\'râbını inceler.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'temel-harekeler', level: 'b', title: 'Harfler, Harekeler ve Okunuş İşaretleri',
    kw: 'harf hareke fetha damme kesra sükun şedde tenvin med hemze vasl elif güneş ay harfleri şemsi kameri',
    html: `
      <p>Arap alfabesi 28 harften oluşur. Kur'ân metninde harflerin okunuşunu <b>harekeler</b> belirler.</p>
      ${tbl(['İşaret', 'Adı', 'Okunuşu', 'Örnek'], [
        ['&#1614;', 'Fetha', 'a / e', ar('بَ') + ' ba'],
        ['&#1615;', 'Damme', 'u / ü', ar('بُ') + ' bu'],
        ['&#1616;', 'Kesra', 'i / ı', ar('بِ') + ' bi'],
        ['&#1618;', 'Sükûn', 'Ünlüsüz okunur', ar('بْ') + ' b'],
        ['&#1617;', 'Şedde', 'Harfi iki kez okutur (çift harf)', ar('رَبَّ') + ' rab-be'],
        ['&#1611; &#1612; &#1613;', 'Tenvin', 'Sonda -an / -un / -in sesi', ar('كِتَابًا كِتَابٌ كِتَابٍ')],
        ['&#1648;', 'Hançer elif', 'Harfin üstünde küçük uzatma elifi', ar('ٱلرَّحْمَٰنِ')],
        ['&#1619;', 'Med', 'Uzatma işareti', ar('ءَامَنُوا۟')],
        ['&#1649;', 'Vasl hemzesi', 'Birleşirken okunmayan elif', ar('ٱلْحَمْدُ')]
      ])}
      <h4>İllet harfleri</h4>
      <p>${ar('ا')} ${ar('و')} ${ar('ي')} harflerine <b>harf-i illet</b> denir. Sarfta fiillerin “mu'tel” sayılması bu harflerle ilgilidir. Diğer harfler <b>sahih</b> harflerdir.</p>
      <h4>Güneş (şemsî) ve ay (kameri) harfleri</h4>
      <p>Belirlilik takısı ${ar('الـ')} bazı harflerin önünde lâm'ını okutmaz, o harfi şeddeli okutur:</p>
      ${tbl(['Grup', 'Harfler', 'Davranış', 'Örnek'], [
        ['<b>Şemsî</b> (14)', ar('ت ث د ذ ر ز س ش ص ض ط ظ ل ن'), 'Lâm okunmaz, harf şeddelenir', ar('ٱلشَّمْسَ') + ' eş-şems'],
        ['<b>Kameri</b> (14)', ar('ا ب ج ح خ ع غ ف ق ك م ه و ي'), 'Lâm sükûnla okunur', ar('ٱلْكَهْفِ') + ' el-kehf']
      ])}
      ${ex(17, 'وَتَرَى ٱلشَّمْسَ إِذَا طَلَعَت', 'Güneşin doğduğunu görürsün.',
        '<b>ٱلشَّمْسَ</b>: şîn şemsî harf olduğu için “el-şems” değil “eş-şems” okunur. Şîn’in üzerindeki şedde bunu gösterir.')}
      ${ex(1, 'ٱلْحَمْدُ', 'Hamd', '<b>ٱلْحَمْدُ</b>: hâ kameri harf olduğu için lâm sükûnla okunur: “el-hamdu”.')}
      ${warn('Başlangıçtaki elif (' + ar('ٱ') + ') <b>vasl hemzesi</b>dir. Cümle ortasında önceki kelimeye bağlanınca okunmaz; ' + ar('أ') + ' (kat\' hemzesi) ise her zaman okunur.')}
    `,
    quiz: q('Aşağıdaki kelimelerden hangisinde “el” takısının lâm\'ı <b>okunmaz</b> (şemsî harf)?',
      [ar('ٱلْكَهْفِ'), ar('ٱلشَّمْسَ'), ar('ٱلْحَمْدُ'), ar('ٱلْبَحْرِ')], 1,
      'Şîn şemsî harftir; lâm okunmaz, şîn şeddeli okunur (eş-şems). Kâf, hâ ve bâ kameri harflerdir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'temel-kelime', level: 'b', title: 'Kelime Türleri: İsim, Fiil, Harf',
    kw: 'isim fiil harf mâzî muzâri emir alametleri kelime türü',
    html: `
      <p>Her Arapça kelime bu üç türden birine girer. Doğru tahlilin ilk adımı türü tanımaktır.</p>
      <h4>İsmin alametleri</h4>
      <ul>
        <li>Başında ${ar('ال')} (belirlilik takısı) olması: ${ar('ٱلْكِتَابَ')}</li>
        <li>Sonunda tenvin olması: ${ar('كِتَابٌ')}</li>
        <li>Önüne harf-i cer girmesi: ${ar('بِٱلْحَقِّ')}</li>
        <li>Nidâ edilebilmesi (${ar('يَا')} ile), mübteda/haber/muzâf olabilmesi.</li>
      </ul>
      <h4>Fiilin alametleri</h4>
      <ul>
        <li>Başına ${ar('قَدْ')} veya ${ar('سَ / سَوْفَ')} gelmesi</li>
        <li>Sonuna müennes sâkin tâ (${ar('كَتَبَتْ')}) veya fâil tâsı (${ar('كَتَبْتُ')}) gelmesi</li>
        <li>Emirde muhatap yâ'sı (${ar('ٱكْتُبِي')}) alması</li>
      </ul>
      <h4>Harf</h4>
      <p>İsim ve fiil alametlerini kabul etmeyen, tek başına anlam taşımayan kelimedir: ${ar('فِي')}, ${ar('عَلَىٰ')}, ${ar('وَ')}, ${ar('لَمْ')}, ${ar('إِنَّ')}.</p>
      ${ex(1, 'ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ', null, '')}
      ${tbl(['Kelime', 'Tür', 'Neden?'], [
        [ar('ٱلْحَمْدُ'), 'İsim', 'Başında ال var, zaman bildirmez'],
        [ar('لِ'), 'Harf', 'Harf-i cer; tek başına anlamı yok (“için, ait”)'],
        [ar('ٱللَّهِ'), 'İsim', 'Harf-i cerden sonra mecrûr'],
        [ar('ٱلَّذِىٓ'), 'İsim (mevsûl)', 'Mebnî bir isim; “o ki” anlamında'],
        [ar('أَنزَلَ'), 'Fiil (mâzî)', 'Geçmiş zamanda iş bildiriyor'],
        [ar('عَلَىٰ'), 'Harf', 'Harf-i cer'],
        [ar('عَبْدِهِ'), 'İsim + zamir', 'Kul + ona ait “-hu”']
      ])}
      <h4>Fiil zamanları kısaca</h4>
      ${tbl(['Tür', 'Anlam', 'Örnek'], [
        ['Mâzî', 'Geçmiş', ar('كَتَبَ') + ' yazdı'],
        ['Muzâri\'', 'Şimdiki / gelecek', ar('يَكْتُبُ') + ' yazar / yazıyor'],
        ['Emir', 'Emir', ar('ٱكْتُبْ') + ' yaz!']
      ])}
      ${tip('Bir kelimede ilk bakışta “fiil mi isim mi?” diye şüphe edersen önüne ' + ar('بِ') + ' veya ' + ar('ال') + ' koymayı dene. Kabul ediyorsa isimdir; ' + ar('قَدْ') + ' veya ' + ar('سَ') + ' kabul ediyorsa fiildir.')}
    `,
    quiz: q(ar('أَنزَلَ') + ' kelimesi hangi türdendir?',
      ['İsim', 'Mâzî fiil', 'Harf-i cer', 'Muzâri fiil'], 1,
      '“İndirdi” anlamıyla geçmiş zamanda bir iş bildirir; if\'âl bâbından mâzî fiildir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'temel-kok-vezin', level: 'b', title: 'Kök (Mâdde) ve Vezin',
    kw: 'kök mâdde vezin fa ayn lam فعل ziyade harf ölçü kalıp',
    html: `
      <p>Arapça kelimelerin büyük çoğunluğu <b>üç harfli bir kökten</b> türer. Aynı kökten gelen kelimeler ortak bir anlam çekirdeğini paylaşır. Örneğin ${ar('ك-ت-ب')} köküyle <i>yazma</i> fikri taşıyan şu kelimeler oluşur: ${ar('كَتَبَ')} (yazdı), ${ar('كِتَابٌ')} (kitap), ${ar('كَاتِبٌ')} (yazar), ${ar('مَكْتُوبٌ')} (yazılmış).</p>
      <h4>Vezin: kelimenin kalıbı</h4>
      <p>Kelimenin yapısını göstermek için ${ar('ف ع ل')} harfleri “ölçü” olarak kullanılır:</p>
      <ul>
        <li>${ar('ف')} = kökün 1. harfi (<i>fâ'ü'l-fiil</i>)</li>
        <li>${ar('ع')} = kökün 2. harfi (<i>ayn'ü'l-fiil</i>)</li>
        <li>${ar('ل')} = kökün 3. harfi (<i>lâmü'l-fiil</i>)</li>
      </ul>
      <p>Kökün dışındaki <b>ziyade (fazladan)</b> harfler vezinde aynen yazılır. Hareke ve şeddeler de korunur.</p>
      ${tbl(['Kelime', 'Kök', 'Vezin', 'Açıklama'], [
        [ar('ٱلْحَمْدُ'), ar('ح-م-د'), ar('فَعْل'), 'Kök harfleri hareke sırasıyla yerleşir (ال vezne girmez)'],
        [ar('كِتَابٌ'), ar('ك-ت-ب'), ar('فِعَالٌ'), 'Ortadaki uzatma elifi vezinde de elif olarak kalır'],
        [ar('كَاتِبٌ'), ar('ك-ت-ب'), ar('فَاعِلٌ'), 'İsm-i fâil kalıbı'],
        [ar('مَكْتُوبٌ'), ar('ك-ت-ب'), ar('مَفْعُولٌ'), 'İsm-i mef\'ûl kalıbı'],
        [ar('أَنزَلَ'), ar('ن-ز-ل'), ar('أَفْعَلَ'), 'Baştaki hemze ziyade; if\'âl bâbı'],
        [ar('جَاعِلُونَ'), ar('ج-ع-ل'), ar('فَاعِلُونَ'), 'İsm-i fâil cemi']
      ])}
      ${ex(8, 'وَإِنَّا لَجَٰعِلُونَ مَا عَلَيْهَا', 'Biz onun üzerindekini mutlaka (çıplak toprak) yapacağız.',
        '<b>لَجَٰعِلُونَ</b>: baştaki ' + ar('لَ') + ' lâm-ı tevkîd (ziyade), kök ' + ar('ج-ع-ل') + ', vezin ' + ar('فَاعِلُونَ') + ' (ism-i fâil, cemi müzekker sâlim).')}
      ${tip('Ziyade harfleri ayırmak için klasik bir formül vardır: ' + ar('سَأَلْتُمُونِيهَا') + ' (“onu benden istediniz”). Bu kelimedeki 10 harf (' + ar('س ا ل ت م و ن ي ه') + ') ziyade olabilen harflerdir. Kelimede bunların dışındaki bir harf asıldır. Ancak bir harf formüldeki harflerden biri diye mutlaka ziyade olmaz, kök kontrolü gerekir.')}
    `,
    quiz: q(ar('كَاتِبٌ') + ' kelimesinin veznî hangisidir?',
      [ar('فَاعِلٌ'), ar('مَفْعُولٌ'), ar('فِعَالٌ'), ar('أَفْعَلُ')], 0,
      'Kök ك-ت-ب; elif ziyade, kâf = ف, tâ = ع, bâ = ل → فَاعِلٌ (ism-i fâil).')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'temel-irab', level: 'b', title: 'İ\'râb Nedir? Mu\'reb ve Mebnî',
    kw: 'irab i\'rab mu\'reb mebni merfu mansub mecrur meczum alamet esma-i hamse tesniye cemi müzekker sâlim',
    html: `
      <p><b>İ'râb</b>, bir kelimenin cümledeki göreve göre <b>sonunun değişmesidir</b>. Türkçede “kitab<u>ı</u> okudum / kitab<u>a</u> baktım” gibi hâl ekleri vardır. Arapçada aynı işi kelimenin son harekesi görür.</p>
      <h4>Dört i'râb durumu</h4>
      ${tbl(['Durum', 'Alameti (aslî)', 'Nerede?', 'Örnek'], [
        ['<b>Merfû\'</b> (ref\')', 'Damme', 'Özne, mübteda, haber vb.', ar('ٱلْحَمْدُ')],
        ['<b>Mansûb</b> (nasb)', 'Fetha', 'Nesne, hâl, temyiz vb.', ar('كِتَابًا')],
        ['<b>Mecrûr</b> (cer)', 'Kesra', 'Harf-i cerden sonra, muzâfun ileyh', ar('لِلَّهِ')],
        ['<b>Meczûm</b> (cezm)', 'Sükûn', 'Yalnızca fiillerde (muzâri)', ar('لَمْ يَكْتُبْ')]
      ])}
      ${note('İsimler merfû\', mansûb ve mecrûr olabilir; <b>meczûm olmaz</b>. Fiiller merfû\', mansûb ve meczûm olabilir; <b>mecrûr olmaz</b>.')}
      <h4>Mu'reb ve mebnî</h4>
      <ul>
        <li><b>Mu'reb:</b> sonu göreve göre değişen kelimeler. Çoğu isim ve muzâri fiil.</li>
        <li><b>Mebnî:</b> sonu hiç değişmeyen kelimeler. Harfler, mâzî fiil, emir fiili, zamirler, işaret/mevsûl/istifham isimleri. Mebnî kelimeyi tahlil ederken “neye mebnî” (fetha, damme, sükûn…) denir.</li>
      </ul>
      <h4>Fer'î (ikincil) alametler</h4>
      <p>Her isim damme/fetha/kesra almaz. Bazı kelime grupları farklı alamet alır:</p>
      ${tbl(['Kelime grubu', 'Merfû\'', 'Mansûb', 'Mecrûr'], [
        ['Müfred isim, cem-i teksîr', 'Damme', 'Fetha', 'Kesra'],
        ['Cem-i müennes sâlim (' + ar('ـَاتٌ') + ')', 'Damme', '<b>Kesra</b>', 'Kesra'],
        ['Gayr-i munsarif', 'Damme', 'Fetha', '<b>Fetha</b>'],
        ['Tesniye (' + ar('ـَانِ') + ')', '<b>Elif</b>', '<b>Yâ</b>', '<b>Yâ</b>'],
        ['Cem-i müzekker sâlim (' + ar('ـُونَ') + ')', '<b>Vâv</b>', '<b>Yâ</b>', '<b>Yâ</b>'],
        ['Esmâ-i hamse (' + ar('أَب، أَخ، حَم، فُو، ذُو') + ')', '<b>Vâv</b>', '<b>Elif</b>', '<b>Yâ</b>'],
        ['Muzâri fiil', 'Damme', 'Fetha', '—'],
        ['Ef\'âl-i hamse', '<b>Nûnun sübûtu</b>', '<b>Nûnun hazfi</b>', '—']
      ])}
      ${ex(82, 'وَكَانَ أَبُوهُمَا صَٰلِحًا', 'Babaları da salih bir kimseydi.',
        '<b>أَبُوهُمَا</b>: esmâ-i hamseden olduğu için “kâne’nin ismi” olarak merfû\'dur ve alameti <b>vâv</b>dır (damme yerine).')}
      ${ex(80, 'فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ', 'Anne babası mümin kimselerdi.',
        '<b>أَبَوَاهُ</b>: tesniye, merfû\' ve alameti <b>elif</b>. <b>مُؤْمِنَيْنِ</b>: tesniye, kâne’nin haberi olduğu için mansûb; alameti <b>yâ</b>.')}
      ${ex(94, 'إِنَّ يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ', 'Ye\'cûc ve Me\'cûc fesatçılardır.',
        '<b>مُفْسِدُونَ</b>: cem-i müzekker sâlim; inne\'nin haberi olduğu için merfû\', alameti <b>vâv</b>.')}
      ${ex(97, 'فَمَا ٱسْطَٰعُوٓا۟ أَن يَظْهَرُوهُ', 'Onun üzerine çıkamadılar.',
        '<b>يَظْهَرُوهُ</b>: ef\'âl-i hamseden muzâri. ' + ar('أَنْ') + ' ile mansûb olduğundan alameti <b>nûnun hazfi</b>dir (aslı ' + ar('يَظْهَرُونَ') + ').')}
    `,
    quiz: q('Aşağıdakilerden hangisi <b>mebnî</b> (sonu değişmeyen) bir kelimedir?',
      [ar('كِتَابٌ'), ar('عَلَىٰ'), ar('رَجُلٌ'), ar('يَكْتُبُ')], 1,
      'Harfler mebnîdir. ' + ar('كِتَابٌ') + ' ve ' + ar('رَجُلٌ') + ' mu\'reb isimler, ' + ar('يَكْتُبُ') + ' ise mu\'reb muzâri fiildir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'temel-zamir', level: 'b', title: 'Zamirler, İşaret ve Mevsûl İsimler',
    kw: 'zamir munfasıl muttasıl işaret ismi mevsul sıla hüve hiye ene nahnu hâzâ zâlike ellezi',
    html: `
      <p>Bu üç grup mebnî isimlerdir; sonları cümledeki göreve göre değişmez, ama cümledeki yerleri (mahalli) i'râb edilir.</p>
      <h4>Zamirler</h4>
      ${tbl(['Kişi', 'Müfred', 'Tesniye', 'Cem'], [
        ['Gâib (müzekker)', ar('هُوَ'), ar('هُمَا'), ar('هُمْ')],
        ['Gâibe (müennes)', ar('هِيَ'), ar('هُمَا'), ar('هُنَّ')],
        ['Muhatab (müzekker)', ar('أَنْتَ'), ar('أَنْتُمَا'), ar('أَنْتُمْ')],
        ['Muhataba (müennes)', ar('أَنْتِ'), ar('أَنْتُمَا'), ar('أَنْتُنَّ')],
        ['Mütekellim', ar('أَنَا'), '—', ar('نَحْنُ')]
      ])}
      <p>Bu tablo <b>munfasıl</b> (ayrı yazılan) zamirleri verir. Bir de kelimeye eklenen <b>muttasıl</b> zamirler vardır: ${ar('كِتَابُهُ')} (onun kitabı), ${ar('كِتَابُكَ')} (senin kitabın), ${ar('كِتَابُنَا')} (bizim kitabımız). Fiile eklenince nesne, isme eklenince “-in” (muzâfun ileyh) anlamı verir; harf-i cere eklenince mecrûr olur.</p>
      ${ex(13, 'نَّحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم', 'Biz sana onların haberini anlatıyoruz.',
        '<b>نَحْنُ</b>: munfasıl zamir, mübteda (mahallen merfû\'). <b>عَلَيْكَ</b>: harf-i cer + muttasıl zamir (kâf), mahallen mecrûr. <b>نَبَأَهُمْ</b>: nebe\' mef\'ûl, ' + ar('هُمْ') + ' muzâfun ileyh.')}
      <h4>İşaret isimleri</h4>
      ${tbl(['', 'Müzekker', 'Müennes', 'Tesniye', 'Cem'], [
        ['Yakın', ar('هَٰذَا'), ar('هَٰذِهِ'), ar('هَٰذَانِ / هَٰذَيْنِ'), ar('هَٰٓؤُلَآءِ')],
        ['Uzak', ar('ذَٰلِكَ'), ar('تِلْكَ'), ar('ذَانِكَ'), ar('أُو۟لَٰٓئِكَ')]
      ])}
      ${ex(15, 'هَٰٓؤُلَآءِ قَوْمُنَا ٱتَّخَذُوا۟', 'İşte bunlar bizim kavmimizdir; (Allah’ı bırakıp) edindiler…',
        '<b>هَٰٓؤُلَآءِ</b>: yakın cem işaret ismi, mebnî ve mübteda. <b>قَوْمُنَا</b>: haber, muzâf.')}
      <h4>Mevsûl (ilgi) isimler</h4>
      <p>Mevsûl, ardından gelen <b>sıla cümlesiyle</b> tamamlanan ismidir (“… olan, ki o”).</p>
      ${tbl(['Müzekker', 'Müennes', 'Tesniye', 'Cem', 'Ortak'], [
        [ar('ٱلَّذِى'), ar('ٱلَّتِى'), ar('ٱللَّذَانِ / ٱللَّذَيْنِ'), ar('ٱلَّذِينَ'), ar('مَا، مَنْ')]
      ])}
      ${ex(37, 'أَكَفَرْتَ بِٱلَّذِى خَلَقَكَ مِن تُرَابٍ', 'Seni topraktan yaratana mı küfrettin?',
        '<b>ٱلَّذِى</b>: mevsûl isim, mahallen mecrûr. <b>خَلَقَكَ…</b>: sıla cümlesi; i\'râbda mahalli yoktur. Sıla cümlesinde mevsûle dönen bir zamir (râbıt) bulunur: gizli ' + ar('هُوَ') + '.')}
      ${ex(82, 'ذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع', 'İşte bu, sabredemediğin şeylerin yorumudur.',
        '<b>ذَٰلِكَ</b>: uzak işaret ismi, mübteda; <b>تَأْوِيلُ</b>: haber; <b>مَا</b>: mevsûl (muzâfun ileyh) ve ardından sıla cümlesi.')}
    `,
    quiz: q(ar('هَٰٓؤُلَآءِ') + ' kelimesi hangi gruptandır?',
      ['Muttasıl zamir', 'Mevsûl isim', 'İşaret ismi (yakın, cem)', 'Harf-i cer'], 2,
      'Yakını gösteren çoğul işaret ismidir; mebnîdir.')
  }

  ]
});
