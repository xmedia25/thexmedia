// Global error handling utilities

export interface ErrorInfo {
  message: string;
  code?: string | number;
  status?: number;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

export class AppError extends Error {
  public readonly code: string | number;
  public readonly status: number;
  public readonly timestamp: string;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    code: string | number = 'UNKNOWN_ERROR',
    status: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.status = status;
    this.timestamp = new Date().toISOString();
    this.isOperational = isOperational;

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

// Network/API error handler
export const handleApiError = (error: any, url?: string): AppError => {
  const timestamp = new Date().toISOString();
  
  // Handle fetch/axios errors
  if (error.response) {
    // Server responded with error status
    const status = error.response.status;
    const message = error.response.data?.message || error.message || 'API request failed';
    return new AppError(message, `API_ERROR_${status}`, status);
  } else if (error.request) {
    // Request was made but no response received
    return new AppError(
      'Network error: Unable to reach server',
      'NETWORK_ERROR',
      0
    );
  } else {
    // Something else happened
    return new AppError(
      error.message || 'Unknown API error',
      'UNKNOWN_API_ERROR',
      500
    );
  }
};

// Image loading error handler
export const handleImageError = (src: string, retryCount: number = 0): AppError => {
  return new AppError(
    `Failed to load image: ${src} (attempts: ${retryCount + 1})`,
    'IMAGE_LOAD_ERROR',
    404
  );
};

// Component error handler
export const handleComponentError = (componentName: string, error: Error): AppError => {
  return new AppError(
    `Component error in ${componentName}: ${error.message}`,
    'COMPONENT_ERROR',
    500
  );
};

// Global error logger
export const logError = (error: AppError | Error, context?: string): void => {
  const errorInfo: ErrorInfo = {
    message: error.message,
    timestamp: new Date().toISOString(),
    ...(error instanceof AppError && {
      code: error.code,
      status: error.status,
    }),
    ...(typeof window !== 'undefined' && {
      url: window.location.href,
      userAgent: navigator.userAgent,
    }),
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.group(`🚨 Error ${context ? `in ${context}` : ''}`);
    console.error('Error:', error);
    console.table(errorInfo);
    console.groupEnd();
  }

  // In production, you would send this to your error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Sentry, LogRocket, or custom logging service
    try {
      // Replace with your actual error tracking service
      console.error('Production Error:', {
        ...errorInfo,
        stack: error.stack,
        context,
      });
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  }
};

// Retry mechanism for async operations
export const withRetry = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000,
  backoff: boolean = true
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw new AppError(
          `Operation failed after ${maxRetries + 1} attempts: ${lastError.message}`,
          'MAX_RETRIES_EXCEEDED',
          500
        );
      }

      // Calculate delay with optional exponential backoff
      const currentDelay = backoff ? delay * Math.pow(2, attempt) : delay;
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }

  throw lastError!;
};

// Safe async wrapper that catches and logs errors
export const safeAsync = async <T>(
  operation: () => Promise<T>,
  fallback?: T,
  context?: string
): Promise<T | undefined> => {
  try {
    return await operation();
  } catch (error) {
    const appError = error instanceof AppError ? error : new AppError(
      (error as Error).message || 'Unknown error',
      'SAFE_ASYNC_ERROR',
      500
    );
    
    logError(appError, context);
    return fallback;
  }
};

// Error boundary helper for React components
export const createErrorBoundaryFallback = (componentName: string) => {
  return {
    componentName,
    message: `${componentName} encountered an error. Please try refreshing the page.`,
    action: 'refresh'
  };
};

// Validation error handler
export const handleValidationError = (errors: Record<string, string[]>): AppError => {
  const errorMessages = Object.entries(errors)
    .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
    .join('; ');
  
  return new AppError(
    `Validation failed: ${errorMessages}`,
    'VALIDATION_ERROR',
    400
  );
};