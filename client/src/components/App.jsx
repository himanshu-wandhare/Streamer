import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={StreamList} />
          <Route path="/streams/new" exact Component={StreamCreate} />
          <Route path="/streams/:id" exact Component={StreamShow} />
          <Route path="/streams/edit/:id" exact Component={StreamEdit} />
          <Route path="/streams/delete/:id" exact Component={StreamDelete} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
