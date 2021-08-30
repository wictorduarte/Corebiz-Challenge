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

const AdminLeadCustomer: FC = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);

  useEffect(() => {
    axios.get('https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads')
    .then((res: AxiosResponse) => {
      const prospectList = res.data.filter((lead: LeadData) => lead.isClient == true).map((lead: LeadData) => {
        lead.createdAt = new Date(lead.createdAt).toLocaleString('pt-BR');
        return lead;
      });
      setLeads([...prospectList]);
    });
  }, []);

  return (
    <Layout>
      <PageBlock
        title="Leads"
        subtitle="Gerencie sua lista de leads, monitorando o cambio de status entre Prospecto e Cliente."
        variation="full"
      >
        <h1>Lista de Clientes</h1>
        {leads.length == 0 &&
          <p>Nenhum resultado encontrado na lista de clientes.</p>
        }
        {leads.length > 0 && 
          <article className={styles.vtexAdminArticle}>
            <div className={styles.details}>
              <p>Nome</p>
              <p>E-mail</p>
              <p>Telefone</p>
              <p>Data de Criação</p>
            </div>
          </article>
        }
        {leads.map(lead =>
          <article key={lead.id} className={styles.vtexAdminArticle}>
            <div className={styles.details}>
              <p>{lead.nome}</p>
              <p>{lead.email}</p>
              <p>{lead.telefone}</p>
              <p>{lead.createdAt}</p>
            </div>
          </article>
        )}
      </PageBlock>
    </Layout>
  )
}

export default AdminLeadCustomer;