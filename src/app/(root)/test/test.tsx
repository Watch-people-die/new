"use client";
import { useState } from "react";

// --- Types ---
interface JikanManga {
  mal_id: number;
  title: string;
  images: {
    jpg: { image_url: string };
  };
}

interface MangaDexTitle {
  en?: string;
  ja?: string;
  [key: string]: string | undefined;
}

interface MangaDexManga {
  id: string;
  attributes: {
    title: MangaDexTitle;
  };
}

interface MangaDexChapter {
  id: string;
  attributes: {
    title?: string;
    chapter?: string;
  };
}

export default function Test6() {
  const [randomManga, setRandomManga] = useState<JikanManga | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [mangaList, setMangaList] = useState<MangaDexManga[]>([]);
  const [selectedMangaId, setSelectedMangaId] = useState<string>("");
  const [chapterList, setChapterList] = useState<MangaDexChapter[]>([]);
  const [selectedChapterId, setSelectedChapterId] = useState<string>("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const fetchRandomManga = async () => {
    try {
      const randomId = Math.floor(Math.random() * 20000) + 1;
      const res = await fetch(`https://api.jikan.moe/v4/manga/${randomId}`);
      const data = await res.json();

      if (data.data && !data.data.title.includes("Removed")) {
        setRandomManga(data.data);
        setError("");
      } else {
        fetchRandomManga();
      }
    } catch (err) {
      setError("Failed to load random manga.");
      console.error(err);
    }
  };
  const fetchMangas = async () => {
    if (!searchTerm) return;
    try {
      const res = await fetch(
        `https://api.mangadex.org/manga?title=${encodeURIComponent(
          searchTerm
        )}&limit=10`
      );
      const data = await res.json();
      setMangaList(data.data || []);
      setError("");
    } catch (err) {
      setError("Failed to search manga.");
      console.error(err);
    }
  };
  const fetchChapters = async (mangaId: string) => {
    try {
      const res = await fetch(
        `https://api.mangadex.org/manga/${mangaId}/feed`
      );
      const data = await res.json();
      setChapterList(data.data || []);
      setError("");
    } catch (err) {
      setError("Failed to fetch chapters.");
      console.error(err);
    }
  };
  const fetchChapterImages = async (chapterId: string) => {
    try {
      const res = await fetch(
        `https://api.mangadex.org/at-home/server/${chapterId}`
      );
      const data = await res.json();

      if (!data.chapter) return;

      const urls: string[] = data.chapter.data.map(
        (file: string) => `${data.baseUrl}/data/${data.chapter.hash}/${file}`
      );
      setImageUrls(urls);
      setCurrentImageIndex(0);
      setError("");
    } catch (err) {
      setError("Failed to fetch chapter images.");
      console.error(err);
    }
  };
  const goNext = () => {
    setCurrentImageIndex((i) =>
      i + 1 < imageUrls.length ? i + 1 : i
    );
  };
  const goPrevious = () => {
    setCurrentImageIndex((i) =>
      i - 1 >= 0 ? i - 1 : i
    );
  };
  return (
    <div className="p-4 flex gap-6">
      {/* Left Column */}
      <div className="w-1/3 space-y-4">
        <div>
          <h2 className="font-bold">Random Manga</h2>
          <button
            onClick={fetchRandomManga}
            className="px-3 py-1 border rounded mt-2"
          >
            Get Random Manga
          </button>
          {randomManga && (
            <div className="mt-2">
              <h3>{randomManga.title}</h3>
              <img
                src={randomManga.images.jpg.image_url}
                alt={randomManga.title}
                className="w-full max-w-xs border rounded"
              />
            </div>
          )}
        </div>

        <div>
          <h2 className="font-bold">Search Manga</h2>
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter manga title..."
              className="border p-1 rounded flex-1"
            />
            <button
              onClick={fetchMangas}
              className="px-3 py-1 border rounded"
            >
              Search
            </button>
          </div>
          {mangaList.length > 0 && (
            <ul className="mt-2 border rounded max-h-48 overflow-y-auto">
              {mangaList.map((manga) => (
                <li
                  key={manga.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedMangaId(manga.id);
                    fetchChapters(manga.id);
                  }}
                >
                  {manga.attributes?.title?.en ||
                    manga.attributes?.title?.ja ||
                    "Untitled"}
                </li>
              ))}
            </ul>
          )}
        </div>

        {chapterList.length > 0 && (
          <div>
            <h2 className="font-bold">Chapters</h2>
            <ul className="border rounded max-h-48 overflow-y-auto">
              {chapterList.map((ch) => (
                <li
                  key={ch.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    fetchChapterImages(ch.id);
                  }}
                >
                  {ch.attributes?.title || `Chapter ${ch.attributes?.chapter}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="flex-1">
        {selectedChapterId && imageUrls.length > 0 ? (
          <div className="space-y-2">
            <img
              key={currentImageIndex}
              src={imageUrls[currentImageIndex]}
              alt={`Page ${currentImageIndex + 1}`}
              className="w-full border rounded"
            />
            <p>
              Page {currentImageIndex + 1} of {imageUrls.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={goPrevious}
                disabled={currentImageIndex === 0}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={goNext}
                disabled={currentImageIndex + 1 >= imageUrls.length}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <h2>Select a Chapter to View</h2>
        )}
      </div>

      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
