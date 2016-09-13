import React from 'react';
import jQuery from 'jquery'

import ExhibitionForm from './ExhibitionForm';
import Exhibitions from './Exhibitions';



class ExhibitionsContainer extends React.Component {



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

export default ExhibitionsContainer;
