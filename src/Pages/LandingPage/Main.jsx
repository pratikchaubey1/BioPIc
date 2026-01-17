import React from 'react'
import Herosection from '../../Component/HeroSection/HeroSection'
import Second from '../../Component/SectionPage/Second'
import Three from '../../Component/SectionPage/Three'
import Four from '../../Component/SectionPage/Four'
import Five from '../../Component/SectionPage/Five'
import Six from '../../Component/SectionPage/Six'
import Seven from '../../Component/SectionPage/Seven'
import Eight from '../../Component/SectionPage/Eight'
import BannerSection from '../../Component/SectionPage/Bannersection'

function Main() {
  return (
    <div>
      <Herosection/>
      <Second/>
      <Three/>
      <Four/>
      <Five/>
      <Six/>
      <Seven/>
      <Eight/>
      <BannerSection/>
    </div>
  )
}

export default Main
