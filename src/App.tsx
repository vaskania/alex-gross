import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { ContextProvider } from "./context/App.context";

import { Router } from "./routes/Router";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Wrapper>
          <Router />
        </Wrapper>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
