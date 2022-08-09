// Import stylesheets
import './style.css';
var key;
console.log('test');

fetch(
  'https://stgfreezone.wow.lk/freezone-core-services-secureauthmgt/adl/et/telco/dte/freezone/api/v1.0/secureauthmgt/api/customermgt/super-app/generate/token',
  {
    method: 'POST',
    body: {
      authRequest: {
        tags: {
          offerId: '1',
          email: 'deshala1@freezone.lk',
          action: '1',
        },
        msisdn: '0742630272',
      },
      requestHeader: {
        requestId: 'e54eb678-b7b2-11ea-b3de-0242ac30004',
        timestamp: '2022-02-14T14:00:00Z',
        channel: 'superapp',
        clientIp: 'N/A',
        msisdn: '0742629415',
        user: 'deshala.mendis',
      },
    },
  }
)
  .then((response) => response.json())
  .then((data) => console.log('tests'));

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${key}</h1>`;
