import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Modal({ children, isOpen, onClose }) {
  if (isOpen) {
    return (
      <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in-up">
        <div className="bg-white dark:bg-gray-900 w-full sm:max-w-11/12 p-6 rounded-lg relative shadow-lg">
          {/* Botón cerrar */}
          <button
            className="absolute sm:-top-2 sm:-right-6 md:-top-8 md:-right-10 sm:text-4xl text-gray-500 hover:text-red-500 duration-500 cursor-pointer"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* Contenido del modal */}
          <div className="content">{children}</div>
        </div>
      </section>
    );
  }
}
