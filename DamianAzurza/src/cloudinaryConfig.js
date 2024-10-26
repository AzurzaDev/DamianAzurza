

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


export const openCloudinaryWidgetForVideo = (callback) => {
  if (!window.cloudinary) {
    console.error("Cloudinary script not loaded");
    return;
  }
  const cloudinaryWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudinaryConfig.cloudName,
      uploadPreset: cloudinaryConfig.uploadPreset,
      resourceType: 'video',  // Especificar que es para videos
      multiple: true,
      folder: 'videos',       // Cambia la carpeta según prefieras
    },
    (error, result) => {
      if (error) {
        console.error("Error uploading video:", error);
        return;
      }
      if (result.event === 'success') {
        callback(result.info.secure_url);  
      }
    }
  );
  cloudinaryWidget.open();
};
