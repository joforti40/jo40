import { Link } from "react-router-dom";
import { ctfList } from "../data/writeups.js";

export default function Writeups() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10"
      style={{
        backgroundImage: "url('/xp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[650px] max-w-[90vw] shadow-2xl border border-gray-400 relative z-10">
        {/* Title bar */}
        <div className="bg-blue-600 text-white px-3 py-1 flex justify-between items-center text-sm">
          <span>C:\Users\jo40\writeups</span>

          <div className="flex gap-2 text-black">
            <div className="bg-gray-200 w-4 h-4 text-center text-xs">_</div>
            <div className="bg-gray-200 w-4 h-4 text-center text-xs">□</div>
            <div className="bg-red-500 w-4 h-4 text-center text-xs text-white">X</div>
          </div>
        </div>

        {/* Toolbar ala Windows Explorer */}
        <div className="bg-[#ece9d8] border-b border-gray-400 px-3 py-1 text-xs text-black flex gap-4">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Favorites</span>
          <span>Tools</span>
          <span>Help</span>
        </div>

        {/* Address bar */}
        <div className="bg-[#ece9d8] border-b border-gray-400 px-3 py-2 flex items-center gap-2 text-xs text-black">
          <span className="text-gray-600">Address</span>
          <div className="flex-1 border border-gray-500 bg-white px-2 py-1 font-mono">
            C:\Users\jo40\writeups
          </div>
        </div>

        {/* Body */}
        <div className="bg-[#ece9d8] p-4 text-black">
          {ctfList.length === 0 ? (
            <div className="border border-gray-500 bg-white p-4 font-mono text-sm">
              <p>This folder is empty.</p>
              <p className="mt-2 text-gray-600">
                (tambahkan CTF kamu di src/data/writeups.js)
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {ctfList.map((ctf) => (
                <div
                  key={ctf.name}
                  className="border border-gray-500 bg-white shadow-sm"
                >
                  {/* Nama CTF — header folder */}
                  <div className="flex items-center gap-2 border-b border-gray-300 bg-[#f5f4ea] px-3 py-2">
                    <span className="text-lg">📁</span>
                    <div>
                      <span className="font-bold text-sm">{ctf.name}</span>
                      {ctf.rank && (
                        <p className="text-xs text-gray-600">{ctf.rank}</p>
                      )}
                    </div>
                  </div>

                  {/* Link gdrive */}
                  <div className="px-3 py-2 font-mono text-sm space-y-1">
                    {ctf.links.map((link) => (
                      <p key={link.label} className="flex items-center gap-2">
                        <span>📄</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0000cc] underline hover:text-blue-600"
                        >
                          {link.label}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mt-4 font-mono text-sm text-black">
            <Link to="/" className="text-[#0000cc] underline hover:text-blue-600">
              cd ..
            </Link>
          </p>
        </div>

        {/* Status bar ala Explorer */}
        <div className="bg-[#ece9d8] border-t border-gray-400 px-3 py-1 text-xs text-gray-700">
          {ctfList.length} object(s)
        </div>
      </div>
    </main>
  );
}
