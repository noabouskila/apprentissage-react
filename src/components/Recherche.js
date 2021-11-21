import React, {Component} from 'react';
import {Button,Select} from 'semantic-ui-react';
import './recherche.css';

class Recherche extends Component{

    state={
        dpt: '',
        type:''
    }

    // fonction de changement d'etat du nouveau departement et type d'organisme
    onDptChange = (e,data) => {
        this.setState({dpt: data.value});
    }
    onTypeChange =(e,data)=>{
        this.setState({ type: data.value})
    }

    

    render(){

        const optionDpt =[
            {key:"75", value:75 , text:"Paris"},
            {key:"77", value:77 , text:"Seine-et-Marne"},
            {key:"78", value:78 , text:"Yvelines"},
            {key:"91", value:91 , text:"Essone"},
            {key:"92", value:92 , text:"Haut-de-Seine"},
            {key:"93", value:93 , text:"Seine-Saint-Denis"},
            {key:"94", value:94 , text:"Val-de-Marne"},
            {key:"95", value:95 , text:"Val-d'Oise"},
        ];

        const optionType =[
            {key:"cpam" , value:"cpam", text:"Caisse Primaire d'Assurance Maladie"},
            {key:"cci" , value:"cci", text:"Chambre de commerce et d'industriee"},
            {key:"crous" , value:"crous", text:"Crous et ses antennes"}
        ]


        return(
            <div className="recherche">
            <Select placeholder="choisissez un departement" options={optionDpt} onChange={this.onDptChange}/>
            <Select placeholder="choisissez une administration" options={optionType} onChange={this.onTypeChange}/>
            <Button primary>Lancer la recherche</Button>
            <Button secondary>Vider</Button>
            </div>
        )
    }
}

export default Recherche;