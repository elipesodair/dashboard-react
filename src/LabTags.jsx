import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import LabBotao from './LabBotao';


function LabTags({ cicloDeTeste, escolhaData, status }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {
                status === "Pass"
                    ? escolhaData.filter(escolha => escolha.status === "Pass").map((t, index) => (
                        <LabBotao index={index} valor={t} corBotao={"success"} cicloDeTeste={cicloDeTeste} />
                    ))
                    : <></>
            }
            {
                status === "Fail"
                    ? escolhaData.filter(escolha => escolha.status === "Fail").map((t, index) => (
                        <LabBotao index={index} valor={t} corBotao={"danger"} cicloDeTeste={cicloDeTeste} />
                    ))
                    : <></>
            }
            {
                status === "Not Executed"
                    ? escolhaData.filter(escolha => escolha.status === "Not Executed").map((t, index) => (
                        <LabBotao index={index} valor={t} corBotao={"warning"} cicloDeTeste={cicloDeTeste} />
                    ))
                    : <></>
            }
            {
                status === "Todos"
                    ? escolhaData.map((t, index) => (

                        <LabBotao index={index} valor={t} corBotao={"warning"} cicloDeTeste={cicloDeTeste} />

                    ))
                    : <></>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>LABPOS</Modal.Title>
                </Modal.Header>
                <Modal.Body>Selecione os itens que deseja inserir no relatório!
                    <Form>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LabTags;