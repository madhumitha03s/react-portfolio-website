import React from "react";
import Card from "react-bootstrap/Card";
import { easeInOut, motion } from "framer-motion";
import project from "../images/project.jpg";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      name: "Web Design",
      imageUrl: project,
    },
    {
      id: 2,
      name: "Web Design",
      imageUrl: project,
    },
    {
      id: 3,
      name: "Web Design",
      imageUrl: project,
    },
    {
      id: 4,
      name: "Web Design",
      imageUrl: project,
    },
    {
      id: 5,
      name: "Web Design",
      imageUrl: project,
    },
    {
      id: 6,
      name: "Web Design",
      imageUrl: project,
    },
  ];
  return (
    <motion.div
      className="projects"
      animate={{ scale: [2, 1], rotate: [90, 0] }}
      transition={{
        duration: 0.5,
        ease: easeInOut,
      }}
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title> {item.name} </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
