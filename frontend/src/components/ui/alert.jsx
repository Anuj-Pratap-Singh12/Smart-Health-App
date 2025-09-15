import * as React from "react";

export function Alert({ children, className }) {
  return (
    <div className={`border p-4 rounded-md ${className}`}>
      {children}
    </div>
  );
}

export function AlertTitle({ children }) {
  return <h5 className="font-semibold mb-1">{children}</h5>;
}

export function AlertDescription({ children }) {
  return <p className="text-sm text-gray-600">{children}</p>;
}
