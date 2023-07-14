import { BGImageStyled } from "@/styles/styles"
import Image from "next/image"

const BGImage = ({imageUrl}) => {
  return (
    <BGImageStyled>
        <Image 
            src={imageUrl}
            fill={true}
            placeholder="blur"
            alt="Background"
        />
    </BGImageStyled>
  )
}

export default BGImage