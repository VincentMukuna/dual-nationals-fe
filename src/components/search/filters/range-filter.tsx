'use client'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import useURLParam from '@/lib/hooks/useURLParam'
import _ from 'lodash'

export default function RangeFilter({
  label,
  param,
  min,
  max,
  defaults,
  units,
}: {
  label: string
  param: string
  units: string
  min: number
  max: number
  defaults: [number, number]
}) {
  const { handleMultipleChanges, searchParams } = useURLParam()

  function handleRangeChange(min: number, max: number) {
    handleMultipleChanges([`${param}_gte`, min.toString()], [`${param}_lte`, max.toString()])
  }
  return (
    <div className="grid gap-4">
      <Label>{label}</Label>
      <Slider
        defaultValue={[
          _.parseInt(searchParams.get(`${param}_gte`) || '') || defaults[0],
          _.parseInt(searchParams.get(`${param}_lte`) || '') || defaults[1],
        ]}
        min={min}
        max={max}
        minStepsBetweenThumbs={1}
        onValueChange={(value) => {
          handleRangeChange(value[0], value[1])
        }}
      />
      <div
        className="flex justify-between text-xs 
                      [&_div]:flex
                      [&_div]:gap-3
                      [&_div]:rounded-md
                      [&_div]:bg-gray-800
                      [&_div]:p-2
                      
                      "
      >
        <div>
          {searchParams.get(`${param}_gte`) || defaults[0]}
          <span className="text-gray-400">{units}</span>
        </div>
        <div>
          {searchParams.get(`${param}_lte`) || defaults[1]}
          <span className="text-gray-400">{units}</span>
        </div>
      </div>
    </div>
  )
}
