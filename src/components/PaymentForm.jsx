import { CreditCard, Lock } from 'lucide-react';

function PaymentForm({ planType, amount }) {
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
        <div className="flex items-center">
          <Lock className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-sm text-blue-700">
            Your payment is secured with SSL encryption
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Plan Selected
          </label>
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="font-medium text-gray-900">
              {planType === 'premium' ? 'Premium Plan' : 'Free Trial'}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {planType === 'premium'
                ? 'Unlimited searches with advanced features'
                : '3 free credits to start'}
            </p>
            <p className="text-lg font-bold text-blue-600 mt-2">
              ${amount.toFixed(2)}
            </p>
          </div>
        </div>

        <button className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none '>
          Proceed to payment
        </button>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            By proceeding, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;