import React, { useState } from 'react';

function Preview() {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <main className="container">
      <input
        type="file"
        onChange={(e) => {
          e.preventDefault();
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <div className="preview">
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
    </main>
  );
}

export default Preview;
