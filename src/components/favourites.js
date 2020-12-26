import React, { Component } from 'react'

class Favourite extends Component{
    state={
        fav:[],
        favData:[]
    }
    componentDidMount(){
        this.setState({fav:JSON.parse(localStorage.getItem("planet"))})

        // this.state.fav.filter((el)=>{
        //     if(el.isFavourite === true){
        //         return this.setState({favData:el})
        //     }
        // })
    }
    render(){
        console.log(this.state.favData);
        
        return(

            
            this.state.fav.filter(item=>item.isFavourite).map(item=>{
            
                return(
                  
                    <div className="cardWrapper" >
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

export default Favourite