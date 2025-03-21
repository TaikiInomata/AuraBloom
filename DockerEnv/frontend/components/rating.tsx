'use client'

import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import Rating from 'react-rating'

function RatingComp() {
  return (
    <div>
      <Rating
        emptySymbol={<IoMdStarOutline />}
        fullSymbol={<IoMdStar />}
        initialRating={3.6}
        readonly
        className='text-[#FBCA04] text-md leading-none'
      />
    </div>
  )
}

export default RatingComp