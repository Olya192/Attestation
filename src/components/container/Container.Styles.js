import { styled } from "styled-components";

export const Main = styled.div`
  padding-left: calc(50% - 300px);
  padding-right: calc(50% - 300px);
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

export const MainTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 34px;
`;

export const MainInput = styled.input`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
`;

export const InputButton = styled.button`
  margin-left: 10px;
  min-width: 158px;
  height: 50px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const SortText = styled.div`
  font-size: 10pt;
  display: flex;
  gap: 10px;
`;

export const PagBlock = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;

export const PagButton = styled.button`
  width: 80px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 6px;
  font-size: 12px;
  line-height: 24px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
