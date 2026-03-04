import React from "react";
import { Card, Button } from "react-bootstrap";

function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card">
      <Card.Body>
        <div className="user-avatar">{user.name.charAt(0)}</div>

        <Card.Title className="mt-3">{user.name}</Card.Title>
        <Card.Text>
          <strong>Username:</strong> {user.username}
          <br />
          <strong>Email:</strong> {user.email}
          <br />
          <strong>Phone:</strong> {user.phone}
        </Card.Text>

        {/* TODO 3.1: Add ONE <Button> here (text: "View Details") 
          Implement:
          - Add ONE Bootstrap <Button> inside <Card.Body>
          - Button text MUST be: "View Details"
          - On click, it MUST call onUserClick and pass the current user object

          Hint:
          - You already have access to both props: user and onUserClick.
          - Your onClick must be a function (do NOT call onUserClick immediately).
            Inside <Card.Body> (below <Card.Text>), add something like:
            <Button
            // onClick should call the handler and pass the current user
            onClick={ TODO: write a function here }
            >
            { TODO: put the exact text here }
            </Button>*/}
        <Card.Body>
          <Button onClick={()=> onUserClick()}>View Details</Button>
        </Card.Body>
        

        {/* TODO 3.1: onClick MUST call onUserClick and pass the current user object */}
      </Card.Body>
    </Card>
  );
}

export default UserCard;