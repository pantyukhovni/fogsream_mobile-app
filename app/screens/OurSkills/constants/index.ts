import AngularIcon from "../../../res/AngularKIcon";
import CssIcon from "../../../res/CssICon";
import HtmlIcon from "../../../res/HTMLICon";
import JavaIcon from "../../../res/JavaIcon";
import MySqlICon from "../../../res/mysqlIcon";
import PhpIcon from "../../../res/PhpICon";
import PythonIcon from "../../../res/PythonIcon";
import ReactIcon from "../../../res/ReactICon";
import VueIcon from "../../../res/VueICon";
import type { TSkillsCard } from "../types";

const carouselCardItem: TSkillsCard[] = [
  {
    title: 'Фронтенд',
    dec: 'Фронтендеры работают с пользовательскими интерфейсами и верстают сайты.',
    usesTech: [
      {
        icon: ReactIcon,
        text: 'React',
        id: '1'
      },
      {
        icon: VueIcon,
        text: 'Vue.js',
        id: '2'
      },
      {
        icon: HtmlIcon,
        text: 'HTML5',
        id: '3'
      },
      {
        icon: CssIcon,
        text: 'CSS3',
        id: '4'
      },
      {
        icon: AngularIcon,
        text: 'AngularIcon',
        id: '5'
      }
    ]
  },
  {
    title: 'Бэкэнд',
    dec: 'Бэкэндеры занимаются всем, что находится на серверной стороне: архитектурой баз данных, программной и бизнес-логикой айти-продукта.',
    usesTech: [
      {
        icon: PythonIcon,
        text: 'Python',
        id: '1'
      },
      {
        icon: PhpIcon,
        text: 'PHP',
        id: '2'
      },
      {
        icon: JavaIcon,
        text: 'Java',
        id: '3'
      },
      {
        icon: MySqlICon,
        text: 'MySql',
        id: '4'
      }
    ]
  },
  {
    title: 'Мобильные приложения',
    dec: 'Мобильщики делают мобильные приложения для iOS и Android.',
    usesTech: [
      {
        icon: ReactIcon,
        text: 'React Native',
        id: '1'
      }
    ]
  }
]

export { carouselCardItem }