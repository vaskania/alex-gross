import { BrowserRouter } from "react-router-dom";
import { Dropdown } from "./components/Dropdown";
import { RadioButtons } from "./components/Radio";
import { Wrapper } from "./components/Wrapper";
import { ContextProvider } from "./context/App.context";

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
          <RadioButtons
            type="single"
            data={[
              { label: "Germany", value: "ger" },
              { label: "Sweden", value: "swe" },
            ]}
          />
        </Wrapper>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
