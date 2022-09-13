import React, { Fragment, useState } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import './App.css';

function App() {
  const [amount, saveAmount] = useState(0);
  const [term, saveTerm] = useState('');

  return (
    <Fragment>
      <Header
        title="Loan quote"
        amount={amount}
      />

      <div className="container">
        <Formulario
          amount={amount}
          saveAmount={saveAmount}
          term={term}
          saveTerm={saveTerm}
        />
      </div>
    </Fragment>
  );
}

export default App;
