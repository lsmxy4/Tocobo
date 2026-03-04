const img = (path) => `/img/${path}`
import search from '../assets/icon_search1.png'
import mypage from '../assets/icon_myp.png'
import cart from '../assets/icon_cart.png'

export const headerData = {
    logo: {
        src: img('logo.svg'),
        alt: 'ATOMY',
        href: '/'
    },
    menus: [
        {
            id: 'hero',
            label: 'hero',
            href: '#hero',
            type: 'section'
        },
        {
            id: 'follow',
            label: 'follow',
            href: '#follow',
            type: 'section'
        },
        {
            id: 'collection',
            label: 'collection',
            href: '#collection',
            type: 'section'
        },
        {
            id: 'skincare',
            label: 'skincare',
            href: '#skincare',
            type: 'section'
        },
        {
            id: 'instgrams',
            label: 'instgrams',
            href: '#instgrams',
            type: 'section'
        }
    ],
    utils: [
        { id: "search", label: "검색", icon: search, href: "#" },
        { id: "account", label: "마이", icon: mypage, href: "#" },
        { id: "cart", label: "장바구니", icon: cart, href: "#" },
    ],
    topBanner: {
        enabled: true,
        height: 64,
        items: [
            { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
            { id: "tb-2", text: "업데이트 안내", href: "#" },
            { id: "tb-3", text: "이벤트 진행 중!", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#00B6F0",
        color: "#fff",
    },

}