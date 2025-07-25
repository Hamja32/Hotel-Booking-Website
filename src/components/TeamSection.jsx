import React, { useState } from "react";
import "./TeamSection.css";
import PageTitle from "./PageTitle";

const initialTeam = [
  {
    id: 1,
    name: "John",
    role: "Hotel Manager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMxLW5LbeJApiOdKAWdx7973rVC1iEUPtXg&s",
  },
  {
    id: 2,
    name: "Mark",
    role: "Kitchen Manager",
    image:
      "https://img.freepik.com/darmowe-zdjecie/przystojny-brodaty-facet-pozuje-przy-bialej-scianie_273609-20597.jpg",
  },
  {
    id: 3,
    name: "Tony",
    role: "Recepcionista",
    image:
      "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1738410226~exp=1738413826~hmac=1712adbb42b989adb209e36a88b45690016067370293de84e953d6ab85675cf4",
  },
];

//for testing purpose
  // {
  //   id: 4,
  //   name: "Thomas",
  //   role: "Room Service",
  //   image:
  //     "https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?semt=ais_hybrid&w=740",
  // },




const TeamSection = () => {
  const [teamData, setTeamData] = useState(initialTeam);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    role: "",
    image: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update member
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Edit mode: update existing member
      setTeamData((prev) =>
        prev.map((member) => (member.id === formData.id ? formData : member))
      );
    } else {
      // Add mode: add new member
      const newMember = { ...formData, id: Date.now() };
      setTeamData((prev) => [...prev, newMember]);
    }
    setFormData({ id: null, name: "", role: "", image: "" });
    setIsEditMode(false);
  };

  // Load existing data for editing
  const handleEdit = (member) => {
    setFormData(member);
    setIsEditMode(true);
  };

  return (
    <section className="team-section">
      <PageTitle title="Expert Team Persons" category="MEET OUR TEAM" />

      {/* Add/Edit Member Form */}
      <form className="team-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {isEditMode ? "Update Member" : "Add Member"}
        </button>
      </form>

      <div className="team-cards">
        {teamData.map((member) => (
          <div className="team-card" key={member.id}>
            <div
              className="team-image"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="team-socials">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="edit-btn" onClick={() => handleEdit(member)}>
                Edit
              </button>
            </div>
            <div className="team-role">
              <span className="member_name">{member.name}</span> [{member.role}]
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
