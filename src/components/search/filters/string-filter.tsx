'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useURLParam from '@/lib/hooks/useURLParam'
import { useEffect, useState } from 'react'

export default function StringFilter({ label, param }: { label: string; param: string }) {
  const { handleChange: handleFilterInputChange, searchParams } = useURLParam()
  const [value, setValue] = useState(searchParams.get(param) || '')
  useEffect(() => {
    setValue(searchParams.get(param) || '')
  }, [param, searchParams])

  return (
    <div className="grid gap-2">
      <Label className="text-xs">{label}</Label>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          handleFilterInputChange(param, e.target.value)
        }}
      />
    </div>
  )
}
