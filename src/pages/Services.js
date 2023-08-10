import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import project from "../images/project.jpg";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "Support",
      imageUrl: project,
    },
    {
      id: 2,
      name: "Support",
      imageUrl: project,
    },
    {
      id: 3,
      name: "Support",
      imageUrl: project,
    },
    {
      id: 4,
      name: "Support",
      imageUrl: project,
    },
    {
      id: 5,
      name: "Support",
      imageUrl: project,
    },
    {
      id: 6,
      name: "Support",
      imageUrl: project,
    },
  ];
  return (
    <motion.div
      className="services"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2>Services</h2>
      <div className="wrapper">
        {servicesList.map((item) => {
          return (
            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Card className="card">
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title className="card-title">
                    <a href="picture">{item.name}</a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
