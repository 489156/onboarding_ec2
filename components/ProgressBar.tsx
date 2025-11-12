interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-[#0e2046] to-[#1a3566] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
