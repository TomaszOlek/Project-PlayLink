import { styled } from "styled-components";

export * from "./Chat";

export const Test = styled.div`
  background-color: red;
`;

export const ChatContainer = styled.div`
  width: 100%;
  max-width: 500px;

  margin-top: 30px;
`;

export const PostsWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 25px;
`;
