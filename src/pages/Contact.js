import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (event) => {};

  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl required type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom02">
                <FormLabel>Email</FormLabel>
                <FormControl required type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom03">
                <FormLabel>Message</FormLabel>
                <FormControl required type="textarea" placeholder="Message" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>Email me on madhumitha.s2020b@vitstudent.ac.in</p>
            <p>
              I can help designing websites or application interfaces, creating
              websites from scratch or enhancing existing work, building
              websites in webflow, or designing a custom icon set for your
              buisness.
            </p>
            <p>
              Currently based in Chennai, India - available for remote-friendly
              work from September 2023
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="https://www.linkedin.com/in/madhumitha03s/">
                    LinkedIn
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://github.com/madhumitha03s">GitHub</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://www.behance.net/madhumitha03s">Behance</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://madhumitha03s.medium.com/">Medium</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="https://leetcode.com/madhumitha03s/">LeetCode</a>
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
