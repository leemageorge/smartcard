import React, { useRef } from 'react'

const GalleryUploads = ({ formData, setFormData, handleSubmit }) => {

  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const files = [...e.target.files];
    setFormData({
      ...formData,
      photos: [...formData.photos, ...files]
    });
  };
  const handleVideoUpload = (e) => {
    const files = [...e.target.files];
    setFormData({
      ...formData,
      videos: [...formData.videos, ...files]
    });
  };
  const removePhoto = (index) => {
    const updated = [...formData.photos];
    updated.splice(index, 1);
    setFormData({ ...formData, photos: updated });
  };

  const removeVideo = (index) => {
    const updated = [...formData.videos];
    updated.splice(index, 1);
    setFormData({ ...formData, videos: updated });
  };

  return (
   
      <form onSubmit={handleSubmit} className='max-w-[350px] mx-auto w-full space-y-6'>
        <h2 className="text-xl text-center font-semibold ">Upload Photos & Videos</h2>
        <div>
            <div className="grid grid-cols-3 gap-3 ">
              {formData.photos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    className="w-full h-20 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 text-white px-1 rounded cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <input
            ref={photoInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => photoInputRef.current.click()}
            className="px-6 py-2 border
             border-gray-300 rounded-lg
              hover:bg-red hover:text-white transition mt-4 cursor-pointer">
            Upload Photos
          </button>
        </div>
        <div>
      
        
            <div className="space-y-3 mt-4">
              {formData.videos.map((video, index) => (
                <div key={index} className="relative">
                  <video
                    controls
                    className="w-full h-32 rounded bg-black"
                  >
                    <source src={URL.createObjectURL(video)} />
                  </video>

                  <button
                    type="button"
                    onClick={() => removeVideo(index)}
                    className="absolute top-1 right-1 cursor-pointer bg-black bg-opacity-50 text-white px-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
                <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => videoInputRef.current.click()}
            className="px-6 py-2 border
             border-gray-300 rounded-lg
              hover:bg-red hover:text-white transition mt-4 cursor-pointer">
            Upload Videos
          </button>
        </div>
      </form>
  
  )
}

export default GalleryUploads
