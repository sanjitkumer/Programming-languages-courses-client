import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is FAQ?</Accordion.Header>
        <Accordion.Body>
        A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is React?</Accordion.Header>
        <Accordion.Body>
        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQ;