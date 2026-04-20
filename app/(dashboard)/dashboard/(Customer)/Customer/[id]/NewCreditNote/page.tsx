"use client"
import React, { useState } from 'react';
import { Calendar,  } from 'lucide-react';

export default function CreateInvoicePage() {
  const [items] = useState([
    { id: 1, item: '', description: '', quantity: '', rate: '', tax: '', amount: '', done: false },
    { id: 2, item: '', description: '', quantity: '', rate: '', tax: '', amount: '', done: false }
  ]);

  const [formData, setFormData] = useState({
    customer: '',
    tags: '#contact, #payment',
    invoiceNumber: '0016',
    invoiceDate: '',
    dueDate: '',
    currency: '',
    recurringInvoice: '',
    discountType: '',
    totalCycles: '0',
    adminNotes: '',
    sqCommerzPayment: false,
    cashPayment: false,
    preventReminders: false,
    discount: '',
    adjustment: '',
    clientNote: '',
    termsCondition: 'So she knelt sat above she was living her tamper. Are you content now? said the King. The White Rabbit put on his Reppers.—Mystery, ancient and modern, with Seaography: then Drawing—the Drawing-master was an old Crab look the norkah out of the bread-and-butter. Just at this moment Alice,'
  });



 

  return (
    <div className="min-h-screen  p-4 sm:p-6 lg:p-8">
      <div className="w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Create New note</h1>
        <a href="#" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
          How Total is Calculated?
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Main Form */}
          <div className=" space-y-6">
            {/* Customer and Tags */}
            <div className=" gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-[#E5E5E5] text-gray-500 text-sm">
                  <option>Nothing Selected</option>
                </select>
              </div>
            
            </div>

            {/* Bill to and Ship to */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bill to
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 col-span-2 bg-[#E5E5E5] rounded"></div>
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>

                 
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                  

                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                  
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ship to
                </label>
                <div className="grid grid-cols-2 gap-2">
                     <div className="h-10 col-span-2 bg-[#E5E5E5] rounded"></div>
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                  <div className="h-10 bg-[#E5E5E5] rounded"></div>
                </div>
              </div>
            </div>

            {/* Invoice Number and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invoice Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 bg-gray-800 text-white text-sm rounded-l">
                    INV-
                  </span>
                  <input
                    type="text"
                    value={formData.invoiceNumber}
                    onChange={(e) => setFormData({...formData, invoiceNumber: e.target.value})}
                    className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r bg-[#E5E5E5] text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Invoice Date and Due Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invoice Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-[#E5E5E5] text-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-[#E5E5E5] text-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.preventReminders}
                onChange={(e) => setFormData({...formData, preventReminders: e.target.checked})}
                className="w-4 h-4 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Prevent sending overdue reminders for this invoice</span>
            </label>

            {/* Items Table */}
          
          </div>

          {/* Right Column - Additional Options */}
          <div className="space-y-6">
            {/* Allowed Payment Modes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-[#E5E5E5] text-sm"
                />
              </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Allowed payment modes for this invoice
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.sqCommerzPayment}
                    onChange={(e) => setFormData({...formData, sqCommerzPayment: e.target.checked})}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">SQ COMMERZ</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.cashPayment}
                    onChange={(e) => setFormData({...formData, cashPayment: e.target.checked})}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Cash</span>
                </label>
              </div>
            </div>

            {/* Currency and Select Agent */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select One</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Agent
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select One</option>
                </select>
              </div>
          

            {/* Recurring Invoice and Discount Type */}
           
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recurring Invoice
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select One</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-500 text-sm">
                  <option>Select One</option>
                </select>
              </div>
            </div>

            {/* Total Cycles */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total cycles
              </label>
              <input
                type="text"
                value={formData.totalCycles}
                onChange={(e) => setFormData({...formData, totalCycles: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] text-sm"
              />
            </div>

            {/* Admin Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Notes
              </label>
              <textarea
                placeholder="Write here..."
                className="w-full px-3 py-2 border border-gray-300 rounded bg-[#F5F5F5] text-sm resize-none"
               
              ></textarea>
            </div>
          </div>
        </div>


         <div className='flex flex-col gap-6 mt-4'>
             <div className="overflow-x-auto bg-white  border border-gray-300">
              <table className="w-full min-w-[800px]">
                <thead className="bg-[#E5E5E5]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Item</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Tax</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Done</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-gray-200">
                      <td className="px-4 py-3">
                        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                      </td>
                      <td className="px-4 py-3">
                        <textarea className="w-full px-2 py-1 border border-gray-300 rounded text-sm resize-none" ></textarea>
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                      </td>
                      <td className="px-4 py-3">
                        <select className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-gray-500">
                          <option>Select One</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Account Summary */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="flex flex-col  items-end mb-2">
                <h3 className="text-base font-semibold text-gray-900">Account Summary</h3>
                <span className="text-sm text-gray-600">2025-03-19 To 2025-03-19</span>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Sub Total :</span>
                  <span className="text-sm font-medium text-gray-900">$0.00</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Discount</span>
                    <select className="px-2 py-1 border border-gray-300 rounded text-xs text-gray-500">
                      <option>Select One</option>
                    </select>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$4690.00</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Adjustment</span>
                    <select className="px-2 py-1 border border-gray-300 rounded text-xs text-gray-500">
                      <option>Select One</option>
                    </select>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$4690.00</span>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-900">Total:</span>
                  <span className="text-sm font-semibold text-gray-900">$0.00</span>
                </div>
              </div>
            </div>

            {/* Client Note */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Note
              </label>
              <textarea
                placeholder="Write here..."
                className="w-full px-3 py-2  rounded bg-[#F1F1F1] text-sm resize-none"
              
              ></textarea>
            </div>

            {/* Terms and Condition */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Terms and Condition
              </label>
              <textarea
                value={formData.termsCondition}
                onChange={(e) => setFormData({...formData, termsCondition: e.target.value})}
                className="w-full px-3 py-2  rounded bg-[#F1F1F1] text-sm resize-none"
               
              ></textarea>
            </div>
         </div>
      </div>
    </div>
  );
}