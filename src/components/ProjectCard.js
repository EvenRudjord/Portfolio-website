import { Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, detalier, buttons = [] }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleOpen} style={{ cursor: 'pointer' }}>
          <img src={imgUrl} alt={title} style={{ width: '100%' }} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        contentClassName="custom-modal"
      >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100 text-center fw-bold" style={{ color: 'white' }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-description" dangerouslySetInnerHTML={{ __html: detalier }}></p>

          {/* Knappene legges til her */}
          {buttons.length > 0 && (
            <div className='artikkelKnapper'>
              {buttons.map(({ tittel, knappDirection }, idx) => (
                <Button
                  key={idx}
                  onClick={() => window.open(knappDirection, '_blank')}
                  className=""
                >
                  {tittel}
                </Button>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button variant="dark" onClick={handleClose} className="px-4 py-2 rounded-pill">
            Lukk
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
