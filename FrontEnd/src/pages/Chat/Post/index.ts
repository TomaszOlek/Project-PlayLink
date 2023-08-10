import { styled } from "styled-components";

export * from "./Post";

export const PostWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;

  background-color: #223a4c;
  border: 2px solid #223a4c;
  box-shadow: 0px 0px 25px #223a4c;
  border-radius: 12px;
`;

export const PostTop = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 20px 8px;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const UserImage = styled.img`
  width: 35px;
  height: 35px;

  margin-right: 8px;

  border-radius: 50%;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Username = styled.p`
  text-align: left;
  line-height: normal;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

export const PostTime = styled.p`
  text-align: left;
  line-height: normal;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 11px;

  color: #c8c8c8;
`;

export const PostContent = styled.div`
  margin-top: 15px;
  padding: 0px 21px;
`;

export const PostContentText = styled.p`
  text-align: left;
  line-height: normal;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;

  color: #ebebeb;
`;

export const PostBottom = styled.div`
  width: 100%;

  padding: 9px 20px 7px;
  margin-top: 15px;

  display: flex;
  gap: 9px;

  border-top: 1px solid white;
`;

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const PinText = styled.p`
  margin-top: 1px;

  text-align: left;
  line-height: normal;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;

  color: #ebebeb;
`;
