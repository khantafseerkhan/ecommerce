// Example in your test file
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('renders App component', () => {
 

  it("check for header",async()=>{

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const bodyContainerElement = screen.getByText(/\/Products\/i/);

    expect(bodyContainerElement).toBeInTheDocument();

  })




});