import Header from '@/Components/HeadingComponents/Header';
import React from 'react';

const Trending = () => {
    return (
        <div className='mt-24'>
 <Header
        heading={"Trending this week"}
         details={
          "Browse top trending themes. Updated hourly."
        }
      />
          </div>
    );
};

export default Trending;