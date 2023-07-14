import { HomeBannerStyled, ProfileIcon, ProfileWelcome } from "@/styles/home.styles"
import profilePic from '/public/images/icon-384x384.png'
import Image from "next/image"
import HomeSearch from "./HomeSearch"

const WelcomeArea = ()=> {
    return (
        <ProfileWelcome>
            <h4>Welcome back!</h4>
            <h3>nomadicdev.io</h3>
        </ProfileWelcome>
    )
}

const UserIcon = ()=> {
    return (
        <ProfileIcon title={'Edit Profile'} href={'/dashboard'}>
            <Image 
                src={profilePic}
                fill={true}
                placeholder="blur"
                alt="Background"
            />
        </ProfileIcon>
    )
}

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
        <div className="content_">
            <div className="top_area">
                <WelcomeArea />
                <UserIcon />
            </div>
            <HomeSearch>
            
            </HomeSearch>
        </div>
    </HomeBannerStyled>
  )
}

export default HomeBanner