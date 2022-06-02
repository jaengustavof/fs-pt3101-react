import ReactDOM from 'react-dom'
import "./app.scss"
import Option from "../option";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


console.log(Option);
export default function App() {
  return (
    <section className="main">
      <div className="main__appcontainer">
      
        <Option />
      </div>

    </section>
  );
}