import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src/imgs/recent-picture.jpeg" />
      <Card.Body>
        <Card.Title>GitHubCard</Card.Title>
        <Card.Text>
          Hi I'm David and I'm going to become a web developer
        </Card.Text>
        <Button variant="primary">Go to Github</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;