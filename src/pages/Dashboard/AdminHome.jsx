import Stats from "../../components/Stats";

const AdminHome = () => {
  return (
    <div>
      <Stats></Stats>
      <div className="bg-green-400 flex justify-between">
        <div className="">
          <h1>Charts</h1>
        </div>
        <div>
          <h1>Calender</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
