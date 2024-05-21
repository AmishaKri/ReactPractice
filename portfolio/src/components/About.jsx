import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amisha Kumari </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          My name is Dabeer Ahmed, and I recently graduated with a Bachelor's
          degree in Computer Science from the Usman Institute of Technology,
          affiliated with NED University. I am actively searching for a
          front-end developer position where I can apply my expertise to create
          exceptional digital experiences. I possess a strong command of various
          technologies and tools essential for front-end development and design.
          I am proficient in using frameworks such as Bootstrap and Tailwind
          CSS, and I have a solid grasp of HTML5, CSS3, and other relevant
          programming languages. Leveraging these tools, I can craft web
          interfaces that are not only responsive and visually appealing but
          also ensure a consistent user experience across all devices.
        </p>

        <br />

        <p className="text-xl">
          Furthermore, I possess extensive knowledge of JavaScript and the
          renowned React.js framework. I excel in harnessing the power of React
          to write clean and efficient code, enabling the development of
          interactive and dynamic web applications. My proficiency extends to
          TypeScript, which enhances code scalability and maintainability.
          Additionally, I have hands-on experience with Next.js, a robust
          framework for building efficient React applications with server-side
          rendering capabilities. Leveraging Next.js, I can construct
          SEO-friendly websites that deliver faster page load times and improved
          search engine visibility to enhance the user experience.
        </p>
      </div>
    </div>
  );
}

