import React from 'react'
import { Card, Button } from "react-bootstrap";

const AnalyticsWidget = ({unit1, metric1, unit2, metric2}) => {
  return (
       <div style={{display: "flex", flexDirection:"row"}}>    
        
        <Card style={{ width: '10rem', height:"12rem", borderWidth: "4px", marginTop: "1rem", marginLeft:"2rem" }}>
<div style={{margin: "auto"}}>
            <h1>Hi</h1>
            </div> 

    </Card>
    <Card style={{ width: '10rem', height:"12rem", borderWidth: "4px", marginTop: "1rem", marginLeft:"2rem" }}>
    <div style={{margin: "auto"}}>
            <h1>Hi</h1>
            </div> 
    </Card>
    </div>
  )
}

export default AnalyticsWidget