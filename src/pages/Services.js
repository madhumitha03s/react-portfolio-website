import React from "react";
import Card from "react-bootstrap";
import project from "../images/project.jpg";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "Support",
      imageUrl: project,
    },
  ];
  return (
    <div className="services">
      <h2>Services</h2>
      <div className="wrapper">
        {servicesList.map((item) => {
          return (
            <div>
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title> {item.name} </Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
