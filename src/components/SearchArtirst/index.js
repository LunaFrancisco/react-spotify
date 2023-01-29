import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../Card/index.js";
import("./index.css");

export const SearchArtist = () => {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState("");
  const [cardInfo, setCardInfo] = useState({
    name:"Bad Bunny",
    image: "https://i.scdn.co/image/ab6761610000f1788ee9a6f54dcbd4bc95126b14",
    followers: 12039813
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const searchArtist = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setData(data);
    setCardInfo({
      name: data.artists.items[0].name,
      image: data.artists.items[0].images[2].url,
      followers: data.artists.items[0].followers.total,
    });
  };

  const otherSearchs = () => {
    let arr = [];
    data.artists.items.forEach((item) => {
      arr.push({
        // name: item.id,
        name: item.name,
        image: item.images[2].url,
        followers: item.followers.total,
      });
    });
    arr.shift();
  
    return (<>
      <h1> Otros tambien buscan.. </h1>
      <div class="references">
        {arr.map((item) => {
          return (
            <Card data={item ? item : ""} />
            );
          })}
      </div>
          </>
    );
  };
  return (
    <div>
      <div className="search-bar">
        <form onSubmit={searchArtist}>
          <input
            placeholder="Bad Bunny..."
            className="search-artist search-icon"
            type="text"
            onChange={(e) => setSearchKey(e.target.value)}
          ></input>
        </form>
      </div >
      <Card data={cardInfo} />
      <div className="reference-content">{data ? otherSearchs() : ""}</div>
    </div>
  );
};
