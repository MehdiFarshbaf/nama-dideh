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
    {id: 0, label: 'پلتفرم VOD', path: '/'},
    {id: 1, label: 'تولید محتوا', path: '/'},
    {id: 2, label: 'درباره ما', path: 'about-us'},
    {id: 3, label: 'تماس با ما', path: '/contact-us'},
]

export const contactUsList = [
    {id: 0, icon: <PhoneIcon/>, label: '09123456789'},
    {id: 1, icon: <MailIcon/>, label: 'info@namadideh.com'},
    {id: 2, icon: <LocationIcon/>, label: 'tehran'},
    {id: 2, icon: <TelegramIcon/>, label: '@namadideh'}
]

export const processStep = [
    {
        id: 0,
        title: 'انتخاب هدف',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
    },
    {
        id: 1,
        title: 'برنامه ریزی',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
    },
    {
        id: 2,
        title: 'تولید و انتشار محتوا',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
    }
]
export const FacilitiesList = [
    {id: 0, title: 'لورم ایپسوم', icon: <VideoIcon/>},
    {id: 1, title: 'لورم ایپسوم', icon: <PlayIcon/>},
    {id: 2, title: 'لورم ایپسوم', icon: <FilmIcon/>},
    {id: 3, title: 'لورم ایپسوم', icon: <MonitorIcon/>},
    {id: 4, title: 'لورم ایپسوم', icon: <MobileIcon/>}
]