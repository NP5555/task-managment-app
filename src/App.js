import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import TaskList from './components/TaskList';
// import AddTask from './components/AddTask';
import TaskManager from './components/TaskManager';

const App = () => {
  return (
<div>
<TaskManager/>
</div>


    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<TaskList/>} />
    //       <Route path="/add" element={<AddTask/>} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
