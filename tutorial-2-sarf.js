/* Bölüm 2: Sarf (morfoloji) */
TUT.push({
  id: 'sarf',
  icon: '🧱',
  title: 'Sarf: Kelimenin Yapısı',
  desc: 'Fiil çekimleri, bâblar, mu’tel fiiller, müştak isimler, masdar ve çoğul kalıpları.',
  topics: [

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-fiil', level: 'b', title: 'Fiil: Mâzî, Muzâri’, Emir, Nehy ve 14 Sîga',
    kw: 'fiil mazi muzari emir nehy sîga çekim gaib muhatab mütekellim kâtebe',
    html: `
      <p>Arapça fiil; <b>zamanı</b> (mâzî / muzâri’ / emir) ve <b>kişiyi-sayıyı-cinsi</b> (14 sîga) aynı anda gösterir. Aşağıda ${ar('كَتَبَ')} (yazdı) fiilinin tam çekimi var.</p>
      <h4>Mâzî (geçmiş) çekimi</h4>
      ${tbl(['Kişi', 'Müfred', 'Tesniye', 'Cem'], [
        ['Gâib (o / onlar)', ar('كَتَبَ'), ar('كَتَبَا'), ar('كَتَبُوا')],
        ['Gâibe (o kadın)', ar('كَتَبَتْ'), ar('كَتَبَتَا'), ar('كَتَبْنَ')],
        ['Muhatab (sen)', ar('كَتَبْتَ'), ar('كَتَبْتُمَا'), ar('كَتَبْتُمْ')],
        ['Muhataba (sen, kadın)', ar('كَتَبْتِ'), ar('كَتَبْتُمَا'), ar('كَتَبْتُنَّ')],
        ['Mütekellim (ben / biz)', ar('كَتَبْتُ'), '—', ar('كَتَبْنَا')]
      ])}
      <h4>Muzâri’ (şimdiki-gelecek) çekimi</h4>
      ${tbl(['Kişi', 'Müfred', 'Tesniye', 'Cem'], [
        ['Gâib', ar('يَكْتُبُ'), ar('يَكْتُبَانِ'), ar('يَكْتُبُونَ')],
        ['Gâibe', ar('تَكْتُبُ'), ar('تَكْتُبَانِ'), ar('يَكْتُبْنَ')],
        ['Muhatab', ar('تَكْتُبُ'), ar('تَكْتُبَانِ'), ar('تَكْتُبُونَ')],
        ['Muhataba', ar('تَكْتُبِينَ'), ar('تَكْتُبَانِ'), ar('تَكْتُبْنَ')],
        ['Mütekellim', ar('أَكْتُبُ'), '—', ar('نَكْتُبُ')]
      ])}
      <p>Muzâri fiilin başındaki harfler ${ar('أ ن ي ت')} (“eteyn”; hatırlatma: ${ar('نَأَيْتُ')}) fiilin kime ait olduğunu gösterir: ${ar('أ')} ben, ${ar('ن')} biz, ${ar('ي')} gâib, ${ar('ت')} muhatab/gâibe.</p>
      <h4>Emir ve Nehy</h4>
      ${tbl(['', 'Müzekker', 'Müennes'], [
        ['Emir (müfred / tesniye / cem)', ar('ٱكْتُبْ / ٱكْتُبَا / ٱكْتُبُوا'), ar('ٱكْتُبِي / ٱكْتُبَا / ٱكْتُبْنَ')],
        ['Nehy (yasak)', ar('لَا تَكْتُبْ'), ar('لَا تَكْتُبِي')]
      ])}
      ${note('Mâzî ve emir fiilleri <b>mebnî</b>dir (sonları değişmez). Muzâri’ ise ' + ar('لَمْ') + ', ' + ar('لَنْ') + ', ' + ar('أَنْ') + ' gibi bir edat almadıkça merfû’ olan <b>mu’reb</b> bir fiildir.')}
      ${ex(11, 'فَضَرَبْنَا عَلَىٰٓ ءَاذَانِهِمْ', 'Bunun üzerine kulaklarına (uyku perdesi) vurduk.',
        '<b>ضَرَبْنَا</b>: mâzî, mütekellim cem (nâ). Fiilin sonu sükûna mebnî olur çünkü fâil zamiri “nâ” gelmiştir.')}
      ${ex(83, 'قُلْ سَأَتْلُوا۟ عَلَيْكُم', 'De ki: “Size ondan bir anlatım okuyacağım.”',
        '<b>قُلْ</b>: emir. <b>سَأَتْلُوا</b>: muzâri’ mütekellim müfred; ' + ar('سَ') + ' ile gelecek zaman anlamı kazanmıştır.')}
      ${ex(28, 'وَٱصْبِرْ نَفْسَكَ', 'Kendini sabırlı kıl / sabret.', '<b>ٱصْبِرْ</b>: müfred müzekker muhatab emir fiili, sükûna mebnî.')}
      ${ex(70, 'فَلَا تَسْـَٔلْنِى عَن شَىْءٍ', 'Bana hiçbir şey sorma!', '<b>تَسْـَٔلْ</b>: ' + ar('لَا') + '-yı nehy ile meczûm muzâri’ (nehy), sonuna gelen nûn-ı vikâye ve yâ’ mütekellim ' + ar('نِى') + ' fiilin sonundaki sükûnu etkilemez.')}
    `,
    quiz: q(ar('يَكْتُبُونَ') + ' hangi sîgadır?',
      ['Mâzî, gâib cem', 'Muzâri’, gâib müzekker cem', 'Emir, muhatab cem', 'Muzâri’, muhatab cem'], 1,
      'Başında ' + ar('ي') + ' (gâib), sonunda ' + ar('ـُونَ') + ' (müzekker cem) var; bu yüzden muzâri’ gâib müzekker cemidir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-sulasi', level: 'o', title: 'Sülâsî Mücerred Fiiller ve 6 Bâb',
    kw: 'sülasi mücerred bab nasara darabe fetaha alime kerume hasibe halk harfi fe\'ale yef\'ulu',
    html: `
      <p><b>Sülâsî mücerred</b> fiil, kökü üç harften ibaret olan ve hiçbir ziyade harf almamış fiildir. Mâzîdeki ve muzâri’deki ayn’ı’l-fiil (2. kök harfi) harekesine göre <b>6 bâb</b>a ayrılır.</p>
      ${tbl(['Bâb', 'Mâzî – Muzâri’ vezni', 'Klasik örnek', 'Kehf’ten örnek'], [
        ['1', ar('فَعَلَ – يَفْعُلُ'), ar('نَصَرَ – يَنْصُرُ'), ar('خَرَجَ – يَخْرُجُ') + ' (' + ar('تَخْرُجُ') + ', 5)'],
        ['2', ar('فَعَلَ – يَفْعِلُ'), ar('ضَرَبَ – يَضْرِبُ'), ar('ضَرَبَ') + ' (' + ar('وَٱضْرِبْ') + ', 32)'],
        ['3', ar('فَعَلَ – يَفْعَلُ'), ar('فَتَحَ – يَفْتَحُ'), ar('جَعَلَ – يَجْعَلُ') + ' (' + ar('يَجْعَل') + ', 1)'],
        ['4', ar('فَعِلَ – يَفْعَلُ'), ar('عَلِمَ – يَعْلَمُ'), ar('عَلِمَ – يَعْلَمُ') + ' (' + ar('يَعْلَمُهُمْ') + ', 22)'],
        ['5', ar('فَعُلَ – يَفْعُلُ'), ar('كَرُمَ – يَكْرُمُ'), ar('كَبُرَ – يَكْبُرُ') + ' (' + ar('كَبُرَتْ') + ', 5)'],
        ['6', ar('فَعِلَ – يَفْعِلُ'), ar('وَرِثَ – يَرِثُ'), 'Az görülür; ' + ar('حَسِبَ') + ' hem ' + ar('يَحْسِبُ') + ' hem ' + ar('يَحْسَبُ') + ' okunmuştur']
      ])}
      <h4>Pratik kurallar</h4>
      <ul>
        <li><b>Mâzîsi ${ar('فَعُلَ')} olan fiiller</b> (5. bâb) hep muzâri’de de damme alır ve genellikle <i>lâzım</i> fiildir; tabiat/nitelik bildirir: ${ar('حَسُنَ')} güzel oldu, ${ar('كَبُرَ')} büyüdü.</li>
        <li><b>3. bâb</b> çoğunlukla fiilin ayn’ı veya lâm’ı <b>halk harfi</b> olduğunda gelir (${ar('ء ه ع ح غ خ')}): ${ar('جَعَلَ')} (ayn = ع), ${ar('فَتَحَ')} (lâm = ح).</li>
        <li>Sülâsî fiilin masdarı <b>semâîdir</b>; kural yoktur, sözlükten bilinir (${ar('نَصْر')}, ${ar('ضَرْب')}, ${ar('عِلْم')}, ${ar('رَحْمَة')}).</li>
      </ul>
      ${ex(5, 'كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَٰهِهِمْ', 'Ağızlarından çıkan söz ne büyük bir söz oldu!',
        '<b>كَبُرَتْ</b>: ' + ar('كَبُرَ – يَكْبُرُ') + ', 5. bâb (tabiat/nitelik bildirir), ta’accüb anlamı taşır. <b>تَخْرُجُ</b>: ' + ar('خَرَجَ – يَخْرُجُ') + ', 1. bâb muzâri’.')}
      ${ex(1, 'وَلَمْ يَجْعَل لَّهُۥ عِوَجَاۜ', 'Onda hiçbir eğrilik kılmadı.',
        '<b>يَجْعَل</b>: ' + ar('جَعَلَ – يَجْعَلُ') + ', 3. bâb (ayn’ı halk harfi); ' + ar('لَمْ') + ' ile meczûm olduğundan lâm’ı sükûnlu.')}
      ${ex(22, 'مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌ', 'Onları ancak pek az kimse bilir.', '<b>يَعْلَمُ</b>: 4. bâb (' + ar('فَعِلَ – يَفْعَلُ') + ').')}
    `,
    quiz: q('Mâzîsi ' + ar('فَعُلَ') + ' vezninde olan fiiller (örn. ' + ar('كَبُرَ') + ') genellikle nasıl fiillerdir?',
      ['Geçişli, hareket bildiren', 'Tabiat/nitelik bildiren, lâzım', 'Meçhul fiiller', 'Mu’tel fiiller'], 1,
      '5. bâb fiilleri (' + ar('حَسُنَ، كَبُرَ، كَرُمَ') + ') bir sıfatın, doğal niteliğin kazanılmasını bildirir ve lâzımdır (nesne almaz).')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-mezid', level: 'o', title: 'Mezîd Fiiller: Ziyadeli Bâblar',
    kw: 'mezid bab if\'al tef\'il mufaale infial iftial tefaul tefaul istifal ziyade harf anlam',
    html: `
      <p>Sülâsî fiile bir, iki veya üç ziyade harf eklenirse <b>mezîd</b> (ziyadeli) fiil doğar. Eklenen harfler anlamı değiştirir. Aşağıdaki tablo en çok geçen bâbları gösterir.</p>
      ${tbl(['Bâb', 'Mâzî – Muzâri’ – Masdar', 'Genel anlamı', 'Örnek (Kehf)'], [
        ['<b>İf’âl</b>', ar('أَفْعَلَ – يُفْعِلُ – إِفْعَالًا'), 'Geçişli yapma (ta’diye)', ar('أَنزَلَ') + ' indirdi (1)'],
        ['<b>Tef’îl</b>', ar('فَعَّلَ – يُفَعِّلُ – تَفْعِيلًا'), 'Çoğaltma, mübalağa, geçişli yapma', ar('يُبَشِّرَ') + ' müjdelesin (2)'],
        ['<b>Mufâale</b>', ar('فَاعَلَ – يُفَاعِلُ – مُفَاعَلَةً'), 'İki taraflılık, karşılıklı iş', ar('يُجَٰدِلُ') + ' tartışır (56)'],
        ['<b>İnfi’âl</b>', ar('ٱنْفَعَلَ – يَنْفَعِلُ – ٱنْفِعَالًا'), 'Mutâvaa (kendiliğinden olma, etki kabulü)', ar('ٱنطَلَقَا') + ' yola koyuldular (71)'],
        ['<b>İfti’âl</b>', ar('ٱفْتَعَلَ – يَفْتَعِلُ – ٱفْتِعَالًا'), 'Kendi için yapma, edinme, mutâvaa', ar('ٱعْتَزَلْتُمُوهُمْ') + ' ayrıldınız (16)'],
        ['<b>Tefa’’ul</b>', ar('تَفَعَّلَ – يَتَفَعَّلُ – تَفَعُّلًا'), 'Zahmetle yapma, kendiliğinden olma', ar('وَلْيَتَلَطَّفْ') + ' nazik davransın (19)'],
        ['<b>Tefâ’ul</b>', ar('تَفَاعَلَ – يَتَفَاعَلُ – تَفَاعُلًا'), 'Karşılıklılık, birbirine yapma', ar('يَتَنَٰزَعُونَ') + ' çekişirler (21)'],
        ['<b>İstif’âl</b>', ar('ٱسْتَفْعَلَ – يَسْتَفْعِلُ – ٱسْتِفْعَالًا'), 'Talep etme, bulma, sayma', ar('ٱسْتَطْعَمَآ') + ' yiyecek istediler (77)'],
        ['<b>İf’ilâl</b>', ar('ٱفْعَلَّ – يَفْعَلُّ – ٱفْعِلَالًا'), 'Renk ve ayıp bildirir', ar('ٱحْمَرَّ') + ' kızardı']
      ])}
      ${note('Muzâri’de dikkat: <b>if’âl, tef’îl ve mufâale</b> bâblarında muzâri’ harfi (' + ar('ي') + ') <b>dammelidir</b> (' + ar('يُنزِلُ') + ', ' + ar('يُبَشِّرُ') + '). Diğer mezîd bâblarda fetha alır. Bu ayrım, ism-i fâil ve mef’ûl kalıplarında da ipucu verir.')}
      ${ex(71, 'فَٱنطَلَقَا حَتَّىٰٓ إِذَا رَكِبَا', 'Böylece yola koyuldular, nihayet bindiklerinde…',
        '<b>ٱنطَلَقَا</b>: kök ' + ar('ط-ل-ق') + ', <b>infi’âl</b> bâbı mâzîsi, gâib tesniye. Baştaki ' + ar('ٱ') + ' vasl hemzesi, ' + ar('ن') + ' ziyade.')}
      ${ex(77, 'ٱسْتَطْعَمَآ أَهْلَهَا', 'Halkından yiyecek istediler.',
        '<b>ٱسْتَطْعَمَ</b>: kök ' + ar('ط-ع-م') + ', <b>istif’âl</b> bâbı; ' + ar('ٱسْتَـ') + ' eki “talep” anlamı verir: yemek ister.')}
      ${ex(56, 'وَيُجَٰدِلُ ٱلَّذِينَ كَفَرُوا۟ بِٱلْبَٰطِلِ', 'İnkâr edenler batılla tartışırlar.',
        '<b>يُجَٰدِلُ</b>: kök ' + ar('ج-د-ل') + ', <b>mufâale</b> bâbı muzâri’si; iki taraflı tartışma anlamı vardır.')}
      ${tip('Mezîd fiilin kökünü bulmak için önce ziyade harfleri (' + ar('ٱسْتَـ') + ', ' + ar('ٱنْ') + ', ' + ar('ٱفْتَـ') + ', ' + ar('تَـ') + ', şedde vb.) kelimeden ayır; geriye kalan üç harf köktür. Ayrıca ' + ar('ٱتَّخَذَ') + ' (' + ar('ٱفْتَعَلَ') + ' bâbından, kök ' + ar('أ-خ-ذ') + ') gibi bazı fiillerde ilk harf değişikliğe uğrar; bunu “İbdâl” konusunda göreceğiz.')}
    `,
    quiz: q(ar('ٱسْتَطْعَمَ') + ' fiilindeki ' + ar('ٱسْتَـ') + ' ziyadesi (istif’âl bâbı) genel olarak ne anlam katar?',
      ['Karşılıklılık', 'Talep etme / isteme', 'Renk bildirme', 'Meçhul yapma'], 1,
      'İstif’âl bâbı çoğunlukla “talep” bildirir: ' + ar('ٱسْتَطْعَمَ') + ' yemek istedi, ' + ar('ٱسْتَغْفَرَ') + ' bağışlanma diledi.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-mutel', level: 'o', title: 'Sahih ve Mu’tel Fiiller',
    kw: 'mutel misal ecvef nakıs lefif muzaaf mühmüz sahih vecede kale illet hazif ibdal',
    html: `
      <p>Kök harflerinde <b>harf-i illet</b> (${ar('و')}, ${ar('ي')}, ${ar('ا')}) bulunan fiile <b>mu’tel</b> denir. Fiilin türünü anlamak, kelimedeki “eksik” harfin nereye gittiğini çözmenin anahtarıdır.</p>
      ${tbl(['Tür', 'Tanım', 'Örnek', 'Kehf’ten'], [
        ['<b>Sâlim</b>', 'İllet, hemze, tekrar yok', ar('كَتَبَ – يَكْتُبُ'), ar('نَصَرَ، يَنْصُرُونَهُ') + ' (43)'],
        ['<b>Mühmûz</b>', 'Köklerinden biri hemze', ar('أَخَذَ – يَأْخُذُ'), ar('يَأْخُذُ') + ' (79)'],
        ['<b>Muzâ’af</b>', '2. ve 3. kök harfi aynı', ar('مَدَّ – يَمُدُّ'), ar('نَقُصُّ') + ' (13), ' + ar('ضَلَّ') + ' (104)'],
        ['<b>Misâl</b>', '1. kök harfi illet', ar('وَجَدَ – يَجِدُ'), ar('تَجِدَ') + ' (17)'],
        ['<b>Ecvef</b>', '2. kök harfi illet', ar('قَالَ – يَقُولُ'), ar('قُلْنَا') + ' (14), ' + ar('نَقُولُ') + ' (88)'],
        ['<b>Nâkıs</b>', '3. kök harfi illet', ar('دَعَا – يَدْعُو'), ar('نَّدْعُوَا۟') + ' (14), ' + ar('تَجْرِى') + ' (31)'],
        ['<b>Lefîf</b>', 'Köklerinde iki illet', ar('طَوَى – يَطْوِي') + ' (makrûn)<br>' + ar('وَقَى – يَقِي') + ' (mefrûk)', ar('أَوَى') + ' (10)']
      ])}
      <h4>En sık karşılaşılan değişimler</h4>
      <ul>
        <li><b>Misâl:</b> muzâri’de vâv düşer: ${ar('وَجَدَ')} → ${ar('يَجِدُ')} (${ar('يَوْجِدُ')} değil). Emirde de düşer: ${ar('جِدْ')}.</li>
        <li><b>Ecvef:</b> mâzîde sükûnlu fâil zamiri gelince orta illet düşer: ${ar('قَالَ')} → ${ar('قُلْتُ')}, ${ar('قُلْنَا')}. Cezmetmede de düşer: ${ar('لَمْ يَقُلْ')}.</li>
        <li><b>Nâkıs:</b> cezmede son illet düşer: ${ar('لَمْ يَدْعُ')}; mansûbta vâv/yâ’ üzerine fetha açıkça görünür: ${ar('لَنْ يَدْعُوَ')}, ${ar('لَنْ يَرْمِيَ')}.</li>
        <li><b>Muzâ’af:</b> iki aynı harf idgam olur: ${ar('مَدَدَ')} → ${ar('مَدَّ')}; sükûnlu zamir gelince açılır: ${ar('مَدَدْتُ')}.</li>
      </ul>
      ${ex(17, 'فَلَن تَجِدَ لَهُۥ وَلِيًّا مُّرْشِدًا', 'Artık onun için yol gösteren bir dost bulamazsın.',
        '<b>تَجِدَ</b>: ' + ar('وَجَدَ – يَجِدُ') + ' <b>misâl</b>; ' + ar('لَنْ') + ' ile mansûb (fetha). Kök ' + ar('و-ج-د') + ': vâv, muzâri’de düştü.')}
      ${ex(14, 'لَّقَدْ قُلْنَآ إِذًا شَطَطًا', 'O takdirde andolsun ki saçma bir şey söylemiş oluruz.',
        '<b>قُلْنَا</b>: kök ' + ar('ق-و-ل') + ' <b>ecvef</b>; mâzî + “nâ” gelince orta illet düştü ve kâf dammeli oldu (' + ar('قُلْ-نَا') + ').')}
      ${ex(14, 'لَن نَّدْعُوَا۟ مِن دُونِهِۦٓ إِلَٰهًا', 'O’nun dışında hiçbir ilaha dua etmeyiz.',
        '<b>نَّدْعُوَ</b>: kök ' + ar('د-ع-و') + ' <b>nâkıs</b>; ' + ar('لَنْ') + ' ile mansûb olduğundan vâv üzerinde fetha görünür.')}
      ${ex(10, 'إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ', 'O gençler mağaraya sığındığında…',
        '<b>أَوَى</b>: kök ' + ar('أ-و-ي') + ' (ilk harfi hemze, ikincisi vâv, üçüncüsü yâ’); hem mühmûz hem <b>lefîf makrûn</b>. Mâzîde son harf yâ’ elif-i maksûra olarak yazılmıştır.')}
      ${ex(104, 'ٱلَّذِينَ ضَلَّ سَعْيُهُمْ', 'Çabaları boşa gidenler…', '<b>ضَلَّ</b>: kök ' + ar('ض-ل-ل') + ' <b>muzâ’af</b>; mâzîde iki lâm idgam edilmiştir.')}
      ${tip('Mu’tel fiillerde kök bulma stratejisi: kelimede 3 harften az görünüyorsa eksik harf bir <b>illet</b>tir (' + ar('و') + ' veya ' + ar('ي') + '); sözlükte hangi seçenek anlamlıysa onu seç.')}
    `,
    quiz: q(ar('قَالَ') + ' fiili (kök ' + ar('ق-و-ل') + ') hangi türe girer?',
      ['Misâl', 'Ecvef', 'Nâkıs', 'Muzâ’af'], 1,
      'Kökün <b>ikinci</b> harfi illet (vâv) olduğu için ecvef-i vâvîdir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-mustak', level: 'o', title: 'Müştak İsimler: Fâil, Mef’ûl, Sıfat, Tafdîl, Zaman-Mekân',
    kw: 'müştak ism-i fail ism-i mef\'ul sıfat-ı müşebbehe mübalağa ism-i tafdil ism-i zaman mekan alet',
    html: `
      <p>Fiilden türeyen ve bir fiilin anlamını taşıyan isimlere <b>müştak</b> denir.</p>
      ${tbl(['İsim', 'Sülâsî vezni', 'Mezîd kuralı', 'Örnek'], [
        ['<b>İsm-i fâil</b> (yapan)', ar('فَاعِلٌ'), 'Muzâri’nin başına ' + ar('مُـ') + ' + sondan önceki harf kesra', ar('كَاتِبٌ') + ' / ' + ar('مُنْذِرٌ')],
        ['<b>İsm-i mef’ûl</b> (yapılan)', ar('مَفْعُولٌ'), 'Muzâri’nin başına ' + ar('مُـ') + ' + sondan önceki harf fetha', ar('مَكْتُوبٌ') + ' / ' + ar('مُنْزَلٌ')],
        ['<b>Sıfat-ı müşebbehe</b>', ar('فَعِيلٌ، فَعْلَانُ، أَفْعَلُ…'), 'Kalıcı nitelik', ar('كَرِيمٌ، عَطْشَانُ، أَحْمَرُ')],
        ['<b>Sîga-i mübalağa</b>', ar('فَعَّالٌ، فَعُولٌ، مِفْعَالٌ، فَعِيلٌ'), 'Niteliğin çokluğu', ar('غَفُورٌ، غَفَّارٌ')],
        ['<b>İsm-i tafdîl</b>', ar('أَفْعَلُ') + ' (müennesi ' + ar('فُعْلَى') + ')', 'Karşılaştırma / üstünlük', ar('أَكْبَرُ، أَحْسَنُ') + ' / ' + ar('ٱلْحُسْنَىٰ')],
        ['<b>İsm-i zaman / mekân</b>', ar('مَفْعَلٌ / مَفْعِلٌ'), 'Fiilin zamanı veya yeri', ar('مَسْجِدٌ، مَغْرِبٌ، مَوْعِدٌ')],
        ['<b>İsm-i âlet</b>', ar('مِفْعَلٌ، مِفْعَالٌ، مِفْعَلَةٌ'), 'Fiilin aracı', ar('مِفْتَاحٌ، مِكْنَسَةٌ')]
      ])}
      ${ex(69, 'سَتَجِدُنِىٓ إِن شَآءَ ٱللَّهُ صَابِرًا', 'İnşallah beni sabredenlerden bulacaksın.',
        '<b>صَابِرًا</b>: sülâsî ' + ar('صَبَرَ') + ' fiilinden <b>ism-i fâil</b> (' + ar('فَاعِلٌ') + '). Zanne kardeşi ' + ar('وَجَدَ') + 'nin ikinci mef’ûlü olarak mansûb.')}
      ${ex(56, 'إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ', 'Müjdeciler ve uyarıcılar olarak…',
        '<b>مُبَشِّرِينَ</b> tef’îl, <b>مُنذِرِينَ</b> if’âl bâbından <b>ism-i fâil</b>: muzâri’nin ' + ar('ي') + 'si ' + ar('مُـ') + ' ile değişti, sondan önceki harf kesralı. Cem-i müzekker sâlim, mansûb (yâ).')}
      ${ex(34, 'أَنَا۠ أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا', 'Ben mal bakımından senden daha çoğum, nefer olarak da daha güçlüyüm.',
        '<b>أَكْثَرُ، أَعَزُّ</b>: <b>ism-i tafdîl</b> (' + ar('أَفْعَلُ') + '). ' + ar('مِنكَ') + ' ile karşılaştırılan taraf belirtilmiştir. ' + ar('مَالًا') + ' ve ' + ar('نَفَرًا') + ' temyizdir.')}
      ${ex(58, 'وَرَبُّكَ ٱلْغَفُورُ ذُو ٱلرَّحْمَةِ', 'Rabbin çok bağışlayandır, rahmet sahibidir.',
        '<b>ٱلْغَفُورُ</b>: <b>mübalağa</b> sîgası (' + ar('فَعُولٌ') + '), çok bağışlayan.')}
      ${ex(86, 'بَلَغَ مَغْرِبَ ٱلشَّمْسِ', 'Güneşin battığı yere ulaştı.',
        '<b>مَغْرِبَ</b>: ' + ar('غَرَبَ – يَغْرُبُ') + ' fiilinden <b>ism-i mekân</b> (' + ar('مَفْعِلٌ') + '). Muzâf, mansûb (' + ar('بَلَغَ') + 'in mef’ûlü).')}
      ${ex(90, 'بَلَغَ مَطْلِعَ ٱلشَّمْسِ', 'Güneşin doğduğu yere ulaştı.',
        '<b>مَطْلِعَ</b>: ' + ar('طَلَعَ – يَطْلُعُ') + ' fiilinden ism-i mekân. Kural, muzâri’si ' + ar('يَفْعُلُ') + ' olan fiillerde ' + ar('مَفْعَل') + ' beklenir; ancak bu kelime meşhur <b>istisnalardandır</b> ve kesra ile gelir (' + ar('مَطْلِع') + ').')}
      ${tip('İsm-i mekân kalıbı genelde fiilin muzâri’si ' + ar('يَفْعِلُ') + ' (ayn kesra) ise ' + ar('مَفْعِل') + ', diğer durumlarda ' + ar('مَفْعَل') + ' olur. ' + ar('مَسْجِد') + ' (' + ar('سَجَدَ – يَسْجُدُ') + ') ve ' + ar('مَطْلِع') + ' bu kuralın istisnalarıdır.')}
    `,
    quiz: q(ar('أَكْثَرُ مِنكَ مَالًا') + ' ifadesindeki ' + ar('أَكْثَرُ') + ' hangi müştak türüdür?',
      ['İsm-i fâil', 'İsm-i mef’ûl', 'İsm-i tafdîl', 'İsm-i âlet'], 2,
      'Üstünlük/karşılaştırma bildiren ' + ar('أَفْعَلُ') + ' kalıbıdır; ' + ar('مِنكَ') + ' ile kıyaslanan taraf belirtilmiştir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-masdar', level: 'o', title: 'Masdar (Fiilimsi İsim)',
    kw: 'masdar mezid kıyasi semai masdar-ı mimi merre nev\' mef\'ul-i mutlak',
    html: `
      <p><b>Masdar</b>, fiilin zamansız ismidir (“yazmak, öğrenmek, sabretmek”). Fiilin kaynağı sayılır ve mansûb olarak <b>mef’ûl-i mutlak</b> görevi görebilir.</p>
      <h4>Sülâsî masdarlar semâîdir</h4>
      ${tbl(['Vezin', 'Örnek'], [
        [ar('فَعْلٌ'), ar('نَصْرٌ، ضَرْبٌ، حَمْدٌ')],
        [ar('فِعْلٌ'), ar('عِلْمٌ، ذِكْرٌ')],
        [ar('فُعُولٌ'), ar('دُخُولٌ، خُرُوجٌ')],
        [ar('فَعَلٌ'), ar('طَلَبٌ، سَبَبٌ')],
        [ar('فِعَالَةٌ'), ar('كِتَابَةٌ، كِتَابٌ')],
        [ar('فَعْلَةٌ'), ar('رَحْمَةٌ')]
      ])}
      <h4>Mezîd masdarlar kıyâsîdir</h4>
      ${tbl(['Bâb', 'Masdar', 'Örnek'], [
        ['İf’âl', ar('إِفْعَالٌ'), ar('إِنْزَالٌ')],
        ['Tef’îl', ar('تَفْعِيلٌ'), ar('تَبْشِيرٌ')],
        ['Mufâale', ar('مُفَاعَلَةٌ / فِعَالٌ'), ar('مُجَادَلَةٌ / جِدَالٌ')],
        ['İnfi’âl', ar('ٱنْفِعَالٌ'), ar('ٱنْطِلَاقٌ')],
        ['İfti’âl', ar('ٱفْتِعَالٌ'), ar('ٱتِّخَاذٌ')],
        ['Tefa’’ul', ar('تَفَعُّلٌ'), ar('تَلَطُّفٌ')],
        ['Tefâ’ul', ar('تَفَاعُلٌ'), ar('تَنَازُعٌ')],
        ['İstif’âl', ar('ٱسْتِفْعَالٌ'), ar('ٱسْتِغْفَارٌ')]
      ])}
      <h4>Diğer masdar türleri</h4>
      <ul>
        <li><b>Masdar-ı mîmî:</b> başına ${ar('مـ')} gelen masdar (${ar('مَذْهَبٌ')}, ${ar('مُنْقَلَبٌ')}); aynı zamanda ism-i zaman/mekân da olabilir.</li>
        <li><b>Mer’ra</b> (bir kez yapılış): ${ar('ضَرْبَةٌ')} bir vuruş.</li>
        <li><b>Nev’</b> (yapılış biçimi): ${ar('جِلْسَةٌ')} oturuş biçimi.</li>
      </ul>
      ${ex(67, 'إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًا', 'Sen benimle birlikte sabredemezsin.',
        '<b>صَبْرًا</b>: ' + ar('صَبَرَ') + ' fiilinin masdarı (' + ar('فَعْلٌ') + '), mansûb. Burada ' + ar('تَسْتَطِيعَ') + ' fiilinin temyiz/mef’ûlüdür.')}
      ${ex(99, 'فَجَمَعْنَٰهُمْ جَمْعًا', 'Onları (hep birlikte) topladık.',
        '<b>جَمْعًا</b>: fiilin masdarı, mansûb; <b>mef’ûl-i mutlak</b> (te’kîd için). Aynı kökten fiil + masdar birlikte gelmiştir.')}
      ${ex(36, 'لَأَجِدَنَّ خَيْرًا مِّنْهَا مُنقَلَبًا', 'Mutlaka ondan daha hayırlı bir dönüş yeri bulurum.',
        '<b>مُنقَلَبًا</b>: ' + ar('ٱنْقَلَبَ') + ' (infi’âl) fiilinden <b>masdar-ı mîmî / ism-i mekân</b>; temyiz olarak mansûb. Mezîd fiillerde mîmî masdar, ism-i mef’ûl kalıbıyla gelir.')}
    `,
    quiz: q(ar('ٱنْطِلَاقٌ') + ' hangi bâbın masdarıdır?',
      ['İf’âl', 'İfti’âl', 'İnfi’âl', 'İstif’âl'], 2,
      'Kalıp ' + ar('ٱنْفِعَالٌ') + ' olduğundan infi’âl bâbının masdarıdır; fiili ' + ar('ٱنْطَلَقَ') + '.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'sarf-isim', level: 'o', title: 'İsimde Cins, Sayı ve Cem: Çoğul Kalıpları',
    kw: 'müzekker müennes tesniye cem cemi teksir kırık çoğul sâlim müennes alameti tâ merbuta kıllet kesret',
    html: `
      <h4>Müzekker – müennes</h4>
      <p>Müennes isimlerin alametleri: <b>tâ-i merbûta</b> (${ar('ـَةٌ')} → ${ar('جَنَّةٌ')}), <b>elif-i maksûra</b> (${ar('ـَىٰ')} → ${ar('ٱلْحُسْنَىٰ')}), <b>elif-i mamdûde</b> (${ar('ـَاءُ')} → ${ar('صَحْرَاءُ')}). Bunların dışında bazı isimler anlam bakımından müennes sayılır: ${ar('شَمْسٌ، أَرْضٌ، نَارٌ، عَيْنٌ')}; fiil de müennes olur (<i>mecâzî müennes</i>).</p>
      ${ex(17, 'ٱلشَّمْسَ إِذَا طَلَعَت', 'Güneş doğduğu zaman…', '<b>طَلَعَتْ</b>: fiil müennes olmuştur (sonunda sâkin tâ). Çünkü fâili ' + ar('ٱلشَّمْسُ') + ' müennes sayılır.')}
      <h4>Sayı: müfred, tesniye, cem</h4>
      <ul>
        <li><b>Tesniye:</b> isme ${ar('ـَانِ')} (merfû’) veya ${ar('ـَيْنِ')} (mansûb/mecrûr) eklenir: ${ar('رَجُلَانِ / رَجُلَيْنِ')}.</li>
        <li><b>Cem-i müzekker sâlim:</b> ${ar('ـُونَ / ـِينَ')} eklenir (yalnızca akıllı müzekker özel isim ve sıfatlar).</li>
        <li><b>Cem-i müennes sâlim:</b> sondaki tâ-i merbûta düşer, ${ar('ـَاتٌ')} gelir: ${ar('جَنَّةٌ → جَنَّاتٌ')}.</li>
        <li><b>Cem-i teksîr (kırık çoğul):</b> kelimenin iç yapısı değişir. Aşağıda en sık kalıplar var.</li>
      </ul>
      ${tbl(['Cem vezni', 'Tekil → Çoğul', 'Kehf’ten'], [
        [ar('أَفْعَالٌ'), ar('صَاحِبٌ → أَصْحَابٌ'), ar('أَصْحَٰبَ ٱلْكَهْفِ') + ' (9)'],
        [ar('أَفْعُلٌ'), ar('عَيْنٌ → أَعْيُنٌ'), ar('أَعْيُنُهُمْ') + ' (101)'],
        [ar('فُعُولٌ'), ar('قَلْبٌ → قُلُوبٌ، عَرْشٌ → عُرُوشٌ'), ar('قُلُوبِهِمْ') + ' (14), ' + ar('عُرُوشِهَا') + ' (42)'],
        [ar('فِعَالٌ'), ar('جَبَلٌ → جِبَالٌ، عَبْدٌ → عِبَادٌ'), ar('ٱلْجِبَالَ') + ' (47), ' + ar('عِبَادِى') + ' (102)'],
        [ar('فِعْلَةٌ'), ar('فَتًى → فِتْيَةٌ'), ar('ٱلْفِتْيَةُ') + ' (10)'],
        [ar('فُعَلَاءُ'), ar('شَرِيكٌ → شُرَكَاءُ'), ar('شُرَكَآءِىَ') + ' (52)'],
        [ar('أَفْعِلَاءُ'), ar('وَلِيٌّ → أَوْلِيَاءُ'), ar('أَوْلِيَآءَ') + ' (50)'],
        [ar('مَفَاعِيلُ'), ar('مِسْكِينٌ → مَسَاكِينُ'), ar('مَسَٰكِينَ') + ' (79)']
      ])}
      ${note('<b>Cem-i kıllet</b> (3–10 arası az sayı bildiren kalıplar: ' + ar('أَفْعُلٌ، أَفْعَالٌ، أَفْعِلَةٌ، فِعْلَةٌ') + ') ve <b>cem-i kesret</b> (çok sayı bildiren: ' + ar('فُعُولٌ، فِعَالٌ، فُعَلَاءُ') + ' vb.) ayrımı vardır; ancak Kur’ân’da bu ayrıma her zaman uyulmaz.')}
      ${ex(10, 'إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ', null, '<b>ٱلْفِتْيَةُ</b>: ' + ar('فَتًى') + ' kelimesinin cem-i teksîr (kıllet) kalıbı ' + ar('فِعْلَةٌ') + '. Fâil olduğu için merfû’ (damme).')}
      ${ex(79, 'لِمَسَٰكِينَ يَعْمَلُونَ فِى ٱلْبَحْرِ', 'Denizde çalışan yoksullara aitti.',
        '<b>مَسَٰكِينَ</b>: ' + ar('مَفَاعِيلُ') + ' kalıbında cem-i teksîr (<b>gayr-i munsarif</b>). Harf-i cerden sonra mecrûr olduğu hâlde alameti <b>fetha</b>dır (bkz. İleri bölümdeki munsarif konusu).')}
      ${ex(82, 'لِغُلَٰمَيْنِ يَتِيمَيْنِ', 'İki yetim çocuğa aitti.', '<b>غُلَٰمَيْنِ</b>: tesniye, mecrûr (yâ); <b>يَتِيمَيْنِ</b>: onun sıfatı, yine tesniye mecrûr.')}
      ${tip('Akıllı olmayan varlıkların cemi (kırık çoğul) çoğunlukla <b>müennes tekil</b> muamelesi görür: ' + ar('جَنَّٰتُ عَدْنٍ تَجْرِى') + ' (“akar”, çoğul değil tekil müennes fiil). Bunu Kehf 31. âyette görebilirsiniz.')}
    `,
    quiz: q(ar('فِتْيَةٌ') + ' (' + ar('فَتًى') + ' kelimesinin çoğulu) hangi cem türündendir?',
      ['Cem-i müzekker sâlim', 'Cem-i müennes sâlim', 'Cem-i teksîr (kırık çoğul)', 'Tesniye'], 2,
      'Kelimenin iç yapısı değiştiği için kırık çoğuldur; veznî ' + ar('فِعْلَةٌ') + ' ve cem-i kıllettir.')
  }

  ]
});
