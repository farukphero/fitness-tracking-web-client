import React from "react";

const BlogDetailsCard = ({ details }) => {
  return (
    <div>
      <ol>
        <li className="text-primary text-2xl my-3">{details.firstName}</li>
      </ol>
      {details.image && (
        <img
          className="mb-3 w-3/4"
          src={details.image}
          alt="detailPageImage"
        ></img>
      )}
      <p className="text-xl">{details.details}</p>
      {details.lists &&
        details.lists.map((l) => (
          <ul key={l.id} l={l}>
            <li className="text-xl">{l.list}</li>
          </ul>
        ))}
    </div>
  );
};

export default BlogDetailsCard;
