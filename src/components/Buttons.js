import { ButtonGroupStyled, DefaultButtonStyled } from "@/styles/components"
import Link from "next/link"

export const ButtonGroup = ({children, margin, justify})=> {
    return (
        <ButtonGroupStyled margin={margin} justify={justify}>
            {children}
        </ButtonGroupStyled>
    )
}

export const DefaultButton = ({title, children, type, clicked})=> {
    return (
        <DefaultButtonStyled type={type ? type : 'button'} onClick={clicked}>
            <span>{title}</span>
            {children}
        </DefaultButtonStyled>
    )
}

export const LinkButton = ({title, href, children})=> {
    return (
        <DefaultButtonStyled as={Link} href={href}>
            <span>{title}</span>
            {children}
        </DefaultButtonStyled>
    )
}