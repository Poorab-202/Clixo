export function calculateTotal(pricePerUnit, quantity, gstRate = 0.18) {
    const base = Number((pricePerUnit * quantity).toFixed(2));
    const gstAmount = Number((base * gstRate).toFixed(2));
    const total = Number((base + gstAmount).toFixed(2));
    return { base, gstAmount, total };
}
