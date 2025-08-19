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
      },
      {
        title: 'Privacy Policy',
        link: '/privacy-policy'
      },
      {
        title: 'Cookie Policy',
        link: '/cookies-policy'
      },
      {
        title: 'Terms and Conditions',
        link: '/terms-and-conditions'
      }
    ]
  }
];



export default menu_data;

// mobile menus - updated to match desktop navigation
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
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
    title: 'Blog',
    link: '/blog'
  },
  {
    id: 4,
    title: 'FAQ',
    link: '/faq'
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact'
  },
  {
    id: 6,
    title: 'About Us',
    link: '/about-us'
  },
  {
    id: 7,
    title: 'Schedule Call',
    link: 'https://crm.thexmedia.com/widget/booking/49CNEuLUWgqv6vOPwV7t'
  },
  {
    id: 8,
    title: 'Privacy Policy',
    link: '/privacy-policy'
  },
  {
    id: 9,
    title: 'Cookie Policy',
    link: '/cookies-policy'
  },
  {
    id: 10,
    title: 'Terms and Conditions',
    link: '/terms-and-conditions'
  }
]