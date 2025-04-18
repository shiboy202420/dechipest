import Link from "next/link";
import Image from "next/image";

export default function PopularSearchSection() {
  const popularLinks = [
    "Arts & Sports",
    "Books & Stationery",
    "Other Services",
    "Services",
    "Uncategorized",
    "Visual Arts",
  ];

  const serviceLinks = [
    "Events & Entertainment",
    "Photo & Videography",
    "Legal Service",
    "Printing Service",
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Popular Search</h1>

      <div className="mb-4">
        <hr className="bg-black border-black w-20" />
        <hr />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {popularLinks.map((linkText, index) => (
          <div
            key={index}
            className="bg-gray-100 text-gray-600 px-4 py-2 font-bold rounded"
          >
            <Link href="">{linkText}</Link>
          </div>
        ))}
      </div>

      <div className="relative">
        <Image
          src="/tailoringpic.jpg"
          fill
          alt="tailoring pic"
          className="object-cover  w-full h-12  rounded z-7"
        />
        <div className="">
          <h1 className="text-2xl mb-2">Service Listings</h1>
          <p>
            All the best artisans and <br /> service providers in <br /> one
            place
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2">Top Service Listings</h1>
      <div className="mb-4">
        <hr className="bg-black border-black w-50" />
        <hr />
      </div>

      <div className="flex flex-wrap gap-2">
        {serviceLinks.map((service, index) => (
          <div
            key={index}
            className="text-gray-400 px-4 py-2 font-bold rounded"
          >
            <Link href="">{service}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}