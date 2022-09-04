import React, { useEffect, useState } from "react";
import AnalyticsWidget from "../Components/AnalyticsWidget";
import axios from "axios";
import Chart from "react-google-charts";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Card, Button } from "react-bootstrap";
import { widgetDummyData, fridgeDummyData } from "../dummyData";
const LineData = [
  ["Time", "Temperature", "Power Consumption"],
  ...fridgeDummyData["graphls"],
];
const LineChartOptions = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Watt/°F",
  },
  series: {
    1: { curveType: "function" },
  },
};

const FridgeAnalyticsPage = () => {
  const [humidityData, setHumidityData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);

  // useEffect( async () => {
  //     let res = await axios.get("https://reqres.in/api/users?page=1");
  //     let { data } = res.data;
  // })

  const result = LineData.map((data) => [
    new Date(data[0] * 1000).toUTCString(),
    data[1],
    data[2],
  ]);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Green Fridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/analytics">Analytics</Nav.Link>
              <Nav.Link href="/recommendation">Recommendation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card
        style={{
          width: "22rem",
          height: "20rem",
          borderWidth: "4px",
          marginTop: "1rem",
          marginLeft: "2rem",
        }}
      >
        <Chart
          width={"310px"}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={result}
          options={LineChartOptions}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          style={{
            width: "10rem",
            height: "12rem",
            borderWidth: "4px",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <div style={{ margin: "auto" }}>
            <h6>${Math.round(widgetDummyData.avgHumidity)} % humidity</h6>
          </div>
        </Card>
        <Card
          style={{
            width: "10rem",
            height: "12rem",
            borderWidth: "4px",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <div style={{ margin: "auto" }}>
            <h6>${Math.round(widgetDummyData.avgTemperature)} °F</h6>
          </div>
        </Card>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          style={{
            width: "10rem",
            height: "12rem",
            borderWidth: "4px",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <div style={{ margin: "auto" }}>
            <h6> ${Math.round(widgetDummyData.monthlyCostElectricity * 100) / 100} spent in electricity</h6>
          </div>
        </Card>
        <Card
          style={{
            width: "10rem",
            height: "12rem",
            borderWidth: "4px",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <div style={{ margin: "auto" }}>

          <h6> ${Math.round(widgetDummyData.weeklyCarbonDiOxide)} kg of CO2 released</h6>
          </div>
        </Card>
      </div>
    </>
  );
};

export default FridgeAnalyticsPage;
