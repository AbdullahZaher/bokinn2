import React from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  items: FaqItem[];
};

const FaqSection: React.FC<FaqSectionProps> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 mt-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-xl px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((item, idx) => (
          <Collapsible key={idx} open={openIndex === idx} onOpenChange={() => handleToggle(idx)}>
            <CollapsibleTrigger
              className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-xl shadow group focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-content-${idx}`}
              id={`faq-trigger-${idx}`}
            >
              <span className="text-lg font-semibold text-gray-900 text-left">{item.question}</span>
              <ChevronDown
                className={`ml-4 h-5 w-5 text-gray-500 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </CollapsibleTrigger>
            <CollapsibleContent
              id={`faq-content-${idx}`}
              aria-labelledby={`faq-trigger-${idx}`}
              className="overflow-hidden transition-all"
            >
              <div className="px-6 pb-4 pt-2 text-gray-700 animate-fade-in">
                {item.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

export default FaqSection; 