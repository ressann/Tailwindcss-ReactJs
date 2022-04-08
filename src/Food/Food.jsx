import React, { useState } from 'react'
import Footer from '../component/Footer'
import ListFood from '../component/ListFood'

const Food = () => {
  const [food,setFood]=useState([
    {
     id:1, title:"Korko khmer food",recipe:"Mr.Ressann",img:"https://th.bing.com/th/id/R.d92d00a60c8e40ca129846ecb835be5f?rik=iZ82A6LY9S60Dg&riu=http%3a%2f%2fhealingplus.com%2fwp-content%2fuploads%2f2019%2f09%2f1568388944_maxresdefault-1024x576.jpg&ehk=%2bmIEfqorNamuTorcKZaNil%2falnckdRpKZkB1Ns%2bUdsM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
     id:2, title:"Korko khmer food",recipe:"Mr.Ressann",img:"https://th.bing.com/th/id/R.d1af1644908127c23d839e870dea427d?rik=YfdVp6%2fsfLFPbw&riu=http%3a%2f%2fflavorverse.com%2fwp-content%2fuploads%2f2016%2f10%2fCambodian-Food.jpg&ehk=bhpa07mjCSlFoWXv5tbiMVgwb71%2bpd%2bxF9nkPrcTY6M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    {
     id:3, title:"Korko khmer food",recipe:"Mr.Ressann",img:"https://th.bing.com/th/id/OIP.z4Yv1guCmIUe09WqFlt_awHaD4?pid=ImgDet&rs=1"
    },
    {
     id:4, title:"Korko khmer food",recipe:"Mr.Ressann",img:"https://th.bing.com/th/id/OIP.KWvCu3uFomryKMEL0c2SbgHaE6?pid=ImgDet&rs=1"
    },
  ])
  return (
    <div className='scroll-smooth'>
      <div className=' text-center p-10 text-4xl font-serif'>Food List</div>
      <div className='pt-10 pb-10 flex justify-center flex-col gap-5 items-center'>
        <span>Lastest Recipe</span>
        <div>
          <ListFood food={food}/>
        </div>
      </div>
      <div className='pt-10 flex justify-center flex-col gap-5 items-center'>
        <span>Popular Recipe Food</span>
        <div>
          <ListFood food={food}/>
        </div>
      </div>
      {/* footer page */}
      <Footer/>
    </div>
  )
}

export default Food