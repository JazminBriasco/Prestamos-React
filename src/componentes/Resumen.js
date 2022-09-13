import React, { useEffect, useState } from 'react';

const Resumen = ({ amount, term, showLoading, setSowLoading }) => {
    const [mensual, saveMensual] = useState(0);
    const [total, saveTotal] = useState(0);

    const interesMensual = [
        { period: 3, rate: 2 },
        { period: 6, rate: 3 },
        { period: 12, rate: 4 },
        { period: 24, rate: 5 }
    ];

    useEffect(() => {
        calculateValues();
        setTimeout(() => {
            setSowLoading(false);
        }, 3000);
    });

    function calculateValues() {
        term = Number(term);
        amount = Number(amount);
        let rateSelected = interesMensual.filter(per => per.period === term);
        let interes = (Number(amount) * (rateSelected[0]?.rate / 100) * term);
        let monthlyAmt = Number(((amount + interes) / term).toFixed(2));
        let totalAmt = Number((amount + interes).toFixed(2)); 
        saveMensual(monthlyAmt);
        saveTotal(totalAmt);
    }

    return (
        <>
            {showLoading ? (
                <div className="spinner"></div>
            ) : (
                <div className="finalAmount" >
                    <p className="resumenP">Summary</p>
                    The requested amount is ${amount}<br></br>
                    To be paid in {term} months<br></br>
                    Your monthly payment is ${mensual}<br></br>
                    <p className="total">Total to be paid ${total}</p><br></br>
                </div>

            )}
        </>
    );
}

export default Resumen;
