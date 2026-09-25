import { useParams, Link } from "react-router-dom";
import { writeups } from "../data/writeups.js";

export default function WriteupDetail() {
  const { slug } = useParams();
  const writeup = writeups.find((w) => w.slug === slug);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/xp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[650px] max-w-[90vw] shadow-2xl border border-gray-400 relative z-10">
        {/* Title bar */}
        <div className="bg-blue-600 text-white px-3 py-1 flex justify-between items-center text-sm">
          <span>C:\writeups\{slug}.txt - Notepad</span>

          <div className="flex gap-2 text-black">
            <div className="bg-gray-200 w-4 h-4 text-center text-xs">_</div>
            <div className="bg-gray-200 w-4 h-4 text-center text-xs">□</div>
            <div className="bg-red-500 w-4 h-4 text-center text-xs text-white">X</div>
          </div>
        </div>

        {/* Notepad body */}
        <div className="bg-black text-green-400 font-mono p-4 sm:p-6 space-y-3 sm:space-y-4 text-sm sm:text-lg leading-relaxed">
          {!writeup ? (
            <>
              <p>C:\Users\jo40&gt; type writeups\{slug}.txt</p>
              <p className="ml-4 text-white">File not found.</p>
            </>
          ) : (
            <>
              <p className="text-white">
                ================ {writeup.title} ================
              </p>
              {writeup.date && (
                <p className="text-sm text-green-600">date: {writeup.date}</p>
              )}
              {writeup.tags.length > 0 && (
                <p className="text-sm text-green-600">
                  {writeup.tags.map((t) => `[${t}]`).join(" ")}
                </p>
              )}
              <div className="space-y-2 pt-2">
                {writeup.content.map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </>
          )}

          <p className="pt-4">
            <Link to="/writeups" className="underline hover:text-green-300">
              cd ..
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
