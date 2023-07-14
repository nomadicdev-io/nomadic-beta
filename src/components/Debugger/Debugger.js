import { webContext } from "@/app/layout"
import { DebuggerStyled } from "@/styles/styles"
import { useAtomValue } from "jotai"

const Debugger = () => {

    const context = useAtomValue(webContext)

  return (
    <DebuggerStyled data-debugger>
        <ul>
            {
              context.isLoggedin != null &&
              <li><span>isLoggedin: </span><strong style={{color: context.isLoggedin ? 'green' : 'red'}}>{context?.isLoggedin.toString()}</strong></li>
            }
        </ul>
    </DebuggerStyled>
  )
}

export default Debugger