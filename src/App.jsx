import { Routes, Route, Link } from "react-router-dom";
import Writeups from "./pages/Writeups.jsx";
import WriteupDetail from "./pages/WriteupDetail.jsx";

export default function App() {
  const links = [
    { label: "writeups", href: "/writeups" },
    { label: "discord", href: "https://discord.com/users/275580160873594882", external: true },
  ];

  const popups = [
    { top: "8%", left: "38%" },
    { top: "18%", left: "68%" },
    { top: "74%", left: "58%" },
    { top: "5%", left: "86%" },
  ];

  const ErrorBox = ({ top, left }) => (
    <div
      className="absolute w-[300px] border border-[#0a2f7a] bg-[#ece9d8] shadow-xl overflow-hidden"
      style={{ top, left }}
    >
      <div className="flex items-center justify-between bg-[linear-gradient(to_bottom,#2a7fff,#0b59d8)] px-2 py-1 text-white text-sm">
        <span>Local Disk (C:)</span>
        <div className="w-4 h-4 bg-red-500 text-white text-center text-xs">X</div>
      </div>

      <div className="p-4 flex gap-3 items-start">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
          ×
        </div>

        <div className="text-sm text-black">
          <p>C:\Restricted is not accessible.</p>
          <p>Access is denied.</p>

          <div className="mt-3 flex justify-center">
            <button className="border border-gray-600 bg-[#e6e2d3] px-4 py-1 text-sm shadow">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
        backgroundImage: "url('/xp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {popups.map((popup, index) => (
        <ErrorBox key={index} top={popup.top} left={popup.left} />
      ))}

      <div className="absolute top-[2%] left-[1%] w-[300px] border border-[#0a2f7a] bg-[#ece9d8] shadow-xl overflow-hidden">
        <div className="flex items-center justify-between bg-[linear-gradient(to_bottom,#2a7fff,#0b59d8)] px-2 py-1 text-white text-sm">
          <span>Local Disk (C:)</span>
          <div className="w-4 h-4 bg-red-500 text-white text-center text-xs">X</div>
        </div>
        <div className="p-4 flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">×</div>
          <div className="text-sm text-black">
            <p>C:\Restricted is not accessible.</p>
            <p>Access is denied.</p>
            <div className="mt-3 flex justify-center">
              <button className="border border-gray-600 bg-[#e6e2d3] px-4 py-1 text-sm shadow">OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6%] left-[4%] w-[300px] border border-[#0a2f7a] bg-[#ece9d8] shadow-xl overflow-hidden">
        <div className="flex items-center justify-between bg-[linear-gradient(to_bottom,#2a7fff,#0b59d8)] px-2 py-1 text-white text-sm">
          <span>Local Disk (C:)</span>
          <div className="w-4 h-4 bg-red-500 text-white text-center text-xs">X</div>
        </div>
        <div className="p-4 flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">×</div>
          <div className="text-sm text-black">
            <p>C:\Restricted is not accessible.</p>
            <p>Access is denied.</p>
            <div className="mt-3 flex justify-center">
              <button className="border border-gray-600 bg-[#e6e2d3] px-4 py-1 text-sm shadow">OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[650px] shadow-2xl border border-gray-400 relative z-10">
        <div className="bg-blue-600 text-white px-3 py-1 flex justify-between items-center text-sm">
          <span>C:\WINDOWS\system32\cmd.exe</span>

          <div className="flex gap-2 text-black">
            <div className="bg-gray-200 w-4 h-4 text-center text-xs">_</div>
            <div className="bg-gray-200 w-4 h-4 text-center text-xs">□</div>
            <div className="bg-red-500 w-4 h-4 text-center text-xs text-white">X</div>
          </div>
        </div>

        <div className="bg-black text-green-400 font-mono p-6 space-y-5 text-lg leading=">
          <p>C:\Users\jo40&gt; whoami</p>
          <p className="ml-4 text-white">jo40</p>

          <p>C:\Users\jo40&gt; interests</p>
          <p className="ml-4">ctf · web exploitaion · forensic · security</p>

          <p>C:\Users\jo40&gt; links</p>

          <div className="ml-4 flex gap-6 underline">
            {links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.href} className="underline hover:text-green-300">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
          </main>
        }
      />
      <Route path="/writeups" element={<Writeups />} />
      <Route path="/writeups/:slug" element={<WriteupDetail />} />
    </Routes>
  );
}
