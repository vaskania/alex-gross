import { Wrapper } from "./components/Wrapper";
import { ContextProvider } from "./context/App.context";
import { Test } from "./Test";

function App() {
  return (
    <ContextProvider>
      <Wrapper>
        <Test />
      </Wrapper>
    </ContextProvider>
  );
}

export default App;
