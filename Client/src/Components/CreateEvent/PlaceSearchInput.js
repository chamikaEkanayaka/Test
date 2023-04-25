import React, { useState, useEffect } from "react";
import "./PlaceSearchInput.css";

function PlaceSearchInput(props) {
  const {
    selectedPlaces,
    setSelectedPlaces,
    apiKey
  } = props;

  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUrGmyZB8G5Lm97g4bHZ7Xo2IWwD_0pNE&libraries=places`;
    window.document.body.appendChild(googleMapsScript);
    googleMapsScript.addEventListener("load", () => {
      const autocompleteService = new window.google.maps.places.AutocompleteService();
      const handleQueryChange = (event) => {
        setQuery(event.target.value);
        if (event.target.value) {
          autocompleteService.getPlacePredictions(
            { input: event.target.value },
            (predictions, status) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK
              ) {
                setPredictions(predictions);
              } else {
                setPredictions([]);
              }
            }
          );
        } else {
          setPredictions([]);
        }
      };
      document
        .getElementById("place-search-input")
        .addEventListener("input", handleQueryChange);
    });
  }, [apiKey]);

  // const handleOptionSelect = (event) => {
  //   const selectedPlace = event.target.value;
  //   setSelectedPlaces([...selectedPlaces, selectedPlace]);
  //   setQuery("");
  //   setPredictions([]);
  // };

  const handleButtonClick = (place) => {
    setSelectedPlaces([...selectedPlaces, place]);
    setQuery("");
    setPredictions([]);
  };

  return (
    <div class="placeSearchContent">
      
      <input
        id="place-search-input"
        type="text"
        placeholder="Enter a location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        list="place-suggestions"
      />

      <div class="suggestPlaces">
        <datalist id="place-suggestions">
          {predictions.map((prediction) => (
            <option key={prediction.id} value={prediction.description}/>
          ))}
        </datalist>
      </div>

      <div class="suggestPlaces">
        {predictions.map((prediction) => (
          <button key={prediction.id} onClick={() => handleButtonClick(prediction.description)} class="optionKey">
            {prediction.description}
          </button>
        ))}
      </div>
      
      <div class="selectedPlace">
        <h4>Selected Places:</h4>
        <ul>
          {selectedPlaces.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={() => setSelectedPlaces([])} class="clearLocationButton">Clear Locations</button>
    </div>
  );
}

export default PlaceSearchInput;