import { useState } from "react";

import axios from "axios";

import { useTranslation, Trans } from "react-i18next";

import GlobalStyles from "../../styles/global";
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polski" },
};

export function Home() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  async function makeRequest() {
    try {
      const response = await axios.get("http://localhost:8000/api/endpoint");
      console.log(response.data); // Do something with the response data
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <GlobalStyles />
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>

      <p>
        <i>{t("counter", { count })}</i>
      </p>

      <p>
        <Trans i18nKey="header.part1">Hello 3</Trans>
      </p>
      <p>{t("header.part2")}</p>

      <Link to="/app">Link</Link>
      <button onClick={makeRequest}>Make Request</button>
    </div>
  );
}
