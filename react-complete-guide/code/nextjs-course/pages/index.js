import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "123 Fresh Prince Rd",
        description: "The First Meetup"
    },
    {
        id: "m2",
        title: "Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Churchill_Downs_Entrance_Barbaro_Statue.jpg",
        address: "123 Broken Bad Rd",
        description: "The Second Meetup"
    }
];

const HomePage = () => {
    const [ loadedMeetups, setLoadedMeetups ] = useState([]);

    useEffect(() => {
        //send a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
