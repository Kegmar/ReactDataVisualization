import React, {useState} from 'react';
import Papa from 'papaparse';

const CSVUploader = ({onDataUploaded}) => {
    const [file, setFile] = useState(null)

    const handleChange = event => {
        setFile(event.target.files[0]);
    };

    const handleUpload =() => {
        Papa.parse(file, {
            complete: (result) => {
                onDataUploaded(result.data);
            },
            header: true,
            dynamicTyping: true,
        });
        };

        return (
            <div className="button-container">
            <input 
            type="file" 
            accept=".csv" 
            onChange={handleChange}
            className="file-input"
            />
            <button onClick={handleUpload}>Upload</button>
            </div>
        );
    };

    export default CSVUploader;