import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  loading?: boolean
  value: string
  type: SectionType
  onChange: (value: string) => void
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traduccion'
}
export default function TextArea ({ loading, value, type, onChange }: Props) {
  const style = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <Form.Control
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      value={value}
      autoFocus={type === SectionType.From}
      style={style}
      onChange={handleChange}
    />
  )
}
