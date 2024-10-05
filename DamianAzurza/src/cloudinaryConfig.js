

const cloudinaryConfig = {
  cloudName: 'dixhywv86',
  uploadPreset: 'Desarrollo'
};

export const openCloudinaryWidget = (callback) => {
  const cloudinaryWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudinaryConfig.cloudName,
      uploadPreset: cloudinaryConfig.uploadPreset,
      multiple: true,
      folder: 'packs',
    },
    (error, result) => {
      if (result.event === 'success') {
        callback(result.info.secure_url);  
      }
    }
  );
  cloudinaryWidget.open();
};




