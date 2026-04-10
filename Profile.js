import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h2>{user.fullName}</h2> {/* wrong */}
      <p>Age: {user.age}</p>
      <p>Job: {user.profession}</p> {/* wrong */}
    </div>
  );
};

export default Profile;