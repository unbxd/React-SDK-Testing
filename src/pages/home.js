import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { waitForGlobal } from "../utils";
export default function Home() {
  useEffect(() => {

    waitForGlobal("getUnbxdRecommendations", function () {
      console.log("found getUnbxdRecommendations");
      getUnbxdRecommendations();
    });
  }, [])
  return (
    <div>
      <h1>Welcome to React sdk test app</h1>
    </div>
  );
}
