import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'anasayfa',
    url: '/',
  },
  {
    id: 2,
    text: 'hakkımızda',
    url: '/about',
  },
  {
    id: 3,
    text: 'ürünler',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'misyon',
    text: 'Biz, evlerinizi yaşam alanlarınıza dönüştürmek için üretkenlik ve estetikle harmanlanmış özenle seçilmiş dekorasyon ürünleri sunan bir e-ticaret platformuyuz!',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vizyon',
    text: 'Geleceği tasarlamak ve ev dekorasyonunda öncü bir rol üstlenmek için yola çıktık. Vizyonumuz, insanların evlerini ve ofislerini güzellikle doldurmaktır!',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'tarihçe',
    text: "2021 yılında kurulan firmamız, ev dekorasyonu alanında hizmet vermektedir. İlk olarak İstanbul'da hizmet vermeye başlayan firmamız, kısa sürede Türkiye'nin her yerine hizmet vermeye başlamıştır.",
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
