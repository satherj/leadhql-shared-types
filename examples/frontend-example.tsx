import React, { useState, useEffect } from 'react';
import { Lead, LeadStatus, LeadSource } from 'leadhql-shared-types';

// Example React component using the shared types
const LeadsList: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch leads from API
    const fetchLeads = async () => {
      try {
        const response = await fetch('/api/leads');
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  // Filter leads by status
  const availableLeads = leads.filter(lead => lead.status === LeadStatus.AVAILABLE);
  const purchasedLeads = leads.filter(lead => lead.status === LeadStatus.PURCHASED);

  // Create a new lead (example)
  const createLead = (): Lead => {
    return {
      id: Math.floor(Math.random() * 1000),
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '+1234567890',
      city: 'New York',
      source: LeadSource.META,
      status: LeadStatus.AVAILABLE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  };

  return (
    <div>
      <h1>Leads Dashboard</h1>
      {loading ? (
        <p>Loading leads...</p>
      ) : (
        <>
          <div>
            <h2>Available Leads ({availableLeads.length})</h2>
            <ul>
              {availableLeads.map(lead => (
                <li key={lead.id}>
                  {lead.firstName} {lead.lastName} - {lead.email}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Purchased Leads ({purchasedLeads.length})</h2>
            <ul>
              {purchasedLeads.map(lead => (
                <li key={lead.id}>
                  {lead.firstName} {lead.lastName} - {lead.email}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={() => setLeads([...leads, createLead()])}>
            Add Test Lead
          </button>
        </>
      )}
    </div>
  );
};

export default LeadsList; 