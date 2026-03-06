const img = (path) => `/img/${path}`;
import title1 from '../assets/1st-title.png'
import title2 from '../assets/1-1title.png'
import title3 from '../assets/1-2title.png'
import Mtitle1 from '../assets/M1title.png'
import Mtitle2 from '../assets/M1-1title.png'
import Mtitle3 from '../assets/M1-2title.png'


export const heroSlides = [
  {
    id: "hs-1",
    title: "더 쉽고 깨끗한 세척! <br>애터미 메디쿡 프라이팬",
    subtitle: "더욱더 좋아진 프라이펜",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "조리도구 보러가기",
    ctaHref: "/products",
    image: {
      desktop:title1,
      mobile: Mtitle1,
    },
    alt: "비건 스킨케어 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "면역기능, 피로개선을 동시에!<br>애터미 헤모힘",
    subtitle: "누적매출 2조 돌파",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "구매하러 가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:title2,
      mobile: Mtitle2,
    },
    alt: "보습 라인 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "2분이면 OK,<br>집밥의 정성과 맛을 그대로",
    subtitle: "애터미 맛있는 간편국",
    desc: "민감 피부를 위한 무향 포뮬러",
    ctaText: "간편국 구매하러 가기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:title3,
      mobile: Mtitle3,
    },
    alt: "민감 피부 라인 배너",
    active: true,
    order: 3,
  }
];