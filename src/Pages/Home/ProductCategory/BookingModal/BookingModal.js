import React from "react";

const BookingModal = ({ bookInfo }) => {

    const {name, resalePrice} = bookInfo;

    const handleBookingModalForm = (event) => {

        event.preventDefault();
    };

    return (
        <dialog id="bookingModal" className="modal">

            <div className="modal-box">

                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById('bookingModal').close()}
                >✕</button>
                
                <p className="text-2xl font-semibold">{name}</p>
                <p>Price: ${resalePrice}</p>

                <form method="dialog" onSubmit={handleBookingModalForm} className="grid grid-cols-1 mt-10">
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    <br />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                    <br />
                    <input type="text" name="phoneNumber" placeholder="Phone Number" className="input input-bordered w-full" />
                    <br />
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                    <br />

                    <input type="submit" value="Submit" className="btn btn-success w-full mt-10 text-white" />
                </form>
            </div>

        </dialog>
    );
};

export default BookingModal;