import React, { useState } from 'react';
import { database } from '../firebase';
import CsvDownload from 'react-json-to-csv';

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
        <div>
            <CsvDownload data={data} filename={`Responses ${file_name}.csv`} />
        </div>
    )
}
