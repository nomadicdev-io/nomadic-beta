import { ViewportContainerStyled } from "@/styles/styles"

const ViewportContainer = ({children}) => {
  return (
    <ViewportContainerStyled>
        {children}
    </ViewportContainerStyled>
  )
}

export default ViewportContainer