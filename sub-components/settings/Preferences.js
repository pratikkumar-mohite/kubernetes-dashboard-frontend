// import node module libraries
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';

const Preferences = () => {

  const timeZoneOptions = [
    { value: 'GMT +5.30', label: 'IST' },
    { value: 'GMT -5.00', label: 'EST' }
  ];

  const dateFormatOptions = [
    { value: '24', label: '24' },
    { value: '12', label: '12' }
  ];

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Preferences</h4>
          <p className="mb-0 fs-5 text-muted">Configure your preferences </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card id="preferences">
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Preferences</h4>
            </div>
            <Form>

              {/* Time Zone */}
              <Row className="mb-3">
                <Form.Label className="col-md-4" htmlFor="timeZone">Time Zone</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control as={FormSelect}
                    defaultselected='GMT +5.30'
                    placeholder="Select Langauge"
                    id="timeZone"
                    options={timeZoneOptions} />
                </Col>
              </Row>

              {/* Date Format */}
              <Row className="mb-3">
                <Form.Label className="col-md-4" htmlFor="dateFormat">Date Format</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control as={FormSelect}
                    defaultselected='No Preference'
                    placeholder="Select Langauge"
                    id="dateFormat"
                    options={dateFormatOptions} />
                </Col>
              </Row>

              {/* Default*/}
              <Row className="mb-3">
                <Form.Label className="col-md-4" htmlFor="default">Default</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check id="customRadioInline1" className="form-check-inline" >
                    <Form.Check.Input type="radio" name="customRadioInline" />
                    <Form.Check.Label>On</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id="customRadioInline2" className="form-check-inline"  >
                    <Form.Check.Input type="radio" name="customRadioInline" />
                    <Form.Check.Label>Off</Form.Check.Label>
                  </Form.Check>
                </Col>
              </Row>

              {/* Choose option default */}
              <Row className="mb-3">
                <Form.Label as={Col} md={4} htmlFor="default">Choose option default</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Check id="customChecktellMe" >
                    <Form.Check.Input type="checkbox" name="customChecktellMe" />
                    <Form.Check.Label>one</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id="customOpenEmail"  >
                    <Form.Check.Input type="checkbox" name="customOpenEmail" />
                    <Form.Check.Label>two</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id="customShowDefault"  >
                    <Form.Check.Input type="checkbox" name="customShowDefault" />
                    <Form.Check.Label>three</Form.Check.Label>
                  </Form.Check>
                </Col>

                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-2">
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Col>

              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Preferences