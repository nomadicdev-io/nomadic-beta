import { SectionTitleWrapper } from "@/styles/components"

const SectionTitle = ({subtitle, title}) => {
  return (
   <SectionTitleWrapper>
    {subtitle && <p>{subtitle}</p>}
    {title && <h4>{title}</h4>}
   </SectionTitleWrapper>
  )
}

export default SectionTitle