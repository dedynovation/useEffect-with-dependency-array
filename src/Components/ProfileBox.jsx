function ProfileBox({ username, age, location }) {
  return (
    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 space-y-1">
      <p>
        <span className="font-semibold">Nama:</span> {username || "-"}
      </p>
      <p>
        <span className="font-semibold">Umur:</span> {age || "-"}
      </p>
      <p>
        <span className="font-semibold">Lokasi:</span> {location || "-"}
      </p>
    </div>
  );
}

export default ProfileBox;
