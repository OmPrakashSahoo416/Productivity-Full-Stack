import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: fetch,
});

export async function GetImages() {
  let images:Basic[] | undefined = [];

  try {
    const response = await unsplash.search.getPhotos({
      query: "pattern",
      page: Math.floor(Math.random() * 5) + 1,
      perPage: 10,
      orientation: "landscape",
      orderBy: "latest",
    });
    // console.log(response)
    const imagesArr = response.response?.results;
    // imagesArr?.map((image) => {
      // console.log(imagesArr)
      images = imagesArr;
    // });
  } catch (error) {}

  // console.log(images);

  return images;
}
