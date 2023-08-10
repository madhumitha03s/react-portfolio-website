import React from "react";
import Card from "react-bootstrap";
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
  ];
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
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

export default Projects;
