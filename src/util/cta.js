const img = (path) => `/img/${path}`;
import health from '../assets/health.png'
import beauty from '../assets/beauty.png'
import eating from '../assets/eating.png'
import clothes from '../assets/clothes.png'
import appli from '../assets/appli.png'
import hair from '../assets/hair.png'

export const categories = [
  {
    id: 61,
    slug: "health",
    name: "건강식품",
    href: "/category/health/61/",
    img: {
      src: health,
      alt: "건강식품",
    },
  },
  {
    id: 42,
    slug: "beauty",
    name: "뷰티",
    href: "/category/beauty/42/",
    img: {
      src: beauty,

      alt: "뷰티",
    },
  },
  {
    id: 52,
    slug: "eating",
    name: "식품",
    href: "/category/eating/52/",
    img: {
      src: eating,

      alt: "식품",
    },
  },
  {
    id: 50,
    slug: "clothes",
    name: "의류",
    href: "/category/clothes/50/",
    img: {
      src: clothes,

      alt: "의류",
    },
  },
  {
    id: 47,
    slug: "appli",
    name: "가전",
    href: "/category/appli/47/",
    img: {
      src: appli,

      alt: "가전",
    },
  },
  {
    id: 28,
    slug: "hair",
    name: "해어",
    href: "/category/hair/28/",
    img: {
      src: hair,

      alt: "해어",
    },
  },
];

export default categories;