import React from "react";
import PropTypes from "prop-types";
import style from "./userprofilecard.module.css";
const UserProfileCard = ({ 
    name="samana Shrestha",
    bio="A passionate software developer with a love for creating innovative solutions.",
    avatar="https://placehold.co/600x400",
    style={ },
}) => {
    return(
        <>
        <div className={style.card}>
        <img className={style.avatar} src={avatar} alt={`${name}'s avatar`} />
        <div className={style.name}>{name}</div>
        <div className={style.bio}>{bio}</div>
        </div>
    </>
    );
}
//proptypes
//proptypes
UserProfileCard.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar: PropTypes.string,
    style: PropTypes.object
};
export default UserProfileCard;