import { useState } from 'react';

export default function BillingShippingForm() {
  const [billingAddress, setBillingAddress] = useState({
    street: '4517 Washington Ave. Manchester, Kentucky 39495',
    city: 'Jerdefort',
    state: 'Georgia',
    zipCode: '78547-1477',
    country: 'United Kindom'
  });

  const [shippingAddress, setShippingAddress] = useState({
    street: '4517 Washington Ave. Manchester, Kentucky 39495',
    city: 'Jerdefort',
    state: 'Georgia',
    zipCode: '78547-1477',
    country: 'United Kindom'
  });

  const [sameAsCustomer, setSameAsCustomer] = useState(false);
  const [updateInvoices, setUpdateInvoices] = useState(false);
  const [updateCreditNotes, setUpdateCreditNotes] = useState(false);

  const copyBillingAddress = () => {
    setShippingAddress({ ...billingAddress });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white border rounded-md shadow">
      <div className="grid grid-cols-2 gap-8">
        {/* Billing Address Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-base font-semibold text-gray-900">Billing Address</h2>
            <button
              onClick={() => setSameAsCustomer(!sameAsCustomer)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Same as Customer Info
            </button>
          </div>

          <div className="space-y-4">
            {/* Street */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street
              </label>
              <textarea
                value={billingAddress.street}
                onChange={(e) => setBillingAddress({ ...billingAddress, street: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700 resize-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                value={billingAddress.city}
                onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                value={billingAddress.state}
                onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                value={billingAddress.zipCode}
                onChange={(e) => setBillingAddress({ ...billingAddress, zipCode: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={billingAddress.country}
                onChange={(e) => setBillingAddress({ ...billingAddress, country: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700 appearance-none"
              >
                <option>United Kindom</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-base font-semibold text-gray-900">Shipping Address</h2>
            <button
              onClick={copyBillingAddress}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Copy Billing Address
            </button>
          </div>

          <div className="space-y-4">
            {/* Street */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street
              </label>
              <textarea
                value={shippingAddress.street}
                onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700 resize-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                value={shippingAddress.state}
                onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                value={shippingAddress.zipCode}
                onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={shippingAddress.country}
                onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-sm text-gray-700 appearance-none"
              >
                <option>United Kindom</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mt-8 space-y-4">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="updateInvoices"
            checked={updateInvoices}
            onChange={(e) => setUpdateInvoices(e.target.checked)}
            className="w-4 h-4 mt-0.5 border border-gray-300 rounded"
          />
          <div>
            <label htmlFor="updateInvoices" className="block text-sm font-medium text-gray-900">
              Update the shipping/billing info on all previous invoices/estimates
            </label>
            <p className="text-xs text-gray-500 mt-1">
              If you check this field shipping and billing info will be updated to all invoices and estimates. Note: Invoices with status paid won`t be affected.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="updateCreditNotes"
            checked={updateCreditNotes}
            onChange={(e) => setUpdateCreditNotes(e.target.checked)}
            className="w-4 h-4 mt-0.5 border border-gray-300 rounded"
          />
          <div>
            <label htmlFor="updateCreditNotes" className="block text-sm font-medium text-gray-900">
              Update the shipping/billing info on all previous credit notes (Closed credit notes not affected)
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button className="px-8 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded text-sm transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}