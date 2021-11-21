import React,{ Component } from 'react';
import './App.css';
import Recherche from './components/Recherche';



// il ya 2 types de Composants:
// 1) composant de type class :
class App extends Component {

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
        <Recherche/>

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
