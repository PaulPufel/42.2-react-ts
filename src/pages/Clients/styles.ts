import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
  padding: 20px;
  font-size: 30px;
`
export const NavBox = styled.div`
  width: auto;
  height: 60px;
  padding: 10px;
  background: yellow;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  margin: 30px;
`