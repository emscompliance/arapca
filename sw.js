// Doğru eşleşen ve tüm harf/kelimeleri içeren güncel veritabanı:
const WORDS = [
  // 1. Arapça Alfabesi (Artık 0 kalmayacak, 'alphabet' eşleşmesi tam)
  { id: 1, cat: 'alphabet', ar: 'أ', lat: 'Elif', tr: 'Elif harfi (Uzun A sesi)', en: 'Letter Alif' },
  { id: 2, cat: 'alphabet', ar: 'ب', lat: 'Be', tr: 'Be harfi (B sesi)', en: 'Letter Beh' },
  { id: 3, cat: 'alphabet', ar: 'ت', lat: 'Te', tr: 'Te harfi (T sesi)', en: 'Letter Teh' },
  { id: 4, cat: 'alphabet', ar: 'ث', lat: 'Se', tr: 'Se harfi (Peltek S sesi)', en: 'Letter Theh' },
  { id: 5, cat: 'alphabet', ar: 'ج', lat: 'Ge / Gim', tr: 'Cim harfi (Mısır’da G okunur)', en: 'Letter Jeem' },
  { id: 6, cat: 'alphabet', ar: 'ح', lat: 'Ha', tr: 'Boğazdan gelen sert H sesi', en: 'Letter Hah' },
  { id: 7, cat: 'alphabet', ar: 'خ', lat: 'Kha', tr: 'Hırıltılı Kh sesi', en: 'Letter Khah' },
  { id: 8, cat: 'alphabet', ar: 'د', lat: 'Dal', tr: 'Dal harfi (D sesi)', en: 'Letter Dal' },
  { id: 9, cat: 'alphabet', ar: 'ذ', lat: 'Zal', tr: 'Peltek Z sesi', en: 'Letter Thal' },
  { id: 10, cat: 'alphabet', ar: 'ر', lat: 'Re', tr: 'Re harfi (R sesi)', en: 'Letter Reh' },
  { id: 11, cat: 'alphabet', ar: 'ز', lat: 'Zeyn', tr: 'Zey harfi (Z sesi)', en: 'Letter Zain' },
  { id: 12, cat: 'alphabet', ar: 'س', lat: 'Sin', tr: 'Sin harfi (S sesi)', en: 'Letter Seen' },
  { id: 13, cat: 'alphabet', ar: 'ش', lat: 'Şin', tr: 'Şin harfi (Ş sesi)', en: 'Letter Sheen' },
  { id: 14, cat: 'alphabet', ar: 'ص', lat: 'Sad', tr: 'Kalın S sesi', en: 'Letter Sad' },
  { id: 15, cat: 'alphabet', ar: 'ض', lat: 'Dad', tr: 'Kalın D sesi', en: 'Letter Dad' },
  { id: 16, cat: 'alphabet', ar: 'ط', lat: 'Ta', tr: 'Kalın T sesi', en: 'Letter Tah' },
  { id: 17, cat: 'alphabet', ar: 'ظ', lat: 'Za', tr: 'Kalın Z sesi', en: 'Letter Zah' },
  { id: 18, cat: 'alphabet', ar: 'ع', lat: 'Ayın', tr: 'Derin boğaz seslisi', en: 'Letter Ain' },
  { id: 19, cat: 'alphabet', ar: 'غ', lat: 'Ğayın', tr: 'Gırtlaktan Gh sesi', en: 'Letter Ghain' },
  { id: 20, cat: 'alphabet', ar: 'ف', lat: 'Fe', tr: 'Fe harfi (F sesi)', en: 'Letter Feh' },
  { id: 21, cat: 'alphabet', ar: 'ق', lat: 'Qaf', tr: 'Mısır’da genelde hamze okunur', en: 'Letter Qaf' },
  { id: 22, cat: 'alphabet', ar: 'ك', lat: 'Kef', tr: 'Kef harfi (K sesi)', en: 'Letter Kaf' },
  { id: 23, cat: 'alphabet', ar: 'ل', lat: 'Lam', tr: 'Lam harfi (L sesi)', en: 'Letter Lam' },
  { id: 24, cat: 'alphabet', ar: 'م', lat: 'Mim', tr: 'Mim harfi (M sesi)', en: 'Letter Meem' },
  { id: 25, cat: 'alphabet', ar: 'ن', lat: 'Nun', tr: 'Nun harfi (N sesi)', en: 'Letter Noon' },
  { id: 26, cat: 'alphabet', ar: 'ه', lat: 'He', tr: 'Normal H sesi', en: 'Letter Heh' },
  { id: 27, cat: 'alphabet', ar: 'و', lat: 'Waw', tr: 'V / U / O sesi', en: 'Letter Waw' },
  { id: 28, cat: 'alphabet', ar: 'ي', lat: 'Ye', tr: 'Y / İ sesi', en: 'Letter Yeh' },

  // 2. Selamlaşma & Tanışma
  { id: 101, cat: 'greetings', ar: 'ازيك يا باشا؟', lat: 'İzzeyyak ya başa?', tr: 'Nasılsın başganım?', en: 'How are you, boss?' },
  { id: 102, cat: 'greetings', ar: 'صباح الفل يا فندم', lat: 'Sabah el-full ya fandam', tr: 'Günaydın efendim', en: 'Wonderful morning, sir' },
  { id: 103, cat: 'greetings', ar: 'منور يا معلم', lat: 'Munawwar ya mu‘allim', tr: 'Ortamı şereflendirdin üstadım', en: 'You light up the place' },
  { id: 104, cat: 'greetings', ar: 'الحمد لله كله تمام', lat: 'Elhamdulillah kullu tamam', tr: 'Çok şükür her şey yolunda', en: 'Praise be to God, all good' },

  // 3. Günlük Cümleler
  { id: 201, cat: 'phrases', ar: 'معلش، حصل خير', lat: 'Ma‘leş, hassal heir', tr: 'Kusura bakma, hayırlısı olsun', en: 'Never mind' },
  { id: 202, cat: 'phrases', ar: 'يا ريت والله', lat: 'Ya reyt wallah', tr: 'Keşke vallahi / Çok iyi olurdu', en: 'I wish, truly' },

  // 4. Sayılar & Miktarlar
  { id: 301, cat: 'numbers', ar: 'صفر', lat: 'Sifr', tr: 'Sıfır (0)', en: 'Zero' },
  { id: 302, cat: 'numbers', ar: 'واحد', lat: 'Wahid', tr: 'Bir (1)', en: 'One' },
  { id: 303, cat: 'numbers', ar: 'اتنين', lat: 'İtnin', tr: 'İki (2)', en: 'Two' },
  { id: 304, cat: 'numbers', ar: 'تلاتة', lat: 'Talata', tr: 'Üç (3)', en: 'Three' }
];