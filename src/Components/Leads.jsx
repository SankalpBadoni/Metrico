import React, { useState } from 'react';
import dummyData from '../utils/dummyData';

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Leads</h1>
      <ul>
        {dummyData.leads.map((lead) => (
          <button key={lead.id} onClick={() => setSelectedLead(lead)} className='block mb-2 p-2 bg-blue-500 text-white rounded'>{lead.name}</button>
        ))}
      </ul>

      {selectedLead && (
        <div className="modal bg-gray-100 p-4">
          <h2>{selectedLead.name}</h2>
          <p>{selectedLead.email}</p>
          <p>{selectedLead.status}</p>
        </div>
      )}
    </div>
  );
};

export default Leads;
