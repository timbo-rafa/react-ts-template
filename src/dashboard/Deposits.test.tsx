import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Deposits from './Deposits';

let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

it('renders Recent Deposits', () => {
    act(() => {
        render(<Deposits />, container);
    });
    expect(container.textContent).toContain('Recent Deposits');
    expect(container.textContent).toContain('$');
});
