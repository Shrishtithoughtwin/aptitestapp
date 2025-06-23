import React from "react";
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm pointer-events-none"></div>
      <div className="relative bg-white p-8 shadow-lg w-96 text-center z-60">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-16 rounded-full border-4 border-orange-400 flex items-center justify-center">
            <span className="text-orange-400 text-3xl font-bold">!</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Do you want to submit?
        </h2>
        <div className="flex justify-center gap-6">
          <button
            className="bg-green-500 text-white px-6 py-2  hover:bg-green-600 focus:outline-none"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-red-500 text-white px-6 py-2  hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
