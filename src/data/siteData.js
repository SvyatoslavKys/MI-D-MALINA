const asset = (path) => `${import.meta.env.BASE_URL}Image/${path}`;

export const navigation = [
  { label: 'Strona główna', href: '#home' },
  { label: 'O nas', href: '#about' },
  { label: 'Atrakcje', href: '#attractions' },
  { label: 'Udogodnienia', href: '#amenities' },
  { label: 'Kontakt', href: '#contact' },
];

export const attractions = [
  { name: 'Park wodny', icon: asset('icons/attractions-icons/Park wodny.svg') },
  { name: 'Kuligi', icon: asset('icons/attractions-icons/Kuligi.svg') },
  { name: 'Stoki', icon: asset('icons/attractions-icons/Stoki.svg') },
  { name: 'Resorty SPA', icon: asset('icons/attractions-icons/Resorty SPA.svg') },
  { name: 'Park linowy', icon: asset('icons/attractions-icons/Park linowy.svg') },
  {
    name: 'Restauracje i karczmy',
    icon: asset('icons/attractions-icons/Resturacje i Karczmy.svg'),
  },
  { name: 'Trójstyk', icon: asset('icons/attractions-icons/Trójtyk.svg') },
  {
    name: 'Szlaki turystyczne',
    icon: asset('icons/attractions-icons/Szlaki turystyczne.svg'),
  },
];

export const sharedAmenities = [
  { name: 'Narciarnia', image: asset('card/evry-house/NARCIARNIA.jpg') },
  {
    name: 'Plac zabaw dla dzieci',
    image: asset('card/evry-house/PLAC ZABAW DLA DZIECI.jpg'),
  },
  {
    name: 'Duże tarasy z wyposażeniem',
    image: asset('card/evry-house/duze.png'),
  },
  {
    name: 'Prywatne balie ogrzewane drewnem',
    image: asset('card/evry-house/PRYWATNE BALIE.jpg'),
  },
  {
    name: 'Duża wiata z paleniskiem',
    image: asset('card/evry-house/DUZA WIATA.png'),
  },
  {
    name: 'Prywatne grille oraz drewno do balii',
    image: asset('card/evry-house/PRYWATNE GRILLE ORAZ DREWNO DO BALII.jpg'),
  },
];

export const cottageAmenities = [
  { name: 'Taras z widokiem', image: asset('card/TARAS Z WIDOKIEM.jpg') },
  { name: 'Zestaw ręczników i szlafroków', image: asset('card/ZESTAW.png') },
  {
    name: 'Płyta indukcyjna, piekarnik i zmywarka',
    image: asset('card/PLYT.png'),
  },
  { name: 'Smart TV z Wi-Fi', image: asset('card/SMART TV Z WIFI.jpg') },
  {
    name: 'Kominek typu koza z drewnem',
    image: asset('card/KOMINEK TYPU KOZA Z DREWNEM.jpg'),
  },
  {
    name: 'Ekspres do kawy na ziarna',
    image: asset('card/EKPRES DO KAWY NA ZIARNA.jpg'),
  },
];

export const contactLinks = [
  {
    label: '+48 664 769 936',
    href: 'tel:+48664769936',
    icon: asset('icons/link-icons/phone-icon.svg'),
  },
  {
    label: 'miodmalina.istebna@gmail.com',
    href: 'mailto:miodmalina.istebna@gmail.com',
    icon: asset('icons/link-icons/email-icon.svg'),
  },
  {
    label: 'Jasnowice 2024, 43-470 Istebna',
    href: 'https://www.google.com/maps/search/?api=1&query=Jasnowice+2024+43-470+Istebna',
    icon: asset('icons/link-icons/planet-icon.svg'),
    external: true,
  },
];

export const socialLinks = [
  {
    label: 'Facebook',
    icon: asset('icons/social-icons/Social Icons fb.svg'),
    href: '',
  },
  {
    label: 'Booking',
    icon: asset('icons/social-icons/Button b.svg'),
    href: '',
  },
  {
    label: 'Instagram',
    icon: asset('icons/social-icons/Social Icons insta.svg'),
    href: '',
  },
];

export const logo = asset('icons/Switch.svg');
