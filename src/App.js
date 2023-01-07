import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { listGenresByClass } from "./api/GenreApi";
import GenrePieChart from "./component/GenrePieChart";
import { ALPHA, BETA } from "./common/Classes";

const Page = styled.div`
  text-align: center;
`;

const Charts = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

function App() {
  const [genresByClassAlpha, setGenresByClassAlpha] = useState([]);
  const [genresByClassBeta, setGenresByClassBeta] = useState([]);

  useEffect(() => {
    listGenresByClass(ALPHA).then(genres => setGenresByClassAlpha(genres));
    listGenresByClass(BETA).then(genres => setGenresByClassBeta(genres));
  }, []);

  return (
    <Page>
      <h1>Favorite Genre by Film Classes</h1>
      <Charts>
        <GenrePieChart title="Favorite Genres by Film Class Alpha" genres={genresByClassAlpha} />
        <GenrePieChart title="Favorite Genres by Film Class Beta" genres={genresByClassBeta} />
      </Charts>
    </Page>
  );
}

export default App;
