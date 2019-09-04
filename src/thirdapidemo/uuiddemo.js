"use strict";

const uuid = require('node-uuid');

for (let i = 0; i < 10; i++) {
    console.log('the ' + i + ' uuid 1 is ' + uuid.v1());
}

for (let i = 0; i < 10; i++) {
    console.log('the ' + i + ' uuid 4 is ' + uuid.v4());
}

// the 0 uuid 1 is cefd8e90-cad1-11e9-90a0-13d1d408279f
// the 1 uuid 1 is cefe2ad0-cad1-11e9-90a0-13d1d408279f
// the 2 uuid 1 is cefe2ad1-cad1-11e9-90a0-13d1d408279f
// the 3 uuid 1 is cefe2ad2-cad1-11e9-90a0-13d1d408279f
// the 4 uuid 1 is cefe2ad3-cad1-11e9-90a0-13d1d408279f
// the 5 uuid 1 is cefe2ad4-cad1-11e9-90a0-13d1d408279f
// the 6 uuid 1 is cefe51e0-cad1-11e9-90a0-13d1d408279f
// the 7 uuid 1 is cefe51e1-cad1-11e9-90a0-13d1d408279f
// the 8 uuid 1 is cefe51e2-cad1-11e9-90a0-13d1d408279f
// the 9 uuid 1 is cefe51e3-cad1-11e9-90a0-13d1d408279f
// the 0 uuid 4 is 28b7bd6f-4726-4fe0-b68c-fa3403239409
// the 1 uuid 4 is 310f8507-4bba-4fa3-a2e9-b5f7737b428f
// the 2 uuid 4 is 7bf2de31-4a27-4c4e-a5c3-e71e3d37f2ca
// the 3 uuid 4 is a3026e00-b131-4675-8d36-7480ffa3f2fd
// the 4 uuid 4 is cb4740de-11a6-4fcb-884e-80bb4796e194
// the 5 uuid 4 is 7a456c0c-de59-4148-8b3d-f65f19c12086
// the 6 uuid 4 is 41f316a4-f6e7-4044-b92b-cf68317dd21d
// the 7 uuid 4 is db240d43-be66-49fc-ac1c-58777aab938e
// the 8 uuid 4 is 685248e8-bd19-439a-ad13-0ff6115efb05
// the 9 uuid 4 is 3e044209-60ad-4fff-a11a-10a7bf6be365