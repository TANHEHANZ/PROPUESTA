import { useDrawer } from "../../../aplicacion/core/hoocks/useDrawer";

export const Drawer = () => {
  const { toggle, state } = useDrawer();
  const { isVisible, content, title } = state;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      ></div>

      <article
        className={`w-[400px] bg-white fixed top-0 right-0 h-[100dvh] z-50 shadow-md transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } p-4`}
      >
        <header className="flex justify-between items-center">
          <h4 className="text-xl font-bold">{title && title}</h4>
          <button onClick={toggle} className="text-xl text-gray-500">
            x
          </button>
        </header>
        <div className="py-2 overflow-y-auto h-full">{content && content}</div>
      </article>
    </>
  );
};
