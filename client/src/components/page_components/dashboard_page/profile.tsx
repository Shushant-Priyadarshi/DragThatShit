import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center ">
         <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </div>

      {/* Welcome message */}
      <h1 className="text-3xl font-semibold mt-6 text-white">
        Welcome back, <span className="dts">Shushant</span> 👋
      </h1>

      {/* Small content */}
      <div className="text-gray-300 mt-3 text-sm md:text-base flex justify-center ">
        <h1 >Resume Limit : 2</h1>
      </div>
    </div>
  );
};

export default Profile;
