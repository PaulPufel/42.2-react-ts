import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 flex: 1;
 background-color: rebeccapurple;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: white;
`
export const LogoContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 16px;
 font-weight: bold;
 color: red;
 width: 70px;
 height: 70px;
 border-radius: 50%;
 background-color: green;
 cursor: pointer;
`
export const NavContainer = styled.nav`
 display: flex;
 gap: 15px;
`
export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-weight: bold;
 font-size: 20px;
 color: black;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`