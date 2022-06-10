import React, { useState } from "react";
import MainPageLayout from "./MainPageLayout";
import apiGet from "./ApiConfig";
import ShowGrid from "./shows/ShowGrid";
import ActorGrid from "./actor/ActorGrid";
import { useLastQuery } from "../misc/CustomHooks";
import { InputStyle } from "./MainStyled";

const Home = ({ apiKey }) => {
    
  document.body.style.backgroundColor = "white";

    // states
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOptions, setSearchOptions] = useState("shows");

    const isShowsSearch=searchOptions==="shows";
    
  
    const onInputChange = (ev) => {
        setInput(ev.target.value);
    };
    const onRadioChange=(ev)=>{
        setSearchOptions(ev.target.value);
    }




   const onSearch = async () => {
    const result=await apiGet(`/search/${searchOptions}?q=${input}`);  //returning parsedData
    setResults(result);
    console.log(result);
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show?<ShowGrid data={results}/>:<ActorGrid data={results}/>
    }

    return null;
  };

  return (
    <MainPageLayout>
    <InputStyle>
      <input
        placeholder="Search for Something"
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        className="search-input"
      />

      <div className="inputs-div">
          <label htmlFor="shows-search">
              Shows
              <input type="radio" id="shows-search" value="shows" checked={isShowsSearch} onChange={onRadioChange}/>
          </label>
              
          <label htmlFor="actors-search">
             Actors
              <input type="radio" id="actors-search" value="people" checked={!isShowsSearch} onChange={onRadioChange}/>
          </label>
        </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      </InputStyle>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
