import React, { useState } from "react";
import { UsersArr } from "./UsersData";
import Img1 from "./1.jpg";
import Img2 from "./2.jpg";
import Img3 from "./3.jpg";
import Img4 from "./4.jpg";
import Img5 from "./5.png";
import Img6 from "./6.png";

const UsersList = () => {
    const [users, setUsers] = useState(UsersArr);

    return (
        <>
            <h2 style={{ textAlign: "center", margin: 30 }}>Users List</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {users.map((user, index) => {
                    const images = [Img1, Img2, Img3, Img4, Img5, Img6];
                    return (
                        <div className="col" key={index}>
                            <div className="card h-100">
                                <img className="card-img-top w-80" src={images[index]} alt="User" />
                                <div className="card-body">
                                    <h5 className="card-title">{user.UserName}</h5>
                                    <p className="card-text">{user.Email}</p>
                                    <p className="card-text">{user.PhoneNum}</p>
                                    {user.Isverified ? (
                                        <span className="badge text-bg-success">Verified</span>
                                    ) : (
                                        <span className="badge text-bg-danger">UnVerified</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default UsersList;
