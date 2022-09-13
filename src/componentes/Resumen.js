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

        console.log(showLoading);
        setTimeout(() => {
            setSowLoading(false);
        }, 3000);
    });

    function calculateValues() {
        let rateSelected = interesMensual.filter(per => per.period === term);
        amount = Number(amount);
        let interes = (Number(amount) * (rateSelected[0]?.rate / 100) * term);
        saveMensual(((amount + interes) / term).toFixed(2));
        saveTotal(Number(amount + interes).toFixed(2));
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
