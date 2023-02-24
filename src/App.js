import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes/Route';


function App() {

  let element = useRoutes(routes);


  return (

    <>
      {element}
    </>
  )
}

export default App;
