import React from 'react';
import { Metadata } from 'next';
import HomeThreeMain from '@/pages/homes/home-3';

export const metadata: Metadata = {
  title: "The-X-Media - Home Three Page",
};

const HomePageThree = () => {
  return (
    <HomeThreeMain/>
  );
};

export default HomePageThree;