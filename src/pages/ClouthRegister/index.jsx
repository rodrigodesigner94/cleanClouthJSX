import { Form, Button, Table } from 'react-bootstrap';
import styles from './register.module.css';
import data from '../../assets/dataBase';
import { useState, useEffect } from 'react';


function ClouthRegt(){
    const checkList = ['Roupa Privativa', 'Roupa Infantil', 'Lençol'];
    const [matricula, setMatricula] = useState('');    
    const [time, setTime] = useState();
    const [idV, setIdV] = useState();
    const [nameV, setNameV] = useState();
    const [sectionV, setSectionV] = useState();
    const [itemV, setItemV] = useState();
    const[inputItem, setInputItem] = useState();

   

    const [info, setInfo] = useState();
    useEffect(() =>{
        setInfo(data);
        
        
      }, []);

     
      console.log(matricula)     
    

      

    return(        
        <div className={styles.container}>
            <Form >

            {checkList.map((item) => (
        <div key={`${item}`} className="mb-3">
          <Form.Check // prettier-ignore
            type='checkbox'
            value={`${item}`}
            label={`${item}`}
            onClick={value => setInputItem(value.target.value)}            
          />

          
        </div>
      ))}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control type="number" placeholder="Informe a matricula" onChange={value => setMatricula(value.target.value)}/>                   
                </Form.Group>                              
                <Button variant="primary" onClick={() => filterInfo()}>
                    Registrar
                </Button>
        </Form>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Data e Hora</th>
          <th>Matricula</th>
          <th>Nome</th>
          <th>Unidade</th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{time}</td>
          <td>{idV}</td>
          <td>{nameV}</td>
          <td>{sectionV}</td>
          <td>{itemV}</td>
        </tr>
       
        
      </tbody>
    </Table>   

        </div>
        
    )
    function filterInfo () {        
        info.map((i)=>{
            if(i.id == matricula){
            setIdV(i.id);
            setNameV(i.name);
            setSectionV(i.section);
            setTime(new Date().toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' } ).toString());
            setItemV(inputItem);
            

            }
            
            

      })
      }

}
export default ClouthRegt;