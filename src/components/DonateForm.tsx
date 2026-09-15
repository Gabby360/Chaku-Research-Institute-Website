import React, { useState } from 'react';

const PRESET_AMOUNTS = [25, 50, 100, 250, 500, 1000];

export const DonateForm: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | 'other'>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo' | 'paypal'>('card');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const finalAmountNumber =
    selectedAmount === 'other'
      ? parseFloat(customAmount) || 0
      : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmountNumber || finalAmountNumber <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }
    if (!fullName || !email) {
      alert('Please fill in your name and email address.');
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[28px] bg-white p-8 sm:p-12 shadow-xl border border-gray-100 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f8ee] text-[#00a854]">
          <i className="ri-checkbox-circle-fill text-4xl"></i>
        </div>
        <h3 className="mt-6 font-heading text-3xl font-extrabold text-[#042817]">
          Thank You for Your Support!
        </h3>
        <p className="mt-3 text-base text-gray-600 max-w-md mx-auto leading-relaxed">
          Your <strong className="text-[#042817] font-bold">${finalAmountNumber}</strong> contribution is empowering smallholder farmers in Ghana with the data and tools for lasting prosperity.
        </p>
        <div className="mt-6 rounded-2xl bg-[#f4f5f0] p-5 text-left max-w-md mx-auto border border-gray-200/60 text-xs text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Donor:</span>
            <span className="font-bold text-gray-900">{fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Email:</span>
            <span className="font-bold text-gray-900">{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Payment Method:</span>
            <span className="font-bold text-gray-900 uppercase">{paymentMethod}</span>
          </div>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 rounded-none bg-[#00d66c] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#042817] shadow-md hover:bg-[#042817] hover:text-white transition-all"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-7 sm:p-10 shadow-xl border border-gray-200/60">
      {/* 1. Selectable Amount Pills */}
      <div>
        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount('');
              }}
              className={`py-3.5 px-3 rounded-xl font-heading font-extrabold text-base transition-all duration-200 border cursor-pointer ${
                selectedAmount === amt
                  ? 'bg-[#00d66c] text-[#042817] border-[#00d66c] shadow-md scale-[1.02]'
                  : 'bg-[#fafaf7] text-gray-800 border-gray-200 hover:border-[#00d66c] hover:bg-white hover:text-[#042817] hover:shadow-sm'
              }`}
            >
              ${amt}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedAmount('other')}
            className={`col-span-2 sm:col-span-2 py-3.5 px-3 rounded-xl font-heading font-extrabold text-base transition-all duration-200 border cursor-pointer ${
              selectedAmount === 'other'
                ? 'bg-[#00d66c] text-[#042817] border-[#00d66c] shadow-md scale-[1.02]'
                : 'bg-[#fafaf7] text-gray-800 border-gray-200 hover:border-[#00d66c] hover:bg-white hover:text-[#042817] hover:shadow-sm'
            }`}
          >
            Other Amount
          </button>
        </div>

        {/* Custom Amount Input Box */}
        {selectedAmount === 'other' && (
          <div className="mt-4 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-heading font-extrabold text-gray-500 text-lg">
              $
            </span>
            <input
              type="number"
              min="1"
              placeholder=""
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full rounded-xl border-2 border-[#00d66c] bg-white py-3.5 pl-9 pr-4 font-heading text-lg font-bold text-[#042817] focus:outline-none focus:ring-2 focus:ring-[#00d66c]/40"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* 2. Donor Personal Information */}
      <div className="mt-7 space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder=""
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-[#fafaf7] px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-[#fafaf7] px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#00a854] focus:outline-none"
          />
        </div>
      </div>

      {/* 3. Payment Method Selector */}
      <div className="mt-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
          Payment Method
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              paymentMethod === 'card'
                ? 'bg-[#042817] text-white border-[#042817]'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
            }`}
          >
            <i className="ri-bank-card-line text-sm"></i>
            <span>Card</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('momo')}
            className={`py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              paymentMethod === 'momo'
                ? 'bg-[#042817] text-white border-[#042817]'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
            }`}
          >
            <i className="ri-[#00d66c] ri-smartphone-line text-sm"></i>
            <span>MoMo</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
              paymentMethod === 'paypal'
                ? 'bg-[#042817] text-white border-[#042817]'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
            }`}
          >
            <i className="ri-paypal-line text-sm"></i>
            <span>PayPal</span>
          </button>
        </div>
      </div>

      {/* 4. Submit Button */}
      <button
        type="submit"
        className="mt-8 w-full rounded-none bg-[#00d66c] py-4 text-sm font-extrabold uppercase tracking-wider text-[#042817] shadow-lg hover:bg-[#042817] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
      >
        <span>SUPPORT THE INSTITUTE ({finalAmountNumber > 0 ? `$${finalAmountNumber}` : '$0'})</span>
        <i className="ri-arrow-right-up-line text-lg font-bold"></i>
      </button>
    </form>
  );
};

export default DonateForm;
