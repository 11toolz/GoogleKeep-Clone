import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"



function App() {
  return (
    <div>
      <Header />
      {notes.map(eachNote => (
    <Note 
      id = {eachNote.key}
      head= {eachNote.title}
      body= {eachNote.content}
    />
  )
)}
      <Footer />
    </div>
  );
}

export default App;
