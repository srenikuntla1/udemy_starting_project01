import reactimg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header(){
  const randomIndex = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (

    <header>
      <img src={reactimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomIndex} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function MainGoal() {
  return (
    <section>
      <h2>Build a &ltMainGoal&gt </h2>
      <ul>
        <li>Learn React core concepts</li>
        <li>Build a React app from scratch</li>
        <li>Get ready to learn more about React</li>
      </ul>
    </section>
  );
}

function CoreConcepts({image,description,title}) {

  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );

}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
        <CoreConcepts title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}/>
        <CoreConcepts {...CORE_CONCEPTS[1]}/>
        <CoreConcepts {...CORE_CONCEPTS[2]}/>
        <CoreConcepts {...CORE_CONCEPTS[3]}/>
      </ul>
      </section>
      </main>
    </div>
  );
}

export default App;
