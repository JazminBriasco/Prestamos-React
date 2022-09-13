import React, { Fragment, useState } from 'react'
import Resumen from './Resumen';

const Formulario = ({ amount, saveAmount, term, saveTerm }) => {

    const [error, saveError] = useState(false);
    const [isHidden, saveIsHidden] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const calculateLoan = e => {
        e.preventDefault();
        if (amount <= 0 || term === '') {
            saveError(true);
        } else {
            saveError(false);
            saveIsHidden(false);
        }
    }

    return (
        <Fragment>
            <form onSubmit={calculateLoan}>
                <div className="row">
                    <div>
                        <label>Loan Amount {isHidden}</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Example: 3000"
                            onChange={e => {
                                saveAmount(e.target.value) 
                                saveIsHidden(true)}
                            }
                        />
                    </div>
                    <div>
                        <label>Term to Pay</label>
                        <select
                            className="u-full-width"
                            onChange={e => saveTerm(e.target.value)}
                        >
                            <option value="">Please select the term</option>
                            <option value="3">3 month</option>
                            <option value="6">6 month</option>
                            <option value="12">12 month</option>
                            <option value="24">24 month</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calculate"
                            className="button-primary u-full-width"
                            onClick={e => setShowLoading(true)}
                        />
                    </div>
                </div>
            </form>
            {(error) ?
                <p className="error">All fields must been completed</p> :
                <div hidden={isHidden}>
                    <Resumen
                        amount={amount}
                        term={term}
                        showLoading={showLoading}
                        setSowLoading={setShowLoading}
                    />
                </div>
            }
        </Fragment>
    );
}


export default Formulario;