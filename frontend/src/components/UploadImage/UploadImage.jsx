import { useState } from "react";
import axios from "axios";

const UploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await axios.post("http://localhost:8000/api/v1/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setPreviewUrl(response.data.fileUrl);
            alert("Upload successful!");

        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Upload failed.");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {previewUrl && <img src={previewUrl} alt="Resized" className="profile-image" />}
        </div>
    );
};

export default UploadComponent;
