const PricingNotes = () => {
    return (
        <div className="p-6 bg-yellow-50 border-l-6 border-yellow-400 rounded-xl shadow">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-800">
                Important Notes
            </h3>
            <ul className="space-y-3 text-dark">
                <li>
                    <span className="font-medium">📌 Minimum Charge:</span> A minimum
                    service charge of <strong>800 BDT</strong> applies to all bookings,
                    regardless of size.
                </li>
                <li>
                    <span className="font-medium">⏳ Rescheduling:</span> You can
                    reschedule your booking up to <strong>24 hours in advance</strong> free
                    of charge. Less than 24 hours’ notice will incur a{" "}
                    <strong>200 BDT fee</strong>.
                </li>
                <li>
                    <span className="font-medium">❌ Cancellation:</span> Cancellations
                    made more than <strong>24 hours before</strong> your appointment are
                    fully refundable. Same-day cancellations are subject to a{" "}
                    <strong>50% charge</strong>.
                </li>
                <li>
                    <span className="font-medium">🎟️ Coupons:</span> Only one coupon code
                    may be applied per booking and cannot be combined with other offers.
                </li>
            </ul>
        </div>
    );
};

export default PricingNotes;
