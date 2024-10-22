import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: '#report-table' });
    doc.save('report.pdf');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Reports</h1>
      <button onClick={generatePDF} className="bg-blue-500 text-white p-2">Download PDF</button>
      <table id="report-table" className="mt-4">
        <thead><tr><th>Name</th><th>Email</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Akash</td><td>akash@example.com</td><td>Active</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
