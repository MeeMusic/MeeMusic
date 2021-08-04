import React, { useMemo } from "react";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import NewReleases from "../components/NewReleases";
import ArtistsList from "../components/ArtistsList";
import AllSongs from "../components/AllSongs";


import { Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { getRandomWelcomeText } from "../utils/common";

function Home() {
  const user = useSelector((state) => state.user);
  const welcomeText = useMemo(
    () =>
      user.displayName
        ? getRandomWelcomeText(user.displayName)
        : `Hey there, thanks for Choosing MeeMusic`,
    [user.displayName]
  );

  return (
    <div className="home">
      <div className="user-select-none">
        <Typography variant="h4" display="inline">
          {welcomeText}{" "}
        </Typography>
        &nbsp;
        <FavoriteBorderIcon className="home__welcomeTextIcon" />
      </div>

      <NewReleases />

      <ArtistsList />

      <AllSongs />
      <footer>
      <div>
      Developed By 
          <a href="https://github.com/VedantWankhade"> VEDANT </a> and 
          <a href="https://github.com/omjawade"> OM </a>
          </div> 
          
        </footer>
        <style jsx>{`
        footer {
          width: 100%;
          height: 50px;
          padding: 0 20px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        `}</style>
    </div>
  );
}

export default Home;
