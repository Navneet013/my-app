import React, { useState } from 'react'
import './Explore.css'
export default function Explore() {
    const[isopen,setisopen] = useState(false);

  return (
    <div className='top6'>
<div className="top6_1">
    <p className='txt130'>Explore options near me</p>
    <div className="top6_1a" onClick={()=> setisopen(!isopen)}>
    {isopen && (
    <div className="something">
        <p>hello</p>
    </div>
)}
        <div className="top6_1b">
            <h5 className="txt140">Popular cuisines near me</h5>
            <div className="logo100">
<svg className='logo52' xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
</div>
        </div>
    </div>
    <div className="top6_1a">
        <div className="top6_1b">
            <h5 className="txt140">Popular restaurant types near me</h5>
            <div className="logo100">
<svg className='logo53' xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
</div>
        </div>
    </div>
    <div className="top6_1a">
        <div className="top6_1b">
            <h5 className="txt140">Top Restaurant Chains</h5>
            <div className="logo100">
<svg className='logo54' xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
</div>
        </div>
    </div>
    <div className="top6_1f">
        <div className="top6_1b">
            <h5 className="txt140">Cities We Deliver To</h5>
            <div className="logo100">
<svg className='logo55' xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
</div>
        </div>
    </div>
</div>
    </div>
  )
}
