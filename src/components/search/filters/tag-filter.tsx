'use client'
import { Tag, TagInput } from '@/components/tag/tag-input'
import { Label } from '@/components/ui/label'
import useURLParam from '@/lib/hooks/useURLParam'
import _ from 'lodash'
import { useEffect, useState } from 'react'

export default function TagFilter({ param }: { param: string }) {
  const { handleChange, searchParams, pathname, router } = useURLParam()
  const params = new URLSearchParams(searchParams)

  function getInitialParams() {
    let initialTags: Tag[] = []
    searchParams.forEach((val, key) => {
      if (key === param) {
        initialTags.push({ id: _.uniqueId(), text: val })
      }
    })
    return initialTags
  }

  const [tags, setTags] = useState<Tag[]>(getInitialParams())

  useEffect(() => {
    function handleTagChange(value: Tag[]) {
      params.delete(param)
      const query: string[] = []
      for (const tag of value) {
        query.push(`${param}=${tag.text}`)
      }
      const queryStr = query.join('&')

      router.replace(`${pathname}?${params.toString()}&${queryStr}`)
    }
    handleTagChange(tags)
  }, [tags, param, params, pathname, router])

  return (
    <div className="grid gap-2">
      <Label>Nationality</Label>
      <div className="rounded-md bg-gray-900 p-3">
        <TagInput
          size={'sm'}
          tags={tags}
          setTags={(newTags) => {
            setTags(newTags)
          }}
          maxTags={4}
          placeholder="Add a nationality"
          placeholderWhenFull="Maximum of 4 nationalities allowed"
          draggable
          className=" p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  )
}
