import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton.jsx';


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


function App() {
  function handleSelect(selectedButton){
    //selectedButton => 'componented, jsx, props, state'
    
    console.log({selectedButton});
  }
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>
        </menu>
        Dynamic content goes here
      </section>
      </main>
    </div>
  );
}

export default App;
