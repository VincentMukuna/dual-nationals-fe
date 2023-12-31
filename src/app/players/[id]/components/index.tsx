import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type SectionProps = {
  className?: string
  children: ReactNode
}

export function PlayerInfoSection({
  className,
  children,
  value,
  trigger,
}: SectionProps & { value: string; trigger: ReactNode }) {
  return (
    <AccordionItem value={value} className="shadow-md">
      <AccordionTrigger className="items-center p-3">{trigger}</AccordionTrigger>
      <AccordionContent className={cn('flex flex-col gap-6 p-1 py-4', className)}>
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}

export function PlayerInfoSectionTitle({ className, children }: SectionProps) {
  return <h2 className={cn('text-lg font-semibold', className)}>{children}</h2>
}
export function PlayerInfoSubSectionTitle({ className, children }: SectionProps) {
  return (
    <div className={cn('flex items-center gap-2 text-base font-semibold', className)}>
      {children}
    </div>
  )
}
export function PlayerInfoItem({ className, children }: SectionProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

export function PlayerInfoItemLabel({ className, children }: SectionProps) {
  return (
    <div className={cn('text-xs font-light tracking-wide text-gray-300/80', className)}>
      {children}
    </div>
  )
}
export function PlayerInfoItemStat({ className, children }: SectionProps) {
  return (
    <div className={cn('line-clamp-1 flex items-center gap-2 text-base', className)}>
      {children}
    </div>
  )
}
export function PlayerInfoItemStatGroup({ className, children }: SectionProps) {
  return (
    <div
      className={cn(
        `grid grid-cols-3 gap-2 
            [&_div]:rounded
            [&_div]:bg-gray-900/90
            [&_div]:p-1`,
        className
      )}
    >
      {children}
    </div>
  )
}
