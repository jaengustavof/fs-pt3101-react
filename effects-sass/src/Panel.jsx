import "./index.scss";
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import WatchContainer from "./components/WatchContainer";
import Card from "./components/Card";

export default function App() {
  return (
    <section>
      <Header />
      <InputContainer />

      <section className="stuff">
        <WatchContainer />
        <Card />
      </section>
    </section>
  );
}
