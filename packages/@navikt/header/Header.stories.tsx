import * as React from 'react';
import Header from './Header';

export default { title: 'Header' };

export const withContent = () => (
  <Header title="Svangerskap og Fødsel" userName="Navn Brukersen" userUnit="NFP Drammen" />
);
