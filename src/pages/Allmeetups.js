/** @format */

import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllmeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://react-getting-started-75899-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Allmeetups</h1>
      <MeetupList meetups={LoadedMeetups} />
    </section>
  );
}
export default AllmeetupsPage;
