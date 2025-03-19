import { Faq } from "@/components/ui/faq";

export function FaqDemo() {
  return (
    <Faq
      heading="Frequently Asked Questions"
      description="Find answers to common questions about Bookr. Can't find what you're looking for? Contact our support team."
      supportHeading="Still have questions?"
      supportDescription="Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance."
      supportButtonText="Contact Support"
      supportButtonUrl="/contact"
    />
  );
} 