import { useState } from "react";
import Aside from "./components/aside";
import { HeaderContext, MainContext } from "./context";
import Main from "./components/main";
import Header from "./components/header";
function App() {
  const [searchData, setSearchData] = useState([]);
  return (
    <div className="app">
      <HeaderContext.Provider value={{ setSearchData }}>
        <Header />
      </HeaderContext.Provider>
      <Aside />
      <MainContext.Provider value={{ searchData }}>
        <Main />
      </MainContext.Provider>
    </div>
  );
}
export default App;
