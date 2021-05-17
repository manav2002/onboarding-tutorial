  
import React from 'react'
import image from './asta.png'
import image2 from './goku.jpg'
import image3 from './ichi.png'
import image4 from './luffy.jpg'
import image5 from './madara.jpg'
import image6 from './naruto.jpeg'
import image7 from './sasuke.jpg'
import image8 from './tanjiro.jpg'
import image9 from './zenitsu.jpg'
import image10 from './zoro.jpg'

// const Images=[image, image2, image3, image4, image5, image6, image7, image8, image9, image10]

// const randomImage=Images[Math.floor(Math.random()*Images.length)]
// const index=Math.floor(Math.random()*Images.length);


// for (var i=0; i<10; i++){
//     Images[i]=Images[Math.floor(Math.random()*Images.length)]
    
// }

const Contacts = ({contacts}) => {
    const Images=[image, image2, image3, image4, image5, image6, image7, image8, image9, image10]
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => {
            const randomImage = Math.round(Math.random() * Images.length)
            return (
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">{contact.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                    <p class="card-text">{contact.company.catchPhrase}</p>
                    <img src={Images[randomImage]} height={200} width={200} alt="" />
                    </div>
                </div>
            )
        })}
        </div>
    )
};

export default Contacts
