import React, {createContext, Component} from "react";

/**
 * `createContext` contient 2 propriétés :
 * `Provider` et `Consumer`. Nous les rendons accessibles
 * via la constante `PatientContext`
 * On exporte ce contexte afin qu'il soit exploitable par
 * d'autres composants par la suite via le `Consumer`
 */
export const PatientContext = createContext({
    firstname: "",
    lastname: "",
    gender: "",
    setFirstname: () => {},
    setLastname: () => {},
    setGender: () => {}
});

/**
 * la classe PatientProvider fera office de... Provider (!)
 * en englobant son enfant direct
 * dans le composant éponyme. De cette façon, ses values
 * seront accessibles de manière globale via le `Consumer`
 */
export default class PatientProvider extends Component {
    state = {
        firstname: "", // une valeur de départ,
        setFirstname: firstname => this.setState({firstname}),
        lastname: "",
        setLastname: lastname => this.setState({lastname}),
        gender: "",
        setGender: gender => this.setState({gender}),
    };

    render() {
        return (
            /**
             * la propriété value est très importante ici, elle rend
             * le contenu du state disponible aux `Consumers` de l'application
             */
            <PatientContext.Provider value={this.state}>
                {this.props.children}
            </PatientContext.Provider>
        );
    }
}


/**
 * HOC
 * qui se chargera d'injecter les propriétés de notre contexte
 * à n'importe quel composant qui l'appellera
 */
export const withPatient = Component => props => (
    <PatientContext.Consumer>
        {store => <Component {...props} {...store} />}
    </PatientContext.Consumer>
)