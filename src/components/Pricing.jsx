import React, { useState } from 'react';
import { Check } from 'lucide-react';
import PaymentForm from './PaymentForm';

function Pricing() {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('free');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start with 3 free credits. No credit card required.
          </p>
        </div>

        {!showPayment ? (
          <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:divide-x lg:divide-gray-200  rounded-[12px]">
            <div className="p-8 sm:p-10   ">
              <h3 className="text-2xl font-semibold text-gray-900">Free Trial</h3>
              <p className="mt-4 text-lg text-gray-600">Get started with our free trial plan.</p>
              <button
                onClick={() => handlePlanSelect('free')}
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded"
              >
                Select Free Trial
              </button>
            </div>
            <div className="p-8 sm:p-10 ">
              <h3 className="text-2xl font-semibold text-gray-900">Premium Plan</h3>
              <p className="mt-4 text-lg text-gray-600">Unlock all features with our premium plan.</p>
              <button
                onClick={() => handlePlanSelect('premium')}
                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded"
              >
                Select Premium Plan
              </button>
            </div>
          </div>
        ) : (
          <PaymentForm 
            planType={selectedPlan} 
            amount={selectedPlan === 'free' ? 0 : 9.99} 
          />
        )}
      </div>
    </div>
  );
}

export default Pricing;