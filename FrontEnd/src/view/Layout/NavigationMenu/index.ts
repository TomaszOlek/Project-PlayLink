import { styled } from "styled-components";
import { Icon } from "@iconify/react";

export * from "./NavigationMenu";

export const OptionsContainer = styled.div`
  margin-bottom: 40px;
`;

export const UserProfile = styled.img`
  border-radius: 50%;
`;

export const LinkText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 17px;

  user-select: none;
`;

export const UserProfileLink = styled.div`
  padding: 5px 20px;
  margin-top: auto;
`;

export const UserImage = styled.div`
  width: 35px;
  height: 35px;
`;

export const StyledIcon = styled(Icon)`
  width: 100%;
  height: 100%;
`;

export const IconWraper = styled.div`
  width: 30px;
  height: 30px;
`;

export const ImageWraper = styled.div`
  width: 55px;
  height: 55px;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Image = styled.img`
  margin: 0px;

  user-select: none;
`;

export const Username = styled.p`
  font-family: "Poppins", sans-serif;

  font-weight: 400;
  font-size: 16px;

  user-select: none;
`;

export const MenuContainer = styled.div`
  padding-top: 6px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LogoContainer = styled.div`
  padding: 20px 15px 4px;

  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogoText = styled.p`
  font-family: "Josefin Sans", sans-serif;

  font-weight: 700;
  font-size: 22px;

  user-select: none;
`;

export const Link = styled.div`
  cursor: pointer;

  padding: 5px 15px;
  margin: 0px 10px;

  border-radius: 15px;

  display: flex;
  align-items: center;
  gap: 15px;

  &:hover {
    background-color: #29465c;
  }
  transition: all 0.2s ease;
`;

export const Hr = styled.hr`
  width: 90%;
  height: 1px;

  margin: 12px 0px;

  background-color: ${({ theme }) => theme.colors.white};

  align-self: center;
`;

export const NavigationMenuContainer = styled.div`
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 3px solid ${({ theme }) => theme.colors.primaryLighten};
  box-shadow: 7px 0px 10px ${({ theme }) => theme.colors.primaryLighten};

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
