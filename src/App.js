import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Group from './components/Group/Group'
import Team from './components/Team/Team'
import Notepad from './components/Notepad/Notepad'
import Tools from './components/Tools/Tools'
import Clipboard from './components/Clipboard/Clipboard'
import Document from './components/Document/Document'
import Policy from './components/Policy/Policy'
import Helpline from './components/Helpline/Helpline'
import Logout from './components/Logout/Logout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/group" element={<Group />} />
        <Route path="/team" element={<Team />} />
        <Route path="/notepad" element={<Notepad />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/clipboard" element={<Clipboard />} />
        <Route path="/document" element={<Document />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
