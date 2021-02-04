import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UpdateMessage = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="text-center w-100 mt-2 mb-4">
            Your Profile was successfully updated
          </h4>
          <div className="w-100 text-center mt-2 h4">
            <Link to="./login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default UpdateMessage;
