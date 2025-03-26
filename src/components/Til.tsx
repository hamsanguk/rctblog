import React, { useState } from 'react';
import Day13 from '../til/Day13';
interface DayData {
  day: string;
  title: string;
  content: string[];
}

const BlogComponent: React.FC = () => {
  return(
    <div>
      <Day13/>
    </div>
  )
};

export default BlogComponent;
