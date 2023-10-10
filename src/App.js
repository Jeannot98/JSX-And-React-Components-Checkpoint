import './App.css';
import Card from 'react-bootstrap/Card';
import Image from './components/Image';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';

function App() {
  return (
    <div className="App">
      <Card>
        <Image/>
        <Card.Body>
          <Card.Title style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>{<Name/>} {<Price/>}</Card.Title>
          <Card.Text style={{color:"white"}}>{<Description/>}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
