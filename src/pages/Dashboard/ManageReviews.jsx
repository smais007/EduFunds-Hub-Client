import UserAvarter from "@/components/UserAvarter";
import { TrashIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
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
  {
    id: 3,
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
];

export default function ManageReviews() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    Dhaka Univercity
                  </a>
                  <p className="text-sm italic text-gray-500">
                    Subject Category
                  </p>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>

                <div className="flex flex-1 flex-col justify-end">
                  <div className="flex  items-center justify-between pt-3">
                    <div className="flex  items-center gap-3 ">
                      <div>
                        <UserAvarter></UserAvarter>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          User Name
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-sm italic text-gray-500 font-semibold">
                            Ratting:{" "}
                          </p>
                          <p className="text-xs  text-gray-500"> | Date:</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <TrashIcon className="h-6 text-red-500"></TrashIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
