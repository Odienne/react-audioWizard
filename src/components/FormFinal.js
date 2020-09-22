import React from 'react';
import './MainApp.css';

/**
 * On importe cette fois non pas le PatientProvider,
 * mais le contexte afin d'accéder au `Consumer`
 */
import {PatientContext} from "../store/PatientProvider";
/**
 * On replace `PatientContext` par notre HOC `withUser`
 */
/*import {withPatient} from "../store/PatientProvider";

export default withPatient(({ firstname, setFirstname }) => (
    <div>
        <h1>Hello {firstname}!</h1>
        <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
    </div>
));*/

export default function MainApp() {

    return (
        <PatientContext.Consumer>
            {patient => <h1>{patient.gender === 'male' ? 'Monsieur' : 'Madame'} {patient.firstname} {patient.lastname}</h1>}
        </PatientContext.Consumer>
    )
}
