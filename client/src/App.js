import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./routes/DashBoard";
import CreatePortfolio from "./routes/CreatePortfolio";
import ViewPortfolio from "./routes/ViewPortfolio";
import SinglePortfolioView from "./routes/SinglePortfoiloView";
import PortfolioMenu from "./routes/PortfolioMenu";
import UpdatePortfolio from "./routes/UpdatePortfolio";
import SharePortfolio from "./routes/SharePortfolio";
import Inbox from "./components/Inbox";

import './App.css';

function App() {
    
  return (
    <div className="App">
      <p></p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard/>}></Route>
          <Route path="/client" >
            <Route path=":id" element={<SharePortfolio/>}/>
          </Route>
          <Route path="/inbox" element={<PortfolioMenu/>}>
            <Route path=":id" element={<Inbox/>}/>
          </Route>
          <Route path="/portfolio" element={<PortfolioMenu/>}>
            <Route path="add" element={<CreatePortfolio />}/>
            <Route path="update">
              <Route path=":id" element={<UpdatePortfolio/>} />
            </Route>
            <Route path="view">
              <Route index element={<ViewPortfolio />}/>
              <Route path=":id" element={<SinglePortfolioView/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
