import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";

const SocialLinks = ({
  githubUsername,
  telegramUsername,
  linkedinUsername,
  instagramUsername,
}) => {
  return (
    <div className="flex justify-start space-x-1">
      {githubUsername && (
        <SocialLink
          icon={<IconBrandGithub className="social-icon" />}
          tooltip="Github"
          url={`https://github.com/${githubUsername}`}
        />
      )}
      {telegramUsername && (
        <SocialLink
          icon={<IconBrandX className="social-icon" />}
          tooltip="telegram"
          url={`https://t.me/${telegramUsername}`}
        />
      )}
      {linkedinUsername && (
        <SocialLink
          icon={<IconBrandLinkedin className="social-icon" />}
          tooltip="Linkedin"
          url={`https://www.linkedin.com/in/${linkedinUsername}`}
        />
      )}
      {instagramUsername && (
        <SocialLink
          icon={<IconBrandInstagram className="social-icon" />}
          tooltip="Instagram"
          url={`https://www.instagram.com/${instagramUsername}`}
        />
      )}
    </div>
  );
};

const SocialLink = ({ icon, tooltip, url }) => {
  return (
    <Link
      className="tooltip tooltip-bottom"
      data-tip={tooltip}
      href={url}
      target="_blank"
    >
      {icon}
    </Link>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Spidey official",
      role: "Team lead | software Engineer",
      img: "/team/member-1.jpeg",
      githubUsername: "SPIDEYOFFICIAL777",
      telegramUsername: "hacker_x_official_777",
      lnstagramUsername: "Spidey_official_777",
    },
    {
      name: "Gaming hatyar",
      role: "Frontend developer",
      img: "/team/member-2.jpeg",
      githubUsername: "Spideyofficial777",
      instagramUsername: "Spidey_official_777",
      telegramUsername: "+QVmLP_hlHNw3M2I1",
    },
    {
      name: "Spidey official",
      role: "Visual designer",
      img: "/team/member-5.jpg",
      githubUsername: "spideyofficial777",
      instagramUsername: "Spidey_official_777",
      telegramUsername: "hacker_x_official_777",
    },
    {
      name: "unknown",
      role: "Visual designer",
      img: "/team/member-3.jpeg",
      instagramUsername: "spidey_official_777",
      telegramUsername: "SpideyCinemaX_AI_Bot",
    },
    {
      name: "Shefna N",
      role: "QA Tester",
      img: "/team/member-4.jpg",
      instagramUsername: "shefna_n",
    },
  ];

  return (
    <div className="px-4 py-1 mx-auto">
      <div className="mx-auto mb-10 lg:max-w-xl text-center">
        <p className="text-gray-500 text-lg text-center font-normal pb-3">
          Meet the team
        </p>
        <h1 className="mx-auto text-3xl text-center text-gray-200  font-extrabold ">
          The Talented People Behind the Scenes of the Organization
        </h1>
      </div>
      <div className="grid gap-5 md:gap-10 mx-auto sm:grid-cols-2 md:grid-cols-3 bg-blue-gradient">
        {teamMembers.map((member, index) => {
          return (
            <div key={index} className="flex space-x-4 justify-stretch">
              <Image
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                width={500}
                height={500}
                src={member.img}
                alt="Person"
              />
              <div className="flex flex-col items-start justify-center text-center capitalize">
                <p className="text-base font-bold tracking-tighter text-gray-300">
                  {member.name}
                </p>
                <p className="text-sm text-[#808191] tracking-tighter">
                  {member.role}
                </p>
                <SocialLinks {...member} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
