// social

import LocationIcon from "../components/icons/LocationIcon"
import MailIcon from "../components/icons/MailIcon"
import PhoneIcon from "../components/icons/PhoneIcon"
import TelegramIcon from "../components/icons/TelegramIcon"
import FilmIcon from "../components/icons/FilmIcon";
import MobileIcon from "../components/icons/MobileIcon";
import MonitorIcon from "../components/icons/MonitorIcon";
import PlayIcon from "../components/icons/PlayIcon";
import VideoIcon from "../components/icons/VideoIcon";


export const footerLink = [
    {id: 0, label: 'پلتفرم VOD', area: 'platform'},
    {id: 1, label: 'تولید محتوا', area: 'content'},
    {id: 2, label: 'درباره ما', area: 'about-us'},
    {id: 3, label: 'تماس با ما', area: 'contact-us'},
]

export const contactUsList = [
    {id: 0, icon: <PhoneIcon/>, label: '09124448509'},
    {id: 1, icon: <MailIcon/>, label: 'lohrasbi@webcasting.ir'},
    {id: 2, icon: <LocationIcon/>, label: 'tehran'},
    {id:3, icon: <TelegramIcon/>, label: '@namadideh'}
]

export const processStep = [
    {
        id: 0,
        title: 'امکانات محیطی',
        description: 'اجاره استودیو های صدا و تصویر مجهز FHD/4K'
    },
    {
        id: 1,
        title: 'امکانات صوتی',
        description: 'ارائه خدمات تهیه و تولید محتوای صوتی اعم از گویندگی و نریشن، دوبله و ...'
    },
    {
        id: 2,
        title: 'امکانات تصویری',
        description: 'ارائه خدمات و تولید محتوای تصویری اعم از تبلیغاتی، برندینگ، استودیویی (برنامههای تلویزیونی و شبکههای مجازی، تاکشو، فیلم کوتاه و ...)'
    }
]
export const FacilitiesList = [
    {id: 0, title: 'کانال اختصاصی', icon: <VideoIcon/>},
    {id: 1, title: 'پخش زنده', icon: <PlayIcon/>},
    {id: 2, title: 'پخش فیلم و سریال', icon: <FilmIcon/>},
    {id: 3, title: 'نرم افزار اختصاصی TV', icon: <MonitorIcon/>},
    {id: 4, title: 'طراحی ریسپانسیو', icon: <MobileIcon/>}
]
export const planOne = [
    {id: 0, facility: 'آپلود حداکثر ۲۰۰ محتوای تصویری', state: true},
    {id: 1, facility: 'امکان ایجاد کانال اختصاصی کاربران', state: true},
    {id: 2, facility: 'امکان پخش زنده', state: false},
    {id: 3, facility: 'UI/UX اختصاصی ', state: false},
    {id: 4, facility: 'افزودن فیچرهای اختصاصی', state: false},
    {id: 5, facility: 'پشتیبانی طراحی گرافیک سایت', state: false}
]
export const planTwo = [
    {id: 0, facility: 'آپلود حداکثر ۱۰۰۰ محتوای تصویری', state: true},
    {id: 1, facility: 'امکان ایجاد کانال اختصاصی کاربران', state: true},
    {id: 2, facility: 'امکان پخش زنده', state: true},
    {id: 3, facility: 'UI/UX اختصاصی ', state: true},
    {id: 4, facility: 'افزودن فیچرهای اختصاصی', state: false},
    {id: 5, facility: 'پشتیبانی طراحی گرافیک سایت', state: false}
]
export const planThree = [
    {id: 0, facility: 'آپلود نامحدود محتوای تصویری', state: true},
    {id: 1, facility: 'امکان ایجاد کانال اختصاصی کاربران', state: true},
    {id: 2, facility: 'امکان پخش زنده', state: true},
    {id: 3, facility: 'UI/UX اختصاصی ', state: true},
    {id: 4, facility: 'افزودن فیچرهای اختصاصی', state: true},
    {id: 5, facility: 'پشتیبانی طراحی گرافیک سایت', state: true}
]