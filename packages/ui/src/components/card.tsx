// components/Card.tsx

import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  description: string;
  footer?: ReactNode;
  children?: ReactNode;
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  footer,
  children,
}) => {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="p-6">
        <h3 className="mb-2 font-semibold text-gray-900 text-xl">{title}</h3>
        {description && (
          <p className="mb-4 text-gray-700 text-sm">{description}</p>
        )}
        {children}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};
