import axios from 'axios';
import React, { Component } from 'react'
import '../App.css'; 
//import Carousel from 'react-elastic-carousel';
//import { Carousel } from '@trendyol-js/react-carousel';

class Homepage extends Component {

  state={
    planetData: []
  }
  
  componentDidMount(){
    axios.get('https://assignment-machstatz.herokuapp.com/planet')
    .then((res) => {
      this.setState({planetData:res.data})
    })
    .catch((err) => {
      console.log("error" + err)
    })
  }

    addFav= (name) =>{
      let {planetData : planet} = this.state;
      let index = planet.findIndex(x=>x.name === name);
      console.log(index);
      if(index >= 0 ){
        if(planet[index].isFavourite){
          planet[index].isFavourite=false;
        }else{
          
        planet[index].isFavourite=true;
      }
      }
      localStorage.setItem("planet",JSON.stringify(planet));
      this.setState({planetData:planet});
    }
  
    render () {
        

      console.log(this.state.planetData)
        
        // var signalAttack = function () {
        //                     alert("Added To Favourites")
        //                   //  ("div:first").toggleClass("p-active");
        //                     this.setState(planetData.isFavourite=true)                           
        //                    }
                         


      return ( 
        
        
        this.state.planetData.map(item=>{
              return(
                
                     <div className={item.isFavourite ? "p-active":"cardWrapper"} onClick={()=>this.addFav(item.name)}>
                     <div className="card">
                       {/* <input type="checkbox"></input> */}
                       
                       <p className="p-off">{item.name}</p>

                     </div>
                    </div>
                    
                    )
                    
          })
          
          )
    }
}

export default Homepage