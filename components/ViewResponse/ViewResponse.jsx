import React, { useState } from 'react';
import { database } from '../firebase';
import { CSVLink, CSVDownload } from "react-csv";

export default function ViewResponse() {
    const getPostsFromFirebase = [];
    const [posts, setPosts] = useState([]);
    const subscriber = database.collection('new_responses')
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getPostsFromFirebase);
        });
    const data = posts;
    const file_name = new Date().toLocaleString();
    return (
        <div className='view-response-container'>
            <CSVLink
                data={data}
                filename={file_name}
                className="btn btn-primary"
                target="_blank"
            >Download Latest Responses</CSVLink>
        </div >
    )
}
