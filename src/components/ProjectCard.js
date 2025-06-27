import { Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, detalier, extraImages = [], buttons = [] }) => {
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
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem', justifyContent: 'center' }}>
              {buttons.map(({ tittel, knappDirection }, idx) => (
                <Button
                  key={idx}
                  variant="primary"
                  onClick={() => window.open(knappDirection, '_blank')}
                  className="px-3 py-1"
                >
                  {tittel}
                </Button>
              ))}
            </div>
          )}

          {extraImages.length > 0 && (
            <div
              className="extra-images"
              style={{
                marginTop: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center'
              }}
            >
              {extraImages.map((url, idx) => {
                const isLastOddImage = extraImages.length % 2 !== 0 && idx === extraImages.length - 1;
                return (
                  <img
                    key={idx}
                    src={url}
                    alt={`${title} ekstra bilde ${idx + 1}`}
                    style={{
                      width: isLastOddImage ? '100%' : '48%',
                      borderRadius: '6px',
                      objectFit: 'cover'
                    }}
                  />
                );
              })}
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
