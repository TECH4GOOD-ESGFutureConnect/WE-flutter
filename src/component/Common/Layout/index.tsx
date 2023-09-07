import * as s from "./styles";

const Layout = (props: {children: React.ReactNode}) => {
  return (
    <s.Wrapper>
      {props.children}
    </s.Wrapper>
  )
}

export default Layout;