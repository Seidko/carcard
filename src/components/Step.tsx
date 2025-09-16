import {} from 'react'

interface StepProps {
  id: string
  name: string
}

export default function Step({ name }: StepProps) {
  return <>
    <span>{name}</span>
  </>
}
