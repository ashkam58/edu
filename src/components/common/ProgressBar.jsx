// src/components/common/ProgressBar.jsx
const ProgressBar = ({ percentage }) => {
  const safePercentage = Math.max(0, Math.min(100, percentage));
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
      <div
        className="bg-brand-secondary h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${safePercentage}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;