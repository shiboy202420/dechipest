import Navbar from "./components/navbar";
import Top from "./components/top";
import ImageData from "@/data/ImageData";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Top />
      <div className="mx-4 my-4 pt-4 pb-1 bg-white shadow-lg rounded-lg">
        <h1 className="mb-6 mx-12">Brands:</h1>
        <div className="grid grid-cols-1">
          {Array.isArray(ImageData) && ImageData.length > 0 ? (
            ImageData.map((image) => (
              <div className="bg-white overflow-hidden " key={image.id}>
                <img
                  src={image.imageSrc}
                  alt={image.title}
                  className="w-full h-24 object-cover"
                />
                <div className="p-4 m-12">
                  <h2 className="text-xl font-semibold">{image.title}</h2>
                  <p className="text-blue-800 py-6">{image.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
}
