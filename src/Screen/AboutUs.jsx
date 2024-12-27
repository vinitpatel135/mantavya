import React from 'react'
import BannerComponent from '../Component/Home/BannerComponent'
import MantavySeeds from '../Component/Home/MantavySeeds'
import ImageWithPlayButton from '../Component/Home/Youtubevideo'
import RedInfoSection from '../Component/Home/Readinfo/Readinfo'
import ProductPack from '../Component/Home/ProductPack'
import AccordionList from '../Component/Home/Accordion_List/Accordion'
import ResponsiveForm from '../Component/Home/Formsubmission/Form'

export default function AboutUs() {
  return (
   <>
   <BannerComponent />
      <MantavySeeds />
      <ImageWithPlayButton />
      <RedInfoSection />
      <ProductPack />
      <AccordionList />
      <ResponsiveForm/>
   </>
  )
}
