import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const imageUrl = `https://res.cloudinary.com/diadzh30o/${product.photo}`;

  return (
    <div key={product.id} className="group relative mx-2">
      <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img
          src={imageUrl}
          alt=""
          className="h-56 w-full object-cover object-center md:h-64 lg:h-72"
        />
      </div>
      <div className="py-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            <Link to={`/product-detail/${product.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="text-lg font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
