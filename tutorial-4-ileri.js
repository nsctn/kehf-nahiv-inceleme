/* Bölüm 4: İleri Düzey Konular ve Gramer İncelikleri */
TUT.push({
  id: 'ileri',
  icon: '💎',
  title: 'İleri Konular ve İ’rab İncelikleri',
  desc: 'Şart cümleleri, gayr-i munsarif, i’lâl ve ibdâl, mahallen/takdîren i’râb, zâid harfler ve belâgat nüansları.',
  topics: [

  /* ------------------------------------------------------------------ */
  {
    id: 'ileri-sart', level: 'i', title: 'Şart Üslûbu: Şart ve Cezm Edatları',
    kw: 'sart cezm in men ma izen lemma lev levla fe cezmu cevabu sart',
    html: `
      <p>Arapçada şart üslûbu üç temel unsurdan oluşur: <b>Şart Edatı + Şart Cümlesi (Fiili) + Cevap Cümlesi (Cezâ)</b>.</p>
      ${tbl(['Grup', 'Edatlar', 'Özellik', 'Örnek (Kehf)'], [
        ['<b>İki Muzâri’yi Cezmedenler</b>', ar('إِنْ، مَنْ، مَا، مَهْمَا، حَيْثُمَا…'), 'Hem şart fiilini hem cevap fiilini meczûm yapar.', ar('مَن يَهْدِ ٱللَّهُ فَهُوَ ٱلْمُهْتَدِ') + ' (17)'],
        ['<b>Cezmetmeyen Şart Edatları</b>', ar('إِذَا، لَوْ، لَوْلَا، لَمَّا، كُلَّمَا'), 'Cümleye şart/vakit manası katar fakat fiili meczûm yapmaz.', ar('حَتَّىٰٓ إِذَا بَلَغَ مَغْرِبَ ٱلشَّمْسِ') + ' (86)']
      ])}
      <h4>Cevap Cümlesine Fâ (فَـ) Harfinin Girişi</h4>
      <p>Cevap cümlesi doğrudan meczûm bir fiil olamıyorsa (örneğin isim cümlesi, emir fiili, menfî fiil veya ' + ar('قَدْ، سَـ، سَوْفَ') + ' ile başlıyorsa) başına zorunlu olarak <b>fâ-i râbıta</b> gelir.</p>
      ${ex(17, 'مَن يَهْدِ ٱللَّهُ فَهُوَ ٱلْمُهْتَدِ', 'Allah kime hidayet verirse, doğru yolu bulan odur.',
        '<b>مَن</b>: İki fiili cezmeden şart ismi.<br><b>يَهْدِ</b>: Şart fiili; sonundaki illet harfinin (yâ) düşmesiyle meczûmdur (aslı ' + ar('يَهْدِي') + ').<br><b>فَهُوَ ٱلْمُهْتَدِ</b>: Cevap isim cümlesi olduğu için başına fâ (' + ar('فَـ') + ') gelmiştir.')}
      ${ex(29, 'فَمَن شَآءَ فَلْيُؤْمِن وَمَن شَآءَ فَلْيَكْفُرْ', 'Artık dileyen inansın, dileyen inkâr etsin.',
        'Cevap fiilleri emir lâm’ı (' + ar('لِـ') + ') ile geldiği için fâ harfi almıştır (' + ar('فَلْيُؤْمِن') + ').')}
    `,
    quiz: q(ar('مَن يَهْدِ ٱللَّهُ') + ' âyetinde ' + ar('يَهْدِ') + ' fiilinin cezm alameti nedir?',
      ['Sükûn', 'Sonundaki illet harfinin hazfi (düşmesi)', 'Nûnun hazfi', 'Fetha'], 1,
      'Nâkıs fiillerde cezm alameti son harf olan illet harfinin düşmesidir (' + ar('يَهْدِي') + ' → ' + ar('يَهْدِ') + ').')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ileri-gayrimunsarif', level: 'i', title: 'Gayr-i Munsarif (Memnû’ mine’s-Sarf)',
    kw: 'gayr-i munsarif memnu mines-sarf tenvin kesra fetha mecrur ozel isim vezin',
    html: `
      <p><b>Gayr-i Munsarif</b>, tenvin ve kesra kabul etmeyen isimlerdir. Bu isimler:</p>
      <ul>
        <li>Asla <b>tenvin</b> almazlar.</li>
        <li>Cer (mecrûrluk) durumunda kesra yerine <b>fetha</b> alırlar!</li>
      </ul>
      <h4>Memnû’ mine’s-Sarf Olma Sebepleri</h4>
      ${tbl(['Sebep', 'Açıklama', 'Örnek (Kehf)'], [
        ['<b>Sîgatü Müntehe’l-Cumû’</b>', 'İçinde uzatma elifi ve ardından 2-3 harf bulunan kırık çoğullar', ar('مَسَٰكِينَ') + ' (79), ' + ar('مَسَاجِدَ')],
        ['<b>Alem (Özel İsim) + Yabancı Dil (Uceme)</b>', 'Arapça kökenli olmayan peygamber ve kişi isimleri', ar('إِبْلِيسَ') + ' (50), ' + ar('يَأْجُوجَ وَمَأْجُوجَ') + ' (94)'],
        ['<b>Alem / Sıfat + ' + ar('ـَان') + ' Eki</b>', 'Sonu ziyade elif-nûn ile bitenler', ar('عَطْشَانُ، سُلَيْمَانُ')],
        ['<b>Elif-i Te’nîs</b>', 'Sonunda müenneslik maksûra veya memdûde elifi olanlar', ar('ٱلْحُسْنَىٰ') + ' (88), ' + ar('بَيْضَاءُ')]
      ])}
      ${ex(79, 'أَمَّا ٱلسَّفِينَةُ فَكَانَتْ لِمَسَٰكِينَ', 'Gemiye gelince; o, yoksullara aitti.',
        '<b>لِمَسَٰكِينَ</b>: Başında lâm harf-i cerri olduğu halde gayr-i munsarif (müntehe’l-cumû’) olduğu için <b>kesra yerine fetha</b> ile mecrûrdur.')}
      ${tip('Gayr-i munsarif bir kelimenin başına ' + ar('الـ') + ' takısı gelirse veya kelime bir tamlamada muzâf olursa bu kural kalkar ve normal şekilde kesra alır: ' + ar('فِي الْمَسَاجِدِ') + '.')}
    `,
    quiz: q(ar('لِمَسَٰكِينَ') + ' kelimesi harf-i cerden sonra niçin fetha ile gelmiştir?',
      ['Mef’ûl olduğu için', 'Gayr-i munsarif olup kesra yerine fetha aldığı için', 'Mebnî olduğu için', 'Hâl olduğu için'], 1,
      'Gayr-i munsarif isimler cer durumunda kesra kabul etmez, fetha alırlar.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ileri-ilal-ibdal', level: 'i', title: 'İ’lâl ve İbdâl (Ses Olayları)',
    kw: 'ilal ibdal ses olaylari kural illet harfi kalb hazif teskin ittihaz',
    html: `
      <p>Arapça kelimelerde telaffuz kolaylığı sağlamak için gerçekleşen fonetik kurallardır:</p>
      <h4>1. İ’lâl (İllet Harflerindeki Değişim)</h4>
      <ul>
        <li><b>Kalb (Dönüşüm):</b> İllet harfi harekeli, önceki harf fethalı ise elif’e dönüşür: ${ar('قَوَلَ → قَالَ')}, ${ar('بَيَعَ → بَاعَ')}.</li>
        <li><b>Hazif (Düşme):</b> Yan yana iki sâkin harf geldiğinde (iltikâ-i sâkineyn) illet harfi düşer: ${ar('قُولْ → قُلْ')}, ${ar('لَمْ يَقُولْ → لَمْ يَقُلْ')}.</li>
        <li><b>İskân (Harekeden Arındırma):</b> Ağır gelen harekenin atılması: ${ar('يَدْعُوُ → يَدْعُو')}.</li>
      </ul>
      <h4>2. İbdâl (Harfin Başka Harfe Dönüşmesi)</h4>
      <p>Özellikle <b>İfti’âl</b> (${ar('ٱفْتَعَلَ')}) bâbında görülür. Kökün ilk harfi hemze veya illetli ise tâ harfine dönüşüp şeddelenir:</p>
      ${ex(77, 'لَتَّخَذْتَ عَلَيْهِ أَجْرًا', 'İsteseydin bunun için bir ücret alırdın.',
        '<b>ٱتَّخَذَ</b>: Kök ' + ar('أ-خ-ذ') + '; ifti’âl bâbındaki aslı ' + ar('إِئْتَخَذَ') + ' idi. Hemze tâ’ya (' + ar('ت') + ') ibdâl edildi ve bâbın tâ’sıyla idgam edilerek ' + ar('ٱتَّخَذَ') + ' oldu.')}
    `,
    quiz: q(ar('ٱتَّخَذَ') + ' fiilinin asıl kök harfleri hangisidir?',
      [ar('ت-خ-ذ'), ar('أ-خ-ذ'), ar('و-خ-ذ'), ar('خ-ذ-ذ')], 1,
      'Fiil ifti’âl bâbında olup kökü أ-خ-ذ (almak, edinmek) köküdür; hemze tâ harfine ibdâl edilmiştir.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ileri-takdiri-mahalli', level: 'i', title: 'Lafzî, Takdîrî ve Mahallen İ’râb',
    kw: 'lafzi takdiri mahalli irab maksur menkus mutekellim yasi mebni cumle',
    html: `
      <p>Cümledeki bir kelimenin i’râbı her zaman açık bir harekeyle görünmeyebilir. Üç ana i’râb biçimi vardır:</p>
      ${tbl(['İ’râb Türü', 'Nerede Görülür?', 'Özellik', 'Örnek (Kehf)'], [
        ['<b>Lafzî İ’râb</b>', 'Sahih ve kusursuz isimlerde', 'Hareke veya harf açıkça telaffuz edilir ve yazılır.', ar('ٱلْحَمْدُ، ٱلْكِتَٰبَ')],
        ['<b>Takdîrî İ’râb</b>', 'İsm-i Maksûr, İsm-i Menkûs ve Mütekellim yâ’sına muzâf olanlarda', 'Hareke telaffuz zorluğundan dolayı zihnen var kabul edilir.', ar('ٱلْهُدَىٰ') + ' (55), ' + ar('رَبِّى') + ' (95)'],
        ['<b>Mahallen İ’râb</b>', 'Mebnî kelimelerde ve cümlelerde', 'Kelimede hiçbir değişim olmaz, cümledeki konumu mahallen değerlendirilir.', ar('ٱلَّذِىٓ أَنزَلَ') + ' (1)']
      ])}
      <h4>Takdîrî İ’râb Türleri</h4>
      <ul>
        <li><b>İsm-i Maksûr:</b> Sonu elif-i maksûra (${ar('ـَىٰ')}) ile bitenler. Bütün harekeleri ta’azzür (imkânsızlık) sebebiyle takdîrîdir: ${ar('جَاءَ الْفَتَى، رَأَيْتُ الْفَتَى، مَرَرْتُ بِالْفَتَى')}.</li>
        <li><b>İsm-i Menkûs:</b> Sonu yâ (${ar('ـِي')}) ile bitenler. Damme ve kesra sikal (ağırlık) sebebiyle takdîrî, fetha ise hafiftir ve lafzî görünür: ${ar('ٱلْقَاضِي')}.</li>
      </ul>
      ${ex(55, 'إِذْ جَآءَهُمُ ٱلْهُدَىٰ', 'Onlara hidayet geldiğinde…',
        '<b>ٱلْهُدَىٰ</b>: ' + ar('جَآءَ') + ' fiilinin fâilidir (merfû’); sonundaki elif sebebiyle <b>takdîren damme ile merfû’</b>dur.')}
    `,
    quiz: q(ar('جَآءَهُمُ ٱلْهُدَىٰ') + ' âyetindeki ' + ar('ٱلْهُدَىٰ') + ' fâilinin i’râbı nasıldır?',
      ['Lafzen damme ile merfû’', 'Takdîren damme ile merfû’', 'Mahallen merfû’', 'Mansûb'], 1,
      'İsm-i maksûr olduğu için hareke elif üzerinde açıkça gösterilemez; takdîren merfû’dur.')
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ileri-zaid-edatlar', level: 'i', title: 'Zâid Harfler ve Belâgat İncelikleri',
    kw: 'zaid harf min la tekit belagat takdim tehir fasl kasr icaz',
    html: `
      <p>Kur’an’da “zâid” terimi gereksiz/boş anlamına gelmez; <b>cümleye kuvvetli bir te’kîd, umumilik veya istisna manası katan</b>, kaldırıldığında cümlenin temel yapısının bozulmadığı harflerdir.</p>
      <h4>1. Zâid Min (مِنْ)</h4>
      <p>Olumsuz veya soru cümlelerinde genel olumsuzluğu pekiştirmek için gelir; kelimeyi lafzen mecrûr, mahallen merfû’ veya mansûb yapar.</p>
      ${ex(5, 'مَّا لَهُم بِهِۦ مِنْ عِلْمٍ', 'Bu hususta onların hiçbir bilgisi yoktur!',
        '<b>مِنْ عِلْمٍ</b>: ' + ar('مِنْ') + ' zâidedir. ' + ar('عِلْمٍ') + ' kelimesi lafzen kesra ile mecrûr, mahallen ise mübtedâ olduğu için <b>merfû’</b>dur (manası: en ufak bir bilgi dahi yoktur).')}
      <h4>2. Takdîm ve Te’hîr (Öne Alma ve Sona Bırakma)</h4>
      <p>Hakkı sonra gelmek olan bir ögenin (örneğin mef’ûl veya car-mecrûr) öne alınması <b>hasr ve ihtisâs</b> (özgü kılma, sınırlandırma) ifade eder.</p>
      ${ex(1, 'ٱلْحَمْدُ لِلَّهِ', 'Hamd, yalnızca Allah’a mahsustur.',
        'Haber olan ' + ar('لِلَّهِ') + ' öne veya özel konuma getirilerek övgünün sadece O’na ait olduğu vurgulanır.')}
      ${tip('Kehf Suresi’nde ' + ar('مَا لَهُم مِّن دُونِهِۦ مِن وَلِىٍّ') + ' (26. âyet) gibi kalıplarda zâid harfler inkâr ve çaresizliği en üst seviyede tescil eder.')}
    `,
    quiz: q(ar('مَّا لَهُم بِهِۦ مِنْ عِلْمٍ') + ' terkibindeki ' + ar('عِلْمٍ') + ' kelimesinin mahalli i’râbı nedir?',
      ['Mahallen mecrûr', 'Mahallen merfû’ (mübtedâ)', 'Mansûb mef’ûl', 'Hâl'], 1,
      'Zâid ' + ar('مِنْ') + ' sebebiyle lafzen mecrûr olsa da, cümlenin mübtedâsı olduğu için mahallen merfû’dur.')
  }

  ]
});
