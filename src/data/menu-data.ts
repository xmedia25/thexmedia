import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Our Clients',
    link: '/our-clients'
  },
  {
    id: 2,
    title: 'Services',
    link: '/service'
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
  }
];



export default menu_data;

// mobile menus - updated to use direct links instead of dropdowns
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
}[] = [
  {
    id: 1,
    title: 'Our Clients',
    link: '/our-clients'
  },
  {
    id: 2,
    title: 'Services',
    link: '/service'
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
  }
]