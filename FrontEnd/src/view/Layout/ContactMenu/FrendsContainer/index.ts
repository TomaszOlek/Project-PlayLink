import { styled } from "styled-components";

export * from "./FrendsContainer";

export const FrendsWraper = styled.div`
  width: 100%;

  margin-top: 20px;

  border-top: 2px solid #29465c;
`;

export const UserProfile = styled.div`
  cursor: pointer;
  height: 40px;
  max-width: calc(100% - 35px);

  padding: 15px 15px 15px 20px;

  display: flex;
  box-sizing: content-box;
  gap: 10px;

  border-bottom: 2px solid #29465c;

  &:hover {
    background-color: #143346;
  }
`;

export const UserImage = styled.img`
  width: 38px;
  height: 38px;

  margin: 0px;

  border-radius: 50%;

  user-select: none;
`;

export const UserImformations = styled.div`
  flex: 1;
  max-width: calc(100% - 50px);

  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.p`
  text-align: left;
  line-height: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
`;

export const LastOnline = styled.p`
  text-align: left;
  line-height: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: normal;

  color: #c9c9c9;
`;

export const LastMessage = styled.p`
  text-align: left;
  line-height: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImageWraper = styled.div`
  width: 38px;
  height: 38px;
`;
