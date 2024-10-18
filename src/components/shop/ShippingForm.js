const ShippingForm = ({
  full_name,
  address_line_1,
  address_line_2,
  postal_zip_code,
  telephone_number,
  onChange,
  user,
  renderShipping,
  total_compare_amount,
  shipping_cost,
  shipping_id,
  shipping,
}) => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Dirección de envío
      </h2>

      <dl className="my-6 space-y-4">
        <div className="flex items-center justify-between">
          {renderShipping()}
        </div>

        <div className="flex items-center justify-between">
          <dd className="text-sm font-medium text-gray-900">
            {shipping && shipping_id !== 0 ? (
              <></>
            ) : (
              <div className="text-red-500">
                (Por favor, seleccione un método de envío)
              </div>
            )}
          </dd>
        </div>
      </dl>

      <form className="max-w-lg mx-auto">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <label
              htmlFor="full_name"
              className="block text-md font-medium text-gray-700"
            >
              Nombre completo
            </label>
            <input
              type="text"
              name="full_name"
              placeholder={`${user.first_name} ${user.last_name}`}
              onChange={(e) => onChange(e)}
              value={full_name}
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <label
              htmlFor="address_line_1"
              className="block text-md font-medium text-gray-700"
            >
              Dirección de envío 1*
            </label>
            <input
              type="text"
              name="address_line_1"
              onChange={(e) => onChange(e)}
              value={address_line_1}
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <label
              htmlFor="address_line_2"
              className="block text-md font-medium text-gray-700"
            >
              Dirección de envío 2
            </label>
            <input
              type="text"
              name="address_line_2"
              onChange={(e) => onChange(e)}
              value={address_line_2}
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <label
              htmlFor="postal_zip_code"
              className="block text-md font-medium text-gray-700"
            >
              Código postal*
            </label>
            <input
              type="text"
              name="postal_zip_code"
              onChange={(e) => onChange(e)}
              value={postal_zip_code}
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <label
              htmlFor="telephone_number"
              className="block text-md font-medium text-gray-700"
            >
              Número de teléfono*
            </label>
            <input
              type="tel"
              name="telephone_number"
              onChange={(e) => onChange(e)}
              value={telephone_number}
              required
              className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-purple-600 transition duration-200"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ShippingForm;
