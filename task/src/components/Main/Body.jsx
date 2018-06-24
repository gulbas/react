import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'http://www.universalholidayssurat.com/wp-content/uploads/2018/01/thailand-tour-from-nepal2.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://www.socwall.com/images/wallpapers/865-1600x1200.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'http://ghumnechalo.co.in/gc_uploads/2018/03/holiday-package-in-thailand.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Body = () => <UncontrolledCarousel items={items} />;

export default Body;