import { Component, ErrorInfo, ReactNode } from 'react';
import cryingChiikawa from '../assets/gif/chiikawa-crying.gif';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // 2. This lifecycle method is called when an error is thrown in a descendant component.
  // It should return a new state object to trigger a re-render with the fallback UI.
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // 3. This lifecycle method is used for logging the error information.
  // You can send this to a logging service (e.g., Sentry, LogRocket).
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  // 4. The render method checks the state. If there's an error, it shows the fallback UI.
  // Otherwise, it renders the children as normal.
  public render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center text-center px-4"
          style={{ color: 'var(--text-color)', backgroundColor: 'var(--base-color)' }}
        >
            <img
                src={cryingChiikawa}
                alt="Crying Chiikawa"
                className="w-80 h-40"
            />
            <h1 className="text-4xl font-bold mt-4" style={{ color: 'var(--highlight-red)'}}>
                Something went wrong.
            </h1>
            <p className="text-lg mt-2 font-mono" style={{ color: 'var(--secondary-text)' }}>
                {this.state.error?.message}
            </p>
            <button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="btn-gradient-flash rounded-2xl p-3 font-medium mt-8"
            >
                Try Again
            </button>
        </div>
      );
    }

    return this.props.children;
  }
}