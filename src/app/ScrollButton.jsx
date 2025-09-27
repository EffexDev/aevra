export default function ScrollButton() {
    return (
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-3 z-50 sm:right-8 p-2 bg-gray-100/30 hover:bg-gray-200/40 dark:bg-gray-700/30 dark:hover:bg-gray-600/40 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 cursor-pointer border border-gray-400"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    )
}