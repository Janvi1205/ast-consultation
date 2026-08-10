import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ services, columns = 3 }) {
  const gridColsClass = 
    columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 
    columns === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridColsClass} gap-8`}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
