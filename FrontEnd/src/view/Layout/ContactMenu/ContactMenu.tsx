import { Icon } from "@iconify/react/dist/iconify.js";
import * as S from "./index";

import { FrendsContainer } from "./FrendsContainer";

export function ContactMenu() {
  return (
    <S.ContactMenuContainer>
      <S.ContactOptions>
        <S.OptionText isSelected>Frends</S.OptionText>
        <S.OptionText>Notifications</S.OptionText>
      </S.ContactOptions>
      <S.Hr />

      <S.ButtonsWraper>
        <S.MenuButton>
          <Icon color="white" icon="raphael:people" />
          Invite Frends
        </S.MenuButton>
      </S.ButtonsWraper>

      <FrendsContainer />
    </S.ContactMenuContainer>
  );
}
