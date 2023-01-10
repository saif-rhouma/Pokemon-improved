import { useEffect, useState } from "react";
import AppContainer from "../../components/AppContainer/AppContainer";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import httpClient from "../../core/utils/httpClient/httpClient";
import "./Home.css";

function App() {
  const [fetchResult, setFetchResult] = useState();
  const [loadingUrl, setLoadingUrl] = useState("/pokemon?limit=8");
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [onLoading, setOnLoading] = useState(true);
  const [searchPok, setSearchPok] = useState();

  const ListRender = (fetchResult) => {
    return fetchResult.results.map((data) => (
      <PokemonCard
        key={Math.random().toString(26)}
        PokName={data.name}
        URL={data.url}
        onShow={(data) => {
          setSelectedPokemon(data);
        }}
      />
    ));
  };

  useEffect(() => {
    async function fetchData() {
      const data = await httpClient.get(loadingUrl);
      if (data.status === 200) {
        setOnLoading(false);
        setFetchResult(data.data);
      }
    }
    fetchData();
  }, [loadingUrl]);

  useEffect(() => {
    async function fetchData() {
      const data = await httpClient.get(`pokemon/${searchPok}`);
      if (data.status === 200) {
        setSelectedPokemon(data.data);
      }
    }
    if (searchPok) {
      fetchData();
    }
  }, [searchPok]);

  return (
    <div className="Home">
      <AppHeader setSearchPok={setSearchPok} />
      <AppContainer>
        {onLoading ? <div>Loading Data...</div> : ListRender(fetchResult)}
        {selectedPokemon && (
          <PokemonDetails
            data={selectedPokemon}
            close={() => {
              setSelectedPokemon();
            }}
          />
        )}
      </AppContainer>
      {!onLoading && (
        <AppFooter
          previous={fetchResult.previous}
          next={fetchResult.next}
          setLoadingUrl={(data) => {
            setOnLoading(true);
            setLoadingUrl(data);
          }}
        />
      )}
    </div>
  );
}

export default App;

