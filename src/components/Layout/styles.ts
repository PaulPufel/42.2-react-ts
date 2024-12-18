import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rebeccapurple;
  color: white;
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
 background-color: white;
 cursor: pointer;
`
export const NavContainer = styled.nav`
 display: flex;
 gap: 15px;
`
export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 20px;
 color: white
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  background-color: rebeccapurple;
  color: white;
`
