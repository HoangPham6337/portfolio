import { useTranslation } from "react-i18next";
import * as React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative transform rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 scale-100"
           style={{ backgroundColor: 'var(--base-color)' }}
      >
        {/* Success Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--highlight-green)' }}>
          <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Modal Content */}
        <h3 className="mt-5 text-2xl font-bold leading-6" style={{ color: 'var(--text-color)' }} id="modal-title">
          {t("contact.success_title")}
        </h3>
        <div className="mt-3">
          <p className="text-md" style={{ color: 'var(--secondary-text)' }}>
            {t("contact.success_message")}
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg px-6 py-3 font-semibold transition-all cursor-pointer"
            style={{
              backgroundColor: 'var(--highlight-green)',
              color: 'var(--base-variant)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--highlight-green)'}
          >
            {t("contact.success_button")}
          </button>
        </div>
      </div>
    </div>
  );
};