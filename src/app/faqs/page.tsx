import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import faqs from '@/data/faqs'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Frequently Asked Questions' })

export default function Faqs() {
  return (
    <div className="mx-auto mt-8 flex flex-col gap-6 md:max-w-xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">FAQs</h1>
        <h2 className="text-lg leading-6">We have most questions covered for you</h2>
      </div>

      <div className="flex flex-col gap-3">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-6 text-gray-300/90"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="px-2 ">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
