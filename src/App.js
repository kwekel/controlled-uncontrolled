import { useState } from 'react';
import { UncontrolledFlow } from './components/uncontrolled-flow';
import { ControlledFlow } from './components/controlled-flow';

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => goNext({ name: 'MyName' })}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age:</h1>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congratulations! You qualify for the gift</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};

const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => goNext({ country: 'The Netherlands' })}>
        Next
      </button>
    </>
  );
};

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
