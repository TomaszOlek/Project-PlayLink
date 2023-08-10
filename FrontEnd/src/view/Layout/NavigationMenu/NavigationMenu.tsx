import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { v4 as uuidv4 } from "uuid";

import logo from "../../../assets/LogoSimple_Small.png";

import * as S from "./index";

import LoginButton from "../../../components/login";
import LogoutButton from "../../../components/logout";

//https://lh3.googleusercontent.com/a/AAcHTte6EyXTvadKfvGHNoFAvpOidRWSPz6PhTE-N06GImPUYA=s96-c

const clientId =
  "842925445113-1m895k6pq2qq9sji58gdi1u3l0uk6h71.apps.googleusercontent.com";

export function NavigationMenu() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/userinfo.email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const getUserData = async () => {
    try {
      const response = await gapi.client.request({
        path: "https://www.googleapis.com/oauth2/v2/userinfo",
      });

      setUserData(response.result);
      console.log(response.result);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <S.NavigationMenuContainer>
      <S.LogoContainer>
        <S.ImageWraper>
          <S.Image draggable="false" src={logo} alt="logo" />
        </S.ImageWraper>
        <S.LogoText>PlayLink</S.LogoText>
      </S.LogoContainer>
      <S.Hr />
      <S.MenuContainer>
        {LINKS_DATA.map((linkData) => (
          <S.Link key={uuidv4()}>
            <S.IconWraper>
              <S.StyledIcon color="#fff" icon={linkData.icons} />
            </S.IconWraper>
            <S.LinkText>{linkData.label}</S.LinkText>
          </S.Link>
        ))}
      </S.MenuContainer>

      <S.UserProfileLink>
        <S.UserProfileContainer>
          <S.UserImage>
            <S.UserProfile
              src="https://lh3.googleusercontent.com/a/AAcHTte6EyXTvadKfvGHNoFAvpOidRWSPz6PhTE-N06GImPUYA=s96-c"
              alt="Userprofile Image"
              loading="lazy"
            />
          </S.UserImage>
          <S.Username>TestUser</S.Username>
        </S.UserProfileContainer>
      </S.UserProfileLink>
      <S.Hr />
      <S.OptionsContainer>
        {/* <LoginButton />
        <LogoutButton />
        <button onClick={getUserData}>Get User Data</button>
        {userData && (
          <div>
            <h3>User Data</h3>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Profile Picture: {userData.picture}</p>
          </div>
        )} */}

        <S.Link>
          <S.IconWraper>
            <S.StyledIcon color="#fff" icon="ic:sharp-settings" />
          </S.IconWraper>
          <S.LinkText>Setings</S.LinkText>
        </S.Link>
      </S.OptionsContainer>
    </S.NavigationMenuContainer>
  );
}

const LINKS_DATA = [
  {
    icons: "gridicons:chat",
    label: "Chat",
  },
  {
    icons: "game-icons:retro-controller",
    label: "Find Group",
  },
];
