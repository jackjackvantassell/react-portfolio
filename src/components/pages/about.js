import React from 'react'
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
    return (
        <div className="content-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    groundPosition: "center",
                }}
            />
            <div className="right-column">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae neque maxime velit adipisci minus rerum ipsam esse voluptatem. Quaerat, ab exercitationem! Quo consectetur necessitatibus aspernatur velit voluptatum, eum magni excepturi.
                Sint odit minima ipsam cupiditate amet incidunt laboriosam eos distinctio tempore quia, sapiente quaerat laborum dolor debitis doloribus quasi quas commodi fugit, cum rerum. Nulla temporibus natus magni cum beatae!
                Beatae ullam doloribus adipisci est enim. Perferendis quia amet, voluptas ratione officia ab molestias. Non est accusantium eius architecto inventore perferendis, error tempore iusto, laudantium temporibus voluptates illo ratione itaque?
                Ipsa laudantium possimus odit, quis commodi necessitatibus rerum iure quia, pariatur autem quidem minima mollitia sed animi repellendus ex nam accusamus soluta exercitationem libero eos reiciendis consequatur temporibus? Praesentium, laborum.
                Officiis est fuga voluptates atque fugit nostrum dolores. Quis deserunt eligendi laudantium iste molestiae magni adipisci. Repellat distinctio eius, velit cumque vel quidem voluptatem corrupti, voluptas, ut laudantium nesciunt aliquid?
            </div>
        </div>
    )
}