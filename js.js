const URL = 'https://prod24.centralindia.logic.azure.com:443/workflows/78d6df0ed1384ee0b7d04918f1a32b85/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=i6gXuS7-5_fFVf-0u8M4UfymINDULCMifsscfN5cPKM'

const data = {Name: 'AKANKSHA SINGH', Email: 'as5335@srmist.edu.in', College: 'SRM IST', StudentId: 'RA2011004010414', FileName: 'index.html', Password: }

fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'api',
    'Name': '',
    'Email': '',
    'College': '',
    'StudentId': '',
    'FileName': '',
    'Password': ''
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
