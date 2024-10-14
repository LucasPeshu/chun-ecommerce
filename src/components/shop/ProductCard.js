import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const imageUrl = `https://res.cloudinary.com/diadzh30o/${product.photo}`;

  return (
    <div key={product.id} className="group relative mx-2">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="py-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            <Link to={`/producto/${product.slug}`}>
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
