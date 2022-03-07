import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const useBackImage = (searchWords) => {
  const unsplash = createApi({
    accessKey: "WrbFMzvEsYVcoyHLt0tNeFHi2WH3hnzh6AzqlQpCzgE",
    //...other fetch options
  });

  const getPhoto = () => {
    return unsplash.search.getPhotos({ query: searchWords }).then((result) => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0]);
      } else {
        // handle success here

        const { results } = result.response;
        console.log(results);
        const getRandom = () => Math.floor(Math.random() * results.length);
        return results[getRandom()]?.urls.regular;
      }
    });
  };

  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    console.log("back image useEffect", { searchWords });
    if (!searchWords) return;
    getPhoto().then((photoUrl) => {
      setImageUrl(photoUrl);
      console.log("after getPhoto", { imageUrl });
    });
  }, [searchWords]);

  /* console.log({ imageUrl });
  console.log({ infoImage });
  console.log("estoy vivo?"); */

  return { imageUrl };
};

export default useBackImage;
