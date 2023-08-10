import * as S from "./index";

export function FrendsContainer() {
  return (
    <S.FrendsWraper>
      <S.UserProfile>
        <S.ImageWraper>
          <S.UserImage
            draggable={false}
            src="https://lh3.googleusercontent.com/a/AAcHTte6EyXTvadKfvGHNoFAvpOidRWSPz6PhTE-N06GImPUYA=s96-c"
          />
        </S.ImageWraper>
        <S.UserImformations>
          <S.Heading>
            <S.UserName>TestUser</S.UserName>
            <S.LastOnline>4 days ago</S.LastOnline>
          </S.Heading>
          <S.LastMessage>
            Hi! How are you doing? wanna play some game?
          </S.LastMessage>
        </S.UserImformations>
      </S.UserProfile>
      <S.UserProfile>
        <S.ImageWraper>
          <S.UserImage
            draggable={false}
            src="https://lh3.googleusercontent.com/a/AAcHTte6EyXTvadKfvGHNoFAvpOidRWSPz6PhTE-N06GImPUYA=s96-c"
          />
        </S.ImageWraper>
        <S.UserImformations>
          <S.Heading>
            <S.UserName>TestUser</S.UserName>
            <S.LastOnline>Today 8:50</S.LastOnline>
          </S.Heading>
          <S.LastMessage>What's up?</S.LastMessage>
        </S.UserImformations>
      </S.UserProfile>
    </S.FrendsWraper>
  );
}
