import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Card from './Card';

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

it('renders empty Card', () => {
    act(() => {
        render(<Card></Card>, container);
    });
    expect(container).toBeEmpty();
});

it("renders Card's title", () => {
    const title = 'Test Title';
    act(() => {
        render(<Card title={title}></Card>, container);
    });
    expect(container.textContent).toEqual(title);
});

it("renders Card's primary text", () => {
    const primaryText = 'Test primary text';
    act(() => {
        render(<Card primaryText={primaryText}></Card>, container);
    });
    expect(container.textContent).toContain(primaryText);
});

it("renders Card's secondary text", () => {
    const secondaryText = 'Test secondary text';
    act(() => {
        render(<Card secondaryText={secondaryText}></Card>, container);
    });
    expect(container.textContent).toContain(secondaryText);
});

it("renders Card's secondary text", () => {
    const buttonText = 'Test button text';
    act(() => {
        render(<Card secondaryText={buttonText}></Card>, container);
    });
    expect(container.textContent).toContain(buttonText);
});

it('renders complete Card', () => {
    const title = 'Test Title';
    const primaryText = 'Test primary text';
    const secondaryText = 'Test secondary text';
    const buttonText = 'Test button text';
    act(() => {
        render(
            <Card
                title={title}
                primaryText={primaryText}
                secondaryText={secondaryText}
                buttonText={buttonText}
            ></Card>,
            container,
        );
    });
    expect(container.textContent).toContain(title);
    expect(container.textContent).toContain(primaryText);
    expect(container.textContent).toContain(secondaryText);
    expect(container.textContent).toContain(buttonText);
});
