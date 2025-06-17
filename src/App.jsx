import { useState, useEffect } from "react";
import InputField from "./Components/InputField";
import ProfileBox from "./Components/ProfileBox";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (username || age || location) {
      document.title = `${username || "User"} - ${age || "Age?"} - ${
        location || "Location?"
      }`;
    } else {
      document.title = "React Profile Tracker";
    }
  }, [username, age, location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🧾 User Profile Tracker
        </h1>

        <div className="space-y-4">
          <InputField
            label="Nama"
            placeholder="Masukkan nama lengkap"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Umur"
            type="number"
            placeholder="Masukkan umur"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <InputField
            label="Lokasi"
            placeholder="Masukkan lokasi"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <ProfileBox username={username} age={age} location={location} />
      </div>
    </div>
  );
}

export default App;
