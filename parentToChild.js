//class based component 

import React from "react";
class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data:"this is data"
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div> 
                <Child ParentDataToChild = {data} />            
            </div>
            )
        }
} 

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data: ParentDataToChild
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div>
                {data}
            </div>
        )
    }
}


//function based component 


function Parent(){
    const data = "this is data"
    return(
        <div>
            <Child ParentDataToChild = {data} />
        </div>
    )

}

function Child({ParentDataToChild}){
    return (
        <div>
            {ParentDataToChild}
        </div>
    )
}