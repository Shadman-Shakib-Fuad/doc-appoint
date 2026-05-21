export default function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg mt-14">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://i.ibb.co.com/YTZw72K/user.png"
          alt="user"
          className="w-40 h-40 rounded-full object-cover"
        />

        <div>
          <h2 className="text-4xl font-bold">
            Shadman
          </h2>

          <p className="text-gray-500 mt-3">
            user@gmail.com
          </p>

          <button className="btn btn-primary mt-6">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}