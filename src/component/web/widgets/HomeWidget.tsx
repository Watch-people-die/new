"use client"
import React from 'react';
import { MangaCard } from '../card/MangaCard';

type HomeWidgetProps = {
  randommanga: any[];
}

export function HomeWidget({ randommanga }: HomeWidgetProps) {
  console.log(randommanga);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {randommanga && randommanga.map((manga, index) => (
          <div key={index} className="mt-2">
            <MangaCard manga={manga} />
          </div>
        ))}
      </div>
    </div>
  );
}
