import React, { useState } from 'react'

const ExploreComponent = ({title, content,styles}) => {
    const [isOpen,setIsOpen] = useState(false);
  return (
   <div className="top6_1a" onClick={()=>setIsOpen(!isOpen)}>
        <div className="top6_1b">
            <h5 className="txt140">{title}</h5>
            <div className="logo100">
                {!isOpen ? ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
)}
    </div>
        </div>
       {isOpen && ( <div>
            <ul className="explore-links">
                {content.map(links => <li>{links}</li>)}
            </ul>
        </div>)}
    </div>
  )
}

export default ExploreComponent