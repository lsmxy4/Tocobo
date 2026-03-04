const img = (path) => `/img/${path}`;
import imgs from '../assets/helloImg.png'
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: imgs,   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  title: "ATOMY",
  description:
    "지난 2009년 창립한 애터미는 <br>2025년 기준 한국을 비롯해 전 세계 27개 지역에서 <br>직접판매 영업을 하고 있는 글로벌 네트워크마케팅 기업입니다.",
  cta: {
    label: "MEET ATOMY",
    href: "/about"
  }
};


