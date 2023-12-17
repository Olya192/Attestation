import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const UserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 21px;
`;

export const userInform = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  align-items: center;
  margin: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const UserLink = styled.a`
  color: #000;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
