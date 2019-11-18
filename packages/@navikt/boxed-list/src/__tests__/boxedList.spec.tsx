import * as React from 'react';
import renderer from 'react-test-renderer';
import BoxedList from '../index';

test('Should render', () => {
    const component = renderer.create(
        <BoxedList>
            <li>Test</li>
        </BoxedList>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
