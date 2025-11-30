
import resumePdf from "../assets/resume.pdf";


export default function ResumePage() {
  return (
    <div className="w-full min-h-screen px-4 py-16 flex flex-col items-center stars">
      
      {/* Top Download Button */}
      <a
        href={resumePdf}
        download
        className="px-6 py-2 mb-8 rounded-lg bg-[var(--card)] border border-[rgba(255,255,255,0.1)] text-sm font-semibold hover:opacity-80 no-underline"
      >
        ⬇ Download CV
      </a>

      {/* Resume Container */}
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-3xl h-[90vh] overflow-hidden border border-gray-300">
        <iframe
          src={resumePdf}
          className="w-full h-full"
          title="Resume PDF"
        ></iframe>
      </div>

      {/* Bottom Download Button */}
      <a
        href={resumePdf}
        download
        className="px-6 py-2 mt-8 rounded-lg bg-[var(--card)] border border-[rgba(255,255,255,0.1)] text-sm font-semibold hover:opacity-80 no-underline"
      >
        ⬇ Download CV
      </a>
    </div>
  );
}