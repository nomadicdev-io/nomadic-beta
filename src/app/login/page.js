'use client'

import BGImage from "@/components/BGImage"
import ViewportContainer from "@/components/ViewportContainer"
import image from '/public/images/login-image.jpg'
import { LoginContentStyled } from "@/styles/styles"
import { SectionTitle } from "@/styles/components"
import LoginForm from "@/components/sections/form/LoginForm"

export const metadata = {
    title: 'nomadic-Landing',
}

const LandingPage = () => {
  return (
    <ViewportContainer>
        <BGImage imageUrl={image} />

        <LoginContentStyled>

            <SectionTitle>Hello Again!</SectionTitle>

            <LoginForm />

        </LoginContentStyled>
    </ViewportContainer>
  )
}

export default LandingPage