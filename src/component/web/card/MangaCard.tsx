import React from 'react'
export function MangaCard(manga: any) {
  return (
    <div className="border p-3 sm:p-4 w-full sm:w-auto max-w-xs mx-auto h-24">
      <h1>{manga.title}</h1>
      <img
        src={manga.images.jpg.image_url || ""}
        alt={manga.title}
        className="w-full max-w-xs border rounded"
      />
    </div>
  )
}
