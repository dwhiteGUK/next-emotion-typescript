import { ReactNode } from 'react'
import tw, { TwStyle } from 'twin.macro'

type Props = {
  as?: 'div' | 'section' | 'header',
  variant?: string,
  children: ReactNode,
  [key: string]: any,
};



const styles: { [key: string]: TwStyle|TwStyle[] } = {
  xl: [
    tw`max-w-screen-xl mx-5 md:mx-10 xl:mx-auto`,
  ],
  full: tw`w-full`
}

function Container({ as, variant = 'xl', children, ...rest } : Props) {

  const Component = as || 'div'

  return (
    <Component
      css={styles[variant]}
      {...rest}
    >
      {children}
    </Component>
  )
}


export { Container }
