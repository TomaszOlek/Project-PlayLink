import { css, styled } from "styled-components";

export * from "./ContactMenu";

export const ContactMenuContainer = styled.div`
  width: 250px;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
  border-left: 3px solid ${({ theme }) => theme.colors.primaryLighten};
  box-shadow: -7px 0px 10px ${({ theme }) => theme.colors.primaryLighten};

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ContactOptions = styled.div`
  padding: 15px 20px 6px 20px;

  display: flex;
  justify-content: space-around;
`;

export const OptionText = styled.button<{ isSelected?: boolean }>`
  cursor: pointer;

  position: relative;

  text-align: left;
  line-height: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 19px;

  color: white;

  background-color: transparent;
  border: none;

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::after {
        content: "";

        position: absolute;
        bottom: 0px;
        left: 4%;

        width: 92%;
        height: 3px;
        background-color: #7b9fba;

        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
      }
    `}
`;

export const Hr = styled.hr`
  height: 1px;
  margin: 12px 20px;

  align-self: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonsWraper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0px 20px;
`;

export const MenuButton = styled.button`
  height: 35px;
  width: 100%;

  padding: 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: white;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 20px;

  &:hover {
    background-color: #143346;
  }

  & svg {
    height: 100%;
    width: 23px;
  }
`;
