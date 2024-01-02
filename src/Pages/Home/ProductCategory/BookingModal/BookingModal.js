import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const BookingModal = ({ bookInfo, setBookInfo }) => {

    const {name, resalePrice} = bookInfo;
    const {user} = useContext(AuthContext);

    const handleBookingModalForm = (event) => {

        event.preventDefault();

        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;

        const booking = {
            productName: name,
            price: resalePrice,
            buyerName,
            buyerEmail: email,
            phoneNumber,
            buyerLocation: location 
        }
        console.log(booking);

        setBookInfo(null);
    };

    return (
        <dialog id="bookingModal" className="modal">

            <div className="modal-box">

                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById('bookingModal').close()}
                >✕</button>
                
                <p className="text-2xl font-semibold mt-3">{name}</p>
                <p>Price: ${resalePrice}</p>

                <form method="dialog" onSubmit={handleBookingModalForm} className="grid grid-cols-1 mt-10">
                    <input type="text" name="name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                    <br />
                    <input type="email" name="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                    <br />
                    <input type="text" name="phoneNumber" placeholder="Phone Number" className="input input-bordered w-full" required/>
                    <br />
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                    <br />

                    <input type="submit" value="Submit" className="btn btn-success w-full mt-10 text-white" />
                </form>
            </div>

        </dialog>
    );
};

export default BookingModal;