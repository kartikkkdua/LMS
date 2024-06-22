import React, { useState } from 'react';
import axios from 'axios';

const CreateZoomMeeting = () => {
    const [topic, setTopic] = useState('');
    const [startTime, setStartTime] = useState('');

    const handleCreateMeeting = async () => {
        try {
            const response = await axios.post('/api/courses/create_zoom_meeting/', {
                topic,
                start_time: startTime
            });
            console.log('Zoom meeting created:', response.data);
            // Handle the response as needed
        } catch (error) {
            console.error('Error creating Zoom meeting:', error);
        }
    };

    return (
        <div>
            <h2>Create Zoom Meeting</h2>
            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Meeting Topic"
            />
            <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="Start Time"
            />
            <button onClick={handleCreateMeeting}>Create Meeting</button>
        </div>
    );
};

export default CreateZoomMeeting;
