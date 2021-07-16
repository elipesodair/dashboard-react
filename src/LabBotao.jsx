import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form, } from 'react-bootstrap';


function LabBotao({ index, valor, cicloDeTeste }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function teste() {
        const comment = document.getElementById("formComment").value;
        const status = document.getElementById("formStatus").value;
        printarValores(comment, status)
        handleClose();
    }

    function printarValores(v1, v2) {
        console.log(v1);
        console.log(v2);
        console.log(cicloDeTeste);
        console.log(valor.testCaseKey);
        axios.put(`rest/atm/1.0/testrun/${cicloDeTeste}/testcase/${valor.testCaseKey}/testresult`, {
            auth: { username: 'elipes', password: '1=2villeiN', },
            data: {
                "status": "Pass",
            }
        })
            .then(res => {
                console.log('Deu certo!' + res);
            })
            .catch(error => {
                console.log(`Deu erro =>  ${error}`);
            })
    }

    return (
        <>
            <div className="table-responsive">
                <table
                    className="table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                >
                    

                    <tr key={index}>
                        <td className="">
                            <input type="checkbox" />
                        </td>
                        <td
                            onClick={handleShow}
                            style={{ cursor: "pointer" }}
                            className="campo-testecase">{valor.testCaseKey}
                        </td>
                        <td
                            className="campo-id">{valor.id}
                        </td>
                        <td
                            className="campo-endate">{valor.actualStartDate}  
                        </td>
                        <td className="campo-endate">{valor.actualEndDate}    
                        </td>
                        <td
                            className="campo-status">{valor.status}
                        </td>
                    </tr>
                </table>

            </div>

            <Modal show={show} onHide={handleClose} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>{valor.testCaseKey}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>   <h3 className="card-subtitle">Passo 1</h3>
                        <Form.Group controlId="formTestData">
                            <Form.Label>Dados do Teste</Form.Label>
                            <Form.Control as="textarea" rows={1} readOnly defaultValue={valor.scriptResults[0].testData} />
                        </Form.Group>
                        <Form.Group controlId="formExpectedResult">
                            <Form.Label>Resultado esperado</Form.Label>
                            <Form.Control as="textarea" rows={3} readOnly defaultValue={valor.scriptResults[0].expectedResult} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} readOnly defaultValue={valor.scriptResults[0].description} />
                        </Form.Group>
                        <Form.Group controlId="formComment">
                            <Form.Label>Comentário</Form.Label>
                            <Form.Control as="textarea" rows={1} defaultValue={valor.scriptResults[0].comment} />
                        </Form.Group>
                        <Form.Group controlId="formStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="textarea" rows={1} defaultValue={valor.scriptResults[0].status} />
                        </Form.Group>
                        {valor.scriptResults.length >= 1
                            ? <>
                                <h3 className="card-subtitle">Passo 2</h3>
                                <Form.Group controlId="formTestData">
                                    <Form.Label>Dados do Teste</Form.Label>
                                    <Form.Control as="textarea" rows={1} readOnly defaultValue={valor.scriptResults[0].testData} />
                                </Form.Group>
                                <Form.Group controlId="formExpectedResult">
                                    <Form.Label>Resultado esperado</Form.Label>
                                    <Form.Control as="textarea" rows={3} readOnly defaultValue={valor.scriptResults[0].expectedResult} />
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control as="textarea" rows={3} readOnly defaultValue={valor.scriptResults[0].description} />
                                </Form.Group>
                                <Form.Group controlId="formComment">
                                    <Form.Label>Comentário</Form.Label>
                                    <Form.Control as="textarea" rows={1} defaultValue={valor.scriptResults[0].comment} />
                                </Form.Group>
                                <Form.Group controlId="formStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control as="textarea" rows={1} defaultValue={valor.scriptResults[0].status} />
                                </Form.Group>
                            </>
                            : <></>}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                        </Button>
                    <Button variant="primary" onClick={teste}>
                        Confirmar
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LabBotao;