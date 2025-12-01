import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArchitectureDiagramPage from './page';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockedLink = ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
  MockedLink.displayName = 'Link';
  return MockedLink;
});

describe('ArchitectureDiagramPage', () => {
  it('renders the page title', () => {
    render(<ArchitectureDiagramPage />);
    expect(screen.getByText('Hackmud Upgrade System Architecture')).toBeInTheDocument();
  });

  it('renders the architecture diagram image', () => {
    render(<ArchitectureDiagramPage />);
    const img = screen.getByAltText('Hackmud Architecture Diagram');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/architecture-diagram.svg');
  });

  it('toggles legend visibility when button is clicked', () => {
    render(<ArchitectureDiagramPage />);
    
    const button = screen.getByRole('button', { name: /show legend/i });
    expect(screen.queryByText('Component Legend')).not.toBeInTheDocument();
    
    fireEvent.click(button);
    expect(screen.getByText('Component Legend')).toBeInTheDocument();
    expect(button).toHaveTextContent('Hide Legend');
    
    fireEvent.click(button);
    expect(screen.queryByText('Component Legend')).not.toBeInTheDocument();
    expect(button).toHaveTextContent('Show Legend');
  });

  it('displays error message when image fails to load', () => {
    render(<ArchitectureDiagramPage />);
    
    const img = screen.getByAltText('Hackmud Architecture Diagram');
    fireEvent.error(img);
    
    expect(screen.getByText('Failed to load diagram')).toBeInTheDocument();
    expect(screen.getByText(/pnpm run generate-diagram/)).toBeInTheDocument();
  });

  it('renders back to portfolio link', () => {
    render(<ArchitectureDiagramPage />);
    const link = screen.getByText('← Back to Portfolio');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders data flow section', () => {
    render(<ArchitectureDiagramPage />);
    expect(screen.getByText('Data Flow')).toBeInTheDocument();
    expect(screen.getByText(/Orchestrator dispatches to all 26 shards/)).toBeInTheDocument();
  });

  it('renders architecture benefits section', () => {
    render(<ArchitectureDiagramPage />);
    expect(screen.getByText('Architecture Benefits')).toBeInTheDocument();
    expect(screen.getByText(/Add more shards without central bottleneck/)).toBeInTheDocument();
  });
});