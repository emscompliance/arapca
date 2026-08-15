const WORDS = [
  /* =====================================================
     1. ALFABE VE SESLETİM (ALPHABET)
     ===================================================== */
  { id: 1, cat: 'alphabet', ar: 'أ', lat: 'Elif', tr: 'Elif harfi (Uzun A sesi)', en: 'Letter Alif' },
  { id: 2, cat: 'alphabet', ar: 'ب', lat: 'Be', tr: 'Be harfi (B sesi)', en: 'Letter Beh' },
  { id: 3, cat: 'alphabet', ar: 'ت', lat: 'Te', tr: 'Te harfi (T sesi)', en: 'Letter Teh' },
  { id: 4, cat: 'alphabet', ar: 'ث', lat: 'Se', tr: 'Se harfi (Peltek S / T sesi)', en: 'Letter Theh' },
  { id: 5, cat: 'alphabet', ar: 'ج', lat: 'Ge / Gim', tr: 'Cim harfi (Mısır’da her zaman G sesi)', en: 'Letter Jeem (G in Egypt)' },
  { id: 6, cat: 'alphabet', ar: 'ح', lat: 'Ha', tr: 'Boğazdan gelen sert H sesi', en: 'Letter Hah' },
  { id: 7, cat: 'alphabet', ar: 'خ', lat: 'Ha / Kha', tr: 'Hırıltılı H sesi (Kh)', en: 'Letter Khah' },
  { id: 8, cat: 'alphabet', ar: 'د', lat: 'Dal', tr: 'Dal harfi (D sesi)', en: 'Letter Dal' },
  { id: 9, cat: 'alphabet', ar: 'ذ', lat: 'Zal', tr: 'Peltek Z / D sesi', en: 'Letter Thal' },
  { id: 10, cat: 'alphabet', ar: 'ر', lat: 'Re', tr: 'Re harfi (R sesi)', en: 'Letter Reh' },
  { id: 11, cat: 'alphabet', ar: 'ز', lat: 'Zeyn', tr: 'Zey harfi (Z sesi)', en: 'Letter Zain' },
  { id: 12, cat: 'alphabet', ar: 'س', lat: 'Sin', tr: 'Sin harfi (S sesi)', en: 'Letter Seen' },
  { id: 13, cat: 'alphabet', ar: 'ش', lat: 'Şin', tr: 'Şin harfi (Ş sesi)', en: 'Letter Sheen' },
  { id: 14, cat: 'alphabet', ar: 'ص', lat: 'Sad', tr: 'Kalın S sesi', en: 'Letter Sad' },
  { id: 15, cat: 'alphabet', ar: 'ض', lat: 'Dad', tr: 'Kalın D sesi', en: 'Letter Dad' },
  { id: 16, cat: 'alphabet', ar: 'ط', lat: 'Ta', tr: 'Kalın T sesi', en: 'Letter Tah' },
  { id: 17, cat: 'alphabet', ar: 'ظ', lat: 'Za', tr: 'Kalın Z sesi', en: 'Letter Zah' },
  { id: 18, cat: 'alphabet', ar: 'ع', lat: 'Ayın', tr: 'Derin boğaz seslisi (A/O)', en: 'Letter Ain' },
  { id: 19, cat: 'alphabet', ar: 'غ', lat: 'Ğayın', tr: 'Gırtlaktan G/R karışımı (Gh)', en: 'Letter Ghain' },
  { id: 20, cat: 'alphabet', ar: 'ف', lat: 'Fe', tr: 'Fe harfi (F sesi)', en: 'Letter Feh' },
  { id: 21, cat: 'alphabet', ar: 'ق', lat: 'İ', tr: 'Mısır’da genelde sessiz düşer veya hamze okunur', en: 'Letter Qaf' },
  { id: 22, cat: 'alphabet', ar: 'ك', lat: 'Kef', tr: 'Kef harfi (K sesi)', en: 'Letter Kaf' },
  { id: 23, cat: 'alphabet', ar: 'ل', lat: 'Lam', tr: 'Lam harfi (L sesi)', en: 'Letter Lam' },
  { id: 24, cat: 'alphabet', ar: 'م', lat: 'Mim', tr: 'Mim harfi (M sesi)', en: 'Letter Meem' },
  { id: 25, cat: 'alphabet', ar: 'ن', lat: 'Nun', tr: 'Nun harfi (N sesi)', en: 'Letter Noon' },
  { id: 26, cat: 'alphabet', ar: 'ه', lat: 'He', tr: 'Normal H sesi', en: 'Letter Heh' },
  { id: 27, cat: 'alphabet', ar: 'و', lat: 'Waw', tr: 'V / U / O sesi', en: 'Letter Waw' },
  { id: 28, cat: 'alphabet', ar: 'ي', lat: 'Ye', tr: 'Y / İ sesi', en: 'Letter Yeh' },

  /* =====================================================
     2. SELAMLAŞMA & TANIŞMA (GREETINGS)
     ===================================================== */
  { id: 101, cat: 'greetings', ar: 'ازيك يا باشا؟', lat: 'İzzeyyak ya başa?', tr: 'Nasılsın başganım / patron?', en: 'How are you, boss?' },
  { id: 102, cat: 'greetings', ar: 'صباح الفل يا فندم', lat: 'Sabah el-full ya fandam', tr: 'Günaydın efendim (nefis sabahlar)', en: 'Wonderful morning, sir' },
  { id: 103, cat: 'greetings', ar: 'منور يا معلم', lat: 'Munawwar ya mu‘allim', tr: 'Ortamı şereflendirdin üstadım', en: 'You light up the place, master' },
  { id: 104, cat: 'greetings', ar: 'الحمد لله كله تمام', lat: 'Elhamdulillah kullu تمام (tamam)', tr: 'Çok şükür her şey yolunda', en: 'Praise be to God, everything is fine' },
  { id: 105, cat: 'greetings', ar: 'أهلاً بحضرتك', lat: 'Ahlan bi hadratak', tr: 'Hoş geldiniz (saygı ifade eder)', en: 'Welcome to you' },
  { id: 106, cat: 'greetings', ar: 'تصبح على خير', lat: 'Tisbah ‘ala heir', tr: 'İyi geceler', en: 'Good night' },
  { id: 107, cat: 'greetings', ar: 'وأنت من أهله', lat: 'W inta min ahlu', tr: 'Sana da (İyi geceler cevabı)', en: 'And you too' },
  { id: 108, cat: 'greetings', ar: 'سلام يا غالي', lat: 'Salam ya ğali', tr: 'Görüşürüz kıymetli dostum', en: 'Bye, dear friend' },

  /* =====================================================
     3. GÜNLÜK CÜMLELER (PHRASES)
     ===================================================== */
  { id: 201, cat: 'phrases', ar: 'معلش، حصل خير', lat: 'Ma‘leş, hassal heir', tr: 'Kusura bakma, hayırlısı olsun / zararı yok', en: 'Never mind, it is all good' },
  { id: 202, cat: 'phrases', ar: 'يا ريت والله', lat: 'Ya reyt wallah', tr: 'Keşke vallahi / Çok iyi olurdu', en: 'I wish, truly' },
  { id: 203, cat: 'phrases', ar: 'مش فاضي دلوقتي', lat: 'Müş fadi dilwakti', tr: 'Şimdi boş değilim / Müsait değilim', en: 'I am not free right now' },
  { id: 204, cat: 'phrases', ar: 'حصل خير يا صاحبي', lat: 'Hassal heir ya sahibi', tr: 'Önemli değil dostum, tatlıya bağlandı', en: 'No worries, my friend' },
  { id: 205, cat: 'phrases', ar: 'فهمت عليّ؟', lat: 'Fihimt ‘alayya?', tr: 'Beni anladın mı?', en: 'Did you understand me?' },
  { id: 206, cat: 'phrases', ar: 'على راسي من فوق', lat: '‘Ala rasi min فوق (fوق)', tr: 'Başımın üstünde yerin var', en: 'You are most welcome' },
  { id: 207, cat: 'phrases', ar: 'سيبني لوحدي شوية', lat: 'Sibni liwahdi şuwayya', tr: 'Beni biraz yalnız bırak', en: 'Leave me alone for a bit' },
  { id: 208, cat: 'phrases', ar: 'حصل ايه؟', lat: 'Hassal eh?', tr: 'Ne oldu?', en: 'What happened?' },

  /* =====================================================
     4. SAYILAR (NUMBERS)
     ===================================================== */
  { id: 301, cat: 'numbers', ar: 'صفر', lat: 'Sifr', tr: 'Sıfır (0)', en: 'Zero' },
  { id: 302, cat: 'numbers', ar: 'واحد', lat: 'Wahid', tr: 'Bir (1)', en: 'One' },
  { id: 303, cat: 'numbers', ar: 'اتنين', lat: 'İtnin', tr: 'İki (2)', en: 'Two' },
  { id: 304, cat: 'numbers', ar: 'تلاتة', lat: 'Talata', tr: 'Üç (3)', en: 'Three' },
  { id: 305, cat: 'numbers', ar: 'أربعة', lat: 'Arba‘a', tr: 'Dört (4)', en: 'Four' },
  { id: 306, cat: 'numbers', ar: 'خمسة', lat: 'Hamsa', tr: 'Beş (5)', en: 'Five' },
  { id: 307, cat: 'numbers', ar: 'ستة', lat: 'Sitta', tr: 'Altı (6)', en: 'Six' },
  { id: 308, cat: 'numbers', ar: 'سبعة', lat: 'Sab‘a', tr: 'Yedi (7)', en: 'Seven' },
  { id: 309, cat: 'numbers', ar: 'تمنة', lat: 'Tamanya', tr: 'Sekiz (8)', en: 'Eight' },
  { id: 310, cat: 'numbers', ar: 'تسعة', lat: 'Tis‘a', tr: 'Dokuz (9)', en: 'Nine' },
  { id: 311, cat: 'numbers', ar: 'عشرة', lat: '‘Aşra', tr: 'On (10)', en: 'Ten' },
  { id: 312, cat: 'numbers', ar: 'عشرين', lat: '‘Işrin', tr: 'Yirmi (20)', en: 'Twenty' },
  { id: 313, cat: 'numbers', ar: 'مية', lat: 'Miyya', tr: 'Yüz (100)', en: 'Hundred' },
  { id: 314, cat: 'numbers', ar: 'ألف', lat: 'Alf', tr: 'Bin (1000)', en: 'Thousand' },

  /* =====================================================
     5. AİLE & İNSANLAR (FAMILY)
     ===================================================== */
  { id: 401, cat: 'family', ar: 'عيلة', lat: '‘Eyla', tr: 'Aile', en: 'Family' },
  { id: 402, cat: 'family', ar: 'بابا / أب', lat: 'Baba / Ab', tr: 'Baba', en: 'Father' },
  { id: 403, cat: 'family', ar: 'ماما / أم', lat: 'Mama / Umm', tr: 'Anne', en: 'Mother' },
  { id: 404, cat: 'family', ar: 'جوزي / زوجي', lat: 'Goozi / Zawgi', tr: 'Eşim (Koca)', en: 'Husband' },
  { id: 405, cat: 'family', ar: 'مراتي', lat: 'Merati', tr: 'Karım / Eşim', en: 'Wife' },
  { id: 406, cat: 'family', ar: 'ابن', lat: 'Ibn', tr: 'Oğul', en: 'Son' },
  { id: 407, cat: 'family', ar: 'بنت', lat: 'Bint', tr: 'Kız çocuk', en: 'Daughter' },
  { id: 408, cat: 'family', ar: 'صاحبي', lat: 'Sahibi', tr: 'Dostum / Arkadaşım', en: 'My friend' },

  /* =====================================================
     6. ZAMAN & TAKVİM (TIME)
     ===================================================== */
  { id: 501, cat: 'time', ar: 'نهاردة', lat: 'Niharda', tr: 'Bugün', en: 'Today' },
  { id: 502, cat: 'time', ar: 'بكرة', lat: 'Bukra', tr: 'Yarın', en: 'Tomorrow' },
  { id: 503, cat: 'time', ar: 'إمبارح', lat: 'Imbarih', tr: 'Dün', en: 'Yesterday' },
  { id: 504, cat: 'time', ar: 'دلوقتي', lat: 'Dilwakti', tr: 'Şimdi', en: 'Now' },
  { id: 505, cat: 'time', ar: 'بعد اذنك', lat: 'Ba‘d iznak', tr: 'İzninizle', en: 'Excuse me' },
  { id: 506, cat: 'time', ar: 'كل يوم', lat: 'Kull yom', tr: 'Her gün', en: 'Every day' },

  /* =====================================================
     7. YİYECEK & İÇECEK (FOOD)
     ===================================================== */
  { id: 601, cat: 'food', ar: 'ميه ساقعة', lat: 'Mayya saq‘a', tr: 'Soğuk su', en: 'Cold water' },
  { id: 602, cat: 'food', ar: 'قهوة مظبوطة', lat: 'Ahwa mazbuta', tr: 'Orta şekerli kahve', en: 'Medium coffee' },
  { id: 603, cat: 'food', ar: 'شاي براد', lat: 'Şay barrad', tr: 'Demli çay', en: 'Pot tea' },
  { id: 604, cat: 'food', ar: 'عيش مصري', lat: 'Eş masri', tr: 'Mısır ekmeği (Baladi)', en: 'Egyptian bread' },
  { id: 605, cat: 'food', ar: 'فطار', lat: 'Fitar', tr: 'Kahvaltı', en: 'Breakfast' },
  { id: 606, cat: 'food', ar: 'غدا', lat: 'Ğada', tr: 'Öğle yemeği', en: 'Lunch' },
  { id: 607, cat: 'food', ar: 'عشا', lat: '‘Aşa', tr: 'Akşam yemeği', en: 'Dinner' },

  /* =====================================================
     8. ULAŞIM & SEYAHAT (TRAVEL)
     ===================================================== */
  { id: 701, cat: 'travel', ar: 'المطار فين؟', lat: 'El-matar feyn?', tr: 'Havalimanı nerede?', en: 'Where is the airport?' },
  { id: 702, cat: 'travel', ar: 'عايز أروح الفندق', lat: '‘Ayiz aruh el-funduk', tr: 'Otele gitmek istiyorum', en: 'I want to go to the hotel' },
  { id: 703, cat: 'travel', ar: 'وقف هنا لو سمحت', lat: 'Wif hena law samaht', tr: 'Burada dur lütfen', en: 'Stop here please' },
  { id: 704, cat: 'travel', ar: 'بكام التذكرة؟', lat: 'Bikam el-tazkara?', tr: 'Bilet ne kadar?', en: 'How much is the ticket?' },

  /* =====================================================
     9. ALIŞVERİŞ & FİYATLAR (SHOPPING)
     ===================================================== */
  { id: 801, cat: 'shopping', ar: 'غالي أوي يا باشا', lat: 'Ğali awi ya başa', tr: 'Çok pahalı başganım, bi ikram yap', en: 'Very expensive, boss' },
  { id: 802, cat: 'shopping', ar: 'مافيش تخفيض؟', lat: 'Mafiş tahfid?', tr: 'İndirim yok mu?', en: 'Is there no discount?' },
  { id: 803, cat: 'shopping', ar: 'هخدده خلاص', lat: 'Hahuduh halas', tr: 'Bunu alıyorum tamam', en: 'I will take it' },
  { id: 804, cat: 'shopping', ar: 'حساب كام؟', lat: 'Hisab kam?', tr: 'Hesap / Tutar ne kadar?', en: 'How much is the total?' },

  /* =====================================================
     10. DUYGULAR & DURUMLAR (EMOTIONS)
     ===================================================== */
  { id: 901, cat: 'emotions', ar: 'أنا مبسوط جداً', lat: 'Ana mabsut giddan', tr: 'Çok mutluyum', en: 'I am very happy' },
  { id: 902, cat: 'emotions', ar: 'تعبان النهاردة', lat: 'Ta‘ban niharda', tr: 'Bugün yorgunum / hastayım', en: 'Tired today' },
  { id: 903, cat: 'emotions', ar: 'مش زعلان', lat: 'Müş za‘lan', tr: 'Kızgın / üzgün değilim', en: 'Not upset' },
  { id: 904, cat: 'emotions', ar: 'زي الفل', lat: 'Zeyy el-full', tr: 'Canavar gibiyim / Çok iyiyim', en: 'Great' },

  /* =====================================================
     11. İŞ & OFİS (WORK - ÖZEL FABRİKA / YÖNETİM TERİMLERİ)
     ===================================================== */
  { id: 1001, cat: 'work', ar: 'المدير في الاجتماع', lat: 'El-mudir fi el-ictima‘', tr: 'Müdür toplantıda', en: 'The manager is in the meeting' },
  { id: 1002, cat: 'work', ar: 'مواعيد الشغل', lat: 'Mawa‘id el-şuğl', tr: 'Çalışma saatleri', en: 'Work hours' },
  { id: 1003, cat: 'work', ar: 'الجودة ممتازة', lat: 'El-cuda mumtaza', tr: 'Kalite mükemmel', en: 'Quality is excellent' },
  { id: 1004, cat: 'work', ar: 'المصنع شغال', lat: 'El-masna‘ şağğal', tr: 'Fabrika çalışıyor / aktif', en: 'The factory is running' },
  { id: 1005, cat: 'work', ar: 'توقيع العقد بكرة', lat: 'Tawqi‘ el-‘aqd bukra', tr: 'Sözleşme imzası yarın', en: 'Contract signing tomorrow' },
  { id: 1006, cat: 'work', ar: 'فين تقرير الإنتاج؟', lat: 'Feyn taqrir el-intag?', tr: 'Üretim raporu nerede?', en: 'Where is the production report?' },
  { id: 1007, cat: 'work', ar: 'مراجعة قسم الجودة', lat: 'Muraca‘at qism el-cuda', tr: 'Kalite departmanı incelemesi', en: 'Quality dept audit' },

  /* =====================================================
     12. EV & EŞYALAR (HOME)
     ===================================================== */
  { id: 1101, cat: 'home', ar: 'مفتاح البيت', lat: 'Miftah el-beyt', tr: 'Ev anahtarı', en: 'House key' },
  { id: 1102, cat: 'home', ar: 'اقفل الباب لو سمحت', lat: 'Iqfil el-bab law samaht', tr: 'Kapıyı kapat lütfen', en: 'Close the door please' },
  { id: 1103, cat: 'home', ar: 'أوضة النوم', lat: 'Odat el-nom', tr: 'Yatak odası', en: 'Bedroom' }
];