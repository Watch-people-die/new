import React from 'react'
import { MangaCard } from '../card/MangaCard'
export function HomeWidget() {
  return (
<div>
  HomeWidget
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
    <MangaCard />
  </div>
</div>

  )
}
