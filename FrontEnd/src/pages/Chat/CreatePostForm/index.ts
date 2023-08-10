import { styled } from "styled-components";

export * from "./CreatePostForm";

export const PostFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 230px;

  display: flex;
  flex-direction: column;

  background-color: #6288a4;
  border: 2px solid #223a4c;
  box-shadow: 0px 0px 25px #223a4c;
  border-radius: 12px;
`;

export const FormHeading = styled.div`
  width: 100%;

  padding: 8px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #223a4c;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Text = styled.p`
  font-family: "Josefin Sans", sans-serif;

  font-weight: 500;
  font-size: 18px;

  user-select: none;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 3px 5px 1px 9px;

  background-color: transparent;
  border: none;

  display: flex;
  gap: 5px;
  align-items: center;
  align-self: center;

  color: white;
  border-radius: 9px;

  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;

  user-select: none;

  &:hover {
    background-color: #0f2534;
  }

  & svg {
    margin-bottom: 3px;
  }

  transition: all 0.2s ease;
`;

export const FormComponent = styled.div`
  padding: 5px 10px;

  flex: 1 1;

  & textarea {
    width: 100%;
    height: 100%;

    padding: 5px 10px;

    background-color: transparent;
    border: none;

    resize: none;
  }
`;

export const NotifyFrends = styled.div`
  display: flex;

  & label,
  input {
    cursor: pointer;
  }

  & label {
    padding-left: 6px;
    user-select: none;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  padding: 0px 15px 7px;

  display: flex;
`;
