import React from 'react';
import Fade from 'react-reveal/Fade';

const event_venues = [
    {
        event: "3D Model Design",
        floor: "1",
        wing: "C",
        room: "CAD CAM Lab"
    },
    {
        event: "AI Model",
        floor: "4",
        wing: "B",
        room: "CL-03 & CL-04"
    },
    {
        event: "Android Artists",
        floor: "4",
        wing: "B",
        room: "CL-08"
    },
    {
        event: "Best Out Of Goods",
        floor: "3",
        wing: "B",
        room: "Electronic Devices and Circuits Lab"
    },
    {
        event: "Car Parts Assembly",
        floor: "0",
        wing: "D",
        room: "Strength Of Materials Lab"
    },
    {
        event: "Circuit Reminiscence",
        floor: "3",
        wing: "C",
        room: "Digital Signal Processing Lab"
    },
    {
        event: "Circuit-O-Mania",
        floor: "3",
        wing: "B",
        room: "Embedded Lab and IOT Lab"
    },
    {
        event: "Codes & Boards",
        floor: "4",
        wing: "B",
        room: "CL-09 & CL-10"
    },
    {
        event: "Data Science Vis",
        floor: "4",
        wing: "A",
        room: "CL-01 & CL-02"
    },
    {
        event: "Drive The Bot",
        floor: "1",
        wing: "D",
        room: "Drawing Hall"
    },
    {
        event: "Finish & Level Up",
        floor: "0",
        wing: "A",
        room: "Geo Technical Lab"
    },
    {
        event: "Finish & Level Up",
        floor: "1",
        wing: "B",
        room: "Classroom 106"
    },
    {
        event: "Finish & Level Up",
        floor: "3",
        wing: "B",
        room: "Research Lab"
    },
    {
        event: "Finish & Level Up",
        floor: "4",
        wing: "C",
        room: "CL - 06"
    },
    {
        event: "Flight Simulator",
        floor: "3",
        wing: "D",
        room: "Classroom 303"
    },
    {
        event: "FloataRig",
        floor: "0",
        wing: "D",
        room: "Fluid Mechanics Lab"
    },
    {
        event: "FloataRig",
        floor: "0",
        wing: "D",
        room: "Theory Of Materials Lab"
    },
    {
        event: "Hunting Through The Cosmos",
        floor: "-",
        wing: "-",
        room: "Entire SIT Campus"
    },
    {
        event: "Ideathon",
        floor: "5",
        wing: "D",
        room: "Classroom 509"
    },
    {
        event: "Laser Cutting",
        floor: "0",
        wing: "D",
        room: "Tinker Lab"
    },
    {
        event: "Laser Cutting",
        floor: "1",
        wing: "C",
        room: "CAD CAM Lab"
    },
    {
        event: "Lathe Wars",
        floor: "0",
        wing: "D",
        room: "Workshop"
    },
    {
        event: "Laser Tag",
        floor: "3",
        wing: "D",
        room: "Classroom 302"
    },
    {
        event: "Maze Crawler",
        floor: "3",
        wing: "B",
        room: "Digital Electronics Lab"
    },
    {
        event: "Matlab Workshop",
        floor: "3",
        wing: "D",
        room: "Classroom 304"
    },
    {
        event: "Model Testing Constructo",
        floor: "0",
        wing: "A",
        room: "Concrete Tech Lab"
    },
    {
        event: "Model Testing Constructo",
        floor: "0",
        wing: "D",
        room: "Theory Of Materials Lab"
    },
    {
        event: "Model Testing Resilience",
        floor: "0",
        wing: "A",
        room: "Concrete Lab"
    },
    {
        event: "Model Testing Resilience",
        floor: "0",
        wing: "D",
        room: "Fluid Lab"
    },
    {
        event: "Moku Go",
        floor: "3",
        wing: "C",
        room: "Analog & Digital Comms Lab"
    },
    {
        event: "Oscillopattern",
        floor: "3",
        wing: "C",
        room: "Analog & Digital Comms Lab"
    },
    {
        event: "Paint Your Galaxy",
        floor: "5",
        wing: "D",
        room: "Classroom 508"
    },
    {
        event: "Project Competition",
        floor: "-",
        wing: "-",
        room: "Dept. Wise"
    },
    {
        event: "Research Scholar Poster Competition",
        floor: "6",
        wing: "-",
        room: "-"
    },
    {
        event: "Space Demolition",
        floor: "4",
        wing: "A",
        room: "Classroom 401"
    },
    {
        event: "Tech MUN",
        floor: "1",
        wing: "D",
        room: "Classroom 101 & 102"
    },
    {
        event: "Tinkering Activity",
        floor: "3",
        wing: "C",
        room: "Robotics And Control Lab"
    },
    {
        event: "Weaving The Web",
        floor: "4",
        wing: "A",
        room: "CL - 407"
    }
]

export default function Venues() {
    return (
        <div className='venues'>
            <h1 className="contact-header">Venues</h1>
            <Fade bottom duration={2000}>
                <table>
                    <tbody>
                        <tr>
                            <th>Event</th>
                            <th>Floor</th>
                            <th>Wing</th>
                            <th>Room</th>
                        </tr>
                        {event_venues.map((item, i) => (
                            <tr key={i}>
                                <td>{item.event}</td>
                                <td>{item.floor}</td>
                                <td>{item.wing}</td>
                                <td>{item.room}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fade>
        </div>
    )
}