import { BrowserRouter } from "react-router-dom";
import { Dropdown } from "./components/Dropdown";
import { Wrapper } from "./components/Wrapper";
import { ContextProvider } from "./context/App.context";

import { Router } from "./routes/Router";
import { Question } from "./components/Question";

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

          <Question
            answers={[
              { label: "germany", point: 12, value: "ger" },
              { label: "germany", point: 12, value: "ger" },
            ]}
            body="mevida miqela"
            question={1}
            type="select"
          />
          <Dropdown
            change={(e) => {
              console.log(e.value);
            }}
            data={[{ label: "mevida", value: "miqela" }]}
          />
        </Wrapper>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
