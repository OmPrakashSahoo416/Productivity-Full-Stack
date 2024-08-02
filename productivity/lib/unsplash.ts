import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: fetch,
});

export async function GetImages() {
  let images: string[] = [];

  try {
    const response = await unsplash.search.getPhotos({
      query: "pattern",
      page: 1,
      perPage: 6,
      orientation: "landscape",
      orderBy: "relevant",
    });
    // console.log(response)
    const imagesArr = response.response?.results;
    imagesArr?.map((image) => {
      // console.log(imagesArr)
      images.push(image.urls.full.toString());
    });
  } catch (error) {}

  console.log(images);

  return images;
}
