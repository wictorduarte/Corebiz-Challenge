import React, { FC, useState, FormEvent } from 'react';
import axios from 'axios';

const LeadForm: FC = () => {
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadEmail, setNewLeadEmail] = useState('');
  const [newLeadTel, setNewLeadTel] = useState('');
  const [formSend, setFormSend] = useState(false);

  function handleInputName(event: any) {
    setNewLeadName(event.target.value);
  }

  function handleInputEmail(event: any) {
    setNewLeadEmail(event.target.value);
  }

  function handleInputTel(event: any) {
    setNewLeadTel(event.target.value);
  }

  async function handleAddLead(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    await axios.post('https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads', {
      nome: newLeadName,
      email: newLeadEmail,
      telefone: newLeadTel
    }).then(() => {
      setFormSend(true);
    });
  }
  
  return(
    <div className="form-container">
      {!formSend && 
        <form onSubmit={handleAddLead}>
          <input type="text" name="nome" placeholder="Nome" value={newLeadName} required onChange={handleInputName} />
          <input type="email" name="email" placeholder="E-mail" value={newLeadEmail} required onChange={handleInputEmail} />
          <input type="tel" name="telefone" placeholder="Telefone" value={newLeadTel} required onChange={handleInputTel} />
          <input type="submit" value="Quero receber novidades" />
        </form>
      }
      {formSend && 
        <h4>Agradecemos o seu interesse!</h4>
      }
    </div>
  )
}

export default LeadForm;