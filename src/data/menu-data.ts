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

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id:1,
    title: 'Our Clients',
    link: '/our-clients',
    dropdown_menus:[
      { title: 'Client Profiles', link: '/our-clients' },
      { title: 'Portfolio Masonry', link: '/portfolio-masonry' },
      { title: 'Portfolio Showcase', link: '/portfolio-showcase' },
      { title: 'Portfolio Details', link: '/portfolio-details' },
    ]
  },
  {
    id: 2,
    title: 'Services',
    link: '/service',
    dropdown_menus:[
      { title: 'All Services', link: '/service' },
      { title: 'AI Content', link: '/ai-content' },
      { title: 'Service Details', link: '/service-details' },
    ]
  },
  {
    id: 3,
    title: 'Blog',
    link: '/blog',
    dropdown_menus:[
      { title: 'Blog Modern', link: '/blog' },
      { title: 'Blog Classic', link: '/blog-classic' },
      { title: 'Blog List', link: '/blog-list' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
  {
    id: 4,
    title: 'FAQ',
    link: '/faq',
    dropdown_menus:[
      { title: 'FAQ', link: '/faq' },
    ]
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    dropdown_menus:[
      { title: 'Contact', link: '/contact' },
      { title: 'Contact 2', link: '/contact-2' },
    ]
  }
]