import React from 'react'

const Resume = () => {
    const PUBLIC_RESUME = "/resume.pdf"; 
  return (
    
       <div
      className="
        w-full min-h-screen 
        px-4 sm:px-6 lg:px-10 
        py-12 sm:py-16 
        flex flex-col items-center
      "
    >
      {/* Top Download Button */}
      <a
        href={PUBLIC_RESUME}
        download
        className="
          px-6 py-2 mb-6 sm:mb-8
          rounded-lg 
          bg-[var(--card)]
          border border-[rgba(255,255,255,0.1)]
          text-sm font-semibold no-underline
          hover:opacity-80
        "
      >
        ⬇ Download CV
      </a>

      {/* Resume Viewer */}
      <div
        className="
          w-full max-w-3xl 
          rounded-xl 
          overflow-hidden 
          bg-white/95 text-black 
          dark:bg-white/10 dark:text-white 
          shadow-xl 
          border border-gray-300 dark:border-white/10
        "
      >
        <div className="w-full aspect-[8.5/11] sm:aspect-[16/11]">
          <iframe
            src={PUBLIC_RESUME}
            title="Resume PDF"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Download Button */}
      <a
        href={PUBLIC_RESUME}
        download
        className="
          px-6 py-2 mt-6 sm:mt-8
          rounded-lg 
          bg-[var(--card)]
          border border-[rgba(255,255,255,0.1)]
          text-sm font-semibold no-underline
          hover:opacity-80
        "
      >
        ⬇ Download CV
      </a>
    </div>
  )
}

export default Resume
