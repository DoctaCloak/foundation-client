import React, {StrictMode} from 'react';
import {render} from 'react-dom';

import Application from 'components/base/Application/Application.component';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <Application />
  </StrictMode>,
  rootElement,
);
