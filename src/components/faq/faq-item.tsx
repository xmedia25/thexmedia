import React, { useState } from "react";

// prop type
type IProps = {
  item: {id:number;question: string; answer: string};
};

export default function FaqItem({ item }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-items">
      <h2 className="accordion-header">
        <button
          className={`accordion-buttons ${!isOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`collapse-${item.id}`}
        >
          {item.question}
          <span className="accordion-icon"></span>
        </button>
      </h2>
      <div
        id={`collapse-${item.id}`}
        className={`accordion-collapse ${isOpen ? 'collapse show' : 'collapse'}`}
      >
        <div className="accordion-body">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
