'use client'
import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import useFieldValue from '@/lib/hooks/useFieldValue'

export function ComboBox({
  values,
  label,
  name,
}: {
  values: { label: string; value: string }[]
  label: string
  name: string
}) {
  const { value, setValue } = useFieldValue(name)
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-12 w-full justify-between rounded-md"
        >
          {value ? values.find((item) => item.value === value)?.label : `Select a ${name}`}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full" sideOffset={0}>
        <Command>
          <CommandInput
            placeholder={`Search a ${name}`}
            className="border-b-none dark:border-none"
          />
          <CommandEmpty>{`No ${name} found.`}</CommandEmpty>
          <CommandGroup>
            {values.map((item, i) => (
              <CommandItem
                key={i}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn('mr-2 h-4 w-4', value === item.value ? 'opacity-100' : 'opacity-0')}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
