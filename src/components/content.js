import React from 'react';

const Content = (day) => {
    return (

        <div className="content">
            <div className="day-name">{day}</div>
            <div className="subtitle">
                <div className="time">Time</div>
                <div className="occupation">Occupation</div>
            </div>
            <div className="inputs">
        <div className="inputs__1">
        <input className="inputs__time" type="text" placeholder="06:00-07:00" />
        <input className="inputs__occupation" type="text" placeholder="Gymnastics" />
        </div>
        <div className="inputs__2">
        <input className="inputs__time" type="text" placeholder="08:00-14:40" />
        <input className="inputs__occupation" type="text" placeholder="Lessons at school" />
        </div>
        <div className="inputs__3">
        <input className="inputs__time" type="text" placeholder="15:00-16:00" />
        <input className="inputs__occupation" type="text" placeholder="Having dinner" />
        </div>
        <div className="inputs__4">
        <input className="inputs__time" type="text" placeholder="16:45-18:15" />
        <input className="inputs__occupation" type="text" placeholder="French lesson" />
        </div>
        <div className="inputs__5">
        <input className="inputs__time" type="text" placeholder="18:40-20:00" />
        <input className="inputs__occupation" type="text" placeholder="English lesson" />
        </div>
       
        </div>

                <div className="newLine">
                    <button className="smallButton"><i class="fas fa-plus-circle"></i></button>
                    <div className="newLine__text">Add a new line</div>
                </div>

            </div>

    
    )
}

export default Content;