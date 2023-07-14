'use client'

import BGImage from "@/components/BGImage"
import ViewportContainer from "@/components/ViewportContainer"
import image from '/public/images/landing-image.jpg'
import { LandingContentStyled } from "@/styles/styles"
import { ButtonGroup, LinkButton } from "@/components/Buttons"
import {FaArrowRight} from 'react-icons/fa'

export const metadata = {
    title: 'nomadic-Landing',
}

const LandingPage = () => {
  return (
    <ViewportContainer>
        <BGImage imageUrl={image} />

        <LandingContentStyled>
            <h4>Join our Community</h4>
            <h2>Discover your path Travel around the <span>World!</span></h2>
            <p>Discover your dream destinations and plan <br/>the perfect itinerary</p>

            <ButtonGroup margin={'1rem 0 0'}>
                <LinkButton title={'Get Started'} href={'/login'}>
                    <FaArrowRight />
                </LinkButton>
            </ButtonGroup>

        </LandingContentStyled>
    </ViewportContainer>
  )
}

export default LandingPage