import React from 'react'
import BannerComponent from '../Component/Home/BannerComponent'
import MantavySeeds from '../Component/Home/MantavySeeds'
import RedInfoSection from '../Component/Home/Readinfo/Readinfo'
import ProductPack from '../Component/Home/ProductPack'
import ProductShowcase from '../Component/Home/ProductShowcase/ProductShowcase'
import AccordionList from '../Component/Home/Accordion_List/Accordion'
import MantavyImages from '../Component/Home/MantavyImages/MantavyImages'
import ResponsiveForm from '../Component/Home/Formsubmission/Form'
import ImageWithPlayButton from '../Component/Home/Youtubevideo'

export default function HomeScreen() {
  return (
   <>
    <BannerComponent />
      <MantavySeeds />
      <ImageWithPlayButton />
      <RedInfoSection />
      <ProductPack />
      <ProductShowcase />
      <AccordionList />
      <MantavyImages />
      {/* <MissionVisions /> */}
      <ResponsiveForm/>
   </>
  )
}
