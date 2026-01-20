import { useState, useEffect } from "react";
import RoomItem from "./item/RoomItem";
import { Room } from "../../../../types/room";

const RoomType = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const data: Room[] = [
      {
        id: 1,
        title: "Dining",
        img: "dining.png",
      },
      {
        id: 2,
        title: "Living",
        img: "living.png",
      },
      {
        id: 3,
        title: "Bedroom",
        img: "bedroom.png",
      },
    ];

    setRooms(data);
  }, []);

  return (
    <div className="roomtype" style={{ display: "flex", gap: "20px" }}>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomType;
