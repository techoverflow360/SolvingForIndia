import React, { useState } from 'react';

const ImagePrediction = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Error:', error);
    }).then(fetch("http://127.0.0.1:5000/leaf_image", 
    {
    method: 'POST',
   headers: {
       'Content-type': 'application/json',
     'Accept': 'application/json'
   },

    body:JSON.stringify()}).then((res) => {
     console.log(res);
     return res.json()}).then(jsonResponse=> {
     
}).catch((err) => console.error(err)))
}

  return (
    <div>
      <h2>Image Upload</h2>
      <form>
        <input type="file" onChange={handleImageSelect} />
        <button type="button" onClick={handleImageUpload}>Upload</button>
      </form>
    </div>
  );
};

export default ImagePrediction;

// const formData = new FormData();
// formData.append('image', fileInput.files[0]);

// fetch('http://localhost:3000/upload', {
//   method: 'POST',
//   body: formData,
// })
//   .then(response => response.text())
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });