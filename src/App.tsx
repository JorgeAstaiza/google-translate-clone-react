import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Col, Container, Row, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import TextArea from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'

function App () {
  const { loading, fromLanguage, toLanguage, fromText, result, setFromLanguage, setToLanguage, interchangeLanguages, setFromText, setResult } = useStore()

  useEffect(() => {
    console.log(fromLanguage, toLanguage)

    if (fromText === '') return
    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [fromText])

  return (
    <Container fluid>
      <h3>Google Translate</h3>

      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea
            value={fromText}
            type={SectionType.From}
            onChange={setFromText}

          />
        </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowIcon/>
          </Button>
        </Col>

        <Col>
        <Stack gap={2}>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
           <TextArea
            loading={loading}
            value={result}
            type={SectionType.To}
            onChange={setResult}
          />
        </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
