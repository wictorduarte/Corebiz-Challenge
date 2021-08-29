import React, { FC, useState, useEffect } from 'react';
import { Layout, PageBlock } from 'vtex.styleguide';
import axios, { AxiosResponse } from 'axios';
import styles from './styles.css';

interface LeadData {
  id: string;
  nome: string;
  email: string;
  telefone: string | number;
  createdAt: string;
  isClient: boolean;
}

const AdminLeadProspect: FC = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);

  useEffect(() => {
    axios.get('https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads')
    .then((res: AxiosResponse) => {
      setLeads([...res.data]);
    });
  }, []);

  return (
    <Layout>
      <PageBlock
        title="Leads"
        subtitle="Gerencie sua lista de leads, monitorando o cambio de status entre Prospecto e Cliente."
        variation="full"
      >
        <h1>Lista de Prospectos</h1>
        {leads.map(lead => (
          !lead.isClient &&
            <article key={lead.id} className={styles.vtexAdminArticle}>
              <h2>{lead.nome}</h2>
              <div className={styles.details}>
                <p><strong>E-mail</strong>{lead.email}</p>
                <p><strong>Telefone</strong>{lead.telefone}</p>
                <p><strong>Data de Criação</strong>{new Date(lead.createdAt).toLocaleString('pt-BR')}</p>
              </div>
            </article>
        ))}
      </PageBlock>
    </Layout>
  )
}

export default AdminLeadProspect;