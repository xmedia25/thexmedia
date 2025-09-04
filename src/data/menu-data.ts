import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Services',
    link: '/service'
  },
  {
    id: 2,
    title: 'Expertise',
    link: '/our-clients'
  },
  {
    id: 3,
    title: 'About',
    link: '/about-us',
    dropdown_menus: [
      {
        title: 'Blog',
        link: '/blog'
      },
      {
        title: 'FAQ',
        link: '/faq'
      },
      {
        title: 'Contact',
        link: '/contact'
      },
      {
        title: 'About Us',
        link: '/about-us'
      },
      {
        title: 'Schedule Call',
        link: 'https://crm.thexmedia.com/widget/booking/49CNEuLUWgqv6vOPwV7t'
      }
    ]
  }
];



export default menu_data;

// mobile menus - updated to match desktop navigation with dropdown structure
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}[] = [
  {
    id: 1,
    title: 'Services',
    link: '/service'
  },
  {
    id: 2,
    title: 'Expertise',
    link: '/our-clients'
  },
  {
    id: 3,
    title: 'About',
    link: '/about-us',
    dropdown_menus: [
      {
        title: 'Blog',
        link: '/blog'
      },
      {
        title: 'FAQ',
        link: '/faq'
      },
      {
        title: 'Contact',
        link: '/contact'
      },
      {
        title: 'About Us',
        link: '/about-us'
      },
      {
        title: 'Schedule Call',
        link: 'https://crm.thexmedia.com/widget/booking/49CNEuLUWgqv6vOPwV7t'
      }
    ]
  }
]