import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as route from './routes';
import {ListPage} from './pages/listPage/ListPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.HOME} element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
