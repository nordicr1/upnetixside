import { useState } from "react"

export default function ScrollPage() {

const [ pageYPosition, setPageYPosition ] = useState(0);

function getPageYAfterScroll(){
    setPageYPosition(window.scrollY);
}

window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <div
      
    >
      
      {pageYPosition > 300 &&
        <a
          href=""
          style={{position: 'fixed', bottom: '25px', left:'1730px', background: '#333', color: 'white', borderRadius: '10px', padding:'20px', scrollBehavior: 'smooth'}}
        >
          VOLTAR AO TOPO
        </a>
      }
    </div>
  )
}