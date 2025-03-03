import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-center py-4 mt-10">
      <div className="flex justify-center gap-6 mt-2">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/xuan-hoang-pham"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          {t("footer.linkedin")}
        </a>

        <a
          href="https://github.com/HoangPham6337"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          {t("footer.github")}
        </a>

        {/* Email */}
        <a
          href="mailto:hoangphamat0407@gmail.com"
          className="hover:text-green-400 transition"
        >
          {t("footer.email")}
        </a>
      </div>

      <p>{t("footer.copyright")}</p>
    </footer>
  );
};