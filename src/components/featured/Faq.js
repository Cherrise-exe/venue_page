import React from 'react';
/**  Import Icons  from resources/images/icons **/
import Restaurant from '@material-ui/icons/Restaurant';
function Faq() {
  return(
    <div>
      <h1 className="faq-title">FAQ</h1> 
        <h2 className="question">How can I get to the entrance of Barclay's Center?</h2>
          <h3 className="question-section">Long Island Railroad</h3>
            <p className="answer">Take the LIRR to Atlantic Terminal (just 20 minutes from Jamaica), located across the street from Barclays Center.</p>
          <h3 className="question-section">Subway</h3>
            <p>Atlantic Terminal-Barclays Center - Located on Atlantic Avenue and Flatbush Avenue</p>
            <p>C Train Lafayette Avenue Station - Located on Fulton Street and South Portland Avenue</p>
            <p>G Train Fulton Street Station - Located on Fulton Street and Fort Greene Place</p>
        <h2 className="question">What are the security policies?</h2>
          <p>
            All patrons, regardless of age, must have a ticket to enter the venue.
            No outside food or drink, including water, may be brought into the venue*.
            All persons and bags are subject to search.
            The Barclay Center located in Brooklyn, New York is a tobacco-free venue.
            The Barclay Center is a no re-entry venue.
            Pets (Trained service animals or service animals in training with identifiable vests, harness, and leash will be allowed.)
          </p>
        <h2 className="question">What are some nearby restaurants?</h2>
            <ul>
            <Restaurant></Restaurant>
              <li><a href="https://www.shakeshack.com/location/flatbush-ave-brooklyn/"><button class="restaurant-btn">Shake Shack</button></a></li>
              <li><a href="https://altacalidadbk.com/"><button class="restaurant-btn">Alta Calidad</button></a></li>
              <li><a href="https://www.wasan-ny.com/"><button class="restaurant-btn">Wasan NY</button></a></li>
              <li><a href="https://altacalidadbk.com/"><button class="restaurant-btn">Alta Calidad</button></a></li>
            </ul>
    </div>
  )
}

export default Faq;