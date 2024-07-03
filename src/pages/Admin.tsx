// const express = require('express');
// const multer = require('multer');

// const app = express();

// app.use(multer({ dest: './uploads/' }));

// app.post('/upload', (req, res) => {
//   const file = req.file;

//   file.save((err) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send('File uploaded successfully!');
//     }
//   });
// });

// // app.listen(3000);



// // import React, { useState } from 'react';

// // const UploadForm = () => {
// //   const [file, setFile] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('file', file);

// //     fetch('/upload', {
// //       method: 'POST',
// //       body: formData,
// //     })
// //       .then((response) => {
// //         if (response.status === 200) {
// //           console.log('File uploaded successfully!');
// //         } else {
// //           console.error('Error uploading file.');
// //         }
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   };

//   return (
//     <div>admin</div>
//     // <form onSubmit={handleSubmit}>
//     //   <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//     //   <button type="submit">Upload</button>
//     // </form>
//   );
// };

// export default UploadForm;

function Admin() {
  return (
    <div>
      Admin
    </div>
  )
}

export default Admin