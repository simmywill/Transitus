
interface FloatingCTAProps {
    onClick: () => void;
  }
  
  export default function FloatingCTA({ onClick }: FloatingCTAProps) {
    return (
      <button
        onClick={onClick}
        className="fixed bottom-6 right-6 z-40 rounded-full px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl shadow-cyan-600/30 transition-all hover:scale-105"
      >
        Schedule a Call
      </button>
    );
  }