import { IBlogDT } from "@/types/blog-d-t";

// blog images

// home 5
import blog_1 from "@/assets/img/home-05/blog/blog-1.jpg";
import blog_2 from "@/assets/img/home-05/blog/blog-2.jpg";
import blog_3 from "@/assets/img/home-05/blog/blog-3.jpg";
import blog_4 from "@/assets/img/home-05/blog/blog-4.jpg";
// blog modern 
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";

// avatar
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-1.jpg";

// blog postbox img
import blog_post_1 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-1.jpg';
import blog_post_2 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-2.jpg';
import blog_post_3 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-3.jpg';
import blog_post_4 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-4.jpg';

// blog list images
import blog_list_1 from '@/assets/img/inner-blog/blog-right-sidebar/blog-1.jpg';
import blog_list_2 from '@/assets/img/inner-blog/blog-right-sidebar/blog-2.jpg';
import blog_list_3 from '@/assets/img/inner-blog/blog-right-sidebar/blog-3.jpg';
import blog_list_4 from '@/assets/img/inner-blog/blog-right-sidebar/blog-4.jpg';
import blog_list_5 from '@/assets/img/inner-blog/blog-right-sidebar/blog-5.jpg';



export const blog_home_five: IBlogDT[] = [
  {
    id: 1,
    img: blog_1,
    title: "E-commerce Conversion Optimization",
    date: '01. FEB. 2025',
    category: 'E-commerce / Strategy',
    author: 'The-X-Media Team',
  },
  {
    id: 2,
    img: blog_2,
    title: "Mobile App User Experience Design",
    date: '09. MAY. 2025',
    category: 'Mobile Apps / UX',
    author: 'The-X-Media Team',
  },
  {
    id: 3,
    img: blog_3,
    title: "Building Scalable E-commerce Platforms",
    date: '30. AUG. 2024',
    category: 'E-commerce / Development',
    author: 'The-X-Media Team',
  },
  {
    id: 4,
    img: blog_4,
    title: "Mobile Commerce Trends 2025",
    date: '11. JAN. 2025',
    category: 'Mobile Apps / Trends',
    author: 'The-X-Media Team',
  }
];


export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Custom E-commerce Solutions <br> for Growing Businesses',
    date: '21. OCT. 2024',
    category: 'E-commerce / Development',
    author: 'The-X-Media Team',
  },
  {
    id: 6,
    img: b_m_2,
    title: 'Mobile App Development Best Practices',
    date: '01. FEB. 2025',
    category: 'Mobile Apps / Development',
    author: 'The-X-Media Team',
  },
  {
    id: 7,
    img: b_m_3,
    title: 'User Engagement in Mobile Commerce',
    date: '09. MAY. 2024',
    category: 'Mobile Apps / Strategy',
    author: 'The-X-Media Team',
  },
  {
    id: 8,
    img: b_m_4,
    title: 'Conversion Rate Optimization Strategies',
    date: '30. AUG. 2024',
    category: 'E-commerce / Optimization',
    author: 'The-X-Media Team',
  },
  {
    id: 9,
    img: b_m_5,
    title: 'Cross-Platform App Development',
    date: '11. JAN. 2025',
    category: 'Mobile Apps / Technology',
    author: 'The-X-Media Team',
  },
  {
    id: 10,
    img: b_m_6,
    title: 'E-commerce Platform Migration Guide',
    date: '15. OCT. 2024',
    category: 'E-commerce / Strategy',
    author: 'The-X-Media Team',
  },
  {
    id: 11,
    img: b_m_7,
    title: 'Mobile Payment Integration Solutions',
    date: '20. NOV. 2024',
    category: 'Mobile Apps / Payments',
    author: 'The-X-Media Team',
  },

  {
    id: 12,
    img: b_m_2,
    title: 'Scaling Your E-commerce Business',
    date: '01. FEB. 2025',
    category: 'E-commerce / Growth',
    author: 'The-X-Media Team',
  },
  {
    id: 13,
    img: b_m_5,
    title: 'App Store Optimization Techniques',
    date: '09. MAY. 2024',
    category: 'Mobile Apps / Marketing',
    author: 'The-X-Media Team',
  },
  {
    id: 14,
    img: b_m_4,
    title: 'Customer Retention in E-commerce',
    date: '30. AUG. 2024',
    category: 'E-commerce / Strategy',
    author: 'The-X-Media Team',
  },
];


export const blog_classic: IBlogDT[] = [
  {
    id: 15,
    title: "E-commerce Analytics & Performance",
    date: '01. FEB. 2025',
    category: 'E-commerce / Analytics',
    author: 'The-X-Media Team',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 16,
    title: "Mobile App Security Best Practices",
    date: '09. MAY. 2024',
    category: 'Mobile Apps / Security',
    author: 'The-X-Media Team',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 17,
    img: blog_post_1,
    title: "Omnichannel E-commerce Strategy",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '30. AUG. 2024',
    category: 'E-commerce / Strategy',
    author: 'The-X-Media Team',
  },
  {
    id: 18,
    img: blog_post_2,
    title: "Progressive Web Apps vs Native Apps",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '11. JAN. 2025',
    category: 'Mobile Apps / Technology',
    author: 'The-X-Media Team',
    video: true,
    videoId: 'rVHxkxJM3rY'
  },
  {
    id: 19,
    blogQuoteTwo: true,
    title: "PERSONALIZATION IN E-COMMERCE <br/> DRIVES CUSTOMER ENGAGEMENT.",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '15. OCT. 2024',
    category: 'E-commerce / Personalization',
    author: 'The-X-Media Team',
  },
  {
    id: 20,
    imgSlider: true,
    images: [blog_post_1, blog_post_2, blog_post_3],
    title: "Mobile App Monetization Strategies",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '20. NOV. 2024',
    category: 'Mobile Apps / Business',
    author: 'The-X-Media Team',
  },
  {
    id: 21,
    blogQuote: true,
    title: "The-X-Media TEAM, TECHNICAL DIRECTOR",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,uyam erat.!',
    date: '12. OCT. 2024',
    category: 'E-commerce / Leadership',
    author: 'The-X-Media Team',
  },
  {
    id: 22,
    img: blog_post_4,
    title: "E-commerce Platform Setup Guide",
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '18. DEC. 2024',
    category: 'E-commerce / Development',
    author: 'The-X-Media Team',
  },
];


export const blog_lists: IBlogDT[] = [
  {
    id: 23,
    img: blog_list_1,
    title: "AI-Powered E-commerce Recommendations",
    date: '01. FEB. 2025',
    category: 'E-commerce / AI',
    author: 'The-X-Media Team',
  },
  {
    id: 24,
    img: blog_list_2,
    title: "Flutter vs React Native Comparison",
    date: '09. MAY. 2024',
    category: 'Mobile Apps / Development',
    author: 'The-X-Media Team',
  },
  {
    id: 25,
    img: blog_list_3,
    title: "Headless Commerce Architecture",
    date: '30. AUG. 2024',
    category: 'E-commerce / Architecture',
    author: 'The-X-Media Team',
  },
  {
    id: 26,
    img: blog_list_4,
    title: "Mobile App Performance Optimization",
    date: '11. JAN. 2025',
    category: 'Mobile Apps / Performance',
    author: 'The-X-Media Team',
  },
  {
    id: 27,
    img: blog_list_5,
    title: "Voice Commerce Integration",
    date: '15. OCT. 2024',
    category: 'E-commerce / Innovation',
    author: 'The-X-Media Team',
  },
  {
    id: 28,
    img: blog_list_2,
    title: "Mobile App Testing Strategies",
    date: '20. NOV. 2024',
    category: 'Mobile Apps / Testing',
    author: 'The-X-Media Team',
  },
];

export const blog_data: IBlogDT[] = [
  ...blog_lists,
  ...blog_home_five,
  ...blog_modern,
  ...blog_classic,
]

