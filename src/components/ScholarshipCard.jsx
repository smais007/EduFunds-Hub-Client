import SectionHeader from "./SectionHeader";

const products = [
  {
    id: 1,
    name: "Dhake University",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://www.bssnews.net/assets/news_photos/2022/06/27/image-68929-1656322161.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

export default function ScholarshipCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <SectionHeader></SectionHeader>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white "
            >
              <div className="absolute text-sm bg-gray-300 px-2 top-3 left-3 rounded-xl text-black font-medium">
                <p>Merit-based</p>
              </div>
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900 flex justify-between">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                  <p className="bg-gray-100 px-1 rounded-lg">
                    Rating: <span>4.7</span>
                  </p>
                </h3>
                <p className="text-xs leading-none font-medium text-gray-500">
                  USA, Cambridge
                </p>
                <div>
                  <p className="text-sm">Deadline: 20 Augost -2024</p>
                  <p className="text-sm">Subject: Engineering</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-base font-medium text-gray-900">
                    Application Fee: {product.price}
                  </p>
                  <button className="bg-black text-white px-2 font-bold rounded-lg">
                    {" "}
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View All Sholaship
          </button>
        </div>
      </div>
    </div>
  );
}
