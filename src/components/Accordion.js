import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title,count, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item border-b border-gray-200">
      <button
        className="accordion-title flex justify-between items-center w-full py-4 px-6 text-left text-xl font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title} ({count}) </span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="accordion-icon" />
      </button>
      {isOpen && <div className="accordion-content p-6 bg-white">{children}</div>}
    </div>
  );
};

export default Accordion;