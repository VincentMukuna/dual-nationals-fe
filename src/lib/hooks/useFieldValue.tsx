import { useFormContext } from 'react-hook-form'

export default function useFieldValue(name: string) {
  const { setValue: _setValue, getValues } = useFormContext()

  const value = getValues(name)
  const setValue = (val: string) => {
    _setValue(name, val)
  }

  return { value, setValue }
}
