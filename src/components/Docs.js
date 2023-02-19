import React from 'react'
import './Docs.css';

export default function Docs() {
  return (
    <div className="docs">
      <div className="doc-txt">
        Beat 
        <br />
        <span className='beat-docs'>Docs</span>
      </div>
      <div className="doc-img">
        <img src="./connect1.svg" alt="" className='git-img'/>
      </div>
    </div>
  );
}