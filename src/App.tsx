import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { ContextProvider } from "./context/App.context";
import { Question } from "./components/Question";
import { Questions } from "./pages/Questions";
import { Router } from "./routes/Router";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Wrapper>
          {/* <Dropdown
            data={[
              { label: "Germany", value: "ger" },
              { label: "Sweden", value: "swe" },
            ]}
          /> */}
          {/* <Router /> */}
          {/* <RadioButtons
            type="single"
            data={[
              { label: "Germany", value: "ger" },
              { label: "Sweden", value: "swe" },
            ]}
          /> */}
          <Router />
        </Wrapper>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
