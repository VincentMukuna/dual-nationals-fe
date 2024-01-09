'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import useURLParam from '@/lib/hooks/useURLParam'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type option = { label: string; value: string }

export default function RadioFilter({
  label,
  param,
  options,
}: {
  label: string
  param: string
  options: option[]
}) {
  const { handleChange: handleFilterInputChange, searchParams } = useURLParam()
  const [value, setValue] = useState<option>(options[0])
  // useEffect(() => {
  //   setValue(searchParams.get(param) || '')
  // }, [param, searchParams])
  return (
    <div className="grid gap-2">
      <Label className="text-xs">{label}</Label>
      <RadioGroup
        className="flex flex-wrap "
        defaultValue={options[0].value}
        onValueChange={(val) => {
          setValue(options.find((opt) => opt.value === val)!)
        }}
      >
        {options.map((option) => (
          <RadioGroupItem
            className={cn({ 'border-none bg-primary-700': value.value === option.value })}
            value={option.value}
            key={option.value}
          >
            {option.label}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  )
}
