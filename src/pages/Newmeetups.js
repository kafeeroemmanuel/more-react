/** @format */
import { useHistory } from 'react-router-dom';

import NewmeetupForm from '../components/meetups/NewmeetupForm';

function NewmeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-75899-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h3>Add New Meetup</h3>
      <NewmeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewmeetupsPage;
