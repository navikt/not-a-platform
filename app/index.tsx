import * as React from 'react';
import { render } from 'react-dom';
import ApplicationWrapper from '../packages/@navikt/application-wrapper/applicationWrapper';
import 'normalize.css';

render(
    <ApplicationWrapper>Hello World</ApplicationWrapper>,
    document.getElementById('app')
);
