import * as React from 'react';
import Decorator, { List, LinkList } from '@navikt/decorator';

const listItems = [
  { itemName: '4806 NFP Drammen', itemHref: 'temp' },
  { itemName: '0000 NFP Bergen', itemHref: 'temp' },
  { itemName: '0000 NFP Stord', itemHref: 'temp' },
  { itemName: '0000 NFP Oslo', itemHref: 'temp' },
];

const linkListItems = [
  { itemName: 'Rettskildene', itemHref: 'temp', isExternal: true },
  { itemName: 'Rutinebeskrivelser', itemHref: 'temp', isExternal: true },
  { itemName: 'Gosys', itemHref: 'temp', isExternal: true },
  { itemName: 'A-inntekt', itemHref: 'temp', isExternal: true },
];

const ApplicationWrapper: React.FunctionComponent = () => {
  return (
    <Decorator
      pageTitle="Svangerskap og Fødsel"
      userName="Navn Brukersen"
      userUnit="NFP Drammen"
      renderUserPopoverContent={() => (
        <div
          style={{
            position: 'absolute',
            right: '8px',
            border: '1px solid rgb(183, 177, 169)',
            borderRadius: '4px',
          }}
        >
          <List listItems={listItems}></List>
          {/* <LinkList listItems={linkListItems}></LinkList> */}
        </div>
      )}
      renderLinksPopoverContent={() => <div></div>}
    ></Decorator>
  );
};

export default ApplicationWrapper;
