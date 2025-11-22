import React from "react";

const Content = () => {
  const items = [
    {
      title: "Welcome to Your App",
      text: "This is a scrollable content area. Add your content here.",
    },
    {
      title: "Item 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Item 3",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Item 4",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Item 5",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Item 6",
      text: "Scroll down to see more content and test the scrolling functionality.",
    },
    {
      title: "Item 7",
      text: "The header and footer remain fixed while this content scrolls.",
    },
  ];

  return (
    <div className="h-full overflow-y-auto px-5 pt-[100px] pb-[130px] bg-gray-light">
      {items.map((item, index) => (
        <div key={index}
          className="bg-white p-5 mb-4 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
        >
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-dark-black leading-tight  ">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
   