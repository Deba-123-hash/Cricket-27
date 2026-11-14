import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[CRICKET27 ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 p-6 text-white select-none">
          <div className="max-w-md w-full p-6 bg-slate-900 border border-red-500/30 rounded-2xl shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-red-200">Simulation Error</h2>
            <p className="text-xs text-slate-400 font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 break-words text-left">
              {this.state.error?.message || 'An unexpected graphics or physics error occurred.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer text-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>RELOAD APPLICATION</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
