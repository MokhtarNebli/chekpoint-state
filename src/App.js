import "./App.css";
import img from "./Pic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import Timer from "./Timer";

class app extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Mokhtar Nebli",
        bio: "Étudiant au niveau [PRÉCISER] dans [PRÉCISER ÉTUDES], je cherche un emploi afin de compléter ma formation académique par une expérience professionnelle qui a du sens. Je suis ouvert à de nombreuses propositions en rapport avec mes études et suis prêt à discuter de mon parcours plus amplement lors d'un entretien",
        profession: "web developer",
        photo: <img className="pic" src={img} alt="pics"></img>,
      },
      show: true,
    };
  }

  render() {
    return (
      <div className="head">
        {this.state.show ? (
          <div className="head">
            <h1>{this.state.person.fullName}</h1>
            <h1>{this.state.person.photo}</h1>
            <h2>{this.state.person.profession}</h2>
            <p>{this.state.person.bio}</p>
            <Timer/>
          </div>
        ) : null}

        <Button
          onClick={() =>
            this.setState({show: !this.state.show })
          }
        >
          show
        </Button>
      </div>
    );
  }
}

export default app;
