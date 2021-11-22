import React from 'react';
import { Card } from 'semantic-ui-react';

// composant fonctionnel stateless pour l'affichage des informations

const Etablissement =({properties})=>{
    console.log(properties);

    const {nom,adresses,telephone,url} = properties;

    return(
        <Card>
            <Card.Content>

                <Card.Header>{nom}</Card.Header>
                <Card.Meta> tel:{telephone}</Card.Meta>
                {/* pas reussi a faire cela */}
                { adresses.codePostal?
                 <Card.Meta>adresses:{adresses.codePostal}</Card.Meta>
                 :undefined
                }
                <Card.Meta>site: {url}</Card.Meta>



                
                
               

            </Card.Content>
        </Card>
    )
}


export default Etablissement;


