import { css, styled } from "styled-components";

import { useTranslation } from "react-i18next";

import Logo from "../../assets/LogoSimple_Small.png";
import ENFlag from "../../assets/en_flag.png";
import PlFlag from "../../assets/pl_flag.png";
import { Link } from "react-router-dom";

const CenteredContent = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 135px;

  margin: 0px;

  user-select: none;
`;

const FlatImage = styled.img`
  width: 100%;
  height: 100%;
`;

const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 20px;

  text-align: center;
  font-family: "Josefin Sans", sans-serif;
`;

const H1 = styled.h1`
  font-family: "Josefin Sans", sans-serif;

  text-transform: uppercase;
`;

const P = styled.p`
  font-family: "Poppins", sans-serif;
`;

const ColoredSpan = styled.a`
  color: #c7c7c7;

  text-decoration: none;
`;

const LanguageChange = styled.div`
  position: absolute;
  top: 35px;
  right: 60px;

  display: flex;
  gap: 15px;
`;

const LanguageContainer = styled.div<{ isSelected: boolean }>`
  width: 50px;
  height: 30px;

  border: 2px solid #0f2534;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 2px solid green;
    `}
`;

export function UnderDevelopment() {
  const { t, i18n } = useTranslation();

  return (
    <CenteredContent>
      <Link to="/">
        <Image src={Logo} />
      </Link>
      <H1>{t("comingSoon")}</H1>
      <H2>{t("underConstraction")}</H2>
      <P>{t("moreInformations")}</P>
      <P>
        Email -{" "}
        <ColoredSpan href="mailto: admin@playlink.social">
          admin@playlink.social
        </ColoredSpan>
      </P>

      <LanguageChange>
        <LanguageContainer
          isSelected={i18n.resolvedLanguage === "pl"}
          onClick={() => i18n.changeLanguage("pl")}
        >
          <FlatImage src={PlFlag} />
        </LanguageContainer>

        <LanguageContainer
          isSelected={i18n.resolvedLanguage === "en"}
          onClick={() => i18n.changeLanguage("en")}
        >
          <FlatImage src={ENFlag} />
        </LanguageContainer>
      </LanguageChange>
    </CenteredContent>
  );
}
