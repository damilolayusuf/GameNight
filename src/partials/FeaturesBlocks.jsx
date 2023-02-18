import React from 'react';

import GameCards from './GameCards';
import Game1 from "../images/Words&Numbers.png"
import { Link } from 'react-router-dom';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Games List</h2>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link to="/wordsnumbers">
                <GameCards GameTitle="Words & Numbers" GameDescription="Game About words and Numbers..." ImagePath={Game1}/>
              </Link>
            </div>

            {/* 2nd item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Instant Features</h4>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
