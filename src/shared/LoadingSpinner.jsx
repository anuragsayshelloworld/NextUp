export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-800 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
