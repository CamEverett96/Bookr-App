import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What is Bookr?",
    answer:
      "Bookr is a modern scheduling platform designed to streamline your calendar management and make booking meetings effortless.",
  },
  {
    id: "faq-2",
    question: "How do I get started with Bookr?",
    answer:
      "Getting started is easy! Sign up for a free account, connect your calendar, and start sharing your booking link with others.",
  },
  {
    id: "faq-3",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on all our plans. No credit card required to start.",
  },
  {
    id: "faq-4",
    question: "Can I customize my booking page?",
    answer:
      "Absolutely! You can customize your booking page with your brand colors, logo, and availability preferences.",
  },
  {
    id: "faq-5",
    question: "What calendar systems do you support?",
    answer: "We support Google Calendar, Microsoft Outlook, Apple Calendar, and more.",
  },
  {
    id: "faq-6",
    question: "How can I contact support?",
    answer:
      "Our support team is available 24/7 via email at support@bookr.com or through our in-app chat.",
  },
  {
    id: "faq-7",
    question: "Do you offer team scheduling?",
    answer:
      "Yes, our Professional and Business plans include team scheduling features with shared calendars and round-robin booking.",
  },
];

const Faq = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about Bookr. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "/contact",
}: Faq3Props) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl space-y-12">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 text-foreground">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center md:rounded-2xl md:p-8 lg:p-10 border border-purple-200 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarFallback className="bg-purple-100 text-purple-600">SB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-pink-100 text-pink-600">AV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-3 max-w-3xl font-semibold lg:text-xl text-foreground">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href={supportButtonUrl}>
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq }; 