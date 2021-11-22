// import { isTSThisType } from '@babel/types';
import React,{ Component } from 'react';
import './App.css';
import Recherche from './components/Recherche';
import { Card, Message }from "semantic-ui-react";
import Etablissement from './components/etablissement';




// il ya 2 types de Composants:
// 1) composant de type class :
class App extends Component {

  // creation d'etat initial du composant 
  // avec des données : data et des erreurs : error
  state={
    data:[],
    error: ""
  }

  // appel de l' API par une function
  // rajouter async et await pour attendre de recuperer les infos pour executer le code
  // pour tester l'api il faut utilser try{}catch(e) avec le parametre  e : error
  onSearch = async (dpt,type) =>{
    if(dpt && type){
      try{
        let response =await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dpt}/${type}`)
        let data = await response.json();
        // recuperer les données et les envoyer dans le composant state en utilisant setState: 
        this.setState({
          data:data.features,
          // et donc si jai recuperé le resultat il n'ya pas d'erreur donc on laisse error:'' vide 
          // car la gestion des erreurs se fait apres
          error: ''
        })
      }catch(e){
        this.setState({error:'erreur lors de la recherche'})
      }
    }else{
      this.setState({error:"Merci de choisir un departement et un établissement"})
    }
  }


  // methode qui va vider toutes les informations quil ya dans notre etat pour le bouton vider la recherche
  // puis envoyer la methode à notre composant de recherche
  onEmpty = ()=>{
    this.setState({ data: [] , error:''})
  }

  /* creation d'etat :variable propre au composant qui inclut l'etat initial du composant 
  l'etat ne peut se creer que dans une class et non dans un composant fonctionnel */

  state ={
    fruits:[
      {
        type :"pomme",
        poids : "100"
      },
      {
        type :"fraise",
        poids : "10"
      }
    ],
    legume:'courgettes'
  }

  changerFruits=()=>{
    this.setState(
      {
        fruits: 
        [
          {
            type:"poire",
            poids:"90"
          },
          {
            type:"cerise",
            poids:"11"
          }
        ]
      }
    )
  }

  // fonction d'affichage des resultats : avec reactl  fonction map()=>{return...} remplace la boucle for
  renderResults=()=>{
    return this.state.data.map(
      (etablissement)=>{
      return <Etablissement key={etablissement.properties.id} properties={etablissement.properties}/>
    })
  }

  render(){
    // afficher la valeur de notre etat
    // on voit que le legume ne change pas car on la pas mit dans setState
    console.log(this.state) 

    return (
      <div className="App">
       
        <h1>Noâ Bouskila</h1>
        
        <Dev/>
        {/* exemple de composant avec propriete : */}

        {/* <Fruit type ='fraise' poids="100" />
        je suis rouge
        <Fruit type ='pomme' poids="10"/>
        <Fruit type ='poire' poids="90"/> */}
        {/*  mais il faut metttre dans linstantiation du composant les deux proprietes type et poids
        sous forme props.type et props.poids entre parentheses ou mettre simplement ({type,poids}) car on est dans un environnement ES6 */}


        {/* OU au lieu de repeter grace au state et au propson fait directement */}
        <Fruit type={this.state.fruits[0].type} poids={this.state.fruits[0].poids} />
        <Fruit type={this.state.fruits[1].type} poids={this.state.fruits[1].poids} />
        
        {/* pour changer le fruit on fait appel au onClick 
        sachant quen react les ecouteurs devenement sont en camelCase */}
        <button onClick={this.changerFruits}>Changer les Fruits</button>

        <h2>Annuaire des administrations en Ile-de-France.</h2>
        <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty}/>
        {this.state.error ? <Message warning>{this.state.error}</Message> : undefined}

        {this.state.data?
         <Card.Group>
           {this.renderResults()}
         </Card.Group>
         :undefined
        }

      </div>
    );

    
  }
}


// 2) Composant fonctionnel stateless sans etat propre a lui , qui permet davoir un affichage simple : ex: 
// ce composant ermet d'etre reutiliser au sein dune class pour safficher ; il faut l'integrer ainsi : <Dev/>

const Dev =()=>{
  return(
    <h2>Développeuse Front-end</h2>
  )
}

// on met accolade au lieu de mettre props mais ca revient au meme
const Fruit =({type,poids,children})=>{
  return(
    <div>je suis un fruit {type} et je pèse {poids} g {children} </div>
  )
}


export default App;
