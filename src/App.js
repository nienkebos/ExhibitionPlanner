import React from 'react';
import ExhibitionForm from './ExhibitionForm';
import Exhibitions from './Exhibitions';


class App extends React.Component {



    render() {
        return (
          <div>
            <div>
              <Exhibitions />
            </div>
            <div>
              <ExhibitionForm />
            </div>
          </div>
        );
    }
}

export default App;
