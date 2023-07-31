const Profile = (props) => {
  const { userDetails } = props;
  return (
    <div profile-card-container>
      <img className="profile-pic" src={userDetails.image} alt="profile-pic " />
      ;
      <div>
        <h1 className="profile-name">{userDetails.name}</h1>
        <p className="profile-role">{userDetails.role}</p>
      </div>
    </div>
  );
};

export default Profile;
