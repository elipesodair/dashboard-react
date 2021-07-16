import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form, } from 'react-bootstrap';
import LabTabela from './LabTabela';



function LabTestesDois({ escolhaData }) {

    const [ciclo, setCiclo] = useState([])


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [actualEndDate, setActualEndDate] = useState(false)
    const [actualStartDate, setActualStartDate] = useState(false)




    const [status, setStatus] = useState("Todos")

    useEffect(() => {
        axios.get(`${escolhaData.key}/testresults`, {
            auth: { username: '', password: '', }
        })
            .then(res => {
                console.log(res.data);
                setCiclo(res.data);
            })
            .catch(error => {
                console.log(`Deu erro =>  ${error}`);
            })
    }, [escolhaData])

    function testeRelatorio() {
        console.log('Testando Relatório');
        handleClose();
        console.log(`Primeiro item ${actualEndDate}`);
        console.log(`Primeiro item ${actualStartDate}`);
    }


    function filtraStatus(valor) {
        setStatus(valor)
    }

    useEffect(() => {
        console.log('Effect do status ' + status);
    })



    function consultaCliente(fabricante) {
        var escolhaBusca = fabricante
        console.log(escolhaBusca);
    }



    return (
        <div classNameName="mt-4">
            <Button
                className="mb-4"
                variant="primary"
                size="md"
                active
            
                onClick={handleShow}
            >
                Gerar Relatório
            </Button>
            <fieldset>
                <Form.Group >
                    <Form.Check className="text-success"
                        type="radio"
                        onClick={() => { filtraStatus('Pass') }}
                        inline
                        label="Aprovado"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check className="text-danger"
                        type="radio"
                        onClick={() => { filtraStatus('Fail') }}
                        inline
                        label="Reprovado"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check className="text-warning"
                        type="radio"
                        onClick={() => { filtraStatus('Not Executed') }}
                        inline
                        label="Em Execução"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                    <Form.Check className="text-primary"
                        type="radio"
                        onClick={() => { filtraStatus('Todos') }}
                        inline
                        label="Todos"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />

                </Form.Group>
            </fieldset>

            {
                status === "Pass"
                    ? <LabTabela valor="Pass" escolhaData={escolhaData} />
                    : <p></p>
            }
            {
                status === "Fail"
                    ? <LabTabela valor="Fail" escolhaData={escolhaData} />

                    : <p></p>
            }
            {
                status === "Not Executed"
                    ? <LabTabela valor="Not Executed" escolhaData={escolhaData} />
                    : <p></p>
            }
            {
                status === "Todos"
                    ? <LabTabela valor="Todos" escolhaData={escolhaData} />

                    : <p></p>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Selecione os itens</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">Selecione os itens que deseja inserir no relatório!
                    <Form>
                        <Form.Check
                            type="switch"
                            id="actualEndDate"
                            label="actualEndDate"
                            onChange={(e) => { setActualEndDate(e.target.checked) }}
                        />
                        <Form.Check
                            type="switch"
                            id="actualStartDate"
                            label="actualStartDate"
                            onChange={(e) => { setActualStartDate(e.target.checked) }}
                        />
                        <Form.Check
                            type="switch"
                            id="assignedTo"
                            label="assignedTo"
                        />
                        <Form.Check
                            type="switch"
                            id="executedBy"
                            label="executedBy"
                        />
                        <Form.Check
                            type="switch"
                            id="executionDate"
                            label="executionDate"
                        />
                        <Form.Check
                            type="switch"
                            id="id"
                            label="id"
                        />
                        <Form.Check
                            type="switch"
                            id="key"
                            label="key"
                        />
                        <Form.Check
                            type="switch"
                            id="scriptResults-description"
                            label="scriptResults-description"
                        />
                        <Form.Check
                            type="switch"
                            id="scriptResults-expectedResult"
                            label="scriptResults-expectedResult"
                        />
                        <Form.Check
                            type="switch"
                            id="scriptResults-status"
                            label="scriptResults-status"
                        />
                        <Form.Check
                            type="switch"
                            id="scriptResults-testData"
                            label="scriptResults-testData"
                        />
                        <Form.Check
                            type="switch"
                            id="status"
                            label="status"
                        />
                        <Form.Check
                            type="switch"
                            id="testCaseKey"
                            label="testCaseKey"
                        />
                        <Form.Check
                            type="switch"
                            id="userKey"
                            label="userKey"
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={testeRelatorio}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LabTestesDois;